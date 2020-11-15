(this["webpackJsonppuppy-playdate"]=this["webpackJsonppuppy-playdate"]||[]).push([[0],{44:function(e,t,n){e.exports=n(57)},49:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(49),n(10)),u=n.n(c),s=n(13),l=n(31),p=n(91),f=n(83),m=n(88),d=n(92),y=n(30),h=n.n(y);function x(e,t,n){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(u.a.mark((function e(t,n,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://puppy-playdate.us-west-2.aws.cloud.dgraph.io/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,operationName:n,variables:a})});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(85),w=Object(f.a)((function(e){return{root:{width:"50%",margin:"auto"},button:{marginTop:e.spacing(4)}}})),b=function(e){var t=e.handleGetStartedClick,n=w();return r.a.createElement("div",{className:n.root},r.a.createElement("p",null,"Every dog owner wants to find the perfect friends for their new puppy. Now we have an app for that!"),r.a.createElement("p",null,"Browse through various puppy profiles and swipe right or left to find your new puppy friend."),r.a.createElement(g.a,{variant:"contained",color:"primary",className:n.button,onClick:t},"Get Started"))},E=n(34),k=n.n(E),C=300,N=2,S=.2,j=50,D=function(e){var t=window.getComputedStyle(e),n=t.getPropertyValue("width"),a=Number(n.split("px")[0]),r=t.getPropertyValue("height");return{x:a,y:Number(r.split("px")[0])}},M=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},O=function(){var e=Object(s.a)(u.a.mark((function e(t,n){var a,r,o,i,c,s,l,p,f,m,d=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>2&&void 0!==d[2]&&d[2],r=W(t),o=D(document.body),i=M(o.x,o.y),c=M(n.x,n.y),s=i/c,l=i/c,p=A(n.x*l+r.x,-n.y*l+r.y),f="",m=200,t.style.transition=a?"ease "+s+"s":"ease-out "+s+"s",f=0===q(t)?B((Math.random()-.5)*m):q(t)>0?B(Math.random()*m/2+q(t)):B((Math.random()-1)*m/2+q(t)),t.style.transform=p+f,e.next=15,k()(1e3*s);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(e){e.style.transition=C+"ms";var t=W(e),n=A(t.x*-S,t.y*-S),a=B(q(e)*-S);e.style.transform=n+a,setTimeout((function(){e.style.transform="none"}),.75*C),setTimeout((function(){e.style.transition="10ms"}),C)},T=function(e){return Math.abs(e.x)>Math.abs(e.y)?e.x>0?"right":"left":e.y>0?"up":"down"},L=function(e,t){var n=t.x-e.x,a=e.y-t.y,r=(t.time-e.time)/1e3;return{x:n/r,y:a/r}},A=function(e,t){return"translate("+e+"px, "+t+"px)"},B=function(e){return"rotate("+e+"deg)"},W=function(e){var t=window.getComputedStyle(e),n=new WebKitCSSMatrix(t.webkitTransform);return{x:n.m41,y:n.m42}},q=function(e){var t=window.getComputedStyle(e),n=new WebKitCSSMatrix(t.webkitTransform);return-Math.asin(n.m21)/(2*Math.PI)*360},F=function(e,t,n,a){var r={x:e.x+n.x,y:e.y+n.y},o={x:r.x,y:r.y,time:(new Date).getTime()},i=A(r.x,r.y),c=L(a,o).x/1e3,u=B(c*N);return t.style.transform=i+u,o},Y=function(e){var t=e.targetTouches[0];return{x:t.clientX,y:t.clientY}},G=function(e){return{x:e.clientX,y:e.clientY}},I=r.a.forwardRef((function(e,t){var n,a=e.flickOnSwipe,o=void 0===a||a,i=e.children,c=e.onSwipe,l=e.onCardLeftScreen,p=e.className,f=e.preventSwipe,m=void 0===f?[]:f,d=r.a.useRef(!1);r.a.useImperativeHandle(t,(function(){return{swipe:function(){var e=arguments;return Object(s.a)(u.a.mark((function t(){var a,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:"right",c&&c(a),r=1e3,o=100*(Math.random()-.5),"right"!==a){t.next=9;break}return t.next=7,O(n,{x:r,y:o},!0);case 7:t.next=22;break;case 9:if("left"!==a){t.next=14;break}return t.next=12,O(n,{x:-r,y:o},!0);case 12:t.next=22;break;case 14:if("up"!==a){t.next=19;break}return t.next=17,O(n,{x:o,y:r},!0);case 17:t.next=22;break;case 19:if("down"!==a){t.next=22;break}return t.next=22,O(n,{x:o,y:-r},!0);case 22:n.style.display="none",l&&l(a);case 24:case"end":return t.stop()}}),t)})))()}}}));var y=r.a.useCallback(function(){var e=Object(s.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d.current){e.next=2;break}return e.abrupt("return");case 2:if(d.current=!0,!(Math.abs(n.x)>j||Math.abs(n.y)>j)){e.next=13;break}if(a=T(n),c&&c(a),!o){e.next=13;break}if(m.includes(a)){e.next=13;break}return e.next=10,O(t,n);case 10:return t.style.display="none",l&&l(a),e.abrupt("return");case 13:P(t);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[d,o,c,l,m]),h=r.a.useCallback((function(){d.current=!1}),[d]),x=r.a.useCallback((function(e){if(e){n=e;var t={x:null,y:null},a={x:0,y:0},r={x:0,y:0,time:(new Date).getTime()},o=!1;e.addEventListener("touchstart",(function(e){e.preventDefault(),h(),t={x:-Y(e).x,y:-Y(e).y}})),e.addEventListener("mousedown",(function(e){e.preventDefault(),o=!0,h(),t={x:-G(e).x,y:-G(e).y}})),e.addEventListener("touchmove",(function(n){n.preventDefault();var o=F(Y(n),e,t,r);a=L(r,o),r=o})),e.addEventListener("mousemove",(function(n){if(n.preventDefault(),o){var i=F(G(n),e,t,r);a=L(r,i),r=i}})),e.addEventListener("touchend",(function(t){t.preventDefault(),y(e,a)})),e.addEventListener("mouseup",(function(t){o&&(t.preventDefault(),o=!1,y(e,a))})),e.addEventListener("mouseleave",(function(t){o&&(t.preventDefault(),o=!1,y(e,a))}))}}),[y,h]);return r.a.createElement("div",{ref:x,className:p},i)})),R=n(95),J=n(89),K=n(87),V=n(86),X=n(93),z=n(37),H=n.n(z),$=n(36),Q=n.n($),U=n(90),Z=Object(f.a)((function(e){return{root:{maxWidth:"100%",textAlign:"left",height:e.spacing(80),boxShadow:"rgba(50, 50, 50, 0.08) 6px 8px 10px -3px",display:"flex",flexDirection:"column"},media:{height:e.spacing(50)},cardContent:{display:"flex",flexDirection:"column",justifyContent:"space-between",flexGrow:1},bio:{marginBottom:e.spacing(2)},cardActions:{justifyContent:"space-around",marginBottom:e.spacing(2)}}}));function _(e){var t,n=e.puppy,a=(e.fetchPuppyData,e.swipe),o=Z();return r.a.createElement(R.a,{className:o.root},r.a.createElement(V.a,{className:o.media,image:"".concat("/puppy-playdate/build","/").concat(n.profilePic),title:n.name}),r.a.createElement("div",{className:o.cardContent},r.a.createElement(K.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},n.name,", ",n.age),r.a.createElement(m.a,{variant:"body1",color:"textSecondary",component:"p",className:o.bio},n.bio),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("b",null,"Interests:")," ",null===(t=n.interests)||void 0===t?void 0:t.join(", "))),r.a.createElement(J.a,{className:o.cardActions},r.a.createElement(X.a,{title:"No thanks...","aria-label":"No thanks...",arrow:!0},r.a.createElement(U.a,{"aria-label":"No thanks...",color:"secondary",onClick:function(){return a("left")}},r.a.createElement(Q.a,null))),r.a.createElement(X.a,{title:"Yes!","aria-label":"Yes!",arrow:!0},r.a.createElement(U.a,{"aria-label":"Yes!",color:"primary",onClick:function(){return a("right")}},r.a.createElement(H.a,null))))))}var ee=Object(f.a)((function(e){return{cardContainer:{position:"relative",display:"flex",justifyContent:"center",margin:"auto",width:e.spacing(75),maxWidth:"100%",height:e.spacing(80)},swipeCard:{position:"absolute",width:e.spacing(75),maxWidth:"100%",height:e.spacing(80)}}})),te=[],ne=function(e){var t=e.puppyData,n=e.fetchPuppyData,o=ee(),i=Object(a.useMemo)((function(){return Array(t.length).fill(0).map((function(e){return r.a.createRef()}))}),[t.length]),c=function(e){console.log("swipe",e);var n=t.filter((function(e){return!te.includes(e.id)}));if(console.log(n),n.length){var a=n[n.length-1].id;console.log(a);var r=t.map((function(e){return e.id})).indexOf(a);console.log(r),te.push(a),console.log(te),i[r].current.swipe(e)}};return r.a.createElement("div",{className:o.cardContainer},t.map((function(e,t){return r.a.createElement(I,{className:o.swipeCard,key:e.id,onSwipe:function(t){return n=t,a=e.name,void console.log("swiped ".concat(n," on ").concat(a));var n,a},onCardLeftScreen:function(){return t=e.name,void console.log(t+" left the screen!");var t},ref:i[t]},r.a.createElement(_,{puppy:e,fetchPuppyData:n,swipe:c}))})))},ae=Object(f.a)((function(e){return{root:{textAlign:"center",color:"#FFF"},header:{marginTop:e.spacing(6),marginBottom:e.spacing(6)},headerText:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}));function re(){var e=ae(),t=r.a.useState(null),n=Object(l.a)(t,2),a=n[0],o=n[1],i=r.a.useState(!0),c=Object(l.a)(i,2),f=c[0],y=c[1],v=r.a.useCallback(Object(s.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("\n  query FetchAllPuppies {\n    queryPuppy {\n      id\n      name\n      age\n      matched\n      profilePic\n      bio\n      interests\n    }\n  }\n","FetchAllPuppies",{});case 2:t=e.sent,n=t.errors,a=t.data,n&&console.error(n),r=a.queryPuppy.sort((function(e,t){return e.name>t.name?-1:1})),o(r);case 8:case"end":return e.stop()}}),e)}))),[]);return r.a.useEffect((function(){v()}),[v]),r.a.createElement("main",{className:e.root},r.a.createElement(p.a,null,r.a.createElement("h1",{className:e.header},r.a.createElement(h.a,null),r.a.createElement("span",{className:e.headerText},"Puppy Playdate"),r.a.createElement(h.a,null)),f?r.a.createElement(b,{handleGetStartedClick:function(){return y(!1)}}):a?r.a.createElement(ne,{puppyData:a,fetchPuppyData:v}):r.a.createElement("div",{className:e.loadingContainer},r.a.createElement(d.a,{color:"inherit",size:60}),r.a.createElement(m.a,{className:e.loadingText},"Loading"))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.6c7aa4f4.chunk.js.map