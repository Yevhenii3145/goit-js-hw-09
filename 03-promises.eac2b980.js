!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function u(e,n){return new Promise((function(t,o){for(var r=Math.random()>.3,u=1;u<=e;u++)e=u,setTimeout((function(){r?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n),n+=step}))}var i=document.querySelector(".form"),c=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');i.addEventListener("submit",(function(e){e.preventDefault();var n=Number(c.value);Number(a.value),Number(l.value);u(0,n).then((function(e){r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)}))}))}();
//# sourceMappingURL=03-promises.eac2b980.js.map