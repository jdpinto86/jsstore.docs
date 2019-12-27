(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{177:function(e,t,n){"use strict";var o=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=o},181:function(module,__webpack_exports__,__webpack_require__){"use strict";var nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_0__),_service_demo_db_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(187),_helpers_dom_helper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(177),_common_var__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32),__extends=(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),extendStatics,__decorate=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},codeInitTime,isJoin=!1,Example=function(_super){function Example(){var e=_super.call(this)||this;return e.isEditorLoading=!0,e.dbInfo=[],e.version=2,e.catchEvents(),e}return __extends(Example,_super),Example.prototype.mounted=function(){var e=this;this.version=this.getVersion(),JsStore.enableLog(),(new _service_demo_db_service__WEBPACK_IMPORTED_MODULE_1__.a).createDemoDataBase().then(function(t){e.isEditorLoading=!1,e.dbInfo=t,document.getElementById("btnExecute").removeAttribute("disabled")}).catch(function(e){console.log(e)})},Example.prototype.catchEvents=function(){_common_var__WEBPACK_IMPORTED_MODULE_3__.b.$on("version_change",this.onVersionChange)},Example.prototype.getVersion=function(){return this.$route.path.indexOf("v1")>=0?1:2},Example.prototype.onVersionChange=function(e){this.version=e;var t=this.$route.path,n=this.getRelativeUrl_()+t.split("/").reverse()[0];this.$router.push(n)},Example.prototype.getRelativeUrl_=function(){switch(this.version){case 1:return"/v1/example/";case 2:return"/example/"}},Example.prototype.head=function(){return{title:"Example - "+this.pageTitle,script:[{src:"/scripts/jsstore.js"}]}},Example.prototype.restoreDb=function(){this.isEditorLoading=!0,(new _service_demo_db_service__WEBPACK_IMPORTED_MODULE_1__.a).restoreDb(function(){setTimeout(function(){window.location.reload()},200)})},Example.prototype.execute=function(){var code=document.querySelector("#divCode pre").innerText;code.indexOf("Join")>=0&&(isJoin=!0),eval(code),codeInitTime=performance.now()},Object.defineProperty(Example.prototype,"exampleHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Example=__decorate([Object(nuxt_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({props:{innerHtml:String,pageTitle:String}})],Example),Example}(_common_var__WEBPACK_IMPORTED_MODULE_3__.a);function $(e){return document.querySelector(e)}function log(e){var t=(performance.now()-codeInitTime)/1e3;switch($("#timeTakenContainer").classList.remove("hidden"),$("#timeCount").innerText=t.toString(),JsStore.getType(e)){case JsStore.Data_Type.Array:var n=document.createElement("Table"),o=e.length,r="<tr>",a=[];for(var i in e[0])a.push(i),r+="<th>"+i+"</th>";r+="</tr>";for(var s=100/a.length,c=0;c<o;c++){for(var l="<tr>",p=0;p<a.length;p++)l+=isJoin?"<td style=width:"+s+"%>"+JSON.stringify(e[c][a[p]])+"</td>":"<td>"+e[c][a[p]]+"</td>";r+=l+="</tr>"}n.innerHTML=r,n.className="bordered responsive-table centered",(d=$("#divResult")).innerHTML="",d.appendChild(n),(u=$("#recordCount")).classList.remove("hidden"),u.innerText="No of Record : "+e.length;break;case JsStore.Data_Type.Object:e=JSON.stringify(e);case JsStore.Data_Type.String:case JsStore.Data_Type.Number:var u,d;(u=$("#recordCount")).classList.add("hidden"),(d=$("#divResult")).innerHTML=e;break;default:alert("invalid result")}}__webpack_exports__.a=Example;try{(new _helpers_dom_helper__WEBPACK_IMPORTED_MODULE_2__.a).window.log=log}catch(e){console.log(e)}},182:function(e,t,n){var o=n(185);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(27).default)("7d511d86",o,!0,{})},184:function(e,t,n){"use strict";var o=n(182);n.n(o).a},185:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n#divExampleCode{margin-top:50px;background-color:#f1f1f1;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)\n}\n#divExampleCode #divResult{margin-top:30px;min-height:200px;background-color:#fff;font-family:sans-serif\n}\n#divExampleCode .content-heading{margin-top:20px;font-size:25px\n}\n#divExampleCode p{font-size:1rem\n}\n#divExampleCode #btnExecute{float:right;background-color:#00c853\n}\n#divExampleCode #btnExecute i{vertical-align:bottom\n}\n#divExampleCode #divResult table{width:100%\n}\n#divExampleCode #divResult table tr th{text-align:center\n}\n#divExampleCode #divResult table tr td{word-break:break-all;text-align:center;border-bottom:1px solid;border-right:1px solid\n}\n#divDbInfo table tr td,#divDbInfo table tr th{text-align:center;width:50%;padding:10px 5px\n}\n#divDbInfo table tr td:first-child{text-decoration:underline;cursor:pointer\n}\n#divDbInfo table caption{background-color:#dd5959;color:#fff;padding:10px 0;margin-bottom:25px\n}\n#divCode{margin-top:30px;min-height:200px;font-size:14px\n}\npre{padding:10px 15px\n}\npre code{width:inherit;display:block;background-color:#fff;padding:10px;color:#000\n}",""])},186:function(e,t,n){"use strict";var o=n(181).a,r=(n(184),n(12)),a=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-xs-and-down margin-top-50px",attrs:{id:"divDbInfo",xs12:"",sm8:"",md2:"","offset-sm-2":""}},[n("table",[n("caption",[e._v("Current Database")]),e._v(" "),n("thead",[n("tr",[n("th",[e._v("Table")]),e._v(" "),n("th",[e._v("Records")])])]),e._v(" "),n("tbody",e._l(e.dbInfo,function(t){return n("tr",{key:t.name},[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.count))])])})),e._v(" "),n("tfoot",[n("tr",{on:{click:e.restoreDb}},[n("td",{attrs:{colspan:"2"}},[n("a",{staticClass:"margin-top-20px btn primary",attrs:{href:"#"}},[e._v("Restore Db")])])])])])]),e._v(" "),n("v-flex",{staticClass:"margin-left-15px",attrs:{id:"divExampleCode",xs12:"",sm12:"",md7:"",l8:"",xl6:""}},[n("div",[n("div",{staticClass:"content-heading"},[e._v("JsStore Code")]),e._v(" "),n("div",{attrs:{id:"divCode",contenteditable:""}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.exampleHtml)}})])]),e._v(" "),n("p",[n("span",[e._v("\n            You can also edit code and run it.\n        ")]),e._v(" "),n("button",{staticClass:"btn waves-effect right-align",attrs:{disabled:"",id:"btnExecute"},on:{click:e.execute}},[e._v("Run\n            "),n("i",{staticClass:"material-icons"},[e._v("")])])]),e._v(" "),n("div",[n("div",{staticClass:"margin-top-30px"},[n("span",{staticClass:"content-heading"},[e._v("Result :")]),e._v(" "),n("span",{staticClass:"hidden right",staticStyle:{"padding-top":"10px"},attrs:{id:"recordCount"}},[e._v("No of Records : ")])]),e._v(" "),n("p",{staticClass:"right-align hidden",attrs:{id:"timeTakenContainer"}},[e._v("\n            Time Taken :\n            "),n("span",{attrs:{id:"timeCount"}}),e._v(" sec.\n        ")]),e._v(" "),n("div",{attrs:{id:"divResult"}})])])],1),e._v(" "),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.isEditorLoading,callback:function(t){e.isEditorLoading=t},expression:"isEditorLoading"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Loading Editor")]),e._v(" "),n("v-card-text",[e._v("\n            Please wait - Example page is being configured.\n        ")])],1)],1)],1)],1)},[],!1,null,null,null);a.options.__file="example.vue";t.a=a.exports},187:function(e,t,n){"use strict";var o=n(65),r=n.n(o),a=function(){function e(){this.connection=new JsStore.Instance}return e.prototype.isDbExist=function(e){return JsStore.isDbExist(e)},e}();n.d(t,"a",function(){return c});var i,s=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="Demo",t.filesList=["Customers","Categories","Employees","OrderDetails","Orders","Products","Shippers","Suppliers"],t}return s(t,e),t.prototype.createDemoDataBase=function(){var e=this;return new Promise(function(t,n){var o=function(){e.getDbInfo(t)};e.isDbExist(e.dbName).then(function(t){t?e.connection.openDb(e.dbName,o):e.connection.createDb(e.getDbStructure_(),function(){e.insertDemoDbData(o)},function(e){n(e)})}).catch(function(e){n(e)})})},t.prototype.getDbInfo=function(e){var t=this,n=[],o=this.filesList.length,r=0;this.filesList.forEach(function(a){t.count_(a).then(function(t){n.push({count:t,name:a}),o===++r&&e(n)})})},t.prototype.insertDemoDbData=function(e){var t=this,n=0,o=function(){n++,console.log("inserted file:"+t.filesList[n-1]),n===t.filesList.length&&e()};this.filesList.forEach(function(e){var n="/demo_db/"+e+".json";r.a.get(n).then(function(n){switch(e){case t.filesList[3]:t.bulkInsert_(e,n.data).then(o);break;default:t.insert_(e,n.data).then(o)}})})},t.prototype.restoreDb=function(e){this.connection.openDb(this.dbName).dropDb(e)},t.prototype.count_=function(e){return this.connection.count({From:e})},t.prototype.insert_=function(e,t){return this.connection.insert({Into:e,Values:t})},t.prototype.bulkInsert_=function(e,t){return this.connection.bulkInsert({Into:e,Values:t})},t.prototype.getDbStructure_=function(){return{Name:this.dbName,Tables:[{Name:"Customers",Columns:[{Name:"customerId",PrimaryKey:!0,AutoIncrement:!0},{Name:"customerName",NotNull:!0,DataType:"string"},{Name:"contactName",NotNull:!0,DataType:"string"},{Name:"address",NotNull:!0,DataType:"string"},{Name:"city",NotNull:!0,DataType:"string"},{Name:"postalCode",DataType:"string"},{Name:"country",NotNull:!0,DataType:"string"}]},{Name:"Categories",Columns:[{Name:"categoryId",PrimaryKey:!0,AutoIncrement:!0},{Name:"categoryName",NotNull:!0,DataType:"string"},{Name:"description",NotNull:!0,DataType:"string"}]},{Name:"Employees",Columns:[{Name:"employeeId",PrimaryKey:!0,AutoIncrement:!0},{Name:"lastName",NotNull:!0,DataType:"string"},{Name:"birthDate",NotNull:!0,DataType:"string"},{Name:"photo",NotNull:!0,DataType:"string"},{Name:"notes",DataType:"string"}]},{Name:"OrderDetails",Columns:[{Name:"orderDetailId",PrimaryKey:!0,AutoIncrement:!0},{Name:"orderId",NotNull:!0,DataType:"number"},{Name:"productId",NotNull:!0,DataType:"number"},{Name:"quantity",NotNull:!0,DataType:"number"}]},{Name:"Orders",Columns:[{Name:"orderId",PrimaryKey:!0},{Name:"customerId",NotNull:!0,DataType:"number"},{Name:"employeeId",NotNull:!0,DataType:"number"},{Name:"orderDate",NotNull:!0,DataType:"string"},{Name:"shipperId",NotNull:!0,DataType:"number"}]},{Name:"Products",Columns:[{Name:"productId",PrimaryKey:!0,AutoIncrement:!0},{Name:"productName",NotNull:!0,DataType:"string"},{Name:"supplierId",NotNull:!0,DataType:"number"},{Name:"categoryId",NotNull:!0,DataType:"number"},{Name:"unit",NotNull:!0,DataType:"string"},{Name:"price",NotNull:!0,DataType:"number"}]},{Name:"Shippers",Columns:[{Name:"shipperId",PrimaryKey:!0,AutoIncrement:!0},{Name:"shipperName",NotNull:!0,DataType:"string"},{Name:"phone",NotNull:!0,DataType:"string"}]},{Name:"Suppliers",Columns:[{Name:"supplierId",PrimaryKey:!0,AutoIncrement:!0},{Name:"supplierName",NotNull:!0,DataType:"string"},{Name:"contactName",NotNull:!0,DataType:"string"},{Name:"address",NotNull:!0,DataType:"string"},{Name:"city",NotNull:!0,DataType:"string"},{Name:"postalCode",NotNull:!0,DataType:"string"},{Name:"country",NotNull:!0,DataType:"string"},{Name:"phone",NotNull:!0,DataType:"string"}]}]}},t}(a)},279:function(e,t,n){"use strict";n.r(t);var o,r=n(13),a=n(186),i=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.exampleContent="%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance();%0AConnection.openDb(%22Demo%22).%0Acount(%7B%0A%20%20%20%20From:%20%22Customers%22,%0A%20%20%20%20OnSuccess:function%20(results)%7B%0A%20%20%20%20%20%20%20%20log('Count%20:'+results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:function%20(error)%20%7B%0A%20%20%20%20%20%20%20%20log(error);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E",t.title="Count",t}return i(t,e),t=s([Object(r.Component)({components:{Example:a.a}})],t)}(r.Vue),l=n(12),p=Object(l.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("Example",{attrs:{innerHtml:this.exampleContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="count.vue";t.default=p.exports}}]);