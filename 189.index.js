"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[189,235,517],{235:(e,t,n)=>{n.r(t),n.d(t,{Simulation:()=>S,default:()=>L,initThreadPool:()=>m,wbg_rayon_PoolBuilder:()=>x,wbg_rayon_start_worker:()=>y});var r=n(517);let o;const a=new Array(32).fill(void 0);function _(e){return a[e]}a.push(void 0,null,!0,!1);let i=a.length;function b(e){const t=_(e);return function(e){e<36||(a[e]=i,i=e)}(e),t}const c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let f=null;function u(){return null!==f&&f.buffer===o.memory.buffer||(f=new Uint8Array(o.memory.buffer)),f}function s(e,t){return c.decode(u().slice(e,e+t))}function w(e){i===a.length&&a.push(a.length+1);const t=i;return i=a[t],a[t]=e,t}let g=32,d=null;function l(){return null!==d&&d.buffer===o.memory.buffer||(d=new Int32Array(o.memory.buffer)),d}function m(e){return b(o.initThreadPool(e))}function y(e){o.wbg_rayon_start_worker(e)}function h(e){return null==e}function p(e,t){try{return e.apply(this,t)}catch(e){o.__wbindgen_exn_store(w(e))}}let v=null;let A=0;const k=new TextEncoder("utf-8");function P(e,t,n){if(void 0===n){const n=k.encode(e),r=t(n.length);return u().subarray(r,r+n.length).set(n),A=n.length,r}let r=e.length,o=t(r);const a=u();let _=0;for(;_<r;_++){const t=e.charCodeAt(_);if(t>127)break;a[o+_]=t}if(_!==r){0!==_&&(e=e.slice(_)),o=n(o,r,r=_+3*e.length);const t=function(e,t){const n=k.encode(e);return t.set(n),{read:e.length,written:n.length}}(e,u().subarray(o+_,o+r));_+=t.written}return A=_,o}class S{static __wrap(e){const t=Object.create(S.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_simulation_free(e)}constructor(e){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.simulation_new(r,function(e){if(1==g)throw new Error("out of js stack");return a[--g]=e,g}(e));var t=l()[r/4+0],n=l()[r/4+1];if(l()[r/4+2])throw b(n);return S.__wrap(t)}finally{o.__wbindgen_add_to_stack_pointer(16),a[g++]=void 0}}get_num_particles(){return o.simulation_get_num_particles(this.ptr)>>>0}step(){o.simulation_step(this.ptr)}add_block(){o.simulation_add_block(this.ptr)}reset(){o.simulation_reset(this.ptr)}}class x{static __wrap(e){const t=Object.create(x.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}const L=async function e(t,a){void 0===t&&(t=new URL(n(275),n.b));const i={wbg:{}};i.wbg.__wbg_createShader_c17c7cf4768e0737=function(e,t){const n=_(e).createShader(t>>>0);return h(n)?0:w(n)},i.wbg.__wbg_shaderSource_bbfeb057b5f88df5=function(e,t,n,r){_(e).shaderSource(_(t),s(n,r))},i.wbg.__wbg_compileShader_4940032085b41ed2=function(e,t){_(e).compileShader(_(t))},i.wbg.__wbg_getShaderParameter_87e97ffc5dc7fb05=function(e,t,n){return w(_(e).getShaderParameter(_(t),n>>>0))},i.wbg.__wbindgen_boolean_get=function(e){const t=_(e);return"boolean"==typeof t?t?1:0:2},i.wbg.__wbindgen_object_drop_ref=function(e){b(e)},i.wbg.__wbg_getShaderInfoLog_a680dbc6e8440e5b=function(e,t,n){const r=_(t).getShaderInfoLog(_(n));var a=h(r)?0:P(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=A;l()[e/4+1]=i,l()[e/4+0]=a},i.wbg.__wbg_setwidth_654d8adcd4979eed=function(e,t){_(e).width=t>>>0},i.wbg.__wbg_setheight_2b662384bfacb65c=function(e,t){_(e).height=t>>>0},i.wbg.__wbg_getContext_0c19ba5c037e057f=function(){return p((function(e,t,n){const r=_(e).getContext(s(t,n));return h(r)?0:w(r)}),arguments)},i.wbg.__wbg_instanceof_WebGl2RenderingContext_e29e70ae6c00bfdd=function(e){return _(e)instanceof WebGL2RenderingContext},i.wbg.__wbg_clearColor_3973a216e3a63c8f=function(e,t,n,r,o){_(e).clearColor(t,n,r,o)},i.wbg.__wbindgen_string_new=function(e,t){return w(s(e,t))},i.wbg.__wbg_createProgram_6a25e4bb5cfaad4b=function(e){const t=_(e).createProgram();return h(t)?0:w(t)},i.wbg.__wbg_attachShader_0994bf956cb31b2b=function(e,t,n){_(e).attachShader(_(t),_(n))},i.wbg.__wbg_linkProgram_edd275997033948d=function(e,t){_(e).linkProgram(_(t))},i.wbg.__wbg_getProgramParameter_4100b1077a68e2ec=function(e,t,n){return w(_(e).getProgramParameter(_(t),n>>>0))},i.wbg.__wbg_getProgramInfoLog_234b1b9dbbc9282f=function(e,t,n){const r=_(t).getProgramInfoLog(_(n));var a=h(r)?0:P(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=A;l()[e/4+1]=i,l()[e/4+0]=a},i.wbg.__wbg_useProgram_039f85866d3a975b=function(e,t){_(e).useProgram(_(t))},i.wbg.__wbg_getUniformLocation_201fd94276e7dc6f=function(e,t,n,r){const o=_(e).getUniformLocation(_(t),s(n,r));return h(o)?0:w(o)},i.wbg.__wbg_uniformMatrix4fv_aebec0f9fc8d816b=function(e,t,n,r,a){var i,b;_(e).uniformMatrix4fv(_(t),0!==n,(i=r,b=a,(null!==v&&v.buffer===o.memory.buffer||(v=new Float32Array(o.memory.buffer)),v).subarray(i/4,i/4+b)))},i.wbg.__wbg_getAttribLocation_ae4109e1d8e7050f=function(e,t,n,r){return _(e).getAttribLocation(_(t),s(n,r))},i.wbg.__wbg_createBuffer_b6dbd62c544371ed=function(e){const t=_(e).createBuffer();return h(t)?0:w(t)},i.wbg.__wbg_bindBuffer_a5f37e5ebd81a1f6=function(e,t,n){_(e).bindBuffer(t>>>0,_(n))},i.wbg.__wbg_vertexAttribPointer_4375ff065dcf90ed=function(e,t,n,r,o,a,i){_(e).vertexAttribPointer(t>>>0,n,r>>>0,0!==o,a,i)},i.wbg.__wbg_enableVertexAttribArray_85c507778523db86=function(e,t){_(e).enableVertexAttribArray(t>>>0)},i.wbg.__wbg_bufferData_8542921547008e80=function(e,t,n,r){_(e).bufferData(t>>>0,_(n),r>>>0)},i.wbg.__wbindgen_memory=function(){return w(o.memory)},i.wbg.__wbg_buffer_7af23f65f6c64548=function(e){return w(_(e).buffer)},i.wbg.__wbg_newwithbyteoffsetandlength_3f554978d8793b14=function(e,t,n){return w(new Float32Array(_(e),t>>>0,n>>>0))},i.wbg.__wbg_bufferSubData_17fd7936ab128c56=function(e,t,n,r){_(e).bufferSubData(t>>>0,n,_(r))},i.wbg.__wbg_clear_a9fbec6b33c4e095=function(e,t){_(e).clear(t>>>0)},i.wbg.__wbg_drawArrays_ab8fc431291e5dff=function(e,t,n,r){_(e).drawArrays(t>>>0,n,r)},i.wbg.__wbindgen_throw=function(e,t){throw new Error(s(e,t))},i.wbg.__wbindgen_module=function(){return w(e.__wbindgen_wasm_module)},i.wbg.__wbg_startWorkers_04f63eca19916b8f=function(e,t,n){return w((0,r.Q)(b(e),b(t),x.__wrap(n)))},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t)),i.wbg.memory=a||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0});const{instance:c,module:f}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await t,i);return o=c.exports,e.__wbindgen_wasm_module=f,o.__wbindgen_start(),o}},517:(e,t,n)=>{function r(e,t){return new Promise((n=>{e.addEventListener("message",(function r({data:o}){null!=o&&o.type===t&&(e.removeEventListener("message",r),n(o))}))}))}let o;async function a(e,t,a){const _={type:"wasm_bindgen_worker_init",module:e,memory:t,receiver:a.receiver()};o=await Promise.all(Array.from({length:a.numThreads()},(async()=>{const e=new Worker(new URL(n.p+n.u(517),n.b),{type:void 0});return e.postMessage(_),await r(e,"wasm_bindgen_worker_ready"),e}))),a.build()}n.d(t,{Q:()=>a}),r(self,"wasm_bindgen_worker_init").then((async e=>{const t=await n.e(235).then(n.bind(n,235));await t.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),t.wbg_rayon_start_worker(e.receiver)}))},275:(e,t,n)=>{e.exports=n.p+"4dbfa4dbb8ef2592388c.wasm"}}]);