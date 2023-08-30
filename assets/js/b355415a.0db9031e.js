"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69305],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),r=n(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>F});var a=n(27378),r=n(38944),l=n(12112),o=n(35331),i=n(14953),u=n(27886),c=n(7106),s=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function C(e){return function(e){var t,n;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:C(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y({value:e,tabValues:t}){return t.some((t=>t.value===e))}function v({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,l;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))k.call(t,n)&&f(e,n,t[n]);return e})({},n.location),l={search:t.toString()},p(a,d(l))))}),[r,n])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[o,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=v({queryString:n,groupId:r}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=u?u:p;return y({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),d(e)}),[s,d,l]),tabValues:l}}var N=n(14185);const w="tabList_J5MA",D="tabItem_l0OV";var O=Object.defineProperty,x=Object.defineProperties,E=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&P(e,n,t[n]);if(T)for(var n of T(t))B.call(t,n)&&P(e,n,t[n]);return e};function j({className:e,block:t,selectedValue:n,selectValue:o,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),s=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==n&&(c(t),o(r))},p=e=>{var t,n;let a=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=null!=(t=u[n])?t:u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=null!=(n=u[t])?n:u[u.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>{return a.createElement("li",(o=V({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:s},l),i={className:(0,r.Z)("tabs__item",D,null==l?void 0:l.className,{"tabs__item--active":n===e})},x(o,E(i))),null!=t?t:e);var o,i})))}function S({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function I(e){const t=g(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w)},a.createElement(j,V(V({},e),t)),a.createElement(S,V(V({},e),t)))}function F(e){const t=(0,N.Z)();return a.createElement(I,V({key:String(t)},e))}},65951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>g,frontMatter:()=>k,metadata:()=>C,toc:()=>y});var a=n(35318),r=n(48375),l=n(86386),o=n(11674),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&m(e,n,t[n]);return e};const k={id:"touchableopacity",title:"TouchableOpacity"},f=void 0,C={unversionedId:"touchableopacity",id:"version-0.69/touchableopacity",title:"TouchableOpacity",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.69/touchableopacity.md",sourceDirName:".",slug:"/touchableopacity",permalink:"/docs/0.69/touchableopacity",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/touchableopacity.md",tags:[],version:"0.69",frontMatter:{id:"touchableopacity",title:"TouchableOpacity"},sidebar:"\u7ec4\u4ef6",previous:{title:"TouchableHighlight",permalink:"/docs/0.69/touchablehighlight"},next:{title:"TouchableWithoutFeedback",permalink:"/docs/0.69/touchablewithoutfeedback"}},h={},y=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>style</code>",id:"style",level:3},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:"<code>tvParallaxProperties</code>",id:"tvparallaxproperties",level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",level:3},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",level:3},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",level:3},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",level:3},{value:"<code>nextFocusRight</code>",id:"nextfocusright",level:3},{value:"<code>nextFocusUp</code>",id:"nextfocusup",level:3}],v={toc:y};function g(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=b(b({},v),m),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,a.kt)("a",b({parentName:"p"},{href:"/docs/0.69/pressable"}),"Pressable")," API.")),(0,a.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\u3002\u5f53\u6309\u4e0b\u7684\u65f6\u5019\uff0c\u5c01\u88c5\u7684\u89c6\u56fe\u7684\u4e0d\u900f\u660e\u5ea6\u4f1a\u964d\u4f4e\u3002"),(0,a.kt)("p",null,"\u4e0d\u900f\u660e\u5ea6\u7684\u53d8\u5316\u662f\u901a\u8fc7\u628a\u5b50\u5143\u7d20\u5c01\u88c5\u5728\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.View"),"\u4e2d\u6765\u5b9e\u73b0\u7684\uff0c\u8fd9\u4e2a\u52a8\u753b\u89c6\u56fe\u4f1a\u88ab\u6dfb\u52a0\u5230\u89c6\u56fe\u5c42\u7ea7\u4e2d\uff0c\u5c11\u6570\u60c5\u51b5\u4e0b\u6709\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u5e03\u5c40\u3002\uff08\u8bd1\u6ce8\uff1a\u6b64\u7ec4\u4ef6\u4e0e TouchableHighlight \u7684\u533a\u522b\u5728\u4e8e\u5e76\u6ca1\u6709\u989d\u5916\u7684\u989c\u8272\u53d8\u5316\uff0c\u66f4\u9002\u4e8e\u4e00\u822c\u573a\u666f\u3002\uff09"),(0,a.kt)("h2",b({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",b({},{className:"snack-player","data-snack-name":"TouchableOpacity Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(prevCount%20%3D%3E%20prevCount%20%2B%201)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%5Cn%20%20%20%20%20%20%20%20onPress%3D%7BonPress%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23DDDDDD%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",b({},{className:"snack-player","data-snack-name":"TouchableOpacity Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%5Cn%20%20%7D%5Cn%5Cn%20%20onPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7B%20count%20%7D%20%3D%20this.state%3B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.onPress%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23DDDDDD%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",b({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",b({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",b({parentName:"p"},{href:"/docs/0.69/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),(0,a.kt)("h3",b({},{id:"style"}),(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"View.style"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"activeopacity"}),(0,a.kt)("inlineCode",{parentName:"h3"},"activeOpacity")),(0,a.kt)("p",null,"\u6307\u5b9a\u5c01\u88c5\u7684\u89c6\u56fe\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a\uff080 \u5230 1 \u4e4b\u95f4\uff09\u3002\u9ed8\u8ba4\u503c\u4e3a 0.2\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"tvparallaxproperties"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tvParallaxProperties")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Apple TV only)")," Object with properties to control Apple TV parallax effects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),": If ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", parallax effects are enabled. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shiftDistanceX"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shiftDistanceY"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tiltAngle"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"magnification"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pressMagnification"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pressDuration"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.3"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pressDelay"),": Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"hastvpreferredfocus"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"nextfocusdown"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusDown")),(0,a.kt)("p",null,"TV next focus down (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"nextfocusforward"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusForward")),(0,a.kt)("p",null,"TV next focus forward (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"nextfocusleft"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusLeft")),(0,a.kt)("p",null,"TV next focus left (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"nextfocusright"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusRight")),(0,a.kt)("p",null,"TV next focus right (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"nextfocusup"}),(0,a.kt)("inlineCode",{parentName:"h3"},"nextFocusUp")),(0,a.kt)("p",null,"TV next focus up (see documentation for the View component)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android")))))}g.isMDXComponent=!0}}]);