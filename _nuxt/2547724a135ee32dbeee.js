(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{176:function(e,t,r){var n=r(179);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(27).default)("7a78b854",n,!0,{})},177:function(e,t,r){"use strict";var n=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=n},178:function(e,t,r){"use strict";var n=r(176);r.n(n).a},179:function(e,t,r){(e.exports=r(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},180:function(e,t,r){"use strict";var n,o=r(13),i=r(177),a=r(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),c=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},u=function(e){function t(){var t=e.call(this)||this;return t.version=3,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return l(t,e),Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+='<a href="/tutorial/'+r.url+'">'+r.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.setVersion();var t=this.$route.path,r=this.links.find(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new i.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return new i.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),r=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event"];break;case 2:e=["promise","export-json","v2-to-v3","data-type","initiate-database","event"];case 3:e=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},t.prototype.onNextBtnClick=function(){var e=this.getCurrentUrlIndex();if(e>=0){var t=s[e+1];t&&this.$router.push(this.relativeUrl+t.url)}},t=c([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(a.a),p=(r(178),r(12)),d=Object(p.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return r("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Sponsor Us &\n            "),r("br"),e._v("get your logo here\n        ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Be a backer &\n            "),r("br"),e._v("get your logo on our page\n        ")]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[e._v("edit")])],1):e._e()],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";t.a=d.exports},234:function(e,t,r){"use strict";r.r(t);var n,o=r(13),i=r(180),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EConnection%20in%20jsstore%20is%20object%20of%20class%20%3Ccode%3EInstance%3C/code%3E.%20All%20apis%20are%20called%20using%20connection.%3C/p%3E%0A%3Ch5%20id=%22syntax%22%3ESyntax%3C/h5%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch3%20id=%22withwebworker%22%3EWith%20Web%20Worker%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore%20worker%20path'));%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%20id=%22withoutwebworker%22%3EWithout%20web%20worker%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance();%0A%3C/code%3E%3C/pre%3E%0A%3Cdiv%20class=%22margin-top-30px%20top-border%20margin-bottom-20px%22%3E%3C/div%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22howtocreateconnectioninwebpack%22%3EHow%20to%20create%20connection%20in%20webpack%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3EInstall%20jsstore%20using%20npm%20or%20yarn%20-%20%3Ccode%3Enpm%20i%20jsstore%3C/code%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EInstall%20file-loader%20-%20%20%3Ccode%3Enpm%20i%20file-loader%20-D%3C/code%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3ECreate%20a%20file%20jsstore_con.js%20or%20jsstore_con.ts%20(for%20typescript).%20This%20file%20will%20be%20used%20to%20create%20the%20jsstore%20connection.%20You%20can%20choose%20any%20file%20name.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EInside%20the%20file%20jsstore_con.js,%20write%20below%20code%20-%20%3C/p%3E%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Econst%20getWorkerPath%20=%20()%20=&gt;%20%7B%0A%20%20%20%20//%20return%20dev%20build%20when%20env%20is%20development%0A%20%20%20%20if%20(process.env.NODE_ENV%20===%20'development')%20%7B%0A%20%20%20%20%20%20%20%20return%20require(%22file-loader?name=scripts/%5Bname%5D.%5Bhash%5D.js!jsstore/dist/jsstore.worker.js%22);%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%20//%20return%20prod%20build%20when%20env%20is%20production%0A%20%20%20%20%20%20%20%20return%20require(%22file-loader?name=scripts/%5Bname%5D.%5Bhash%5D.js!jsstore/dist/jsstore.worker.min.js%22);%0A%20%20%20%20%7D%0A%7D;%0A%0Aconst%20workerPath%20=%20getWorkerPath();%0Aexport%20const%20connection%20=%20new%20JsStore.Instance(new%20Worker(workerPath));%0A%3C/code%3E%3C/pre%3E%0A%3Col%20start=%225%22%3E%0A%3Cli%3EStep%204%20creates%20a%20connection%20and%20export%20the%20connection%20variable.%20You%20can%20import%20this%20connection%20variable%20to%20anywhere%20in%20your%20code.%3C/li%3E%0A%3C/ol%3E%0A%3Cp%3E%3Cbr%3EIf%20you%20are%20finding%20difficult%20to%20understand,%20please%20take%20a%20look%20at%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples%22%3Eexamples%3C/a%3E%20or%20our%20%3Ca%20href=%22https://medium.com/jsstore%22%3Emedium%20page%3C/a%3E%20%3C/p%3E%0A%3Cp%3E%3Cbr%3E%0A%3Cstrong%3EImportant%20points%20:-%3C/strong%3E%20%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EThe%20connection%20variable%20will%20be%20used%20to%20execute%20the%20further%20query.%3C/li%3E%0A%3Cli%3EA%20connection%20will%20handle%20one%20db%20at%20a%20time.%3C/li%3E%0A%3Cli%3EDo%20not%20create%20multiple%20connection%20for%20one%20db.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",t.title="Connection",t.keywords="database, connection, query, indexeddb, jsstore",t.description="How to create connection in jsstore",t}return a(t,e),t=s([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),c=r(12),u=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="connection.vue";t.default=u.exports}}]);