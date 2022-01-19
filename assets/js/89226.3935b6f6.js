"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[89226],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=s(r),d=o,f=y["".concat(i,".").concat(d)]||y[d]||u[d]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5922:function(e,t,r){r.d(t,{Z:function(){return B}});var n=r(27378),o=r(38944),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a={Prism:r(52349).default,theme:l};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var s=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},y=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=i({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=i({},r,{backgroundColor:null}),o};function d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var f=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?y(e.theme,e.language):void 0;return t.themeDict=r})),c(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,l=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==r&&(l.key=r),n&&(l.className+=" "+n),l})),c(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return l[r[0]];var a=n?{display:"inline-block"}:{},c=r.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(c))}})),c(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,l=e.token,a=i({},d(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?i({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),c(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],l=0,a=0,c=[],i=[c];a>-1;){for(;(l=n[a]++)<o[a];){var y=void 0,d=t[a],f=r[a][l];if("string"==typeof f?(d=a>0?d:["plain"],y=f):(d=u(d,f.type),f.alias&&(d=u(d,f.alias)),y=f.content),"string"==typeof y){var m=y.split(s),b=m.length;c.push({types:d,content:m[0]});for(var g=1;g<b;g++)p(c),i.push(c=[]),c.push({types:d,content:m[g]})}else a++,t.push(d),r.push(y),n.push(0),o.push(y.length)}a--,t.pop(),r.pop(),n.pop(),o.pop()}return p(c),i}(void 0!==a?this.tokenize(t,n,a,r):[n]),className:"prism-code language-"+r,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),m=f;var b=r(56381),g=r(18870),h={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},v=r(10320);var O=()=>{const{prism:e}=(0,g.LU)(),{isDarkTheme:t}=(0,v.Z)(),r=e.theme||h,n=e.darkTheme||r;return t?n:r},k="codeBlockContainer_1ukp",j="codeBlockContent_3Y8q",E="codeBlockTitle_befg",P="codeBlock_2Xgr",w="copyButton_1mju",T="codeBlockLines_3Zfi",N=Object.defineProperty,x=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&L(e,r,t[r]);if(S)for(var r of S(t))D.call(t,r)&&L(e,r,t[r]);return e};function B({children:e,className:t,metastring:r,title:l}){var c;const{prism:i}=(0,g.LU)(),[s,p]=(0,n.useState)(!1),[u,y]=(0,n.useState)(!1);(0,n.useEffect)((()=>{y(!0)}),[]);const d=(0,g.bc)(r)||l,f=O(),h=Array.isArray(e)?e.join(""):e,v=null!=(c=(0,g.Vo)(t))?c:i.defaultLanguage,{highlightLines:N,code:S}=(0,g.nZ)(h,r,v),C=()=>{!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch(c){}r.remove(),l&&(o.removeAllRanges(),o.addRange(l)),n&&n.focus()}(S),p(!0),setTimeout((()=>p(!1)),2e3)};return n.createElement(m,(D=_({},a),L={key:String(u),theme:f,code:S,language:v},x(D,Z(L))),(({className:e,style:r,tokens:l,getLineProps:a,getTokenProps:c})=>n.createElement("div",{className:(0,o.Z)(k,t,g.kM.common.codeBlock)},d&&n.createElement("div",{style:r,className:E},d),n.createElement("div",{className:(0,o.Z)(j,v)},n.createElement("pre",{tabIndex:0,className:(0,o.Z)(e,P,"thin-scrollbar"),style:r},n.createElement("code",{className:T},l.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const r=a({line:e,key:t});return N.includes(t)&&(r.className+=" docusaurus-highlight-code-line"),n.createElement("span",_({key:t},r),e.map(((e,t)=>n.createElement("span",_({key:t},c({token:e,key:t}))))),n.createElement("br",null))})))),n.createElement("button",{type:"button","aria-label":(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(w,"clean-btn"),onClick:C},s?n.createElement(b.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):n.createElement(b.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))));var D,L}},61651:function(e,t,r){r.d(t,{N:function(){return v},Z:function(){return O}});var n=r(27378),o=r(38944),l=r(56381),a=r(18870),c="anchorWithStickyNavbar_23Bc",i="anchorWithHideOnScrollNavbar_3Dj-",s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(y)for(var r of y(t))f.call(t,r)&&m(e,r,t[r]);return e},g=(e,t)=>p(e,u(t)),h=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r};const v=e=>{var t=h(e,[]);return n.createElement("header",null,n.createElement("h1",g(b({},t),{id:void 0}),t.children))};var O=e=>{return"h1"===e?v:(t=e,e=>{var r=e,{id:s}=r,p=h(r,["id"]);const{navbar:{hideOnScroll:u}}=(0,a.LU)();return s?n.createElement(t,g(b({},p),{className:(0,o.Z)("anchor",{[i]:u,[c]:!u}),id:s}),p.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,b({},p))});var t}},66630:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(27378),o=r(75654),l=r(13067),a=r(5922),c=r(61651),i=r(38944),s=r(18870),p="details_SL1Q",u=Object.defineProperty,y=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function h(e){var t,r,o=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(e,[]);return n.createElement(s.PO,(t=((e,t)=>{for(var r in t||(t={}))m.call(t,r)&&g(e,r,t[r]);if(f)for(var r of f(t))b.call(t,r)&&g(e,r,t[r]);return e})({},o),r={className:(0,i.Z)("alert alert--info",p,o.className)},y(t,d(r))))}var v=Object.defineProperty,O=Object.defineProperties,k=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&w(e,r,t[r]);if(j)for(var r of j(t))P.call(t,r)&&w(e,r,t[r]);return e};function N(e){var t,r;if((null==(t=null==e?void 0:e.props)?void 0:t.mdxType)&&(null==(r=null==e?void 0:e.props)?void 0:r.originalType)){const t=e.props,{mdxType:r,originalType:o}=t,l=((e,t)=>{var r={};for(var n in e)E.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&j)for(var n of j(e))t.indexOf(n)<0&&P.call(e,n)&&(r[n]=e[n]);return r})(t,["mdxType","originalType"]);return n.createElement(e.props.originalType,l)}return e}var x={head:e=>{const t=n.Children.map(e.children,(e=>N(e)));return n.createElement(o.Z,T({},e),t)},code:e=>{const{children:t}=e;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(a.Z,T({},e)):n.createElement("code",T({},e))},a:e=>n.createElement(l.Z,T({},e)),pre:e=>{var t;const{children:r}=e;return(0,n.isValidElement)(r)&&(0,n.isValidElement)(null==(t=null==r?void 0:r.props)?void 0:t.children)?r.props.children:n.createElement(a.Z,T({},(0,n.isValidElement)(r)?null==r?void 0:r.props:T({},e)))},details:e=>{const t=n.Children.toArray(e.children),r=t.find((e=>{var t;return"summary"===(null==(t=null==e?void 0:e.props)?void 0:t.mdxType)})),o=n.createElement(n.Fragment,null,t.filter((e=>e!==r)));return n.createElement(h,(l=T({},e),O(l,k({summary:r}))),o);var l},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")}}}]);