(function(e){function t(t){for(var n,r,c=t[0],l=t[1],u=t[2],s=0,d=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({"bebidas~lanche~pizza":"bebidas~lanche~pizza",bebidas:"bebidas",lanche:"lanche",pizza:"pizza",cardapio:"cardapio",home:"home",mapa:"mapa"}[e]||e)+"."+{"bebidas~lanche~pizza":"c214b9c9",bebidas:"78af898b",lanche:"c7305d1a",pizza:"9fcc5551",cardapio:"fe2c2c7b","chunk-564e0dca":"3272fb26",home:"da1bd648",mapa:"ad19335d"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"bebidas~lanche~pizza":1,"chunk-564e0dca":1,home:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({"bebidas~lanche~pizza":"bebidas~lanche~pizza",bebidas:"bebidas",lanche:"lanche",pizza:"pizza",cardapio:"cardapio",home:"home",mapa:"mapa"}[e]||e)+"."+{"bebidas~lanche~pizza":"be0906f2",bebidas:"31d6cfe0",lanche:"31d6cfe0",pizza:"31d6cfe0",cardapio:"31d6cfe0","chunk-564e0dca":"c5862959",home:"4e8c84c9",mapa:"31d6cfe0"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===n||s===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===n||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2f2f":function(e,t,a){e.exports=a.p+"img/logo-cia.1251fd4f.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("LigarBotao"),a("router-view"),a("Rodape")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{color:"#F44336",src:a("2f2f"),flat:""},scopedSlots:e._u([{key:"img",fn:function(t){var a=t.props;return[n("v-img",e._b({attrs:{gradient:"to top right, rgba(19,84,122,.2), rgba(128,208,199,.4)"}},"v-img",a,!1))]}},{key:"extension",fn:function(){},proxy:!0}])}),n("v-tabs",{attrs:{grow:"",color:"#B71C1C",dark:""}},[n("v-tabs-slider",{attrs:{color:"#FFEE58"}}),e._l(e.items,(function(t){return n("v-tab",{key:t.route,attrs:{color:"#FFEE58",to:t.route}},[n("strong",[e._v(e._s(t.name))])])}))],2)],1)},c=[],l={data:function(){return{items:[{name:"Home",route:"home"},{name:"Cardárpio",route:"cardapio"},{name:"Como chegar",route:"comoChegar"}]}}},u=l,s=a("2877"),d=a("6544"),p=a.n(d),f=a("adda"),h=a("71a3"),b=a("fe57"),m=a("9a96"),v=a("71d9"),g=Object(s["a"])(u,i,c,!1,null,null,null),z=g.exports;p()(g,{VImg:f["a"],VTab:h["a"],VTabs:b["a"],VTabsSlider:m["a"],VToolbar:v["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",{staticStyle:{bottom:"100px"},attrs:{fixed:"",fab:"",right:"",bottom:"",color:"#4CAF50",href:"https://api.whatsapp.com/send?phone=5555996860327&text=Ol%C3%A1!%20gostaria%20de%20fazer%20um%20pedido",target:"_blank"}},[a("v-icon",[e._v("mdi-whatsapp")])],1),a("v-btn",{attrs:{fixed:"",fab:"",right:"",bottom:"",color:"#2196F3"}},[a("address",[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"tel:5533121681"}},[a("v-icon",[e._v("mdi-phone")])],1)])])],1)},_=[],w=a("8336"),x=a("132d"),C={},k=Object(s["a"])(C,y,_,!1,null,null,null),E=k.exports;p()(k,{VBtn:w["a"],VIcon:x["a"]});var O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{bottom:"",padless:"",width:"100%",dark:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:"",color:"#B71C1C"}},[a("v-card-text",{staticClass:"py-2 red--text text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("Cia das pizzas")]),a("br"),a("small",[e._v("Desenvolvido por Thalles Aguiar")])])],1)],1)},j=[],P={data:function(){return{icons:["mdi-facebook","mdi-google-maps","mdi-instagram"]}}},T=P,S=a("b0af"),F=a("99d9"),V=a("553a"),A=Object(s["a"])(T,O,j,!1,null,null,null),B=A.exports;p()(A,{VCard:S["a"],VCardText:F["a"],VFooter:V["a"]});var N={components:{Navigation:z,LigarBotao:E,Rodape:B}},L=N,M=(a("5c0b"),Object(s["a"])(L,r,o,!1,null,null,null)),$=M.exports,D=(a("d3b7"),a("8c4f"));n["a"].use(D["a"]);var H=[{path:"/",name:"Home",component:function(){return a.e("home").then(a.bind(null,"bb51"))}},{path:"/home",name:"Home",component:function(){return a.e("home").then(a.bind(null,"bb51"))}},{path:"/cardapio",name:"Cardapio",component:function(){return a.e("cardapio").then(a.bind(null,"ce03"))},children:[{path:"/pizza",name:"Pizza",component:function(){return Promise.all([a.e("bebidas~lanche~pizza"),a.e("pizza")]).then(a.bind(null,"8664"))}},{path:"/lanche",name:"Lanche",component:function(){return Promise.all([a.e("bebidas~lanche~pizza"),a.e("lanche")]).then(a.bind(null,"92f5"))}},{path:"/bebida",name:"Bebida",component:function(){return Promise.all([a.e("bebidas~lanche~pizza"),a.e("bebidas")]).then(a.bind(null,"6439"))}}]},{path:"/comoChegar",name:"Mapa",component:function(){return a.e("mapa").then(a.bind(null,"8a24"))}},{path:"/pageNotFound",alias:"*",name:"NotFound",component:function(){return a.e("chunk-564e0dca").then(a.bind(null,"dce0"))}}],I=new D["a"]({mode:"history",base:"/",routes:H}),q=I,J=a("f309");n["a"].use(J["a"]);var R=new J["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:q,vuetify:R,render:function(e){return e($)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("7694"),r=a.n(n);r.a},7694:function(e,t,a){}});
//# sourceMappingURL=app.bb31a15d.js.map