"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[73736],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11674:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(63445);const a=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"native",defaultOs:a?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(27378),a=r(38944);const o="tabItem_wHwb";var l=Object.defineProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(o,r)},{hidden:t}),e)}},48375:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(27378),a=r(38944),o=r(12112),l=r(35331),i=r(14953),c=r(27886),u=r(7106),s=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function y(e){return function(e){var t,r;return null!=(r=null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:y(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function O({queryString:e=!1,groupId:t}){const r=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);var n,o;t.set(a,e),r.replace((n=((e,t)=>{for(var r in t||(t={}))f.call(t,r)&&v(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&v(e,r,t[r]);return e})({},r.location),o={search:t.toString()},p(n,d(o))))}),[a,r])]}function w(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[l,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(r=t.find((e=>e.default)))?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=O({queryString:r,groupId:a}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,u.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:p;return g({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),d(e)}),[s,d,o]),tabValues:o}}var k=r(14185);const j="tabList_J5MA",S="tabItem_l0OV";var I=Object.defineProperty,D=Object.defineProperties,E=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&N(e,r,t[r]);if(P)for(var r of P(t))C.call(t,r)&&N(e,r,t[r]);return e};function V({className:e,block:t,selectedValue:r,selectValue:l,tabValues:i}){const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),s=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(u(t),l(a))},p=e=>{var t,r;let n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=null!=(t=c[r])?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=null!=(r=c[t])?r:c[c.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>{return n.createElement("li",(l=x({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>c.push(e),onKeyDown:p,onClick:s},o),i={className:(0,a.Z)("tabs__item",S,null==o?void 0:o.className,{"tabs__item--active":r===e})},D(l,E(i))),null!=t?t:e);var l,i})))}function q({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function Z(e){const t=w(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",j)},n.createElement(V,x(x({},e),t)),n.createElement(q,x(x({},e),t)))}function _(e){const t=(0,k.Z)();return n.createElement(Z,x({key:String(t)},e))}},90675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>w,frontMatter:()=>b,metadata:()=>y,toc:()=>g});var n=r(35318),a=r(48375),o=r(86386),l=r(11674),i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&m(e,r,t[r]);return e};const b={id:"dynamiccolorios",title:"DynamicColorIOS"},v=void 0,y={unversionedId:"dynamiccolorios",id:"version-0.68/dynamiccolorios",title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/versioned_docs/version-0.68/dynamiccolorios.md",sourceDirName:".",slug:"/dynamiccolorios",permalink:"/docs/0.68/dynamiccolorios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dynamiccolorios.md",tags:[],version:"0.68",frontMatter:{id:"dynamiccolorios",title:"DynamicColorIOS"},sidebar:"api",previous:{title:"ActionSheetIOS",permalink:"/docs/0.68/actionsheetios"},next:{title:"Settings",permalink:"/docs/0.68/settings"}},h={},g=[{value:"Developer notes",id:"developer-notes",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],O={toc:g};function w(e){var t,r=e,{components:i}=r,m=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},O),m),c(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"DynamicColorIOS({ light: color, dark: color });\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two keys: ",(0,n.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"light"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the future, more keys might become available for different user preferences, like high contrast.")),(0,n.kt)("p",null,"At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),(0,n.kt)("h4",f({},{id:"developer-notes"}),"Developer notes"),(0,n.kt)(a.Z,{groupId:"guide",defaultValue:"web",values:l.Z.getDevNotesTabs(["ios","web"]),mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"web",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you\u2019re familiar with ",(0,n.kt)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"))),(0,n.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",(0,n.kt)("a",f({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"}),(0,n.kt)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))))),(0,n.kt)("h2",f({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"import { DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue'\n});\n")))}w.isMDXComponent=!0}}]);