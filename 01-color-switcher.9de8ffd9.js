function t(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}const e={buttonStartRef:document.querySelector("button[data-start]"),buttonStopRef:document.querySelector("button[data-stop]")};let o=null;e.buttonStartRef.addEventListener("click",(function(){setTimeout((()=>{t(),e.buttonStartRef.disabled=!0,e.buttonStopRef.disabled=!1,o=setInterval(t,1e3)}),0)})),e.buttonStopRef.addEventListener("click",(function(){clearInterval(o),e.buttonStartRef.disabled=!1,e.buttonStopRef.disabled=!0}));
//# sourceMappingURL=01-color-switcher.9de8ffd9.js.map
