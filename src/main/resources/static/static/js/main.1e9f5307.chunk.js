(this["webpackJsonpdwcc-web"]=this["webpackJsonpdwcc-web"]||[]).push([[0],{436:function(e,t,n){e.exports=n.p+"static/media/logo.2305a658.png"},482:function(e,t,n){e.exports=n(854)},487:function(e,t,n){},488:function(e,t,n){},854:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),o=n.n(c),i=(n(487),n(488),n(306)),l=n(391),s=n.n(l),u="1063208989870-pimth23kd2koib4ej9k8uffquah6dm54.apps.googleusercontent.com",m="hasirudala.in",d=function(e){return fetch("/api/checkAuthorization",{headers:{Authorization:"Bearer ".concat(e)}})},f=function(e){if(401===e.status||403===e.status)throw Error("You do not have permissions to access this application. Contact your organisation's administrator");if(!e.ok)throw Error("Unable to validate credentials");return e};var p=r.a.createContext({isSignedIn:!1,signIn:function(){},signOut:function(){},googleAuthApi:{}}),h=n(181),g=n(96),b=function(){return Promise.resolve()},E=n(392),O=n(40),v=n.n(O),j=n(865),y=n(15),A=n(108),w=n(109),k=n(91),P=function(e,t){var n={};if(!v.a.isEmpty(e)){var a=e.page,r=e.perPage;n.page=a-1,n.size=r}return v.a.isEmpty(t)||(t instanceof Array?n.sort=t.map((function(e){return v.a.join(v.a.values(e),",")})):t instanceof Object?n.sort=v.a.join(v.a.values(t),","):n.sort=t),Object(k.stringify)(n)},C=function(){function e(){Object(A.a)(this,e)}return Object(w.a)(e,null,[{key:"getPath",value:function(e){if(v.a.isEmpty(e))return"";var t,n=/Id$/;return e.hasOwnProperty("searchURI")?"".concat("search","/").concat(e.searchURI):1===v.a.keys(e).length&&v.a.keys(e)[0].match(n)?"".concat("search","/findBy").concat((t=v.a.keys(e)[0],v.a.upperFirst(t.replace(n,"")))):"".concat("search","/find")}},{key:"stringifyFilter",value:function(e){var t=Object.assign({},e);return t.hasOwnProperty("searchURI")&&delete t.searchURI,Object(k.stringify)(t)}}]),e}(),I=function(){function e(){Object(A.a)(this,e)}return Object(w.a)(e,null,[{key:"forList",value:function(e){var t=P(e.pagination,e.sort),n=e.filter,a=C.getPath(n),r=v.a.trim([C.stringifyFilter(n),t].join("&"),"&");return"".concat(a,"?").concat(r)}},{key:"forManyReference",value:function(e){var t=P(e.pagination,e.sort),n={};n[e.target]=e.id;var a=C.getPath(n);return a+="?".concat(e.target,"=").concat(e.id),a+="&".concat(t)}}]),e}(),N=function(){function e(){Object(A.a)(this,e)}return Object(w.a)(e,null,[{key:"toReactAdminResourceListResponse",value:function(e,t){if(e.content)return{data:e.content,total:e.totalElements};if(e._embedded){var n=e._embedded[t],a=e.page;return{data:n,total:a?a.totalElements:n.length}}return 0===v.a.get(e,["page","totalElements"])?{data:[],total:0}:{data:e,total:e.length}}}]),e}();function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=n(440),S=n(393),T=n(442),U=n(4),L=n.n(U),x=n(873),W=n(872),B=n(92),J=n(156),z=n(441),G=n(26),H=n(29),M=n(876),Y=n(118),F=n(307),q=n(329),$=Object(B.c)({admin:Y.a,i18n:Object(F.a)("en",Object(q.a)("en")),form:M.a,router:G.f}),K=n(297),V=n.n(K),Q=n(6),X=n(875),Z=V.a.mark(ne),ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.a.fetchJson,n=function(t,n,a){var r="".concat(e,"/").concat(n),c=window.googleAuthApi.currentUser.get().getAuthResponse().id_token,o={headers:new Headers({Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(c)})};switch(t){case y.d:r="".concat(r,"/").concat(I.forList(a));break;case y.g:r="".concat(r,"/").concat(a.id);break;case y.e:r="".concat(r,"/search/findAllById?ids=").concat(v.a.join(a.ids));break;case y.f:r="".concat(r,"/").concat(I.forManyReference(a));break;case y.a:r="".concat(r),o.method="POST",o.body=JSON.stringify(a.data);break;case y.h:r="".concat(r,"/").concat(a.id),o.method="PUT",o.body=JSON.stringify(a.data);break;case y.b:r="".concat(r,"/").concat(a.id),o.method="DELETE";break;default:throw new Error("Unsupported fetch action type ".concat(t))}return console.log("Data Provider Action ".concat(t," | Url ").concat(r," | Resource ").concat(n," | Params ").concat(JSON.stringify(a))),{url:r,options:o}},a=function(e,t,n,a){var r=e.json;switch(t){case y.d:case y.f:case y.e:return N.toReactAdminResourceListResponse(r,n);case y.a:return{data:D({},a.data,{id:r.id})};case y.b:return{data:r||{id:null}};default:return{data:r}}};return function(r,c,o){if(r===y.i)return Promise.all(o.ids.map((function(n){return t.fetchJson("".concat(e,"/").concat(c,"/").concat(n),{method:"PUT",body:JSON.stringify(o.data)})}))).then((function(e){return{data:e.map((function(e){return e.json}))}}));if(r===y.c)return Promise.all(o.ids.map((function(n){return t("".concat(e,"/").concat(c,"/").concat(n),{method:"DELETE"})}))).then((function(e){return{data:e.map((function(e){return e.json}))}}));var i=n(r,c,o),l=i.url,s=i.options;return t(l,s).then((function(e){return a(e,r,c,o)}))}}("/api"),te=q.a;function ne(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([Object(X.a)(ee,b,te)].map(Q.e));case 2:case"end":return e.stop()}}),Z)}var ae=Object(H.b)(),re=function(e){var t=Object(J.a)(),n=B.d,a=Object(B.e)($,e,n(Object(B.a)(t,z.a,Object(G.e)(ae))));return t.run(ne),a}(),ce=n(143),oe=n.n(ce),ie=n(230),le=n.n(ie),se=n(144),ue=function(){return r.a.createElement(oe.a,null,r.a.createElement(se.a,{title:"DWCC Admin Console"}),r.a.createElement(le.a,{style:{minHeight:"90vh"}},r.a.createElement("h1",null,"Welcome to the administration area"),r.a.createElement("p",null,"In this section, you can...",r.a.createElement("ul",null,r.a.createElement("li",null,"Authorize (staff) user accounts from Hasirudala organization to access this app"),r.a.createElement("li",null,"Add/update DWCC master data"),r.a.createElement("li",null,"Create/manage waste categories"),r.a.createElement("li",null,"etc.")))))},me=n(874),de=n(877),fe=n(870),pe=n(871),he=function(e){return r.a.createElement(me.a,Object.assign({},e,{bulkActions:!1,title:"Authorized Users"}),r.a.createElement(de.a,{rowClick:"show"},r.a.createElement(fe.a,{source:"email",label:"Login/email ID"}),r.a.createElement(fe.a,{source:"name",label:"Name of the person"}),r.a.createElement(pe.a,{label:"Access",render:function(e){return e.isAdmin?"Administrator":"Staff"}}),r.a.createElement(pe.a,{label:"Status",render:function(e){return e.isDisabled?"Disabled":"Active"}})))},ge=function(e){return r.a.createElement(me.a,Object.assign({},e,{bulkActions:!1,title:"Dry Waste Centers"}))},be=function(e){function t(){return Object(A.a)(this,t),Object(R.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(w.a)(t,[{key:"getChildContext",value:function(){return{store:re}}},{key:"render",value:function(){return r.a.createElement(x.a,{dashboard:ue,authProvider:b,history:ae},r.a.createElement(W.a,{name:"users",list:he}),r.a.createElement(W.a,{name:"dwcc",list:ge,options:{label:"Dry Waste Centers"}}))}}]),t}(r.a.Component);be.childContextTypes={store:L.a.object};var Ee=be;function Oe(){var e=Object(a.useContext)(p),t=e.googleAuthApi,n=e.signOut,c=t.currentUser.get().getBasicProfile().getName();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h6",{className:"App-title",style:{fontWeight:"lighter",marginBottom:"-1.5em"}},"Welcome"),r.a.createElement("h5",{className:"App-title"},c),r.a.createElement("br",null),r.a.createElement("h1",null,"Under Construction"),r.a.createElement("br",null),r.a.createElement(h.b,{to:"/admin/"},r.a.createElement("span",{className:"App-link"},"React Admin")),r.a.createElement("br",null),r.a.createElement(h.b,{to:"/abc/"},r.a.createElement("span",{className:"App-link"},"Another Page")),r.a.createElement("br",null),r.a.createElement("button",{onClick:n},"Sign out")))}var ve=function(){return r.a.createElement("div",null,"Another Page")};function je(){return r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(Oe,null)),r.a.createElement(g.a,{exact:!0,path:"/admin",component:Ee}),r.a.createElement(g.a,{exact:!0,path:"/abc",component:ve}))}var ye=n(436),Ae=n.n(ye);function we(){var e=Object(a.useContext)(p).signIn;return r.a.createElement("button",{onClick:e},"Sign In")}function ke(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",{className:"App-title"},"DWCC MIS"),r.a.createElement("br",null),r.a.createElement("img",{src:Ae.a,className:"App-logo",alt:"logo"}),r.a.createElement("br",null),r.a.createElement(we,null)))}var Pe=function(){var e=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(i.a)(c,2),l=o[0],p=o[1];return Object(a.useEffect)((function(){s()(n)&&window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:u,hosted_domain:m}).then((function(e){r(e),e.isSignedIn.get()&&p(!0)}))}))})),{isSignedIn:l,signIn:function(){n.signIn().then((function(e){d(e.getAuthResponse().id_token).then(f).then((function(){return p(!0)})).catch((function(e){n.signOut(),alert(e)}))}))},signOut:function(){n.signOut().then((function(){return p(!1)}))},googleAuthApi:n}}();return window.googleAuthApi=e.googleAuthApi,r.a.createElement(p.Provider,{value:e},e.isSignedIn?r.a.createElement(je,null):r.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=n(439),Ie=n(437),Ne=n.n(Ie),_e=n(438),De=n.n(_e),Re=Ne()(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GOOGLE_IDENTITY_CLIENT_ID:"1063208989870-pimth23kd2koib4ej9k8uffquah6dm54.apps.googleusercontent.com",REACT_APP_GOOGLE_IDENTITY_ALLOWED_HOSTED_DOMAIN:"hasirudala.in"}).REACT_APP_BUGSNAG_API_KEY||"dummy");Re.use(De.a,r.a);var Se=Re.getPlugin("react");o.a.render(r.a.createElement(Se,null,r.a.createElement(Ce.a,{store:re},r.a.createElement(h.a,null,r.a.createElement(Pe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[482,1,2]]]);
//# sourceMappingURL=main.1e9f5307.chunk.js.map