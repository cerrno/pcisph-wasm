"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[235],{235:(e,t,n)=>{n.r(t),n.d(t,{initThreadPool:()=>d,wbg_rayon_start_worker:()=>l,Simulation:()=>x,wbg_rayon_PoolBuilder:()=>k,default:()=>L});var r=n(517);let o;const a=new Array(32).fill(void 0);function _(e){return a[e]}a.push(void 0,null,!0,!1);let i=a.length;function b(e){const t=_(e);return function(e){e<36||(a[e]=i,i=e)}(e),t}let c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let f=null;function u(){return null!==f&&f.buffer===o.memory.buffer||(f=new Uint8Array(o.memory.buffer)),f}function g(e,t){return c.decode(u().slice(e,e+t))}function s(e){i===a.length&&a.push(a.length+1);const t=i;return i=a[t],a[t]=e,t}let w=32;function d(e){return b(o.initThreadPool(e))}function l(e){o.wbg_rayon_start_worker(e)}function m(e){return null==e}function h(e,t){try{return e.apply(this,t)}catch(e){o.__wbindgen_exn_store(s(e))}}let y=null;let p=0,A=new TextEncoder("utf-8");function v(e,t,n){if(void 0===n){const n=A.encode(e),r=t(n.length);return u().subarray(r,r+n.length).set(n),p=n.length,r}let r=e.length,o=t(r);const a=u();let _=0;for(;_<r;_++){const t=e.charCodeAt(_);if(t>127)break;a[o+_]=t}if(_!==r){0!==_&&(e=e.slice(_)),o=n(o,r,r=_+3*e.length);const t=function(e,t){const n=A.encode(e);return t.set(n),{read:e.length,written:n.length}}(e,u().subarray(o+_,o+r));_+=t.written}return p=_,o}let P=null;function S(){return null!==P&&P.buffer===o.memory.buffer||(P=new Int32Array(o.memory.buffer)),P}class x{static __wrap(e){const t=Object.create(x.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_simulation_free(e)}constructor(e){try{var t=o.simulation_new(function(e){if(1==w)throw new Error("out of js stack");return a[--w]=e,w}(e));return x.__wrap(t)}finally{a[w++]=void 0}}get_num_particles(){return o.simulation_get_num_particles(this.ptr)>>>0}step(){o.simulation_step(this.ptr)}add_block(){o.simulation_add_block(this.ptr)}reset(){o.simulation_reset(this.ptr)}}class k{static __wrap(e){const t=Object.create(k.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}const L=async function e(t,a){void 0===t&&(t=new URL(n(275),n.b));const i={wbg:{}};i.wbg.__wbg_createShader_6e8eed55567fe1a6=function(e,t){var n=_(e).createShader(t>>>0);return m(n)?0:s(n)},i.wbg.__wbg_shaderSource_18f45f93c05a8311=function(e,t,n,r){_(e).shaderSource(_(t),g(n,r))},i.wbg.__wbg_compileShader_dd66d66a5a6481f3=function(e,t){_(e).compileShader(_(t))},i.wbg.__wbg_getShaderParameter_264d9ab5c13ece4d=function(e,t,n){return s(_(e).getShaderParameter(_(t),n>>>0))},i.wbg.__wbindgen_boolean_get=function(e){const t=_(e);return"boolean"==typeof t?t?1:0:2},i.wbg.__wbindgen_object_drop_ref=function(e){b(e)},i.wbg.__wbg_getShaderInfoLog_ba1de20c14b6fb63=function(e,t,n){var r=_(t).getShaderInfoLog(_(n)),a=m(r)?0:v(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=p;S()[e/4+1]=i,S()[e/4+0]=a},i.wbg.__wbg_setwidth_c1a7061891b71f25=function(e,t){_(e).width=t>>>0},i.wbg.__wbg_setheight_88894b05710ff752=function(e,t){_(e).height=t>>>0},i.wbg.__wbg_getContext_f701d0231ae22393=function(){return h((function(e,t,n){var r=_(e).getContext(g(t,n));return m(r)?0:s(r)}),arguments)},i.wbg.__wbg_instanceof_WebGl2RenderingContext_56ad96bfac3f5531=function(e){return _(e)instanceof WebGL2RenderingContext},i.wbg.__wbg_clearColor_71f96fd72a7646a6=function(e,t,n,r,o){_(e).clearColor(t,n,r,o)},i.wbg.__wbindgen_string_new=function(e,t){return s(g(e,t))},i.wbg.__wbg_createProgram_32d01a55e144b9fc=function(e){var t=_(e).createProgram();return m(t)?0:s(t)},i.wbg.__wbg_attachShader_7faccaa7b5ac28a6=function(e,t,n){_(e).attachShader(_(t),_(n))},i.wbg.__wbg_linkProgram_b84796e37364e5c9=function(e,t){_(e).linkProgram(_(t))},i.wbg.__wbg_getProgramParameter_80edd3cfbcf7cf1d=function(e,t,n){return s(_(e).getProgramParameter(_(t),n>>>0))},i.wbg.__wbg_getProgramInfoLog_18c849a5fa54e7b1=function(e,t,n){var r=_(t).getProgramInfoLog(_(n)),a=m(r)?0:v(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=p;S()[e/4+1]=i,S()[e/4+0]=a},i.wbg.__wbg_useProgram_c2fdf4a953d1128a=function(e,t){_(e).useProgram(_(t))},i.wbg.__wbg_getUniformLocation_77b2d89291f84289=function(e,t,n,r){var o=_(e).getUniformLocation(_(t),g(n,r));return m(o)?0:s(o)},i.wbg.__wbg_uniformMatrix4fv_03d4a6800fd3537e=function(e,t,n,r,a){var i,b;_(e).uniformMatrix4fv(_(t),0!==n,(i=r,b=a,(null!==y&&y.buffer===o.memory.buffer||(y=new Float32Array(o.memory.buffer)),y).subarray(i/4,i/4+b)))},i.wbg.__wbg_getAttribLocation_5d304d390c7273f5=function(e,t,n,r){return _(e).getAttribLocation(_(t),g(n,r))},i.wbg.__wbg_createBuffer_5c5caa16032a81b7=function(e){var t=_(e).createBuffer();return m(t)?0:s(t)},i.wbg.__wbg_bindBuffer_4ece833dd10cac2f=function(e,t,n){_(e).bindBuffer(t>>>0,_(n))},i.wbg.__wbg_vertexAttribPointer_76d558694fe81cd7=function(e,t,n,r,o,a,i){_(e).vertexAttribPointer(t>>>0,n,r>>>0,0!==o,a,i)},i.wbg.__wbg_enableVertexAttribArray_91da8d3cbe0c2bbd=function(e,t){_(e).enableVertexAttribArray(t>>>0)},i.wbg.__wbindgen_memory=function(){return s(o.memory)},i.wbg.__wbg_buffer_397eaa4d72ee94dd=function(e){return s(_(e).buffer)},i.wbg.__wbg_newwithbyteoffsetandlength_8bd669b4092b7244=function(e,t,n){return s(new Float32Array(_(e),t>>>0,n>>>0))},i.wbg.__wbg_bufferData_bba22fbe5dd1f1d6=function(e,t,n,r){_(e).bufferData(t>>>0,_(n),r>>>0)},i.wbg.__wbg_bufferSubData_27cef7a644910dfc=function(e,t,n,r){_(e).bufferSubData(t>>>0,n,_(r))},i.wbg.__wbg_clear_4ce66c813d66e77d=function(e,t){_(e).clear(t>>>0)},i.wbg.__wbg_drawArrays_5db2f4e6291f7fb2=function(e,t,n,r){_(e).drawArrays(t>>>0,n,r)},i.wbg.__wbindgen_throw=function(e,t){throw new Error(g(e,t))},i.wbg.__wbindgen_rethrow=function(e){throw b(e)},i.wbg.__wbindgen_module=function(){return s(e.__wbindgen_wasm_module)},i.wbg.__wbg_startWorkers_04f63eca19916b8f=function(e,t,n){return s((0,r.Q)(b(e),b(t),k.__wrap(n)))},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t)),i.wbg.memory=a||new WebAssembly.Memory({initial:17,maximum:16384,shared:!0});const{instance:c,module:f}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await t,i);return o=c.exports,e.__wbindgen_wasm_module=f,o.__wbindgen_start(),o}},275:(e,t,n)=>{e.exports=n.p+"6e98d801b2d10ab314b0.wasm"}}]);