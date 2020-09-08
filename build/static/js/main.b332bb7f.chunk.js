(this.webpackJsonpMFEs=this.webpackJsonpMFEs||[]).push([[0],{0:function(e,t){e.exports=React},25:function(e,t){e.exports=ReactDOM},43:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),o=n.n(c),u=n(20),l=n(9),i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":case"HIDE_LOADER":return t.data;default:return e}},s=n(23),p={},m=Object(l.c)({loader:i,token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return t.token;case"UNSET_TOKEN":return null;default:return e}},ReducerExample:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA_RECEIVE":return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}}),d=n(42),E=n(8),f=n.n(E),h=n(6),b=n(18);b.a.interceptors.request.use((function(e){var t=e;return localStorage.getItem("token")&&console.log(e.method," ",e.url),t})),b.a.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(Object(s.a)({},e))}));var O={getTestData:function(){return b.a.get("/testData")},getToken:function(){return b.a.get("/stubData/token.json")}},v=f.a.mark(k),j=f.a.mark(g);function k(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.b)(O.apiExampleRequest);case 3:return e=t.sent,t.next=6,Object(h.d)({type:"GET_DATA_REQUEST",payload:e.data});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.response.data);case 11:case"end":return t.stop()}}),v,null,[[0,8]])}function g(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)("GET_DATA_REQUEST",k);case 2:case"end":return e.stop()}}),j)}var y=function(){return{type:"GET_TOKEN"}},w=function(){return{type:"UNSET_TOKEN"}},x=function(e){return e?{type:"SHOW_LOADER",data:e}:{type:"HIDE_LOADER",data:e}},T=f.a.mark(D),_=f.a.mark(S),A=f.a.mark(C);function D(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.d)(x(!0));case 3:return t.next=5,Object(h.b)(O.getToken);case 5:return e=t.sent,t.next=8,Object(h.d)(x(!1));case 8:return localStorage.setItem("token",e.value),t.next=11,Object(h.d)({type:"SET_TOKEN",token:e.value});case 11:t.next=18;break;case 13:return t.prev=13,t.t0=t.catch(0),console.log(t.t0.response.data),t.next=18,Object(h.d)(x(!1));case 18:case"end":return t.stop()}}),T,null,[[0,13]])}function S(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token");case 1:case"end":return e.stop()}}),_)}function C(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)("GET_TOKEN",D);case 2:return e.next=4,Object(h.e)("UNSET_TOKEN",S);case 4:case"end":return e.stop()}}),A)}var R=f.a.mark(I);function I(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.c)(g)]);case 2:return e.next=4,Object(h.a)([Object(h.c)(C)]);case 4:case"end":return e.stop()}}),R)}var N=Object(d.a)(),L=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):l.d)(Object(l.a)(N)),M=Object(l.e)(m,L);N.run(I);var U=M,F=n(14),H=n(15),K=n(17),P=n(16),G=n(5),W=n(22);function X(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",null,a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement(W.a,{to:"/"},"Home"),a.a.createElement(W.a,{to:"/innerApp1"},"inner app 1"),a.a.createElement(W.a,{to:"/innerApp2"},"inner app 2")),a.a.createElement("hr",null)))}var q=n(10),V=Object(q.b)(),J=function(){return a.a.createElement("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:9999,background:"rgba(200, 200, 200, 0.85)",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("div",{role:"status"},a.a.createElement("span",null,"Loading...")))},Q=function(e){Object(K.a)(n,e);var t=Object(P.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",null,"Home Page"))}}]),n}(a.a.Component),z=function(e){var t=e.text,n=e.handleClick;return a.a.createElement("button",{onClick:n},t)},B=function(e){Object(K.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleLogin=function(){(0,e.props.getToken)()},e}return Object(H.a)(n,[{key:"render",value:function(){var e=this.props.token;return a.a.createElement("div",null,a.a.createElement("h1",null,e?"Hello":"Please login"),e?a.a.createElement(z,{text:"To home page",handleClick:function(){V.push("/")}}):a.a.createElement(z,{text:"Login",handleClick:this.handleLogin}))}}]),n}(a.a.Component),Y=Object(u.b)((function(e){return{token:e.token}}),(function(e){return Object(l.b)({getToken:y},e)}))(B),Z=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Page not found"))},$=function(e){Object(K.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(F.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderMicroFrontend=function(){var t=e.props,n=t.name,r=t.host,a=t.history;try{window["render".concat(n)]("".concat(n,"-container"),a)}catch(c){console.log("Error while 'render".concat(n,"' function execution \n      from '").concat(r,"/bundle.js' file"))}},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,n=e.host,r="micro-frontend-script-".concat(t);if(document.getElementById(r))this.renderMicroFrontend();else{var a=document.createElement("script");a.id=r,a.src="".concat(n,"/bundle.js"),a.onload=this.renderMicroFrontend,document.head.appendChild(a)}}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.name,n=e.host;try{window["unmount".concat(t)]("".concat(t,"-container"))}catch(r){console.log("Error while 'unmount".concat(t,"' function execution \n      from '").concat(n,"/bundle.js' file"))}}},{key:"render",value:function(){return a.a.createElement("main",{id:"".concat(this.props.name,"-container")})}}]),n}(a.a.Component),ee=function(e){var t=e.history;return a.a.createElement($,{history:t,name:"InnerApp1",host:"https://raw.githubusercontent.com/weberlance/MFEs_InnerApp1/master/build/static/js"})},te=function(e){var t=e.history;return a.a.createElement($,{history:t,name:"InnerApp2",host:"http://somesite.com"})},ne=function(e){Object(K.a)(n,e);var t=Object(P.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentWillUnmount",value:function(){(0,this.props.unsetToken)()}},{key:"render",value:function(){var e=this.props,t=e.loader,n=e.token,r=e.unsetToken;return a.a.createElement(G.c,{history:V},a.a.createElement("div",null,t?a.a.createElement(J,null):null,a.a.createElement("button",{onClick:function(){return r()}},"Reset token"),a.a.createElement(X,null),a.a.createElement(G.d,null,a.a.createElement(G.b,{path:"/login",component:Y}),!n&&a.a.createElement(G.a,{to:"/login"}),a.a.createElement(G.b,{path:"/innerApp1",component:ee}),a.a.createElement(G.b,{path:"/innerApp2",component:te}),a.a.createElement(G.b,{path:"/",component:Q}),a.a.createElement(G.b,{path:"*",component:Z}))))}}]),n}(a.a.Component),re=Object(u.b)((function(e){return{loader:e.loader,token:e.token}}),(function(e){return Object(l.b)({unsetToken:w},e)}))(ne);Object(b.b)({baseURL:"https://raw.githubusercontent.com/weberlance/MFEs_Common/master/src"}),o.a.render(a.a.createElement(u.a,{store:U},a.a.createElement(re,null)),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b332bb7f.chunk.js.map