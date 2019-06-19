(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{176:function(t,e,r){var n=r(178);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(27).default)("7a78b854",n,!0,{})},177:function(t,e,r){"use strict";var n=r(176);r.n(n).a},178:function(t,e,r){(t.exports=r(26)(!1)).push([t.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},179:function(t,e,r){"use strict";var n,o=r(13),i=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(t){try{var e=this.createElement("div");return e.innerHTML=t,e.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}(),a=r(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=function(t){function e(){var e=t.call(this)||this;return e.version=3,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return l(e,t),Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,e="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(t.searchValue)>=0&&(e+='<a href="/tutorial/'+r.url+'">'+r.text+"</a>")}),this.searchResult=e},e.prototype.mounted=function(){var t=this;this.setVersion();var e=this.$route.path,r=this.links.find(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.registerNextBtnEvents=function(){var t=new i(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords}]}},e.prototype.getVersion=function(){return new i("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type"];break;case 2:t=["promise","export-json","v2-to-v3","data-type"];case 3:t=["promise","export-json","v1-to-v2"]}return this.allLinks_.filter(function(e){return t.findIndex(function(t){return t===e.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},e.prototype.onNextBtnClick=function(){var t=this.getCurrentUrlIndex();if(t>=0){var e=s[t+1];e&&this.$router.push(this.relativeUrl+e.url)}},e=u([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String}})],e)}(a.a),p=(r(177),r(12)),d=Object(p.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,function(e){return r("li",{key:e.text,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+e.url}},[t._v(t._s(e.text))])])})],2)]),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Sponsor Us &\n            "),r("br"),t._v("get your logo here\n        ")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Be a backer &\n            "),r("br"),t._v("get your logo on our page\n        ")]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[t._v("edit")])],1):t._e()],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";e.a=d.exports},455:function(t,e,r){"use strict";r.r(e);var n,o=r(13),i=r(179),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EIndexedDB%20is%20a%20pure%20transactional%20database%20which%20means%20all%20the%20query%20is%20executed%20using%20the%20transaction.%3C/p%3E%0A%3Cp%3EJsStore%20provides%20-%20'transaction'%20api%20for%20executing%20transaction.%20The%20apis%20which%20are%20available%20inside%20the%20transaction%20are%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eselect%3C/li%3E%0A%3Cli%3Ecount%3C/li%3E%0A%3Cli%3Eupdate%3C/li%3E%0A%3Cli%3Eremove%3C/li%3E%0A%3Cli%3Einsert%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EThere%20are%20some%20extra%20api%20available%20inside%20the%20transaction%20to%20make%20the%20transaction%20more%20useful.%20These%20are%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Estart%20-%20start%20the%20transaction.%3C/li%3E%0A%3Cli%3EsetResult%20-%20setResult%20accepts%20key%20and%20value.%20setResult%20is%20used%20to%20save%20the%20value%20which%20will%20be%20returned%20when%20transaction%20completes.%20The%20transaction%20returns%20an%20object,%20the%20object%20is%20in%20form%20of%20key%20and%20value%20which%20is%20set%20using%20setResult.%3C/li%3E%0A%3Cli%3Eabort%20-%20abort%20is%20used%20to%20abort%20the%20transaction.%20%3C/li%3E%0A%3Cli%3EgetResult%20-%20getResult%20is%20used%20to%20get%20the%20value%20setted%20by%20setResult.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ALet's%20see%20a%20example%20-%20so%20consider%20a%20situation%20where%20a%20customer%20buy%20some%20products%20and%20customer%20is%20not%20into%20the%20db.%3C/p%3E%0A%3Cp%3ESo%20the%20steps%20will%20be%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3EAdd%20new%20customer%20-%20so%20insert%20in%20the%20table%20-%20%22Customer%22%3C/li%3E%0A%3Cli%3Eadd%20new%20order%20-%20insert%20new%20order%20for%20the%20above%20customer%3C/li%3E%0A%3Cli%3EInsert%20OrderDetails%20%3C/li%3E%0A%3Cli%3EUpdate%20products%20-%20reduce%20the%20quantity%20of%20product%20available.%20%3C/li%3E%0A%3Cli%3ECalculate%20total%20price%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Evar%20result%20=%20await%20connection.transaction(%7B%0A%20%20%20%20tables:%20%5B'customers',%20'orders',%20'products',%20'orderDetails'%5D,%20//%20list%20of%20tables%20which%20will%20be%20used%20in%20transaction%0A%20%20%20%20//%20the%20logic%20callback%20is%20not%20a%20closure%20i.e%20it%20wont%20have%20access%20to%20outer%20scope%20or%20global%20scope.%0A%20%20%20%20//%20basically%20function%20should%20be%20independent%0A%20%20%20%20logic:%20async%20function(data)%20%7B%20%20//%20async%20is%20used%20to%20make%20code%20more%20clear%0A%20%20%20%20%20%20%20%20start();%20//%20start%20the%20transaction%0A%20%20%20%20%20%20%20%20const%20insertedCustomers%20=%20await%20insert(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20into:%20'customers',%0A%20%20%20%20%20%20%20%20%20%20%20%20values:%20%5Bdata.customer%5D,%0A%20%20%20%20%20%20%20%20%20%20%20%20return:%20true%0A%20%20%20%20%20%20%20%20%7D);%0A%0A%20%20%20%20%20%20%20%20const%20newCustomer%20=%20insertedCustomers%5B0%5D;%0A%0A%20%20%20%20%20%20%20%20//%20insert%20order%0A%0A%20%20%20%20%20%20%20%20const%20order%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20customerId:%20newCustomer.id,%0A%20%20%20%20%20%20%20%20%20%20%20%20orderDate:%20new%20Date(),%0A%20%20%20%20%20%20%20%20%7D;%0A%0A%20%20%20%20%20%20%20%20const%20insertedOrders%20=%20await%20insert(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20into:%20'orders',%0A%20%20%20%20%20%20%20%20%20%20%20%20values:%20%5Border%5D,%0A%20%20%20%20%20%20%20%20%20%20%20%20return:%20true%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20const%20newOrder%20=%20insertedOrders%5B0%5D;%0A%0A%20%20%20%20%20%20%20%20//%20insert%20orderDetail%0A%0A%20%20%20%20%20%20%20%20const%20orderDetails%20=%20data.orderDetails.map((value)%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20value.orderId%20=%20newOrder.orderId%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20value;%0A%20%20%20%20%20%20%20%20%7D);%0A%0A%20%20%20%20%20%20%20%20const%20insertedOrderDetails%20=%20await%20insert(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20into:%20'orderDetails',%0A%20%20%20%20%20%20%20%20%20%20%20%20values:%20orderDetails,%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20//%20update%20the%20product%20inventory%20and%20evaluate%20price%0A%0A%20%20%20%20%20%20%20%20setResult('totalPrice',%200);%20//initiating%20totalPrice%0A%0A%20%20%20%20%20%20%20%20data.orderDetails.forEach((orderDetail,%20index)%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20where%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20productId:%20orderDetail.productId%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20updateProduct%20=%20async%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20productUpdated%20=%20await%20update(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20in:%20'products',%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20where:%20where,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20set:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20unit:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'-':%20orderDetail.quantity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(productUpdated%20&lt;%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20abort(%22No%20orderDetails%20inserted%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D;%0A%20%20%20%20%20%20%20%20%20%20%20%20updateProduct();%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20products%20=%20await%20select(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20from:%20'products',%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20where:%20where%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20product%20=%20results%5B0%5D;%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20price%20=%20product.price%20*%20orderDetail.quantity%0A%20%20%20%20%20%20%20%20%20%20%20%20setResult('totalPrice',%20getResult('totalPrice')%20+%20price);%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D,%0A%20%20%20%20data:%20%7B%20//%20the%20transaction%20logic%20will%20be%20called%20with%20supplying%20data%0A%20%20%20%20%20%20%20%20customer:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20customerName:%20'ujjwal%20gupta',%0A%20%20%20%20%20%20%20%20%20%20%20%20address:%20'bhubaneswar%20odisha',%0A%20%20%20%20%20%20%20%20%20%20%20%20city:%20'bhubaneswar',%0A%20%20%20%20%20%20%20%20%20%20%20%20postalCode:%20'asdf',%0A%20%20%20%20%20%20%20%20%20%20%20%20country:%20'india',%0A%20%20%20%20%20%20%20%20%20%20%20%20email:%20'sdfg@m.com'%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20orderDetails:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20productId:%201,%0A%20%20%20%20%20%20%20%20%20%20%20%20quantity:%202%0A%20%20%20%20%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20productId:%202,%0A%20%20%20%20%20%20%20%20%20%20%20%20quantity:%204%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D);%0Aconst%20totalPrice%20=%20result.totalPrice;%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EFew%20important%20things%20to%20make%20sure%20you%20are%20using%20transaction%20in%20right%20way%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3ETransaction%20should%20be%20light%20weight.%20Dont%20write%20too%20many%20or%20heavy%20logics%20inside%20it.%20The%20reason%20is%20%20-%20the%20indexeddb%20transaction%20is%20asyc%20and%20automatically%20commited%20and%20so%20jsstore.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EThere%20may%20be%20situation%20where%20you%20have%20a%20heavy%20logic,%20in%20that%20case%20-%20calculate%20the%20result%20and%20put%20it%20in%20data%20option.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",e.title="Transaction",e.keywords="transaction, api, query, indexeddb, jsstore",e}return a(e,t),e=s([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),u=r(12),c=Object(u.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="transaction.vue";e.default=c.exports}}]);