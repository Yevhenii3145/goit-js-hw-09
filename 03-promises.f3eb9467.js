!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i");var u=document.querySelector(".form"),i=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');u.addEventListener("submit",(function(e){e.preventDefault();var n=Number(i.value),o=Number(c.value),t=Number(a.value);console.log("gggggggggggg"),function(e,n,o){return new Promise((function(t,r){for(var u=Math.random()>.3,i=1;i<=e;i++)e=i,setTimeout((function(){u?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n),n+=o}))}(t,n,o).then((function(e){r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)}))}))}();
//# sourceMappingURL=03-promises.f3eb9467.js.map