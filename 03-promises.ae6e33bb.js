var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function u(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}const i=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');i.addEventListener("submit",(function(e){e.preventDefault();let t=Number(l.value);const n=Number(c.value),o=Number(a.value);let i=t+n,s=1;u(s,t).then((e=>{r.Notify.success(e)})).catch((e=>r.Notify.failure(e))),s+=1;for(let e=2;e<=o;e++)s=e,u(s,i).then((e=>{r.Notify.success(e)})).catch((e=>r.Notify.failure(e))),i+=n}));
//# sourceMappingURL=03-promises.ae6e33bb.js.map
