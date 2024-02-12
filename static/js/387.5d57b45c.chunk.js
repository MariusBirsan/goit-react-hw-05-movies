"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,r,t){t.r(r),t.d(r,{default:function(){return j}});var e,a,i,p,c,o=t(861),s=t(439),f=t(757),x=t.n(f),u=t(791),d=t(689),l=t(390),g=t(168),h=t(924),b=h.ZP.ul(e||(e=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin: 0 0 20px 0;\n  padding: 0;\n\n  @media screen and (min-width: 900px) {\n    width: 900px;\n    height: 600px;\n    overflow-y: scroll;\n    scroll-behavior: smooth;\n\n    &::-webkit-scrollbar {\n      width: 8px;\n      height: 100px;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: #f6f6f6;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      border-radius: 12px;\n      background: #0e1641;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #249fa3;\n    }\n  }\n  @media screen and (min-width: 1400px) {\n    width: 480px;\n    height: 600px;\n  }\n"]))),m=h.ZP.li(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 200px;\n"]))),v=h.ZP.img(i||(i=(0,g.Z)(["\n  display: block;\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n"]))),k=h.ZP.h4(p||(p=(0,g.Z)(["\n  font-family: 'Prompt', sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  color: #0e1641;\n  margin: 0;\n  padding: 0;\n"]))),w=h.ZP.h4(c||(c=(0,g.Z)(["\n  font-family: 'Prompt', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #0e1641;\n  margin: 0;\n  padding: 0;\n"]))),y=t(245),Z=t(184);function j(){var n=(0,d.UO)().movieId,r=(0,u.useState)(null),t=(0,s.Z)(r,2),e=t[0],a=t[1],i=(0,u.useState)(!1),p=(0,s.Z)(i,2),c=p[0],f=p[1];if((0,u.useEffect)((function(){if(n){var r=function(){var r=(0,o.Z)(x().mark((function r(){var t;return x().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,f(!0),r.next=4,(0,l.d5)(n);case 4:t=r.sent,a(t.cast),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),r.t0(r.t0.message);case 11:return r.prev=11,f(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}}),[n]),e){var g=Array.isArray(e)&&e.length;return(0,Z.jsxs)(Z.Fragment,{children:[c&&(0,Z.jsx)(y.g,{}),(0,Z.jsx)(b,{children:g&&e.map((function(n){var r=n.id,t=n.profile_path,e=n.name,a=n.character;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(v,{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://www.istockphoto.com/ro/fotografii/film-slate",alt:e}),(0,Z.jsx)(k,{children:e}),(0,Z.jsx)(w,{children:a})]},r)}))})]})}}},245:function(n,r,t){t.d(r,{g:function(){return f}});t(791);var e,a,i=t(168),p=t(924),c=p.zo.div(e||(e=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 90;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(46, 47, 66, 0.4);\n"]))),o=p.zo.span(a||(a=(0,i.Z)(["\n  position: absolute;\n  top: 300px;\n  margin-left: auto;\n  margin-right: auto;\n\n  width: 175px;\n  height: 80px;\n  display: block;\n  margin: auto;\n  background-image: radial-gradient(\n      circle 25px at 25px 25px,\n      #fff 100%,\n      transparent 0\n    ),\n    radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),\n    radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),\n    linear-gradient(#fff 50px, transparent 0);\n  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;\n  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;\n  background-repeat: no-repeat;\n  position: relative;\n  box-sizing: border-box;\n\n  &::before {\n    content: '';\n    left: 60px;\n    bottom: 18px;\n    position: absolute;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background-color: #249fa3;\n    background-image: radial-gradient(\n        circle 8px at 18px 18px,\n        #fff 100%,\n        transparent 0\n      ),\n      radial-gradient(circle 4px at 18px 0px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 0px 18px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 36px 18px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 18px 36px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 30px 30px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 5px 30px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 5px 5px, #fff 100%, transparent 0);\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n    animation: rotationBack 3s linear infinite;\n  }\n  &::after {\n    content: '';\n    left: 94px;\n    bottom: 15px;\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background-color: #0e1841;\n    background-image: radial-gradient(\n        circle 5px at 12px 12px,\n        #fff 100%,\n        transparent 0\n      ),\n      radial-gradient(circle 2.5px at 12px 0px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 0px 12px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 24px 12px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 12px 24px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 20px 20px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 3px 20px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 3px 3px, #fff 100%, transparent 0);\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n    animation: rotationBack 4s linear infinite reverse;\n  }\n\n  @keyframes rotationBack {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(-360deg);\n    }\n  }\n"]))),s=t(184);function f(){return(0,s.jsx)(c,{children:(0,s.jsx)(o,{})})}},390:function(n,r,t){t.d(r,{Bt:function(){return h},Y5:function(){return u},d5:function(){return l},df:function(){return f},vw:function(){return o}});var e=t(861),a=t(757),i=t.n(a),p=t(340),c="21d50bd54f6decc7d8510150db1b12f4";function o(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:c}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("https://api.themoviedb.org/3/search/movie",{params:{query:"".concat(r),include_adult:!1,language:"en-US",page:1,api_key:c}});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function u(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("https://api.themoviedb.org/3/movie/".concat(r),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.5d57b45c.chunk.js.map