(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(n,e,t){"use strict";var r=t(0),i={theme:"Dark",toggleTheme:function(){}},c=Object(r.createContext)(i);e.a=c},2:function(n,e,t){"use strict";t.d(e,"f",(function(){return c})),t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return l})),t.d(e,"e",(function(){return d})),t.d(e,"a",(function(){return h}));var r=t(4),i=r.default,c={colors:{accent:"#2196F3",background:"#F6F6F6",backgroundHighlighted:"#C1E3FF",cardHighlighted:"#f8fafd",icon:"#9E9E9E",secondaryText:"#9E9E9E",text:"#212121",bodyText:"#757575",cardAccent:"#c2e7ff",error:"#FFBDC9"}},a={colors:{accent:"#2196F3",background:"#212121",backgroundHighlighted:"#333333",cardHighlighted:"#333333",icon:"#BDBDBD",secondaryText:"#BDBDBD",text:"#FFFFFF",bodyText:"#B6B6B6",cardAccent:"#2196F3",error:"#CF6679"}},o=r,l=o.css,d=o.keyframes,h=o.createGlobalStyle;e.d=i},26:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o=t(11),l=t(2),d=t(10),h=t(15),s=t.n(h),u=t(16),b=t.n(u),x=t(0),j=t(4),f=t(3),g=l.d.div(r||(r=Object(f.a)(["\n  height: 100%;\n  display: flex;\n  padding: 24px 16px;\n  align-items: center;\n  justify-content: center;\n"]))),p=Object(l.e)(i||(i=Object(f.a)(["\n  0% {\n    transform: translateY(0px);\n  }\n  50%{\n    transform: translateY(24px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n"]))),O=l.d.div(c||(c=Object(f.a)(["\n  width: 8px;\n  height: 16px;\n  border-radius: 32px;\n  background: ",";\n  animation: "," 0.75s ease-in-out infinite ","s alternate;\n"])),(function(n){return n.theme.colors.accent}),p,(function(n){return n.delay})),m=l.d.div(a||(a=Object(f.a)(["\n  gap: 12px;\n  display: flex;\n  flex-direction: row;\n"]))),y=t(1);var v=function(){return Object(y.jsxs)(m,{children:[Object(y.jsx)(O,{delay:.12}),Object(y.jsx)(O,{delay:.1+.2}),Object(y.jsx)(O,{delay:.1+.35})]})};var k=function(){return Object(y.jsx)(g,{children:Object(y.jsx)(v,{})})};var z=function(n){var e=n.children;return Object(y.jsx)(x.Suspense,{fallback:Object(y.jsx)(k,{}),children:e})},F=t(7),w=Object(x.lazy)((function(){return t.e(5).then(t.bind(null,87))})),D=Object(x.lazy)((function(){return t.e(7).then(t.bind(null,91))})),B=Object(x.lazy)((function(){return Promise.all([t.e(3),t.e(9)]).then(t.bind(null,92))})),E=Object(x.lazy)((function(){return t.e(8).then(t.bind(null,93))})),T=Object(x.lazy)((function(){return t.e(4).then(t.bind(null,88))})),H=Object(x.lazy)((function(){return t.e(6).then(t.bind(null,89))})),C=Object(x.lazy)((function(){return t.e(10).then(t.bind(null,90))}));s.a.extend(b.a);var M=function(){var n=Object(x.useReducer)((function(n){return"Dark"===n?"Light":"Dark"}),"Dark"),e=Object(o.a)(n,2),t=e[0],r=e[1],i=Object(x.useMemo)((function(){return"Dark"===t?l.c:l.f}),[t]),c=Object(x.useMemo)((function(){return{theme:t,toggleTheme:r}}),[t]);return Object(y.jsx)(d.a.Provider,{value:c,children:Object(y.jsxs)(j.ThemeProvider,{theme:i,children:[Object(y.jsx)(F.a,{}),Object(y.jsx)(F.b,{}),Object(y.jsx)(z,{children:Object(y.jsx)(D,{})})," ",Object(y.jsx)(z,{children:Object(y.jsx)(B,{})}),Object(y.jsx)(z,{children:Object(y.jsx)(E,{})}),Object(y.jsx)(z,{children:Object(y.jsx)(C,{})}),Object(y.jsx)(z,{children:Object(y.jsx)(H,{})}),Object(y.jsx)(z,{children:Object(y.jsx)(T,{})}),Object(y.jsx)(z,{children:Object(y.jsx)(w,{})})]})})},P=t(17);t.n(P).a.render(Object(y.jsx)(x.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root"))},6:function(n,e,t){"use strict";e.a={xs:"0",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"}},7:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return u})),t.d(e,"d",(function(){return b})),t.d(e,"e",(function(){return x})),t.d(e,"c",(function(){return j}));var r,i,c,a,o,l=t(3),d=t(2),h=t(6),s=Object(d.a)(r||(r=Object(l.a)(['\n  * {\n    box-sizing: border-box;\n    font-family: "Raleway", sans-serif;\n\n    transition: all 0.3s ease-in-out;\n  }\n\n  html, body {\n    margin: 0;\n    padding: 0;\n\n  }\n\n  #root {\n    background: ',";\n    width: 100%;\n    height: 100vh;\n    overflow: auto;\n\n    ::-webkit-scrollbar {\n      width: 6px;\n      &-thumb {\n        border-radius: 12px;\n        background: #ccc;\n      }\n    }\n  }\n  \n"])),(function(n){return n.theme.colors.background})),u=Object(d.a)(i||(i=Object(l.a)(["\n  h1,h2,h3,h4,h5,h6 {\n    margin: 0;\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    font-weight: 400;\n  }\n  h5, h6 {\n    font-weight: 600;\n    letter-spacing: 2px;\n  }\n  h1 {\n    font-size: 4.209rem;\n    line-height: 72px;\n    letter-spacing: 0;\n  }\n  h2 {\n    font-size: 3.157rem;\n    line-height: 64px;\n    letter-spacing: 0;\n  }\n  h3 {\n    font-size: 2.369rem;\n    line-height: 48px;\n    letter-spacing: 0;\n  }\n  h4 {\n    font-size: 1.777rem;\n    line-height: 40px;\n    letter-spacing: 0;\n  }\n  h5 {\n    font-size: 1.333rem;\n    line-height: 24px;\n    letter-spacing: 0;\n  }\n  h6 {\n    font-size: 1rem;\n    line-height: 24px;\n    letter-spacing: 0;\n  }\n\n  @media only screen and (max-width: ",") {\n    h1 {\n      font-size: 1.802rem;\n      line-height: 40px;\n    }\n    h2 {\n      font-size: 1.602rem;\n      line-height: 40px;\n    }\n    h3 {\n      font-size: 1.424rem;\n      line-height: 32px;\n    }\n    h4 {\n      font-size: 1.266rem;\n      line-height: 32px;\n    }\n    h5 {\n      font-size: 1.125rem;\n      line-height: 24px;\n    }\n    h6 {\n      font-size: 1rem;\n      line-height: 24px;\n      letter-spacing: 0;\n    }\n  }\n"])),(function(n){return n.theme.colors.text}),h.a.lg),b=d.d.div(c||(c=Object(l.a)(["\n  width: 100%;\n  min-height: 100vh;\n\n  @media only screen and (max-width: ",") {\n    padding: 24px;\n  }\n"])),h.a.md),x=d.d.div(a||(a=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  justify-content: center;\n  align-items: center;\n\n  padding: 70px 0;\n  min-height: 200px;\n\n  background: ",";\n"])),(function(n){return n.theme.colors.backgroundHighlighted})),j=d.d.div(o||(o=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  gap: 16px;\n"])))}},[[26,1,2]]]);
//# sourceMappingURL=main.1e8892b9.chunk.js.map