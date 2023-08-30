"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[16668],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),r=n(38944);const l="tabItem_wHwb";var i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(27378),r=n(38944),l=n(12112),i=n(35331),o=n(14953),s=n(27886),p=n(7106),u=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function h(e){return function(e){var t,n;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:h(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y({value:e,tabValues:t}){return t.some((t=>t.value===e))}function k({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,l;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))C.call(t,n)&&f(e,n,t[n]);return e})({},n.location),l={search:t.toString()},c(a,d(l))))}),[r,n])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=b(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:n,groupId:r}),[c,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,p.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=s?s:c;return y({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),d(e)}),[u,d,l]),tabValues:l}}var w=n(14185);const S="tabList_J5MA",A="tabItem_l0OV";var D=Object.defineProperty,O=Object.defineProperties,E=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&j(e,n,t[n]);if(N)for(var n of N(t))B.call(t,n)&&j(e,n,t[n]);return e};function P({className:e,block:t,selectedValue:n,selectValue:i,tabValues:o}){const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),r=o[a].value;r!==n&&(p(t),i(r))},c=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=null!=(t=s[n])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=null!=(n=s[t])?n:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>{return a.createElement("li",(i=T({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:c,onClick:u},l),o={className:(0,r.Z)("tabs__item",A,null==l?void 0:l.className,{"tabs__item--active":n===e})},O(i,E(o))),null!=t?t:e);var i,o})))}function V({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function I(e){const t=g(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",S)},a.createElement(P,T(T({},e),t)),a.createElement(V,T(T({},e),t)))}function q(e){const t=(0,w.Z)();return a.createElement(I,T({key:String(t)},e))}},24973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>g,frontMatter:()=>C,metadata:()=>h,toc:()=>y});var a=n(35318),r=n(48375),l=n(86386),i=n(11674),o=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&m(e,n,t[n]);return e};const C={id:"appstate",title:"AppState"},f=void 0,h={unversionedId:"appstate",id:"version-0.63/appstate",title:"AppState",description:"AppState\u80fd\u544a\u8bc9\u4f60\u5e94\u7528\u5f53\u524d\u662f\u5728\u524d\u53f0\u8fd8\u662f\u5728\u540e\u53f0\uff0c\u5e76\u4e14\u80fd\u5728\u72b6\u6001\u53d8\u5316\u7684\u65f6\u5019\u901a\u77e5\u4f60\u3002",source:"@site/versioned_docs/version-0.63/appstate.md",sourceDirName:".",slug:"/appstate",permalink:"/docs/0.63/appstate",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appstate.md",tags:[],version:"0.63",frontMatter:{id:"appstate",title:"AppState"},sidebar:"version-0.63/api",previous:{title:"AppRegistry",permalink:"/docs/0.63/appregistry"},next:{title:"DevSettings",permalink:"/docs/0.63/devsettings"}},b={},y=[{value:"App States",id:"app-states",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<code>blur</code>",id:"blur",level:3},{value:"<code>change</code>",id:"change",level:3},{value:"<code>focus</code>",id:"focus",level:3},{value:"<code>memoryWarning</code>",id:"memorywarning",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>currentState</code>",id:"currentstate",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(95.65%), sunnylqm(4.35%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9565-sunnylqm435",level:5}],k={toc:y};function g(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},k),m),s(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AppState"),"\u80fd\u544a\u8bc9\u4f60\u5e94\u7528\u5f53\u524d\u662f\u5728\u524d\u53f0\u8fd8\u662f\u5728\u540e\u53f0\uff0c\u5e76\u4e14\u80fd\u5728\u72b6\u6001\u53d8\u5316\u7684\u65f6\u5019\u901a\u77e5\u4f60\u3002"),(0,a.kt)("p",null,"AppState \u901a\u5e38\u5728\u5904\u7406\u63a8\u9001\u901a\u77e5\u7684\u65f6\u5019\u7528\u6765\u51b3\u5b9a\u5185\u5bb9\u548c\u5bf9\u5e94\u7684\u884c\u4e3a\u3002"),(0,a.kt)("h3",v({},{id:"app-states"}),"App States"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"active")," - \u5e94\u7528\u6b63\u5728\u524d\u53f0\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"background")," - \u5e94\u7528\u6b63\u5728\u540e\u53f0\u8fd0\u884c\u3002\u7528\u6237\u53ef\u80fd\u9762\u5bf9\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u522b\u7684\u5e94\u7528\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u505c\u7559\u5728\u684c\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9 Android \u6765\u8bf4\u8fd8\u53ef\u80fd\u5904\u5728\u53e6\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"Activity"),"\u4e2d\uff08\u5373\u4fbf\u662f\u7531\u4f60\u7684\u5e94\u7528\u62c9\u8d77\u7684\uff09"))),(0,a.kt)("li",{parentName:"ul"},"[iOS]"," ",(0,a.kt)("inlineCode",{parentName:"li"},"inactive")," - \u6b64\u72b6\u6001\u8868\u793a\u5e94\u7528\u6b63\u5728\u524d\u540e\u53f0\u7684\u5207\u6362\u8fc7\u7a0b\u4e2d\uff0c\u6216\u662f\u5904\u5728\u7cfb\u7edf\u7684\u591a\u4efb\u52a1\u89c6\u56fe\uff0c\u53c8\u6216\u662f\u5904\u5728\u6765\u7535\u72b6\u6001\u4e2d\u3002")),(0,a.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u9605\u8bfb",(0,a.kt)("a",v({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"}),"Apple \u7684\u6587\u6863"),"\u3002"),(0,a.kt)("h2",v({},{id:"\u57fa\u672c\u7528\u6cd5"}),"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("p",null,"\u8981\u83b7\u53d6\u5f53\u524d\u7684\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AppState.currentState"),"\uff0c\u8fd9\u4e2a\u53d8\u91cf\u4f1a\u4e00\u76f4\u4fdd\u6301\u66f4\u65b0\u3002\u4e0d\u8fc7\u5728\u542f\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"currentState"),"\u53ef\u80fd\u4e3a null\uff0c\u76f4\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"AppState"),"\u4ece\u539f\u751f\u4ee3\u7801\u5f97\u5230\u901a\u77e5\u4e3a\u6b62\u3002"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",v({},{className:"snack-player","data-snack-name":"AppState Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useRef%2C%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%5Cn%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20AppState.addEventListener(%5C%22change%5C%22%2C%20_handleAppStateChange)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20AppState.removeEventListener(%5C%22change%5C%22%2C%20_handleAppStateChange)%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20const%20_handleAppStateChange%20%3D%20(nextAppState)%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(%5Cn%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%5Cn%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%5C%22active%5C%22%5Cn%20%20%20%20)%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22App%20has%20come%20to%20the%20foreground!%5C%22)%3B%5Cn%20%20%20%20%7D%5Cn%5Cn%20%20%20%20appState.current%20%3D%20nextAppState%3B%5Cn%20%20%20%20setAppStateVisible(appState.current)%3B%5Cn%20%20%20%20console.log(%5C%22AppState%5C%22%2C%20appState.current)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AppStateExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})),(0,a.kt)("p",null,"If you don't want to see the AppState update from ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"inactive")," on iOS you can remove the state variable and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"appState.current")," value.")),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",v({},{className:"snack-player","data-snack-name":"AppState Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20AppStateExample%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20appState%3A%20AppState.currentState%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20AppState.addEventListener(%5C%22change%5C%22%2C%20this._handleAppStateChange)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20AppState.removeEventListener(%5C%22change%5C%22%2C%20this._handleAppStateChange)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20_handleAppStateChange%20%3D%20nextAppState%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(%5Cn%20%20%20%20%20%20this.state.appState.match(%2Finactive%7Cbackground%2F)%20%26%26%5Cn%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%5C%22active%5C%22%5Cn%20%20%20%20)%20%7B%5Cn%20%20%20%20%20%20console.log(%5C%22App%20has%20come%20to%20the%20foreground!%5C%22)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20this.setState(%7B%20appState%3A%20nextAppState%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7Bthis.state.appState%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20AppStateExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("p",null,'\u4e0a\u9762\u7684\u8fd9\u4e2a\u4f8b\u5b50\u53ea\u4f1a\u663e\u793a"Current state is: active"\uff0c\u8fd9\u662f\u56e0\u4e3a\u5e94\u7528\u53ea\u6709\u5728',(0,a.kt)("inlineCode",{parentName:"p"},"active"),"\u72b6\u6001\u4e0b\u624d\u80fd\u88ab\u7528\u6237\u770b\u5230\u3002\u5e76\u4e14 null \u72b6\u6001\u53ea\u4f1a\u5728\u4e00\u5f00\u59cb\u7684\u4e00\u77ac\u95f4\u51fa\u73b0\u3002If you want to experiment with the code we recommend to use your own device instead of embedded preview."),(0,a.kt)("hr",null),(0,a.kt)("h1",v({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",v({},{id:"\u4e8b\u4ef6"}),"\u4e8b\u4ef6"),(0,a.kt)("h3",v({},{id:"blur"}),(0,a.kt)("inlineCode",{parentName:"h3"},"blur")),(0,a.kt)("p",null,"[Android only]"," Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",(0,a.kt)("a",v({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"}),"notification drawer"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",(0,a.kt)("inlineCode",{parentName:"p"},"blur")," event will get fired."),(0,a.kt)("h3",v({},{id:"change"}),(0,a.kt)("inlineCode",{parentName:"h3"},"change")),(0,a.kt)("p",null,"This even is received when the app state has changed. The listener is called with one of ",(0,a.kt)("a",v({parentName:"p"},{href:"/docs/0.63/appstate#app-states"}),"the current app state values"),"."),(0,a.kt)("h3",v({},{id:"focus"}),(0,a.kt)("inlineCode",{parentName:"h3"},"focus")),(0,a.kt)("p",null,"[Android only]"," Received when the app gains focus (the user is interacting with the app)."),(0,a.kt)("h3",v({},{id:"memorywarning"}),(0,a.kt)("inlineCode",{parentName:"h3"},"memoryWarning")),(0,a.kt)("p",null,"This event is used in the need of throwing memory warning or releasing it."),(0,a.kt)("h2",v({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",v({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"addEventListener(type, handler);\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\uff0c\u7528\u4e8e\u76d1\u542c\u5e94\u7528\u72b6\u6001\u7684\u53d8\u5316\u3002type \u53c2\u6570\u5e94\u586b",(0,a.kt)("inlineCode",{parentName:"p"},"change"),"\u3002"),(0,a.kt)("p",null,"TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"removeEventListener")," and use ",(0,a.kt)("inlineCode",{parentName:"p"},"addListener")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"listener.remove()")," directly. That will be a breaking change though, as both the method and event names are different (addListener events are currently required to be globally unique)."),(0,a.kt)("hr",null),(0,a.kt)("h3",v({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"removeEventListener(type, handler);\n")),(0,a.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u3002type \u53c2\u6570\u5e94\u586b",(0,a.kt)("inlineCode",{parentName:"p"},"change"),"\u3002"),(0,a.kt)("h2",v({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,a.kt)("h3",v({},{id:"currentstate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"currentState")),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"AppState.currentState;\n")),(0,a.kt)("hr",null),(0,a.kt)("h5",v({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9565-sunnylqm435"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",v({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(95.65%), ",(0,a.kt)("a",v({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(4.35%)"))}g.isMDXComponent=!0}}]);