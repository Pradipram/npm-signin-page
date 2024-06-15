import*as n from"react";var e={958:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]),i.push([n.id,'/*=============== GOOGLE FONTS ===============*/\n\n/*=============== VARIABLES CSS ===============*/\n:root {\n  /*========== Colors ==========*/\n  /*Color mode HSL(hue, saturation, lightness)*/\n  --white-color: hsl(0, 0%, 100%);\n  --black-color: hsl(0, 0%, 0%);\n\n  /*========== Font and typography ==========*/\n  /*.5rem = 8px | 1rem = 16px ...*/\n  --body-font: "Poppins", sans-serif;\n  --h1-font-size: 2rem;\n  --normal-font-size: 1rem;\n  --small-font-size: 0.813rem;\n}\n\n/*=============== BASE ===============*/\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody,\ninput,\nbutton {\n  font-family: var(--body-font);\n  font-size: var(--normal-font-size);\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n/*=============== LOGIN ===============*/\n.login {\n  position: relative;\n  height: 90vh;\n  display: grid;\n  align-items: center;\n}\n\n.login__bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.login__form {\n  position: relative;\n  margin-inline: 1.5rem;\n  background-color: hsla(0, 0%, 100%, 0.01);\n  border: 2px solid hsla(0, 0%, 100%, 0.7);\n  padding: 2.5rem 1rem;\n  color: var(--white-color);\n  border-radius: 1rem;\n  backdrop-filter: blur(16px);\n}\n\n.login__title {\n  text-align: center;\n  font-size: var(--h1-font-size);\n  margin-bottom: 1.25rem;\n}\n\n.login__inputs,\n.login__box {\n  display: grid;\n}\n\n.login__inputs {\n  /* row-gap: 1.25rem; */\n  row-gap: 5px;\n  margin-bottom: 1rem;\n}\n\n.login__box {\n  grid-template-columns: 1fr max-content;\n  column-gap: 0.75rem;\n  align-items: center;\n  border: 2px solid hsla(0, 0%, 100%, 0.7);\n  padding-inline: 1.25rem;\n  border-radius: 4rem;\n}\n\n.login__input,\n.login__button {\n  border: none;\n  outline: none;\n}\n\n.login__input {\n  width: 100%;\n  background: none;\n  color: var(--white-color);\n  padding-block: 1rem;\n  padding-left: 1rem;\n}\n\n.login__input::placeholder {\n  color: var(--white-color);\n}\n\n.login__box i {\n  font-size: 1.25rem;\n}\n\n.login__check,\n.login__check-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login__check {\n  margin-bottom: 1rem;\n  font-size: var(--small-font-size);\n}\n\n.login__check-box {\n  column-gap: 0.5rem;\n}\n\n.login__check-input {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--white-color);\n  cursor: pointer;\n}\n\n.login__forgot {\n  color: var(--white-color);\n}\n\n.login__forgot:hover {\n  text-decoration: underline;\n}\n\n.login__button {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background-color: var(--white-color);\n  border-radius: 4rem;\n  color: var(--black-color);\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.login__register {\n  font-size: var(--small-font-size);\n  text-align: center;\n}\n\n.login__register a {\n  color: var(--white-color);\n  font-weight: 500;\n}\n\n.login__register a:hover {\n  text-decoration: underline;\n}\n\n/*=============== BREAKPOINTS ===============*/\n/* For medium devices */\n@media screen and (min-width: 576px) {\n  .login {\n    justify-content: center;\n  }\n  .login__form {\n    width: 420px;\n    padding-inline: 2.5rem;\n  }\n  .login__title {\n    margin-bottom: 2rem;\n  }\n}\n',""]);const l=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],l=0;l<n.length;l++){var c=n[l],s=r.base?c[0]+r.base:c[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var m=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=o(p,r);r.byIndex=l,e.splice(l,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var c=r(n,o),s=0;s<a.length;s++){var u=t(a[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var o={};(()=>{r.d(o,{A:()=>x});const e=(t={default:()=>n.default},a={},r.d(a,t),a);var t,a,i=r(72),l=r.n(i),c=r(825),s=r.n(c),u=r(659),d=r.n(u),m=r(56),p=r.n(m),f=r(540),g=r.n(f),h=r(113),v=r.n(h),_=r(958),b={};function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}b.styleTagTransform=v(),b.setAttributes=p(),b.insert=d().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=g(),l()(_.A,b),_.A&&_.A.locals&&_.A.locals;const x=function(n){var t,r,o=(t=(0,n.useState)(!1),r=2,function(n){if(Array.isArray(n))return n}(t)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(n){s=!0,o=n}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(t,r)||function(n,e){if(n){if("string"==typeof n)return y(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];return e.default.createElement("div",{className:"login"},e.default.createElement("img",{src:"https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"background",className:"login__bg"}),e.default.createElement("form",{className:"login__form"},e.default.createElement("h1",{className:"login__title"},"Login"),e.default.createElement("div",{className:"login__inputs"},e.default.createElement("div",{className:"login__box"},e.default.createElement("input",{type:"email",placeholder:"Email ID",required:!0,name:"email",className:"login__input"}),e.default.createElement("i",{className:"ri-mail-fill"})),e.default.createElement("div",{className:"login__box"},e.default.createElement("input",{type:a?"text":"password",placeholder:"Password",required:!0,name:"password",className:"login__input"}),e.default.createElement("i",{className:"ri-lock-2-fill"}))),e.default.createElement("div",{className:"login__check"},e.default.createElement("div",{className:"login__check-box"},e.default.createElement("input",{type:"checkbox",className:"login__check-input",id:"user-check",onClick:function(){i(!a)}}),e.default.createElement("label",{className:"login__check-label"},"Show Password")),e.default.createElement("a",{href:"https://github.com/Pradipram",className:"login__forgot"},"Forgot Password?")),e.default.createElement("button",{type:"submit",className:"login__button"},"Login"),e.default.createElement("div",{className:"login__register"},"Don't have an account? ",e.default.createElement("a",{href:"/signup"},"Register"))))}})();var a=o.A;export{a as default};