!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequired76b;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired76b=i),i.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i("iE7OH").register(JSON.parse('{"eUclj":"myLibrary.0bc4c157.js","JNv3y":"defaultPicture.e241b070.png","ai66d":"myLibrary-img.6f5c0e18.jpg","jcbZP":"watchedDefault.3b23267f.jpg","5meK3":"queueDefault.5152ac84.jpg","a0Xmu":"myLibrary.de317d0a.js"}')),i("j1lrD");var l=i("4Nugj"),o=i("8nrFW"),c=(i("4Nugj"),i("bpxeT")),u=i("2TvXO"),s=i("4dL3P"),d=i("hYoMK");function f(e){return v.apply(this,arguments)}function v(){return(v=t(c)(t(u).mark((function e(n){var r,a,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:d.API_KEY}),e.next=3,fetch("".concat(s.BASE_URL,"/movie/").concat(n,"?").concat(r));case 3:return a=e.sent,e.next=6,a.json();case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g,y=i("fgCMy");l=i("4Nugj");g=i("aNJCr").getBundleURL("eUclj")+i("iE7OH").resolve("JNv3y");var p=(0,l.default)().myLibraryList;function m(e){var n=e.genres,r=e.original_title,a=(e.overview,e.popularity,e.poster_path),i=(e.title,e.release_date),l=e.vote_average,o=(e.vote_count,e.id),c=0;i?c=new Date("".concat(i)).getFullYear():c="No information";var u="";n.length?(u=n.map((function(e){return e.name}))).length>2?u=u.slice(0,2).join(", ")+", Other":u.length>0&&u.length<=2&&(u=u.join(", ")):u="No information";var s="";s=a?"https://image.tmdb.org/t/p/w500".concat(a):t(g);var d='\n    <li class="film-gallery__item" data-id="'.concat(o,'">\n    <img class="film-gallery__image" src="').concat(s,'" alt="Movie poster" loading="lazy">\n    <div class="film-gallery__info">\n        <p class="film-gallery__title">').concat(r,'</p>\n        <p class="film-gallery__text"><span class="genre">').concat(u," |</span>\n              <span>").concat(c,'</span><span class="vote-average">').concat(l.toFixed(1),"</span></p>\n    </div>\n    </li>");p.insertAdjacentHTML("afterbegin",d)}var h=i("5xtVg"),b=(0,l.default)().filmGallery,L=[],w=[],_=[];function E(){(0,y.getKey)("watched")&&(L=(0,y.getKey)("watched"));var e=!0,t=!1,n=void 0;try{for(var r,a=L[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){f(r.value).then((function(e){return m(e)})).catch((function(e){return console.log(e)})),b.addEventListener("click",h.onModalWindowOpen)}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}function H(){(0,y.getKey)("queue")&&(w=(0,y.getKey)("queue"));var e=!0,t=!1,n=void 0;try{for(var r,a=w[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){f(r.value).then((function(e){return m(e)})).catch((function(e){return console.log(e)})),b.addEventListener("click",h.onModalWindowOpen)}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}var j;j=i("aNJCr").getBundleURL("eUclj")+i("iE7OH").resolve("ai66d");var x;x=i("aNJCr").getBundleURL("eUclj")+i("iE7OH").resolve("jcbZP");var O;O=i("aNJCr").getBundleURL("eUclj")+i("iE7OH").resolve("5meK3");h=i("5xtVg");var M=(0,l.default)().filmGallery;(0,l.default)().watchedBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().watchedBtn.classList.add("btn-active"),(0,l.default)().queueBtn.classList.remove("btn-active"),(0,l.default)().watchedBtn.disabled=!0,(0,l.default)().queueBtn.disabled=!1,E();var e='<li class="mylibrary-img" role="presentation"><img src="'.concat(t(x),'"></img></li>');0==L.length&&((0,l.default)().myLibraryList.innerHTML=e,M.removeEventListener("click",h.onModalWindowOpen))})),(0,l.default)().queueBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().queueBtn.classList.add("btn-active"),(0,l.default)().watchedBtn.classList.remove("btn-active"),(0,l.default)().queueBtn.disabled=!0,(0,l.default)().watchedBtn.disabled=!1,H();var e='<li class="mylibrary-img" role="presentation"><img src="'.concat(t(O),'"></img></li>');0==w.length&&((0,l.default)().myLibraryList.innerHTML=e,M.removeEventListener("click",h.onModalWindowOpen))})),function(){(0,y.getKey)("watched")&&(L=(0,y.getKey)("watched")),(0,y.getKey)("queue")&&(w=(0,y.getKey)("queue")),_=t(o)(L).concat(t(o)(w));var e=!0,n=!1,r=void 0;try{for(var a,i=_[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){f(a.value).then((function(e){return m(e)})).catch((function(e){return console.log(e)})),b.addEventListener("click",h.onModalWindowOpen)}}catch(e){n=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}();var B='<li class="mylibrary-img" role="presentation"><img src="'.concat(t(j),'"></img></li>');0==_.length&&((0,l.default)().myLibraryList.innerHTML=B,M.removeEventListener("click",h.onModalWindowOpen)),i("5xtVg"),i("aZhHc"),i("9VC5X")}();
//# sourceMappingURL=myLibrary.0bc4c157.js.map