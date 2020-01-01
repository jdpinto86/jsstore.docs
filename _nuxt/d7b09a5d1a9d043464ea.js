(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{176:function(t,e,r){var n=r(179);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(27).default)("478f6032",n,!0,{})},177:function(t,e,r){"use strict";var n=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(t){try{var e=this.createElement("div");return e.innerHTML=t,e.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=n},178:function(t,e,r){"use strict";var n=r(176);r.n(n).a},179:function(t,e,r){(t.exports=r(26)(!1)).push([t.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100px;height:auto\n}\n.ad-container-text{font-size:30px;text-align:center\n}",""])},180:function(t,e,r){"use strict";var n,o=r(13),i=r(177),a=r(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case (beta)",url:"case"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},u=function(t){function e(){var e=t.call(this)||this;return e.version=3,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.jsstoreText=["Component based framework for nodejs"],e.adIndex=-1,e.catchEvents(),e}return l(e,t),Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,e="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(t.searchValue)>=0&&(e+='<a href="/tutorial/'+r.url+'">'+r.text+"</a>")}),this.searchResult=e},e.prototype.mounted=function(){var t=this;this.showAds(),this.setVersion();var e=this.$route.path,r=this.links.find(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.registerNextBtnEvents=function(){var t=new i.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return new i.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:t=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:t=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter(function(e){return t.findIndex(function(t){return t===e.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},e.prototype.onNextBtnClick=function(){var t=this.getCurrentUrlIndex();if(t>=0){var e=s[t+1];e&&this.$router.push(this.relativeUrl+e.url)}},e.prototype.showAds=function(){var t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t},e=c([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(a.a),p=(r(178),r(12)),d=Object(p.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,function(e){return r("li",{key:e.text,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+e.url}},[t._v(t._s(e.text))])])})],2)]),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Sponsor Us &\n            "),r("br"),t._v("get your logo here\n        ")]),t._v(" "),r("br"),t._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Be a backer &\n            "),r("br"),t._v("get your logo on our page\n        ")]),t._v(" "),r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("div",{staticClass:"ad-container-text"},[t._v("FortJs")]),t._v(" "),r("img",{staticClass:"ad-image",attrs:{src:"http://fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[t._v("edit")])],1):t._e(),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"codefund"}}),t._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";e.a=d.exports},374:function(t,e,r){"use strict";r.r(e);var n,o=r(13),i=r(180),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EIn%20this%20get%20started%20tutorial%20we%20will%20learn%20how%20to%20do%20crud%20operation%20in%20jsstore.%3C/p%3E%0A%3Ch4%20id=%22installation%22%3EInstallation%3C/h4%3E%0A%3Cp%3EThe%20simplest%20way%20to%20install%20jsstore%20is%20by%20using%20cdn.%20But%20if%20you%20want%20to%20jsstore%20to%20be%20executed%20inside%20web%20worker%20-%20you%20need%20to%20download%20the%20script%20directly%20and%20use%20it.%20Because%20browser%20does%20not%20allow%20cdn%20scripts%20in%20worker.%3C/p%3E%0A%3Cp%3EYou%20can%20download%20the%20script%20from%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore%22%20title=%22jsstore%20github%20link%22%3Egithub%3C/a%3E%20or%20from%20%3Ca%20href=%22https://www.npmjs.com/package/jsstore%22%20title=%22jsstore%20npm%20link%22%3Enpm%3C/a%3E%3C/p%3E%0A%3Cp%3EIf%20you%20dont%20know%20what%20is%20Web%20Worker,%20please%20visit%20%3Ca%20href=%22https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers%22%3Emozilla%20doc%3C/a%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%3E&lt;!DOCTYPE%20html&gt;%0A&lt;html%20lang=%22en%22&gt;%0A&lt;head&gt;%0A%20%20%20%20&lt;meta%20charset=%22UTF-8%22&gt;%0A%20%20%20%20&lt;meta%20name=%22viewport%22%20content=%22width=device-width,%20initial-scale=1.0%22&gt;%0A%20%20%20%20&lt;meta%20http-equiv=%22X-UA-Compatible%22%20content=%22ie=edge%22&gt;%0A%20%20%20%20&lt;title&gt;Crud%20Demo%20using%20jsstore&lt;/title&gt;%0A%20%20%20%20&lt;script%20src=%22jsstore.min.js%22&gt;&lt;/script&gt;%0A&lt;/head&gt;%0A&lt;body&gt;%0A&lt;h4&gt;We%20have%20included%20JsStore%20in%20this%20html%20code.&lt;/h4&gt;%0A&lt;/body&gt;%0A&lt;/html&gt;%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EFor%20more%20about%20installation%20check%20out%20the%20%3Ca%20href=%22/tutorial/installation%22%3Einstallation%3C/a%3E%20page%3C/p%3E%0A%3Ch4%20id=%22creatingdatabase%22%3ECreating%20Database%3C/h4%3E%0A%3Cp%3EJsStore%20follows%20SQL%20approach%20to%20create%20database%20-%20A%20database%20is%20consist%20of%20tables%20and%20a%20table%20is%20consist%20of%20columns.%3C/p%3E%0A%3Cp%3ELets%20see%20how%20to%20create%20a%20database%20schema%20in%20JsStore.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20dbName%20='JsStore_Demo';%0Afunction%20getDbSchema()%20%7B%0A%20%20var%20tblProduct%20=%20%7B%0A%20%20%20%20name:%20'Product',%0A%20%20%20%20columns:%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20name:%20'Id',%0A%20%20%20%20%20%20%20%20%20%20primaryKey:%20true,%0A%20%20%20%20%20%20%20%20%20%20autoIncrement:%20true%0A%20%20%20%20%20%20%7D,%20%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20name:%20'ItemName',%0A%20%20%20%20%20%20%20%20%20%20notNull:%20true,%0A%20%20%20%20%20%20%20%20%20%20dataType:%20JsStore.DATA_TYPE.String%0A%20%20%20%20%20%20%7D,%20%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20name:%20'Price',%0A%20%20%20%20%20%20%20%20%20%20notNull:%20true,%0A%20%20%20%20%20%20%20%20%20%20dataType:%20JsStore.DATA_TYPE.Number%0A%20%20%20%20%20%20%7D,%20%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20name:%20'Quantity',%0A%20%20%20%20%20%20%20%20%20%20notNull:%20true,%0A%20%20%20%20%20%20%20%20%20%20dataType:%20JsStore.DATA_TYPE.Number%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D;%0A%20%20var%20db%20=%20%7B%0A%20%20%20%20%20%20name:%20dbName,%0A%20%20%20%20%20%20tables:%20%5BtblProduct%5D%0A%20%20%7D%0A%20%20return%20db;%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EAs%20written%20in%20the%20code,%20you%20can%20define%20the%20constraints%20like%20autoincrement,%20datatype,%20default,%20notnull%20as%20you%20can%20do%20in%20SQL.%3C/p%3E%0A%3Cp%3ENow%20we%20need%20to%20create%20the%20database%20in%20indexeddb.%20So,%20lets%20create%20the%20database.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore.worker.js'));%0Afunction%20initJsStore()%20%7B%0A%20%20%20%20connection.isDbExist(DbName).then(function(isExist)%20%7B%0A%20%20%20%20%20%20%20%20if%20(isExist)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20connection.openDb(DbName);%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20database%20=%20getDbSchema();%0A%20%20%20%20%20%20%20%20%20%20%20%20connection.createDb(database);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D).catch(function(err)%20%7B%0A%20%20%20%20%20%20%20%20console.error(err);%0A%20%20%20%20%7D)%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ELine%201%20-%20Storing%20the%20JsStore%20connection%20instance%20in%20a%20variable%20'connection'.%3C/li%3E%0A%3Cli%3ELine%202%20-%20Declared%20a%20function%20initJsStore%20which%20will%20initiate%20the%20jsstore.%20Basically%20this%20will%20create%20database%20if%20it%20does%20not%20exist%20or%20open%20if%20it%20exist.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20The%20connection%20object%20will%20be%20used%20to%20execute%20the%20further%20query.%20So%20we%20dont%20need%20to%20initiate%20it%20multiple%20times.%3C/p%3E%0A%3Ch4%20id=%22insertingdata%22%3EInserting%20data%3C/h4%3E%0A%3Cp%3EJsStore%20provides%20insert%20API%20for%20inserting%20data.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20value%20=%20%7B%0A%20%20%20%20itemName:%20'Blue%20Jeans',%0A%20%20%20%20price:%202000,%0A%20%20%20%20quantity:%201000%0A%7D%0A%0A//since%20Id%20is%20autoincrement%20column,%20so%20the%20value%20will%20be%20automatically%20generated.%0Aconnection.insert(%7B%0A%20%20%20%20into:%20'Product',%0A%20%20%20%20values:%20%5Bvalue%5D%0A%7D).then(function(rowsInserted)%20%7B%0A%20%20%20%20if%20(rowsInserted%20&gt;%200)%20%7B%0A%20%20%20%20%20%20%20%20alert('successfully%20added');%0A%20%20%20%20%7D%0A%7D).catch(function(err)%20%7B%0A%20%20%20%20console.log(err);%0A%20%20%20%20alert(err.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22readdata%22%3ERead%20data%3C/h4%3E%0A%3Cp%3EJsStore%20provides%20select%20API%20for%20reading%20data.%20Lets%20say%20I%20want%20to%20retrieve%20the%20record%20which%20contains%20Id%205.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'Product',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20id:%205%0A%20%20%20%20%7D%0A%7D).then(function(results)%20%7B%0A%20%20%20%20//%20results%20will%20be%20array%20of%20objects%0A%20%20%20%20alert(results.length%20+%20'record%20found');%0A%7D).catch(function(err)%20%7B%0A%20%20%20%20console.log(err);%0A%20%20%20%20alert(err.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20also%20perform%20operations%20like-%20%22IN%22,%20%22LIKE%22,%20%22BETWEEN%22,%20%22LIMIT%22%20etc.%3C/p%3E%0A%3Ch4%20id=%22updatingdata%22%3EUpdating%20data%3C/h4%3E%0A%3Cp%3ELets%20say%20I%20want%20to%20update%20the%20product%20Quantity%20to%202000%20which%20contains%20the%20item%20name%20-%20'black'.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.update(%7B%20%0A%20%20%20%20in:%20'Product',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20itemName:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20like:%20'%25black%25'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D,%0A%20%20%20%20set:%20%7B%0A%20%20%20%20%20%20%20%20quantity:%202000%0A%20%20%20%20%7D%0A%7D).then(function(rowsUpdated)%20%7B%0A%20%20%20%20alert(rowsUpdated%20+%20'%20rows%20updated');%0A%7D).catch(function(err)%20%7B%0A%20%20%20%20console.log(err);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22removedata%22%3ERemove%20data%3C/h4%3E%0A%3Cp%3ELets%20say%20I%20want%20to%20delete%20the%20product%20which%20contains%20the%20id%20-%2010.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.remove(%7B%0A%20%20%20%20from:%20'Product',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20id:%2010%0A%20%20%20%20%7D%0A%7D).then(function(rowsDeleted)%20%7B%0A%20%20%20%20alert(rowsDeleted%20+%20'%20record%20deleted');%0A%7D).catch(function(err)%20%7B%0A%20%20%20%20console.log(err);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWe%20hope%20-%20you%20have%20understood%20the%20above%20article.%20Now%20lets%20make%20something%20awesome.%3C/p%3E%0A%3Ch4%20id=%22checkitoutsomeexamplesformoreunderstanding%22%3E*%20Check%20it%20out%20some%20examples%20for%20more%20understanding%20-%3C/h4%3E%0A%3Cul%3E%0A%3Cli%3E%3Ca%20href=%22http://jsfiddle.net/ujjwalguptaofficial/2ewpy6t4/6/%22%3EJsFiddle%20Demo%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/Simple%2520Example%22%3ECrud%20implementation%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/TypeScript%2520Example%22%3EUsing%20jsstore%20in%20typescript%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/webpack%22%3EBuilding%20an%20indexeddb%20app%20with%20webpack%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/react%22%3EUsing%20react%20and%20webpack%20to%20store%20data%20in%20indexeddb%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/angular%22%3EUsing%20jsstore%20in%20angular%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/electron%22%3EStoring%20data%20in%20an%20electron%20app%20using%20JsStore%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/without%2520web%2520worker%22%3EJsStore%20without%20web%20worker%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cstyle%3E%0A%20%20%20%20iframe%20%7B%0A%20%20%20%20%20%20%20%20height:%20300px;%0A%20%20%20%20%7D%0A%3C/style%3E",e.title="Get Started",e.keywords="jsstore, get started, tutorial, indexeddb, sql",e}return a(e,t),e=s([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),c=r(12),u=Object(c.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="get-started.vue";e.default=u.exports}}]);