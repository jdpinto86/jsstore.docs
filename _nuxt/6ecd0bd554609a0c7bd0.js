(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{177:function(t,e,n){"use strict";var r=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(t){try{var e=this.createElement("div");return e.innerHTML=t,e.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=r},183:function(t,e,n){var r=n(189);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(27).default)("1d4e252a",r,!0,{})},188:function(t,e,n){"use strict";var r=n(183);n.n(r).a},189:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"\niframe{width:100%;height:100%;border:none\n}\n#footer,.toolbar{display:none\n}\n.container{padding:0;top:0;position:absolute\n}\n.application--wrap{overflow:hidden\n}",""])},190:function(t,e,n){"use strict";var r,o=n(13),i=n(177),c=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},p=function(t){function e(){var e=t.call(this)||this;return e.iframeUrl="https://ujjwalguptaofficial.github.io/idbstudio",e.version=2,e}return c(e,t),e.prototype.head=function(){return{title:"Example - "+this.pageTitle}},e.prototype.mounted=function(){var t=new i.a("iframe");t.css("height",t.innerHeight+"px"),t.attr("src",this.url)},Object.defineProperty(e.prototype,"url",{get:function(){var t=this.iframeUrl,e=new i.a,n={query:encodeURI(e.innerTextFromHtml(decodeURI(this.innerHtml))),db:"Demo"};return t+="/?"+Object.keys(n).map(function(t){return t+"="+n[t]}).join("&")},enumerable:!0,configurable:!0}),e=u([Object(o.Component)({props:{innerHtml:String,pageTitle:String}})],e)}(o.Vue),l=(n(188),n(12)),a=Object(l.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("iframe")])],1)},[],!1,null,null,null);a.options.__file="idbstudio_appender.vue";e.a=a.exports},341:function(t,e,n){"use strict";n.r(e);var r,o=n(13),i=n(190),c=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.exampleContent="%3Cpre%3E%3Ccode%3Eselect(%7B%0A%20%20%20%20from:%20%22Customers%22,%0A%20%20%20%20distinct:true%0A%7D);%0A%3C/code%3E%3C/pre%3E",e.title="Distinct",e}return c(e,t),e=u([Object(o.Component)({components:{IdbStudioAppender:i.a}})],e)}(o.Vue),l=n(12),a=Object(l.a)(p,function(){var t=this.$createElement;return(this._self._c||t)("IdbStudioAppender",{attrs:{innerHtml:this.exampleContent,pageTitle:this.title}})},[],!1,null,null,null);a.options.__file="distinct.vue";e.default=a.exports}}]);