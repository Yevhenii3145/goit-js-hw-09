var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;for(let l=1;l<=e;l++)e=l,setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t),t+=step}))}const u=document.querySelector(".form"),i=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');u.addEventListener("submit",(function(e){e.preventDefault();let t=Number(i.value);Number(a.value);let n=Number(d.value);console.log("ggggggggggggg"),l(n,t).then((e=>{r.Notify.success(e)})).catch((e=>r.Notify.failure(e)))}));
//# sourceMappingURL=03-promises.8b27fd28.js.map