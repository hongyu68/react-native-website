(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69095],{69095:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_e});var o=n(27378),r=n(14185),a=n(38944),c=n(45098),l=n(87371);function s(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var i=n(41149),u=n(6324),p=n.n(u);const m=new RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),d=new RegExp("\\{(?<range>[\\d,-]+)\\}"),f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:a}=t;if(a&&d.test(a)){const e=a.match(d).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(f),t)}}(o,r),l=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(r.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),m=Object.fromEntries(r.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let p=0;p<l.length;){const e=l[p].match(c);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:u[t]?s[u[t]].start=p:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${p-1},`),l.splice(p,1)}n=l.join("\n");const b={};return Object.entries(s).forEach((([e,{range:t}])=>{p()(t).forEach((t=>{null!=b[t]||(b[t]=[]),b[t].push(e)}))})),{lineClassNames:b,code:n}}const g="codeBlockContainer_mQmQ";var h=Object.defineProperty,v=Object.defineProperties,k=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function B(e){var t=e,{as:n}=t,r=((e,t)=>{var n={};for(var o in e)E.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&O)for(var o of O(e))t.indexOf(o)<0&&j.call(e,o)&&(n[o]=e[o]);return n})(t,["as"]);const c=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,o])=>{const r=t[e];r&&"string"==typeof o&&(n[r]=o)})),n}(s());return o.createElement(n,(l=((e,t)=>{for(var n in t||(t={}))E.call(t,n)&&w(e,n,t[n]);if(O)for(var n of O(t))j.call(t,n)&&w(e,n,t[n]);return e})({},r),u={style:c,className:(0,a.Z)(r.className,g,i.k.common.codeBlock)},v(l,k(u))));var l,u}const N={codeBlockContent:"codeBlockContent_D5yF",codeBlockTitle:"codeBlockTitle_x_ju",codeBlock:"codeBlock_RMoD",codeBlockStandalone:"codeBlockStandalone_wQog",codeBlockLines:"codeBlockLines_AclH",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_O625",buttonGroup:"buttonGroup_aaMX"};function C({children:e,className:t}){return o.createElement(B,{as:"pre",tabIndex:0,className:(0,a.Z)(N.codeBlockStandalone,"thin-scrollbar",t)},o.createElement("code",{className:N.codeBlockLines},e))}var P=n(75071);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function x(e,t){const[n,r]=(0,o.useState)(),a=(0,o.useCallback)((()=>{var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n=L){const r=(0,P.zX)(t),a=(0,P.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,a),()=>t.disconnect()}),[e,r,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const S={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var I={Prism:n(52349).Z,theme:S};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}var A=/\r\n|\r|\n/,z=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},D=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Z=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=_({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=_({},n,{backgroundColor:null}),r};function $(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const H=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Z(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=_({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?_({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),T(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),T(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=_({},$(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?_({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),T(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,l=[],s=[l];c>-1;){for(;(a=o[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=D(u,p.type),p.alias&&(u=D(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(A),d=m.length;l.push({types:u,content:m[0]});for(var f=1;f<d;f++)z(l),s.push(l=[]),l.push({types:u,content:m[f]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return z(l),s}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),R="codeLine_FAqz",M="codeLineNumber_BE9Z",W="codeLineContent_EF2y";var V=Object.defineProperty,F=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&G(e,n,t[n]);if(F)for(var n of F(t))Q.call(t,n)&&G(e,n,t[n]);return e};function Y({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:c}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=r({line:e,className:(0,a.Z)(t,n&&R)}),s=e.map(((e,t)=>o.createElement("span",X({key:t},c({token:e,key:t})))));return o.createElement("span",X({},l),n?o.createElement(o.Fragment,null,o.createElement("span",{className:M}),o.createElement("span",{className:W},s)):s,o.createElement("br",null))}var J=n(56381),K=Object.defineProperty,U=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,ne=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function oe(e){return o.createElement("svg",((e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&ne(e,n,t[n]);if(U)for(var n of U(t))te.call(t,n)&&ne(e,n,t[n]);return e})({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}var re=Object.defineProperty,ae=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,se=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ie(e){return o.createElement("svg",((e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&se(e,n,t[n]);if(ae)for(var n of ae(t))le.call(t,n)&&se(e,n,t[n]);return e})({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const ue={copyButtonCopied:"copyButtonCopied_TYdd",copyButtonIcons:"copyButtonIcons_z5j7",copyButtonIcon:"copyButtonIcon_FoOz",copyButtonSuccessIcon:"copyButtonSuccessIcon_L0B6"};function pe({code:e,className:t}){const[n,r]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(e),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":n?(0,J.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,J.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,J.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",t,ue.copyButton,n&&ue.copyButtonCopied),onClick:l},o.createElement("span",{className:ue.copyButtonIcons,"aria-hidden":"true"},o.createElement(oe,{className:ue.copyButtonIcon}),o.createElement(ie,{className:ue.copyButtonSuccessIcon})))}var me=Object.defineProperty,de=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,be=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function ge(e){return o.createElement("svg",((e,t)=>{for(var n in t||(t={}))fe.call(t,n)&&be(e,n,t[n]);if(de)for(var n of de(t))ye.call(t,n)&&be(e,n,t[n]);return e})({viewBox:"0 0 24 24"},e),o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const he="wordWrapButtonIcon_HV9T",ve="wordWrapButtonEnabled_XzR1";function ke({className:e,onClick:t,isEnabled:n}){const r=(0,J.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:t,className:(0,a.Z)("clean-btn",e,n&&ve),"aria-label":r,title:r},o.createElement(ge,{className:he,"aria-hidden":"true"}))}var Oe=Object.defineProperty,Ee=Object.defineProperties,je=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Ce=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function Pe({children:e,className:t="",metastring:n,title:r,showLineNumbers:c,language:i}){var u;const{prism:{defaultLanguage:p,magicComments:d}}=(0,l.L)(),f=null!=(u=null!=i?i:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))?u:p,y=s(),g=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return x(a,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),h=function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.match(m))?void 0:t.groups.title)?n:""}(n)||r,{lineClassNames:v,code:k}=b(e,{metastring:n,language:f,magicComments:d}),O=null!=c?c:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return o.createElement(B,{as:"div",className:(0,a.Z)(t,f&&!t.includes(`language-${f}`)&&`language-${f}`)},h&&o.createElement("div",{className:N.codeBlockTitle},h),o.createElement("div",{className:N.codeBlockContent},o.createElement(H,(E=((e,t)=>{for(var n in t||(t={}))Be.call(t,n)&&Ce(e,n,t[n]);if(we)for(var n of we(t))Ne.call(t,n)&&Ce(e,n,t[n]);return e})({},I),Ee(E,je({theme:y,code:k,language:null!=f?f:"text"}))),(({className:e,tokens:t,getLineProps:n,getTokenProps:r})=>o.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,a.Z)(e,N.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,a.Z)(N.codeBlockLines,O&&N.codeBlockLinesWithNumbering)},t.map(((e,t)=>o.createElement(Y,{key:t,line:e,getLineProps:n,getTokenProps:r,classNames:v[t],showLineNumbers:O}))))))),o.createElement("div",{className:N.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&o.createElement(ke,{className:N.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),o.createElement(pe,{className:N.codeButton,code:k}))));var E}var Le=Object.defineProperty,xe=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,Te=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function _e(e){var t=e,{children:n}=t,a=((e,t)=>{var n={};for(var o in e)Se.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&xe)for(var o of xe(e))t.indexOf(o)<0&&Ie.call(e,o)&&(n[o]=e[o]);return n})(t,["children"]);const c=(0,r.Z)(),l=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),s="string"==typeof l?Pe:C;return o.createElement(s,((e,t)=>{for(var n in t||(t={}))Se.call(t,n)&&Te(e,n,t[n]);if(xe)for(var n of xe(t))Ie.call(t,n)&&Te(e,n,t[n]);return e})({key:String(c)},a),l)}},6324:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);