/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var u={};function t(u,t,r){var n=t.cardTemplate.querySelector(".card").cloneNode(!0),o={cardTitle:n.querySelector(".card__title"),cardImage:n.querySelector(".card__image"),cardLikeButton:n.querySelector(".card__like-button"),cardLikeCount:n.querySelector(".card__like-counter"),deleteButton:n.querySelector(".card__delete-button")};return function(u,t,r){u.cardImage.src=t.link,u.cardImage.alt=t.name,u.cardTitle.textContent=t.name,e(u.cardLikeButton,t,r)}(o,u,r),o.cardImage.addEventListener("click",(function(u){return t.fillImageElement(u)})),u.owner._id!==r?o.deleteButton.remove():t.addDeleteCardlistener(o.deleteButton,u._id),t.addLikeCardListener(o.cardLikeButton,u._id),n}function e(u,t,e){Array.isArray(t.likes)&&t.likes.length>0?(u.nextElementSibling.textContent=t.likes.length,r(u,t.likes,e)):(u.nextElementSibling.textContent=0,r(u,t.likes,e))}function r(u,t,e){t.some((function(u){return u._id===e}))?u.classList.add("card__like-button_is-active"):u.classList.remove("card__like-button_is-active")}u.p="";const n=u.p+"audio/pedro-pedro.mp3";var o=new Audio(n),D=[];function i(u){u.classList.add("popup_is-opened"),u.querySelector("img")&&u.querySelector("img").src.includes("pedro")&&o.play(),function(u){var t=function(t){return function(u,t){u.target===t&&a(t)}(t,u)},e=function(t){return function(u,t){"Escape"===u.key&&a(t)}(t,u)};D.push(t),D.push(e),u.addEventListener("click",t),document.addEventListener("keydown",e)}(u)}function a(u){u.classList.remove("popup_is-opened"),u.querySelector("img")&&u.querySelector("img").src.includes("pedro")&&(o.pause(),o.currentTime=0),function(u){D.forEach((function(t){u.removeEventListener("click",t),document.removeEventListener("keydown",t)}))}(u)}document.querySelectorAll(".popup__close").forEach((function(u){u.addEventListener("click",(function(){a(u.closest(".popup"))}))}));var c=(navigator.language||navigator.userLanguage).startsWith("ru")?"ru":"en",l=/^(?:[\t-\r \x2DA-Za-z\xA0\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2000-\u200A\u2028\u2029\u202F\u205F\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3000\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFEFF\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/;function s(u,t){var e=u.every((function(u){return u.validity.valid}));t.disabled=!e}function F(u,t,e){t.textContent="",t.classList.remove(e.erorrSpanActive),u.classList.remove(e.inputInvalid)}function f(u,t){u.forEach((function(u){F(u,u.nextElementSibling,t),u.setCustomValidity("")}));var e=u[0].form.querySelector(t.submitButtonSelector);s(u,e)}function p(u){return u.ok?u.json():Promise.reject("Ошибка внутри промиса: ".concat(u.status))}function E(u){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},E(u)}function A(){A=function(){return t};var u,t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(u,t,e){u[t]=e.value},o="function"==typeof Symbol?Symbol:{},D=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(u,t,e){return Object.defineProperty(u,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),u[t]}try{c({},"")}catch(u){c=function(u,t,e){return u[t]=e}}function l(u,t,e,r){var o=t&&t.prototype instanceof h?t:h,D=Object.create(o.prototype),i=new q(r||[]);return n(D,"_invoke",{value:L(u,e,i)}),D}function s(u,t,e){try{return{type:"normal",arg:u.call(t,e)}}catch(u){return{type:"throw",arg:u}}}t.wrap=l;var F="suspendedStart",f="suspendedYield",p="executing",C="completed",d={};function h(){}function y(){}function v(){}var m={};c(m,D,(function(){return this}));var B=Object.getPrototypeOf,g=B&&B(B(j([])));g&&g!==e&&r.call(g,D)&&(m=g);var _=v.prototype=h.prototype=Object.create(m);function b(u){["next","throw","return"].forEach((function(t){c(u,t,(function(u){return this._invoke(t,u)}))}))}function w(u,t){function e(n,o,D,i){var a=s(u[n],u,o);if("throw"!==a.type){var c=a.arg,l=c.value;return l&&"object"==E(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(u){e("next",u,D,i)}),(function(u){e("throw",u,D,i)})):t.resolve(l).then((function(u){c.value=u,D(c)}),(function(u){return e("throw",u,D,i)}))}i(a.arg)}var o;n(this,"_invoke",{value:function(u,r){function n(){return new t((function(t,n){e(u,r,t,n)}))}return o=o?o.then(n,n):n()}})}function L(t,e,r){var n=F;return function(o,D){if(n===p)throw Error("Generator is already running");if(n===C){if("throw"===o)throw D;return{value:u,done:!0}}for(r.method=o,r.arg=D;;){var i=r.delegate;if(i){var a=x(i,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===F)throw n=C,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?C:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=C,r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(n===u)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=u,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var D=o.arg;return D?D.done?(e[t.resultName]=D.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,d):D:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(u){var t={tryLoc:u[0]};1 in u&&(t.catchLoc=u[1]),2 in u&&(t.finallyLoc=u[2],t.afterLoc=u[3]),this.tryEntries.push(t)}function k(u){var t=u.completion||{};t.type="normal",delete t.arg,u.completion=t}function q(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(S,this),this.reset(!0)}function j(t){if(t||""===t){var e=t[D];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=u,e.done=!0,e};return o.next=o}}throw new TypeError(E(t)+" is not iterable")}return y.prototype=v,n(_,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:y,configurable:!0}),y.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(u){var t="function"==typeof u&&u.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,v):(u.__proto__=v,c(u,a,"GeneratorFunction")),u.prototype=Object.create(_),u},t.awrap=function(u){return{__await:u}},b(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(u,e,r,n,o){void 0===o&&(o=Promise);var D=new w(l(u,e,r,n),o);return t.isGeneratorFunction(e)?D:D.next().then((function(u){return u.done?u.value:D.next()}))},b(_),c(_,a,"Generator"),c(_,D,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(u){var t=Object(u),e=[];for(var r in t)e.push(r);return e.reverse(),function u(){for(;e.length;){var r=e.pop();if(r in t)return u.value=r,u.done=!1,u}return u.done=!0,u}},t.values=j,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var u=this.tryEntries[0].completion;if("throw"===u.type)throw u.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=u),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var D=this.tryEntries[o],i=D.completion;if("root"===D.tryLoc)return n("end");if(D.tryLoc<=this.prev){var a=r.call(D,"catchLoc"),c=r.call(D,"finallyLoc");if(a&&c){if(this.prev<D.catchLoc)return n(D.catchLoc,!0);if(this.prev<D.finallyLoc)return n(D.finallyLoc)}else if(a){if(this.prev<D.catchLoc)return n(D.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<D.finallyLoc)return n(D.finallyLoc)}}}},abrupt:function(u,t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===u||"continue"===u)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var D=o?o.completion:{};return D.type=u,D.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(D)},complete:function(u,t){if("throw"===u.type)throw u.arg;return"break"===u.type||"continue"===u.type?this.next=u.arg:"return"===u.type?(this.rval=this.arg=u.arg,this.method="return",this.next="end"):"normal"===u.type&&t&&(this.next=t),d},finish:function(u){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===u)return this.complete(e.completion,e.afterLoc),k(e),d}},catch:function(u){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===u){var r=e.completion;if("throw"===r.type){var n=r.arg;k(e)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),d}},t}function C(u,t,e,r,n,o,D){try{var i=u[o](D),a=i.value}catch(u){return void e(u)}i.done?t(a):Promise.resolve(a).then(r,n)}function d(u){return function(){var t=this,e=arguments;return new Promise((function(r,n){var o=u.apply(t,e);function D(u){C(o,r,n,D,i,"next",u)}function i(u){C(o,r,n,D,i,"throw",u)}D(void 0)}))}}var h={baseUrl:"https://nomoreparties.co/v1/wff-cohort-15",headers:{authorization:"6ecdd90f-2ff6-4f8a-9fae-be11c25c4731","Content-Type":"application/json"}};function y(u,t,e){return v.apply(this,arguments)}function v(){return(v=d(A().mark((function u(t,e,r){var n,o;return A().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,n={method:"".concat(e),headers:h.headers},r&&(n.body=JSON.stringify(r)),u.next=5,fetch("".concat(h.baseUrl).concat(t),n);case 5:return o=u.sent,u.next=8,p(o);case 8:return u.abrupt("return",u.sent);case 11:throw u.prev=11,u.t0=u.catch(0),console.log("Ошибка запроса к серверу: "+u.t0),u.t0;case 15:case"end":return u.stop()}}),u,null,[[0,11]])})))).apply(this,arguments)}function m(){return(m=d(A().mark((function u(t){var e,r;return A().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,fetch(t,{method:"HEAD"});case 3:if((e=u.sent).ok){u.next=6;break}return u.abrupt("return",Promise.reject("Ошибка: ".concat(res.status)));case 6:if((r=e.headers.get("Content-Type"))&&r.startsWith("image/")){u.next=9;break}throw new Error("Не картинка ваша ссылка");case 9:u.next=15;break;case 11:throw u.prev=11,u.t0=u.catch(0),console.log("Ошибка функции isImgReq: "+u.t0),u.t0;case 15:case"end":return u.stop()}}),u,null,[[0,11]])})))).apply(this,arguments)}function B(u){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},B(u)}function g(){g=function(){return t};var u,t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(u,t,e){u[t]=e.value},o="function"==typeof Symbol?Symbol:{},D=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(u,t,e){return Object.defineProperty(u,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),u[t]}try{c({},"")}catch(u){c=function(u,t,e){return u[t]=e}}function l(u,t,e,r){var o=t&&t.prototype instanceof C?t:C,D=Object.create(o.prototype),i=new q(r||[]);return n(D,"_invoke",{value:L(u,e,i)}),D}function s(u,t,e){try{return{type:"normal",arg:u.call(t,e)}}catch(u){return{type:"throw",arg:u}}}t.wrap=l;var F="suspendedStart",f="suspendedYield",p="executing",E="completed",A={};function C(){}function d(){}function h(){}var y={};c(y,D,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&r.call(m,D)&&(y=m);var _=h.prototype=C.prototype=Object.create(y);function b(u){["next","throw","return"].forEach((function(t){c(u,t,(function(u){return this._invoke(t,u)}))}))}function w(u,t){function e(n,o,D,i){var a=s(u[n],u,o);if("throw"!==a.type){var c=a.arg,l=c.value;return l&&"object"==B(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(u){e("next",u,D,i)}),(function(u){e("throw",u,D,i)})):t.resolve(l).then((function(u){c.value=u,D(c)}),(function(u){return e("throw",u,D,i)}))}i(a.arg)}var o;n(this,"_invoke",{value:function(u,r){function n(){return new t((function(t,n){e(u,r,t,n)}))}return o=o?o.then(n,n):n()}})}function L(t,e,r){var n=F;return function(o,D){if(n===p)throw Error("Generator is already running");if(n===E){if("throw"===o)throw D;return{value:u,done:!0}}for(r.method=o,r.arg=D;;){var i=r.delegate;if(i){var a=x(i,r);if(a){if(a===A)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===F)throw n=E,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?E:f,c.arg===A)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=E,r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(n===u)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=u,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),A;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,A;var D=o.arg;return D?D.done?(e[t.resultName]=D.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,A):D:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,A)}function S(u){var t={tryLoc:u[0]};1 in u&&(t.catchLoc=u[1]),2 in u&&(t.finallyLoc=u[2],t.afterLoc=u[3]),this.tryEntries.push(t)}function k(u){var t=u.completion||{};t.type="normal",delete t.arg,u.completion=t}function q(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(S,this),this.reset(!0)}function j(t){if(t||""===t){var e=t[D];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=u,e.done=!0,e};return o.next=o}}throw new TypeError(B(t)+" is not iterable")}return d.prototype=h,n(_,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(u){var t="function"==typeof u&&u.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,h):(u.__proto__=h,c(u,a,"GeneratorFunction")),u.prototype=Object.create(_),u},t.awrap=function(u){return{__await:u}},b(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(u,e,r,n,o){void 0===o&&(o=Promise);var D=new w(l(u,e,r,n),o);return t.isGeneratorFunction(e)?D:D.next().then((function(u){return u.done?u.value:D.next()}))},b(_),c(_,a,"Generator"),c(_,D,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(u){var t=Object(u),e=[];for(var r in t)e.push(r);return e.reverse(),function u(){for(;e.length;){var r=e.pop();if(r in t)return u.value=r,u.done=!1,u}return u.done=!0,u}},t.values=j,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var u=this.tryEntries[0].completion;if("throw"===u.type)throw u.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=u),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var D=this.tryEntries[o],i=D.completion;if("root"===D.tryLoc)return n("end");if(D.tryLoc<=this.prev){var a=r.call(D,"catchLoc"),c=r.call(D,"finallyLoc");if(a&&c){if(this.prev<D.catchLoc)return n(D.catchLoc,!0);if(this.prev<D.finallyLoc)return n(D.finallyLoc)}else if(a){if(this.prev<D.catchLoc)return n(D.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<D.finallyLoc)return n(D.finallyLoc)}}}},abrupt:function(u,t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===u||"continue"===u)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var D=o?o.completion:{};return D.type=u,D.arg=t,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(D)},complete:function(u,t){if("throw"===u.type)throw u.arg;return"break"===u.type||"continue"===u.type?this.next=u.arg:"return"===u.type?(this.rval=this.arg=u.arg,this.method="return",this.next="end"):"normal"===u.type&&t&&(this.next=t),A},finish:function(u){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===u)return this.complete(e.completion,e.afterLoc),k(e),A}},catch:function(u){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===u){var r=e.completion;if("throw"===r.type){var n=r.arg;k(e)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),A}},t}function _(u,t){(null==t||t>u.length)&&(t=u.length);for(var e=0,r=Array(t);e<t;e++)r[e]=u[e];return r}function b(u,t,e,r,n,o,D){try{var i=u[o](D),a=i.value}catch(u){return void e(u)}i.done?t(a):Promise.resolve(a).then(r,n)}function w(u){return function(){var t=this,e=arguments;return new Promise((function(r,n){var o=u.apply(t,e);function D(u){b(o,r,n,D,i,"next",u)}function i(u){b(o,r,n,D,i,"throw",u)}D(void 0)}))}}var L=document.querySelector(".popup_type_edit"),x=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup_type_image"),k=document.querySelector(".popup_type_delete-card"),q=document.querySelector(".popup_type_update-avatar"),j=document.querySelector(".profile__edit-button"),O=document.querySelector(".profile__add-button"),P=document.querySelector(".profile__image"),T=S.querySelector(".popup__image"),I=S.querySelector(".popup__caption"),G=document.createElement("span");G.textContent="Loading...",G.classList.add("loading"),L.classList.add("popup_is-animated"),x.classList.add("popup_is-animated"),S.classList.add("popup_is-animated"),k.classList.add("popup_is-animated"),q.classList.add("popup_is-animated");var N,U=null,Y=null,H=document.querySelector(".profile__title"),V=document.querySelector(".profile__description"),z=document.querySelector(".profile__image"),M=L.querySelector(".popup__input_type_name"),W=L.querySelector(".popup__input_type_description"),$=x.querySelector(".popup__input_type_card-name"),J=x.querySelector(".popup__input_type_url"),R=q.querySelector(".popup__input_type_url"),Z=document.querySelector(".places__list"),K={cardTemplate:document.querySelector("#card-template").content,fillImageElement:function(u){T.src=u.target.src,T.alt=u.target.alt,I.textContent=u.target.closest(".card").querySelector(".card__title").textContent,G.style.display="block",u.target.after(G),T.addEventListener("load",(function(){G.style.display="none",i(S)}),{once:!0})},addDeleteCardlistener:function(u,t){u.addEventListener("click",(function(){i(k),U=u,Y=t}))},addLikeCardListener:function(u,t){u.addEventListener("click",(function(r){var n=u.classList.contains("card__like-button_is-active")?"DELETE":"PUT";eu(r,{endPoint:"/cards/likes/".concat(t),metod:n}).then((function(t){e(u,t,N)}))}))}},Q={form:".popup__form",input:".popup__input",inputInvalid:"popup__input-invalid",erorrSpan:"popup__input-error",erorrSpanActive:"popup__input-error_active",submitButtonSelector:".popup__button"},X=function(u){var t=Array.from(document.querySelectorAll(u.form)),e=[];return t.forEach((function(t){var r=Array.from(t.querySelectorAll(u.input)),n=t.querySelector(u.submitButtonSelector);s(r,n),r.forEach((function(o){var D=t.querySelector("#".concat(o.id,"-error"));e.push(o),console.log("vs nen1",u),o.addEventListener("input",(function(){console.log("vs nen2",u),function(u,t,e){"url"!==u.type&&(l.test(u.value)?u.setCustomValidity(""):u.setCustomValidity(u.getAttribute("data-error-message-".concat(c)))),u.validity.valid?F(u,t,e):function(u,t,e){t.textContent=u.validationMessage,console.log("vs nen2"),t.classList.add(e.erorrSpanActive),u.classList.add(e.inputInvalid)}(u,t,e)}(o,D,u),s(r,n)}))}))})),e}(Q);function uu(){return(uu=w(g().mark((function u(){var e,r,n,o;return g().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,Promise.all([y("/users/me","GET"),y("/cards","GET")]);case 3:e=u.sent,i=2,r=function(u){if(Array.isArray(u))return u}(D=e)||function(u,t){var e=null==u?null:"undefined"!=typeof Symbol&&u[Symbol.iterator]||u["@@iterator"];if(null!=e){var r,n,o,D,i=[],a=!0,c=!1;try{if(o=(e=e.call(u)).next,0===t){if(Object(e)!==e)return;a=!1}else for(;!(a=(r=o.call(e)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(u){c=!0,n=u}finally{try{if(!a&&null!=e.return&&(D=e.return(),Object(D)!==D))return}finally{if(c)throw n}}return i}}(D,i)||function(u,t){if(u){if("string"==typeof u)return _(u,t);var e={}.toString.call(u).slice(8,-1);return"Object"===e&&u.constructor&&(e=u.constructor.name),"Map"===e||"Set"===e?Array.from(u):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_(u,t):void 0}}(D,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=r[0],o=r[1],N=n._id,H.textContent=n.name,V.textContent=n.about,z.style.backgroundImage="url(".concat(n.avatar,")"),o.forEach((function(u){var e=t(u,K,N);Z.append(e)})),u.next=17;break;case 14:u.prev=14,u.t0=u.catch(0),console.log("Ошибка при загрузке карточек и профиля:",u.t0);case 17:case"end":return u.stop()}var D,i}),u,null,[[0,14]])})))).apply(this,arguments)}function tu(u){return X.filter((function(t){if(t.form.getAttribute("name")===u)return t}))}function eu(u,t){return ru.apply(this,arguments)}function ru(){return ru=w(g().mark((function u(t,e){var r,n,o,D=arguments;return g().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return r=D.length>2&&void 0!==D[2]?D[2]:["Сохранение...","Сохранить"],t.preventDefault(),n=t.submitter,t.target.classList.contains("card__like-button")||(n.textContent="".concat(r[0])),u.prev=4,u.next=7,y(e.endPoint,e.metod,e.data);case 7:return o=u.sent,t.target.classList.contains("card__like-button")||a(t.target.closest(".popup")),u.abrupt("return",o);case 12:u.prev=12,u.t0=u.catch(4),console.log("Ошибка при обновлении данных:",u.t0);case 15:return u.prev=15,t.target.classList.contains("card__like-button")||(n.textContent="".concat(r[1])),u.finish(15);case 18:case"end":return u.stop()}}),u,null,[[4,12,15,18]])}))),ru.apply(this,arguments)}!function(){uu.apply(this,arguments)}(),j.addEventListener("click",(function(){M.value=H.textContent,W.value=V.textContent,f(tu("edit-profile"),Q),i(L)})),O.addEventListener("click",(function(){$.value="",J.value="",f(tu("new-place"),Q),i(x)})),P.addEventListener("click",(function(){R.value="",f(tu("update-avatar"),Q),i(q)})),L.addEventListener("submit",(function(u){eu(u,{endPoint:"/users/me",metod:"PATCH",data:{name:M.value,about:W.value}}).then((function(u){H.textContent=u.name,V.textContent=u.about}))})),x.addEventListener("submit",(function(u){var e={endPoint:"/cards",metod:"POST",data:{name:$.value,link:J.value}};eu(u,e).then((function(e){var r=t(e,K,N);Z.prepend(r),u.target.reset()}))})),q.addEventListener("submit",(function(u){u.preventDefault();var t={endPoint:"/users/me/avatar",metod:"PATCH",data:{avatar:R.value}};(function(u){return m.apply(this,arguments)})(t.data.avatar).then((function(){eu(u,t).then((function(u){z.style.backgroundImage="url(".concat(u.avatar,")")}))}))})),k.addEventListener("submit",(function(u){eu(u,{endPoint:"/cards/".concat(Y),metod:"DELETE"},["Удаление...","да"]).then((function(){U.closest(".card").remove()}))}))})();