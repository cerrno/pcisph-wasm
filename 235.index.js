"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[235],{235:(e,t,n)=>{n.r(t),n.d(t,{Simulation:()=>k,default:()=>L,initThreadPool:()=>m,wbg_rayon_PoolBuilder:()=>x,wbg_rayon_start_worker:()=>h});var r=n(517);let o;const _=new Array(32).fill(void 0);function a(e){return _[e]}_.push(void 0,null,!0,!1);let i=_.length;function b(e){const t=a(e);return function(e){e<36||(_[e]=i,i=e)}(e),t}const c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let f=null;function u(){return null!==f&&f.buffer===o.memory.buffer||(f=new Uint8Array(o.memory.buffer)),f}function s(e,t){return c.decode(u().slice(e,e+t))}function g(e){i===_.length&&_.push(_.length+1);const t=i;return i=_[t],_[t]=e,t}let w=32,l=null;function d(){return null!==l&&l.buffer===o.memory.buffer||(l=new Int32Array(o.memory.buffer)),l}function m(e){return b(o.initThreadPool(e))}function h(e){o.wbg_rayon_start_worker(e)}function y(e){return null==e}function p(e,t){try{return e.apply(this,t)}catch(e){o.__wbindgen_exn_store(g(e))}}let A=null;let P=0;const v=new TextEncoder("utf-8");function S(e,t,n){if(void 0===n){const n=v.encode(e),r=t(n.length);return u().subarray(r,r+n.length).set(n),P=n.length,r}let r=e.length,o=t(r);const _=u();let a=0;for(;a<r;a++){const t=e.charCodeAt(a);if(t>127)break;_[o+a]=t}if(a!==r){0!==a&&(e=e.slice(a)),o=n(o,r,r=a+3*e.length);const t=function(e,t){const n=v.encode(e);return t.set(n),{read:e.length,written:n.length}}(e,u().subarray(o+a,o+r));a+=t.written}return P=a,o}class k{static __wrap(e){const t=Object.create(k.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_simulation_free(e)}constructor(e){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.simulation_new(r,function(e){if(1==w)throw new Error("out of js stack");return _[--w]=e,w}(e));var t=d()[r/4+0],n=d()[r/4+1];if(d()[r/4+2])throw b(n);return k.__wrap(t)}finally{o.__wbindgen_add_to_stack_pointer(16),_[w++]=void 0}}get_num_particles(){return o.simulation_get_num_particles(this.ptr)>>>0}step(){o.simulation_step(this.ptr)}add_block(){o.simulation_add_block(this.ptr)}reset(){o.simulation_reset(this.ptr)}}class x{static __wrap(e){const t=Object.create(x.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}const L=async function e(t,_){void 0===t&&(t=new URL(n(275),n.b));const i={wbg:{}};i.wbg.__wbg_createShader_c17c7cf4768e0737=function(e,t){const n=a(e).createShader(t>>>0);return y(n)?0:g(n)},i.wbg.__wbg_shaderSource_bbfeb057b5f88df5=function(e,t,n,r){a(e).shaderSource(a(t),s(n,r))},i.wbg.__wbg_compileShader_4940032085b41ed2=function(e,t){a(e).compileShader(a(t))},i.wbg.__wbg_getShaderParameter_87e97ffc5dc7fb05=function(e,t,n){return g(a(e).getShaderParameter(a(t),n>>>0))},i.wbg.__wbindgen_boolean_get=function(e){const t=a(e);return"boolean"==typeof t?t?1:0:2},i.wbg.__wbindgen_object_drop_ref=function(e){b(e)},i.wbg.__wbg_getShaderInfoLog_a680dbc6e8440e5b=function(e,t,n){const r=a(t).getShaderInfoLog(a(n));var _=y(r)?0:S(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=P;d()[e/4+1]=i,d()[e/4+0]=_},i.wbg.__wbg_setwidth_654d8adcd4979eed=function(e,t){a(e).width=t>>>0},i.wbg.__wbg_setheight_2b662384bfacb65c=function(e,t){a(e).height=t>>>0},i.wbg.__wbg_getContext_0c19ba5c037e057f=function(){return p((function(e,t,n){const r=a(e).getContext(s(t,n));return y(r)?0:g(r)}),arguments)},i.wbg.__wbg_instanceof_WebGl2RenderingContext_e29e70ae6c00bfdd=function(e){return a(e)instanceof WebGL2RenderingContext},i.wbg.__wbg_clearColor_3973a216e3a63c8f=function(e,t,n,r,o){a(e).clearColor(t,n,r,o)},i.wbg.__wbindgen_string_new=function(e,t){return g(s(e,t))},i.wbg.__wbg_createProgram_6a25e4bb5cfaad4b=function(e){const t=a(e).createProgram();return y(t)?0:g(t)},i.wbg.__wbg_attachShader_0994bf956cb31b2b=function(e,t,n){a(e).attachShader(a(t),a(n))},i.wbg.__wbg_linkProgram_edd275997033948d=function(e,t){a(e).linkProgram(a(t))},i.wbg.__wbg_getProgramParameter_4100b1077a68e2ec=function(e,t,n){return g(a(e).getProgramParameter(a(t),n>>>0))},i.wbg.__wbg_getProgramInfoLog_234b1b9dbbc9282f=function(e,t,n){const r=a(t).getProgramInfoLog(a(n));var _=y(r)?0:S(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=P;d()[e/4+1]=i,d()[e/4+0]=_},i.wbg.__wbg_useProgram_039f85866d3a975b=function(e,t){a(e).useProgram(a(t))},i.wbg.__wbg_getUniformLocation_201fd94276e7dc6f=function(e,t,n,r){const o=a(e).getUniformLocation(a(t),s(n,r));return y(o)?0:g(o)},i.wbg.__wbg_uniformMatrix4fv_aebec0f9fc8d816b=function(e,t,n,r,_){var i,b;a(e).uniformMatrix4fv(a(t),0!==n,(i=r,b=_,(null!==A&&A.buffer===o.memory.buffer||(A=new Float32Array(o.memory.buffer)),A).subarray(i/4,i/4+b)))},i.wbg.__wbg_getAttribLocation_ae4109e1d8e7050f=function(e,t,n,r){return a(e).getAttribLocation(a(t),s(n,r))},i.wbg.__wbg_createBuffer_b6dbd62c544371ed=function(e){const t=a(e).createBuffer();return y(t)?0:g(t)},i.wbg.__wbg_bindBuffer_a5f37e5ebd81a1f6=function(e,t,n){a(e).bindBuffer(t>>>0,a(n))},i.wbg.__wbg_vertexAttribPointer_4375ff065dcf90ed=function(e,t,n,r,o,_,i){a(e).vertexAttribPointer(t>>>0,n,r>>>0,0!==o,_,i)},i.wbg.__wbg_enableVertexAttribArray_85c507778523db86=function(e,t){a(e).enableVertexAttribArray(t>>>0)},i.wbg.__wbg_bufferData_8542921547008e80=function(e,t,n,r){a(e).bufferData(t>>>0,a(n),r>>>0)},i.wbg.__wbindgen_memory=function(){return g(o.memory)},i.wbg.__wbg_buffer_7af23f65f6c64548=function(e){return g(a(e).buffer)},i.wbg.__wbg_newwithbyteoffsetandlength_3f554978d8793b14=function(e,t,n){return g(new Float32Array(a(e),t>>>0,n>>>0))},i.wbg.__wbg_bufferSubData_17fd7936ab128c56=function(e,t,n,r){a(e).bufferSubData(t>>>0,n,a(r))},i.wbg.__wbg_clear_a9fbec6b33c4e095=function(e,t){a(e).clear(t>>>0)},i.wbg.__wbg_drawArrays_ab8fc431291e5dff=function(e,t,n,r){a(e).drawArrays(t>>>0,n,r)},i.wbg.__wbindgen_throw=function(e,t){throw new Error(s(e,t))},i.wbg.__wbindgen_module=function(){return g(e.__wbindgen_wasm_module)},i.wbg.__wbg_startWorkers_04f63eca19916b8f=function(e,t,n){return g((0,r.Q)(b(e),b(t),x.__wrap(n)))},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t)),i.wbg.memory=_||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0});const{instance:c,module:f}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await t,i);return o=c.exports,e.__wbindgen_wasm_module=f,o.__wbindgen_start(),o}},275:(e,t,n)=>{e.exports=n.p+"4dbfa4dbb8ef2592388c.wasm"}}]);