"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[58724],{35318:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(v,o(o({ref:t},s),{},{components:a})):n.createElement(v,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const i="tabItem_wHwb";var o=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(27378),r=a(38944),i=a(12112),o=a(35331),l=a(14953),u=a(27886),c=a(7106),s=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function g(e){return function(e){var t,a;return null!=(a=null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}function y(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:g(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const a=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);var n,i;t.set(r,e),a.replace((n=((e,t)=>{for(var a in t||(t={}))v.call(t,a)&&b(e,a,t[a]);if(m)for(var a of m(t))f.call(t,a)&&b(e,a,t[a]);return e})({},a.location),i={search:t.toString()},p(n,d(i))))}),[r,a])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=y(e),[o,l]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,s]=h({queryString:a,groupId:r}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=u?u:p;return k({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),d(e)}),[s,d,i]),tabValues:i}}var N=a(14185);const O="tabList_J5MA",R="tabItem_l0OV";var P=Object.defineProperty,j=Object.defineProperties,S=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,I=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))T.call(t,a)&&I(e,a,t[a]);if(x)for(var a of x(t))E.call(t,a)&&I(e,a,t[a]);return e};function L({className:e,block:t,selectedValue:a,selectValue:o,tabValues:l}){const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),s=e=>{const t=e.currentTarget,n=u.indexOf(t),r=l[n].value;r!==a&&(c(t),o(r))},p=e=>{var t,a;let n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=null!=(t=u[a])?t:u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=null!=(a=u[t])?a:u[u.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:i})=>{return n.createElement("li",(o=A({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:s},i),l={className:(0,r.Z)("tabs__item",R,null==i?void 0:i.className,{"tabs__item--active":a===e})},j(o,S(l))),null!=t?t:e);var o,l})))}function V({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function D(e){const t=w(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",O)},n.createElement(L,A(A({},e),t)),n.createElement(V,A(A({},e),t)))}function C(e){const t=(0,N.Z)();return n.createElement(D,A({key:String(t)},e))}},58892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>k});var n=a(35318),r=a(48375),i=a(86386),o=a(11674),l=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&m(e,a,t[a]);return e};const f={id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},b=void 0,g={unversionedId:"communication-android",id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",description:"\u901a\u8fc7\u690d\u5165\u539f\u751f\u5e94\u7528\u548c\u539f\u751f UI \u7ec4\u4ef6\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002",source:"@site/../cndocs/communication-android.md",sourceDirName:".",slug:"/communication-android",permalink:"/docs/next/communication-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/communication-android.md",tags:[],version:"current",frontMatter:{id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u6253\u5305\u53d1\u5e03",permalink:"/docs/next/signed-apk-android"},next:{title:"\u94fe\u63a5\u539f\u751f\u5e93",permalink:"/docs/next/linking-libraries-ios"}},y={},k=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native",id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native",level:3},{value:"\u4eceReact Native\u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6",id:"\u4ecereact-native\u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6",level:3},{value:"\u5c5e\u6027\u7684\u9650\u5236",id:"\u5c5e\u6027\u7684\u9650\u5236",level:3},{value:"\u8de8\u8bed\u8a00\u4ea4\u4e92\u65b9\u5f0f\uff08\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757\uff09",id:"\u8de8\u8bed\u8a00\u4ea4\u4e92\u65b9\u5f0f\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757",level:2},{value:"\u4ece\u539f\u751f\u8c03\u7528React Native\u51fd\u6570\uff08\u4e8b\u4ef6\uff09",id:"\u4ece\u539f\u751f\u8c03\u7528react-native\u51fd\u6570\u4e8b\u4ef6",level:3},{value:"\u4eceReact Native\u8c03\u7528\u539f\u751f\u51fd\u6570\uff08\u539f\u751f\u6a21\u5757\uff09",id:"\u4ecereact-native\u8c03\u7528\u539f\u751f\u51fd\u6570\u539f\u751f\u6a21\u5757",level:3}],h={toc:k};function w(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},h),m),u(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u901a\u8fc7",(0,n.kt)("a",v({parentName:"p"},{href:"integration-with-existing-apps"}),"\u690d\u5165\u539f\u751f\u5e94\u7528"),"\u548c",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android"}),"\u539f\u751f UI \u7ec4\u4ef6"),"\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002"),(0,n.kt)("h2",v({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,n.kt)("p",null,"React Native \u662f\u4ece React \u4e2d\u5f97\u5230\u7684\u7075\u611f\uff0c\u56e0\u6b64\u57fa\u672c\u7684\u4fe1\u606f\u6d41\u662f\u7c7b\u4f3c\u7684\u3002\u5728 React \u4e2d\u4fe1\u606f\u662f\u5355\u5411\u7684\u3002\u6211\u4eec\u7ef4\u62a4\u7740\u7ec4\u4ef6\u5c42\u6b21\uff0c\u5728\u5176\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4ec5\u4f9d\u8d56\u4e8e\u5b83\u7236\u7ec4\u4ef6\u548c\u81ea\u5df1\u7684\u72b6\u6001\u3002\u901a\u8fc7\u5c5e\u6027\uff08props\uff09\u6211\u4eec\u5c06\u4fe1\u606f\u4ece\u4e0a\u800c\u4e0b\u7684\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u5230\u5b50\u5143\u7d20\u3002\u5982\u679c\u4e00\u4e2a\u7956\u5148\u7ec4\u4ef6\u9700\u8981\u81ea\u5df1\u5b50\u5b59\u7684\u72b6\u6001\uff0c\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7ed9\u5bf9\u5e94\u7684\u5b50\u5143\u7d20\u3002"),(0,n.kt)("p",null,"React Native \u4e5f\u8fd0\u7528\u4e86\u76f8\u540c\u7684\u6982\u5ff5\u3002\u53ea\u8981\u6211\u4eec\u5b8c\u5168\u5728\u6846\u67b6\u5185\u6784\u5efa\u5e94\u7528\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u548c\u56de\u8c03\u51fd\u6570\u6765\u8c03\u52a8\u6574\u4e2a\u5e94\u7528\u3002\u4f46\u662f\uff0c\u5f53\u6211\u4eec\u6df7\u5408 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u7279\u6b8a\u7684\uff0c\u8de8\u8bed\u8a00\u7684\u673a\u5236\u6765\u4f20\u9012\u4fe1\u606f\u3002"),(0,n.kt)("h2",v({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,n.kt)("p",null,"\u5c5e\u6027\u662f\u6700\u7b80\u5355\u7684\u8de8\u7ec4\u4ef6\u901a\u4fe1\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b9\u6cd5\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native \u6216\u8005\u4ece React Native \u5230\u539f\u751f\u7ec4\u4ef6\u3002"),(0,n.kt)("h3",v({},{id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native"}),"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u4e3bactivity\u4e2d\u63d0\u4f9b",(0,n.kt)("inlineCode",{parentName:"p"},"ReactActivityDelegate"),"\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\u6765\u5c06\u5c5e\u6027\u4f20\u9012\u7ed9React Native\u5e94\u7528\u7a0b\u5e8f\u3002\u8fd9\u4e2a\u5b9e\u73b0\u5e94\u8be5\u91cd\u5199",(0,n.kt)("inlineCode",{parentName:"p"},"getLaunchOptions"),"\u65b9\u6cd5\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e26\u6709\u6240\u9700\u5c5e\u6027\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"Bundle"),"\u5bf9\u8c61\u3002"),(0,n.kt)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'public class MainActivity extends ReactActivity {\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new ReactActivityDelegate(this, getMainComponentName()) {\n      @Override\n      protected Bundle getLaunchOptions() {\n        Bundle initialProperties = new Bundle();\n        ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n                "http://foo.com/bar1.png",\n                "http://foo.com/bar2.png"\n        ));\n        initialProperties.putStringArrayList("images", imageList);\n        return initialProperties;\n      }\n    };\n  }\n}\n'))),(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'class MainActivity : ReactActivity() {\n    override fun createReactActivityDelegate(): ReactActivityDelegate {\n        return object : ReactActivityDelegate(this, mainComponentName) {\n            override fun getLaunchOptions(): Bundle {\n                val imageList = arrayListOf("http://foo.com/bar1.png", "http://foo.com/bar2.png")\n                val initialProperties = Bundle().apply { putStringArrayList("images", imageList) }\n                return initialProperties\n            }\n        }\n    }\n}\n')))),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { View, Image } from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return <Image source={{ uri: imgURI }} />;\n  }\n  render() {\n    return <View>{this.props.images.map(this.renderImage)}</View>;\n  }\n}\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ReactRootView")," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u8bfb\u5199\u7684\u5c5e\u6027 ",(0,n.kt)("inlineCode",{parentName:"p"},"appProperties"),"\u3002\u5728\u8bbe\u7f6e\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"appProperties")," \u540e\uff0cReact Native \u5e94\u7528\u4f1a\u4f7f\u7528\u65b0\u7684\u5c5e\u6027\u91cd\u65b0\u6e32\u67d3\u3002\u53ea\u6709\u5f53\u65b0\u66f4\u65b0\u7684\u5c5e\u6027\u4e0e\u4e4b\u524d\u7684\u5c5e\u6027\u4e0d\u540c\u65f6\uff0c\u624d\u4f1a\u6267\u884c\u66f4\u65b0\u3002"),(0,n.kt)(r.Z,{groupId:"android-language",queryString:!0,defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'Bundle updatedProps = mReactRootView.getAppProperties();\nArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n        "http://foo.com/bar3.png",\n        "http://foo.com/bar4.png"\n));\nupdatedProps.putStringArrayList("images", imageList);\n\nmReactRootView.setAppProperties(updatedProps);\n'))),(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'var updatedProps: Bundle = reactRootView.getAppProperties()\nvar imageList = arrayListOf("http://foo.com/bar3.png", "http://foo.com/bar4.png")\n')))),(0,n.kt)("p",null,"\u968f\u65f6\u66f4\u65b0\u5c5e\u6027\u90fd\u662f\u53ef\u4ee5\u7684\u3002\u4f46\u662f\uff0c\u66f4\u65b0\u64cd\u4f5c\u5fc5\u987b\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6267\u884c\u3002\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u7ebf\u7a0b\u4e0a\u4f7f\u7528getter\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\u6ca1\u6709\u529e\u6cd5\u53ea\u66f4\u65b0\u90e8\u5206\u5c5e\u6027\u3002\u6211\u4eec\u5efa\u8bae\u4f60\u81ea\u5df1\u6784\u5efa\u4e00\u4e2a\u5305\u88c5\u5668\u6765\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u6ce8\u610f:"))," \u76ee\u524d\uff0c\u5728React Native\u7684\u9876\u5c42\u7ec4\u4ef6\u4e2d\uff0cJS\u51fd\u6570",(0,n.kt)("inlineCode",{parentName:"p"},"componentWillUpdateProps"),"\u4e0d\u4f1a\u5728\u5c5e\u6027\u66f4\u65b0\u540e\u88ab\u8c03\u7528\u3002\u7136\u800c\uff0c\u4f60\u53ef\u4ee5\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"\u51fd\u6570\u4e2d\u8bbf\u95ee\u65b0\u7684props\u3002")),(0,n.kt)("h3",v({},{id:"\u4ecereact-native\u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6"}),"\u4eceReact Native\u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6"),(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"}),"native-components-android#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"),"\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u66b4\u9732\u539f\u751f\u7ec4\u4ef6\u5c5e\u6027\u7684\u95ee\u9898\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u8981\u5c06\u9700\u8981\u5728JavaScript\u4e2d\u53cd\u6620\u7684\u5c5e\u6027\u516c\u5f00\u4e3a\u5e26\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"@ReactProp"),"\u6ce8\u89e3\u7684setter\u65b9\u6cd5\uff0c\u7136\u540e\u5728React Native\u4e2d\u4f7f\u7528\u5b83\u4eec\uff0c\u5c31\u50cf\u8be5\u7ec4\u4ef6\u662f\u666e\u901a\u7684React Native\u7ec4\u4ef6\u4e00\u6837\u3002"),(0,n.kt)("h3",v({},{id:"\u5c5e\u6027\u7684\u9650\u5236"}),"\u5c5e\u6027\u7684\u9650\u5236"),(0,n.kt)("p",null,"\u8de8\u8bed\u8a00\u5c5e\u6027\u7684\u4e3b\u8981\u7f3a\u70b9\u662f\u5b83\u4eec\u4e0d\u652f\u6301\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u5c06\u5141\u8bb8\u6211\u4eec\u5904\u7406\u81ea\u4e0b\u800c\u4e0a\u7684\u6570\u636e\u7ed1\u5b9a\u3002\u60f3\u8c61\u4e00\u4e0b\uff0c\u60a8\u6709\u4e00\u4e2a\u5c0f\u578bRN\u89c6\u56fe\uff0c\u60a8\u5e0c\u671b\u901a\u8fc7JS\u64cd\u4f5c\u4ece\u539f\u751f\u7236\u89c6\u56fe\u4e2d\u79fb\u9664\u5b83\u3002\u4f7f\u7528props\u6ca1\u6709\u529e\u6cd5\u5b9e\u73b0\u6b64\u76ee\u6807\uff0c\u56e0\u4e3a\u4fe1\u606f\u9700\u8981\u81ea\u4e0b\u800c\u4e0a\u4f20\u9012\u3002"),(0,n.kt)("p",null,"\u867d\u7136\u6211\u4eec\u6709\u4e00\u79cd\u8de8\u8bed\u8a00\u56de\u8c03\u51fd\u6570\uff08",(0,n.kt)("a",v({parentName:"p"},{href:"native-modules-android#callbacks"}),"\u5728\u6b64\u5904\u63cf\u8ff0"),"\uff09\uff0c\u4f46\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u5e76\u4e0d\u603b\u662f\u6211\u4eec\u6240\u9700\u7684\u4e1c\u897f\u3002\u4e3b\u8981\u95ee\u9898\u662f\u5b83\u4eec\u4e0d\u6253\u7b97\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012\u3002\u76f8\u53cd\uff0c\u8be5\u673a\u5236\u5141\u8bb8\u6211\u4eec\u4eceJS\u89e6\u53d1\u672c\u5730\u64cd\u4f5c\uff0c\u5e76\u5728JS\u4e2d\u5904\u7406\u8be5\u64cd\u4f5c\u7684\u7ed3\u679c\u3002"),(0,n.kt)("h2",v({},{id:"\u8de8\u8bed\u8a00\u4ea4\u4e92\u65b9\u5f0f\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757"}),"\u8de8\u8bed\u8a00\u4ea4\u4e92\u65b9\u5f0f\uff08\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757\uff09"),(0,n.kt)("p",null,"\u5982\u524d\u4e00\u7ae0\u6240\u8ff0\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f7f\u7528\u5c5e\u6027\u5b58\u5728\u4e00\u4e9b\u9650\u5236\u3002\u6709\u65f6\u5c5e\u6027\u4e0d\u8db3\u4ee5\u9a71\u52a8\u6211\u4eec\u5e94\u7528\u7a0b\u5e8f\u7684\u903b\u8f91\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u63d0\u4f9b\u66f4\u5927\u7075\u6d3b\u6027\u7684\u89e3\u51b3\u65b9\u6848\u3002\u672c\u7ae0\u4ecb\u7ecd\u4e86React Native\u4e2d\u53ef\u7528\u7684\u5176\u4ed6\u901a\u4fe1\u6280\u672f\u3002\u5b83\u4eec\u53ef\u4ee5\u7528\u4e8e\u5185\u90e8\u901a\u4fe1\uff08\u5728RN\u4e2dJS\u548c\u539f\u751f\u5c42\u4e4b\u95f4\uff09\u4ee5\u53ca\u5916\u90e8\u901a\u4fe1\uff08\u5728RN\u548c\u60a8\u5e94\u7528\u7a0b\u5e8f\u7684\u201c\u7eaf\u539f\u751f\u201d\u90e8\u5206\u4e4b\u95f4\uff09\u3002"),(0,n.kt)("p",null,"React Native\u4f7f\u60a8\u80fd\u591f\u6267\u884c\u8de8\u8bed\u8a00\u51fd\u6570\u8c03\u7528\u3002\u60a8\u53ef\u4ee5\u4eceJS\u6267\u884c\u81ea\u5b9a\u4e49\u539f\u751f\u4ee3\u7801\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u6839\u636e\u6211\u4eec\u6240\u5de5\u4f5c\u7684\u4e00\u4fa7\uff0c\u6211\u4eec\u4ee5\u4e0d\u540c\u65b9\u5f0f\u5b9e\u73b0\u76f8\u540c\u76ee\u6807\u3002\u5bf9\u4e8e\u539f\u751f - \u6211\u4eec\u4f7f\u7528\u4e8b\u4ef6\u673a\u5236\u6765\u5b89\u6392\u5728JS\u4e2d\u6267\u884c\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\uff0c\u800c\u5bf9\u4e8eReact Native\uff0c\u5219\u76f4\u63a5\u8c03\u7528\u7531\u539f\u751f\u6a21\u5757\u5bfc\u51fa\u7684\u65b9\u6cd5\u3002"),(0,n.kt)("h3",v({},{id:"\u4ece\u539f\u751f\u8c03\u7528react-native\u51fd\u6570\u4e8b\u4ef6"}),"\u4ece\u539f\u751f\u8c03\u7528React Native\u51fd\u6570\uff08\u4e8b\u4ef6\uff09"),(0,n.kt)("p",null,"\u4e8b\u4ef6\u5728",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android#events"}),"native-components-android#events"),"\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u6709\u8be6\u7ec6\u63cf\u8ff0\u3002\u8bf7\u6ce8\u610f\uff0c\u4f7f\u7528\u4e8b\u4ef6\u4e0d\u80fd\u4fdd\u8bc1\u6267\u884c\u65f6\u95f4\uff0c\u56e0\u4e3a\u4e8b\u4ef6\u662f\u5728\u5355\u72ec\u7ebf\u7a0b\u4e0a\u5904\u7406\u7684\u3002"),(0,n.kt)("p",null,"\u4e8b\u4ef6\u975e\u5e38\u5f3a\u5927\uff0c\u56e0\u4e3a\u5b83\u4eec\u5141\u8bb8\u6211\u4eec\u65e0\u9700\u5f15\u7528\u5373\u53ef\u66f4\u6539React Native\u7ec4\u4ef6\u3002\u4f46\u662f\uff0c\u5728\u4f7f\u7528\u5b83\u4eec\u65f6\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u9677\u9631\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u4e8b\u4ef6\u53ef\u4ee5\u4ece\u4efb\u4f55\u5730\u65b9\u53d1\u9001\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u5c06\u610f\u5927\u5229\u9762\u5f0f\u4f9d\u8d56\u5173\u7cfb\u5f15\u5165\u9879\u76ee\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5171\u4eab\u547d\u540d\u7a7a\u95f4\uff0c\u8fd9\u610f\u5473\u7740\u53ef\u80fd\u4f1a\u9047\u5230\u67d0\u4e9b\u540d\u79f0\u51b2\u7a81\u3002\u51b2\u7a81\u4e0d\u4f1a\u88ab\u9759\u6001\u68c0\u6d4b\u5230\uff0c\u8fd9\u4f7f\u5f97\u8c03\u8bd5\u53d8\u5f97\u56f0\u96be\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u591a\u4e2a\u76f8\u540c\u7684React Native\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u5e76\u4e14\u5e0c\u671b\u4ece\u4e8b\u4ef6\u7684\u89d2\u5ea6\u533a\u5206\u5b83\u4eec\uff0c\u5219\u53ef\u80fd\u9700\u8981\u5f15\u5165\u6807\u8bc6\u7b26\u5e76\u5c06\u5176\u4e0e\u4e8b\u4ef6\u4e00\u8d77\u4f20\u9012\uff08\u53ef\u4ee5\u4f7f\u7528\u539f\u751f\u89c6\u56fe\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"reactTag"),"\u4f5c\u4e3a\u6807\u8bc6\u7b26\uff09\u3002")),(0,n.kt)("h3",v({},{id:"\u4ecereact-native\u8c03\u7528\u539f\u751f\u51fd\u6570\u539f\u751f\u6a21\u5757"}),"\u4eceReact Native\u8c03\u7528\u539f\u751f\u51fd\u6570\uff08\u539f\u751f\u6a21\u5757\uff09"),(0,n.kt)("p",null,"\u539f\u751f\u6a21\u5757\u662f\u5728JS\u4e2d\u53ef\u7528\u7684Java/Kotlin\u7c7b\u3002\u901a\u5e38\uff0c\u6bcf\u4e2aJS\u6865\u63a5\u5668\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u6a21\u5757\u5b9e\u4f8b\u3002\u5b83\u4eec\u53ef\u4ee5\u5411React Native\u5bfc\u51fa\u4efb\u610f\u51fd\u6570\u548c\u5e38\u91cf\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",v({parentName:"p"},{href:"native-modules-android"}),"native-modules-android"),"\u4e2d\u5bf9\u5176\u8fdb\u884c\u4e86\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"\u8b66\u544a")),"\uff1a\u6240\u6709\u539f\u751f\u6a21\u5757\u5171\u4eab\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u3002")))}w.isMDXComponent=!0}}]);