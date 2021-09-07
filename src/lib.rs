#![warn(
    unreachable_pub,
    trivial_casts,
    trivial_numeric_casts,
    unused_extern_crates,
    rust_2018_idioms,
    missing_debug_implementations
)]

use std::rc::Rc;
use std::{cell::RefCell, iter};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{WebGl2RenderingContext, WebGlProgram, WebGlShader};

pub mod solver;

const DAM_PARTICLES: usize = 75 * 75;
const MAX_PARTICLES: usize = DAM_PARTICLES;
const BLOCK_PARTICLES: usize = 500;
const POINT_SIZE: f32 = 5.0;

#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    let context = init_webgl()?;

    let mut sim = solver::State::new();
    sim.init_dam_break(DAM_PARTICLES);

    let f = Rc::new(RefCell::new(None));
    let g = f.clone();
    *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        //         if i > 300 {
        //             // Drop our handle to this closure so that it will get cleaned
        //             // up once we return.
        //             let _ = f.borrow_mut().take();
        //             return;
        //         }

        // update the simulation and draw new particle positions
        sim.update();
        let vertices: Vec<f32> = sim
            .particles
            .iter()
            .map(|p| p.position().to_array())
            .flatten()
            .collect();
        draw(&vertices, &context);

        // Schedule ourself for another requestAnimationFrame callback
        request_animation_frame(f.borrow().as_ref().unwrap());
    }) as Box<dyn FnMut()>));

    request_animation_frame(g.borrow().as_ref().unwrap());

    Ok(())
}

fn draw(vertices: &Vec<f32>, context: &WebGl2RenderingContext) {
    // Note that `Float32Array::view` is somewhat dangerous (hence the
    // `unsafe`!). This is creating a raw view into our module's
    // `WebAssembly.Memory` buffer, but if we allocate more pages for ourself
    // (aka do a memory allocation in Rust) it'll cause the buffer to change,
    // causing the `Float32Array` to be invalid.
    //
    // As a result, after `Float32Array::view` we have to be very careful not to
    // do any memory allocations before it's dropped.
    unsafe {
        let positions_array_buf_view = js_sys::Float32Array::view(&vertices);

        context.buffer_sub_data_with_i32_and_array_buffer_view(
            WebGl2RenderingContext::ARRAY_BUFFER,
            0,
            &positions_array_buf_view, //WebGl2RenderingContext::DYNAMIC_DRAW,
        );
    }

    let vert_count = (vertices.len() / 2) as i32;
    context.clear_color(0.9, 0.9, 0.9, 1.0);
    context.clear(WebGl2RenderingContext::COLOR_BUFFER_BIT);
    context.draw_arrays(WebGl2RenderingContext::POINTS, 0, vert_count);
}

fn init_webgl() -> Result<WebGl2RenderingContext, JsValue> {
    let document = web_sys::window().unwrap().document().unwrap();
    let canvas = document
        .create_element("canvas")?
        .dyn_into::<web_sys::HtmlCanvasElement>()?;
    document.body().unwrap().append_child(&canvas)?;
    canvas.set_width(solver::WINDOW_WIDTH);
    canvas.set_height(solver::WINDOW_HEIGHT);
    canvas.style().set_property("border", "solid")?;

    let context = canvas
        .get_context("webgl2")?
        .unwrap()
        .dyn_into::<WebGl2RenderingContext>()?;

    let vert_shader = compile_shader(
        &context,
        WebGl2RenderingContext::VERTEX_SHADER,
        format!(
            r##"#version 300 es
        uniform mat4 matrix;
        in vec2 position;
        void main() {{
            gl_PointSize = {:.1};
            gl_Position = matrix * vec4(position, 0.0, 1.0);
        }}
        "##,
            POINT_SIZE
        )
        .as_str(),
    )?;

    let frag_shader = compile_shader(
        &context,
        WebGl2RenderingContext::FRAGMENT_SHADER,
        r##"#version 300 es
        precision highp float;
        out vec4 outColor;
        void main() {{
            outColor = vec4(0.2, 0.6, 1.0, 1.0);
        }}
        "##,
    )?;
    let program = link_program(&context, &vert_shader, &frag_shader)?;
    context.use_program(Some(&program));

    // uniforms
    let uniform_location = context
        .get_uniform_location(&program, "matrix")
        .expect("Unable to get shader projection matrix uniform location");
    let ortho_matrix = cgmath::ortho(0.0, solver::VIEW_WIDTH, 0.0, solver::VIEW_HEIGHT, 0.0, 1.0);
    let ortho_matrix_flattened_ref: &[f32; 16] = ortho_matrix.as_ref();
    context.uniform_matrix4fv_with_f32_array(
        Some(&uniform_location),
        false,
        ortho_matrix_flattened_ref,
    );

    // attributes
    let position_attribute_location = context.get_attrib_location(&program, "position");
    let buffer = context.create_buffer().ok_or("Failed to create buffer")?;
    context.bind_buffer(WebGl2RenderingContext::ARRAY_BUFFER, Some(&buffer));
    context.vertex_attrib_pointer_with_i32(0, 2, WebGl2RenderingContext::FLOAT, false, 0, 0);
    context.enable_vertex_attrib_array(position_attribute_location as u32);

    // allocate buffer initial state
    let zeroed = vec![0.0; MAX_PARTICLES * 2];
    unsafe {
        let positions_array_buf_view = js_sys::Float32Array::view(&zeroed);

        context.buffer_data_with_array_buffer_view(
            WebGl2RenderingContext::ARRAY_BUFFER,
            &positions_array_buf_view,
            WebGl2RenderingContext::DYNAMIC_DRAW,
        );
    }
    Ok(context)
}

fn request_animation_frame(f: &Closure<dyn FnMut()>) {
    web_sys::window()
        .expect("no global `window` exists")
        .request_animation_frame(f.as_ref().unchecked_ref())
        .expect("should register `requestAnimationFrame` OK");
}

fn compile_shader(
    context: &WebGl2RenderingContext,
    shader_type: u32,
    source: &str,
) -> Result<WebGlShader, String> {
    let shader = context
        .create_shader(shader_type)
        .ok_or_else(|| String::from("Unable to create shader object"))?;
    context.shader_source(&shader, source);
    context.compile_shader(&shader);

    if context
        .get_shader_parameter(&shader, WebGl2RenderingContext::COMPILE_STATUS)
        .as_bool()
        .unwrap_or(false)
    {
        Ok(shader)
    } else {
        Err(context
            .get_shader_info_log(&shader)
            .unwrap_or_else(|| String::from("Unknown error creating shader")))
    }
}

fn link_program(
    context: &WebGl2RenderingContext,
    vert_shader: &WebGlShader,
    frag_shader: &WebGlShader,
) -> Result<WebGlProgram, String> {
    let program = context
        .create_program()
        .ok_or_else(|| String::from("Unable to create shader object"))?;

    context.attach_shader(&program, vert_shader);
    context.attach_shader(&program, frag_shader);
    context.link_program(&program);

    if context
        .get_program_parameter(&program, WebGl2RenderingContext::LINK_STATUS)
        .as_bool()
        .unwrap_or(false)
    {
        Ok(program)
    } else {
        Err(context
            .get_program_info_log(&program)
            .unwrap_or_else(|| String::from("Unknown error creating program object")))
    }
}
