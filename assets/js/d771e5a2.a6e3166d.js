"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69392],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,v=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(27378),r=n(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>F});var a=n(27378),r=n(38944),l=n(12112),o=n(35331),i=n(14953),s=n(27886),c=n(7106),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m(e){return function(e){var t,n;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function y(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:m(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,l;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&C(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&C(e,n,t[n]);return e})({},n.location),l={search:t.toString()},d(a,p(l))))}),[r,n])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=y(e),[o,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:r}),[d,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),f=(()=>{const e=null!=s?s:d;return h({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var E=n(14185);const w="tabList_J5MA",D="tabItem_l0OV";var O=Object.defineProperty,A=Object.defineProperties,S=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))B.call(t,n)&&N(e,n,t[n]);if(x)for(var n of x(t))P.call(t,n)&&N(e,n,t[n]);return e};function T({className:e,block:t,selectedValue:n,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),r=i[a].value;r!==n&&(c(t),o(r))},d=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=null!=(t=s[n])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=null!=(n=s[t])?n:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>{return a.createElement("li",(o=j({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},l),i={className:(0,r.Z)("tabs__item",D,null==l?void 0:l.className,{"tabs__item--active":n===e})},A(o,S(i))),null!=t?t:e);var o,i})))}function I({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function V(e){const t=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w)},a.createElement(T,j(j({},e),t)),a.createElement(I,j(j({},e),t)))}function F(e){const t=(0,E.Z)();return a.createElement(V,j({key:String(t)},e))}},28259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>C,default:()=>k,frontMatter:()=>b,metadata:()=>m,toc:()=>h});var a=n(35318),r=n(48375),l=n(86386),o=n(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&f(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&f(e,n,t[n]);return e};const b={id:"systrace",title:"Systrace"},C=void 0,m={unversionedId:"systrace",id:"version-0.72/systrace",title:"Systrace",description:"Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.",source:"@site/versioned_docs/version-0.72/systrace.md",sourceDirName:".",slug:"/systrace",permalink:"/docs/systrace",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/systrace.md",tags:[],version:"0.72",frontMatter:{id:"systrace",title:"Systrace"},sidebar:"api",previous:{title:"StyleSheet",permalink:"/docs/stylesheet"},next:{title:"Transforms",permalink:"/docs/transforms"}},y={},h=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>installReactHook()</code>",id:"installreacthook",level:3},{value:"<code>setEnabled()</code>",id:"setenabled",level:3},{value:"<code>isEnabled()</code>",id:"isenabled",level:3},{value:"<code>beginEvent()</code>",id:"beginevent",level:3},{value:"<code>endEvent()</code>",id:"endevent",level:3},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",level:3},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",level:3},{value:"<code>counterEvent()</code>",id:"counterevent",level:3}],g={toc:h};function k(e){var t,n=e,{components:i}=n,f=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},g),f),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Systrace")," is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize."),(0,a.kt)("h2",v({},{id:"example"}),"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Systrace")," allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler."),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",v({},{className:"snack-player","data-snack-name":"Systrace Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%20%7B%5Cn%5Cn%20%20const%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%5Cn%20%20%20%20Systrace.beginEvent('event_label')%5Cn%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20const%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.endEvent()%5Cn%20%20%7D%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%5C%22%20onPress%3D%7B()%3D%3E%20enableProfiling()%7D%2F%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Stop%20capturing%5C%22%20onPress%3D%7B()%3D%3E%20stopProfiling()%7D%20color%3D%5C%22%23FF0000%5C%22%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",v({},{className:"snack-player","data-snack-name":"Systrace Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%5Cn%20%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%5Cn%20%20%20%20Systrace.beginEvent('event_label')%5Cn%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.endEvent()%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%5C%22%20onPress%3D%7B()%3D%3E%20this.enableProfiling()%7D%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Stop%20capturing%5C%22%20onPress%3D%7B()%3D%3E%20this.stopProfiling()%7D%20color%3D%5C%22%23FF0000%5C%22%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",v({},{id:"reference"}),"Reference"),(0,a.kt)("h2",v({},{id:"methods"}),"Methods"),(0,a.kt)("h3",v({},{id:"installreacthook"}),(0,a.kt)("inlineCode",{parentName:"h3"},"installReactHook()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static installReactHook(useFiber)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"setenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static setEnabled(enabled)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"isenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static isEnabled()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"beginevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"beginEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static beginEvent(profileName?, args?)\n")),(0,a.kt)("p",null,"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"endevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"endEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static endEvent()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"beginasyncevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"beginAsyncEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static beginAsyncEvent(profileName?)\n")),(0,a.kt)("p",null,"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"endasyncevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"endAsyncEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static endAsyncEvent(profileName?, cookie?)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"counterevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"counterEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"static counterEvent(profileName?, value?)\n")),(0,a.kt)("p",null,"Register the value to the profileName on the systrace timeline."))}k.isMDXComponent=!0}}]);