(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{6713:function(n,e,t){"use strict";t.d(e,{Hx:function(){return h},WK:function(){return d},Y5:function(){return l},wr:function(){return p},xc:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="https://api.themoviedb.org",u="c386e8b288993af3daa930866edd5828",s={method:"GET",headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzg2ZThiMjg4OTkzYWYzZGFhOTMwODY2ZWRkNTgyOCIsInN1YiI6IjY0ZjhjMGUwZmZjOWRlMDBjNGExZWI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RSJYj5_qh9lA0FcInIa0sGWqA44kBSzQ826duTlAxt0"}},p=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/trending/movie/day?language=en-US&api_key=").concat(u),s);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"?language=en-US&api_key=").concat(u),s);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?language=en-US&api_key=").concat(u),s);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(u),s);case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=").concat(t,"&api_key=").concat(u),s);case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},8445:function(n,e,t){"use strict";t.d(e,{O:function(){return c},X:function(){return u}});var r,a,i=t(168),o=t(6444),c=o.ZP.button(r||(r=(0,i.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  width: 140px;\n  height: 45px;\n  line-height: 45px;\n  border-radius: 45px;\n  margin: 10px 20px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 3px;\n  font-weight: 600;\n  color: #524f4e;\n  background: white;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);\n  transition: .3s;\n\n&:hover{\n    color: #fff;\n    border-color: #000;\n    background-color: #111;\n}\n"]))),u=o.ZP.div(a||(a=(0,i.Z)(["\ndisplay: flex;\n"])))},9169:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r,a=t(2007),i=t.n(a),o=t(7689),c=t(1087),u=t(168),s=t(6444).ZP.li(r||(r=(0,u.Z)(["\nmax-width: 185px;\n"]))),p=t(184),l=function(n){var e=n.movieItem,t=(0,o.TH)();return(0,p.jsx)(s,{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:t},children:(0,p.jsxs)("div",{children:[null===e.poster_path?(0,p.jsx)("img",{alt:e.original_title,src:"https://via.placeholder.com/185x280"}):(0,p.jsx)("img",{alt:e.poster_path,src:"http://image.tmdb.org/t/p/w185".concat(e.poster_path)}),(0,p.jsx)("p",{children:e.original_title})]})})})};l.propType={movieItem:i().object};var f=l},1779:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var r,a,i=t(5861),o=t(9439),c=t(7757),u=t.n(c),s=t(2791),p=t(168),l=t(6444),f=l.ZP.input(r||(r=(0,p.Z)(["\nwidth: 350px;\nheight: 40px;\nborder-radius: 5px;\nfont-size: 20px;\nposition: relative;\n\n&:hover{\n    color: aqua;\n    border-color: #14110F;\n    background-color: grey;\n}\n"]))),h=l.ZP.form(a||(a=(0,p.Z)(["\nmargin-left: 25px;\nmargin-bottom: 45px;\ndisplay: flex;\njustify-content: center;\n"]))),d=t(184);var g,x,v,m,y=function(n){var e=n.query,t=n.onChange,r=(0,s.useState)(e),a=(0,o.Z)(r,2),i=a[0],c=a[1];return(0,d.jsx)("div",{children:(0,d.jsx)(h,{onSubmit:function(n){n.preventDefault(),t(i)},children:(0,d.jsx)(f,{type:"text",name:"query",placeholder:"What will we watch today?... ",value:i,onChange:function(n){c(n.target.value)}})})})},Z=t(6713),b=t(1087),j=t(8402),w=t(9169),_=l.ZP.ul(g||(g=(0,p.Z)(["\nlist-style: none;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\ncolumn-gap: 30px;\nrow-gap: 10px;\ntext-align: center;\n"]))),k=function(n){var e=n.searchList;if(0!==e)return(0,d.jsx)(_,{children:e.map((function(n){return(0,d.jsx)(w.Z,{movieItem:n},n.id)}))})},S=t(8445),I=function(n){var e=n.onChangePage,t=n.title;return(0,d.jsx)("div",{children:(0,d.jsx)(S.O,{type:"submit",onClick:e,children:t})})},P=l.ZP.p(x||(x=(0,p.Z)(["\nfont-size: 20px;\nfont-weight: 500;\nmargin-left: 100px;\ncolor: aqua;\n"]))),C=l.ZP.div(v||(v=(0,p.Z)(["\nmargin-left: 25px;\n"]))),O=l.ZP.div(m||(m=(0,p.Z)(["\n    margin-left: 45%;\n    margin-right: auto;\n    justify-content: center;\n    position: relative;\n    padding-bottom: 100px;\n "]))),T=function(){var n,e,t=(0,s.useState)(null),r=(0,o.Z)(t,2),a=r[0],c=r[1],p=(0,s.useState)(!1),l=(0,o.Z)(p,2),f=l[0],h=l[1],g=(0,s.useState)(null),x=(0,o.Z)(g,2),v=x[0],m=x[1],w=(0,s.useState)(null),_=(0,o.Z)(w,2),T=_[0],W=_[1],q=(0,b.lr)(),z=(0,o.Z)(q,2),J=z[0],U=z[1],E=(0,s.useState)(null),N=(0,o.Z)(E,2),R=N[0],Y=N[1],G=(0,s.useState)(Number(null!==(n=J.get("page"))&&void 0!==n?n:"")),M=(0,o.Z)(G,2),L=M[0],A=M[1],D=(0,s.useState)(null!==(e=J.get("query"))&&void 0!==e?e:""),F=(0,o.Z)(D,2),B=F[0],H=F[1];(0,s.useEffect)((function(){function n(){return(n=(0,i.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,Z.WK)(B,L);case 4:e=n.sent,m(e.results),W(e.total_results),Y(e.total_pages),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),c(n.t0.message);case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}L&&B?(!function(){n.apply(this,arguments)}(),U({query:B,page:L})):U({})}),[L,B,U]);return(0,d.jsxs)("main",{children:[(0,d.jsx)(y,{onChange:function(n){A(1),H(n)},query:B}),(0,d.jsxs)(C,{children:[null!==a&&(0,d.jsx)("p",{children:"Oops, something went wrong. please, try later"}),f&&(0,d.jsx)(O,{children:(0,d.jsx)(j.a9,{visible:!0,height:"80",width:"80",ariaLabel:"comment-loading",wrapperStyle:{},wrapperClass:"comment-wrapper",color:"#fff",backgroundColor:"#F4442E"})}),T&&(0,d.jsxs)(P,{children:["Total pages: ",R]}),v&&(0,d.jsx)(k,{searchList:v}),T&&(0,d.jsxs)(P,{children:["Page number:",L]}),(null===v||void 0===v?void 0:v.length)<T/L&&(0,d.jsxs)(S.X,{children:[(0,d.jsx)(I,{onChangePage:function(){1!==L&&A((function(n){return n-1}))},title:"Previous page"}),(0,d.jsx)(I,{onChangePage:function(){A((function(n){return n+1}))},title:"Next page"})]})]})]})}},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=779.179b96a1.chunk.js.map