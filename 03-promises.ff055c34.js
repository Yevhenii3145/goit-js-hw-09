!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i");function u(e,n){return new Promise((function(o,t){for(var r=Math.random()>.3,u=1;u<=e;u++)e=u,setTimeout((function(){r?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):t("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n),n+=step}))}var i=document.querySelector(".form"),c=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');i.addEventListener("submit",(function(e){e.preventDefault();var n=Number(c.value),o=(Number(a.value),Number(l.value));console.log("ggggggggggggg"),u(o,n).then((function(e){r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)}))}))}();
//# sourceMappingURL=03-promises.ff055c34.js.map