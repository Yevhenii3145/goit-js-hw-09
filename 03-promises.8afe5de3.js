var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const l={formRef:document.querySelector(".form"),delayRef:document.querySelector('[name="delay"]'),stepRef:document.querySelector('[name="step"]'),amountRef:document.querySelector('[name="amount"]')};l.formRef.addEventListener("submit",(function(e){e.preventDefault(),console.log("ggggggggggggg"),(o=i,t=u,new Promise(((e,n)=>{const r=Math.random()>.3;for(let l=1;l<=o;l++)o=l,setTimeout((()=>{r?e(`✅ Fulfilled promise ${o} in ${t}ms`):n(`❌ Rejected promise ${o} in ${t}ms`)}),t),t+=f}))).then((e=>{r.Notify.success(e)})).catch((e=>r.Notify.failure(e)));var o,t}));let u=Number(l.delayRef.value);const f=Number(l.stepRef.value);let i=Number(l.amountRef.value);
//# sourceMappingURL=03-promises.8afe5de3.js.map
