"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[65962],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),r=n(38944);const o="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>B});var a=n(27378),r=n(38944),o=n(12112),i=n(35331),l=n(14953),u=n(27886),s=n(7106),p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function g(e){return function(e){var t,n;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function v(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:g(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,o;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&f(e,n,t[n]);if(d)for(var n of d(t))y.call(t,n)&&f(e,n,t[n]);return e})({},n.location),o={search:t.toString()},c(a,m(o))))}),[r,n])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=v(e),[i,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,p]=h({queryString:n,groupId:r}),[c,m]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,s.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),d=(()=>{const e=null!=u?u:c;return k({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{d&&l(d)}),[d]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,o]),tabValues:o}}var C=n(14185);const w="tabList_J5MA",S="tabItem_l0OV";var O=Object.defineProperty,T=Object.defineProperties,j=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&I(e,n,t[n]);if(x)for(var n of x(t))P.call(t,n)&&I(e,n,t[n]);return e};function J({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(s(t),i(r))},c=e=>{var t,n;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;a=null!=(t=u[n])?t:u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=null!=(n=u[t])?n:u[u.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>{return a.createElement("li",(i=E({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:c,onClick:p},o),l={className:(0,r.Z)("tabs__item",S,null==o?void 0:o.className,{"tabs__item--active":n===e})},T(i,j(l))),null!=t?t:e);var i,l})))}function _({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function D(e){const t=N(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w)},a.createElement(J,E(E({},e),t)),a.createElement(_,E(E({},e),t)))}function B(e){const t=(0,C.Z)();return a.createElement(D,E({key:String(t)},e))}},31043:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const m={toc:[]};function d(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},m),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",c({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}d.isMDXComponent=!0},99768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>C,frontMatter:()=>f,metadata:()=>v,toc:()=>h});var a=n(35318),r=n(48375),o=n(86386),i=n(11674),l=n(31043),u=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&b(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&b(e,n,t[n]);return e};const f={id:"cxx-custom-types",title:"Supporting Custom C++ Types"},g=void 0,v={unversionedId:"the-new-architecture/cxx-custom-types",id:"version-0.71/the-new-architecture/cxx-custom-types",title:"Supporting Custom C++ Types",description:"By default C++ Turbo Native Modules support bridging functionality for most std:: standard types.",source:"@site/versioned_docs/version-0.71/the-new-architecture/cxx-custom-types.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/cxx-custom-types",permalink:"/docs/0.71/the-new-architecture/cxx-custom-types",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/cxx-custom-types.md",tags:[],version:"0.71",frontMatter:{id:"cxx-custom-types",title:"Supporting Custom C++ Types"},sidebar:"docs",previous:{title:"C++ Turbo Native Modules",permalink:"/docs/0.71/the-new-architecture/cxx-cxxturbomodules"},next:{title:"\u5411\u540e\u517c\u5bb9\u7684\u610f\u4e49",permalink:"/docs/0.71/the-new-architecture/backward-compatibility"}},k={},h=[{value:"\u793a\u4f8b\uff1aInt64",id:"\u793a\u4f8bint64",level:2},{value:"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b",id:"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b",level:2},{value:"Custom structs",id:"custom-structs",level:2},{value:"Manually typed",id:"manually-typed",level:3},{value:"Struct generator",id:"struct-generator",level:3},{value:"Member types",id:"member-types",level:4},{value:"Base class",id:"base-class",level:4}],N={toc:h};function C(e){var t,n=e,{components:u}=n,b=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=y(y({},N),b),s(t,p({components:u,mdxType:"MDXLayout"}))),(0,a.kt)(l.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"By default C++ Turbo Native Modules support ",(0,a.kt)("a",y({parentName:"p"},{href:"https://github.com/facebook/react-native/tree/main/ReactCommon/react/bridging"}),"bridging functionality")," for most ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")," standard types."),(0,a.kt)("p",null,"If you want to add support for new / custom types in your app / library, you only need to provide the necessary ",(0,a.kt)("inlineCode",{parentName:"p"},"bridging")," header file."),(0,a.kt)("p",null,"This guide continues the previous ",(0,a.kt)("a",y({parentName:"p"},{href:"./cxx-cxxturbomodules"}),"C++ Turbo Native Modules")," section."),(0,a.kt)("h2",y({},{id:"\u793a\u4f8bint64"}),"\u793a\u4f8b\uff1aInt64"),(0,a.kt)("p",null,"C++ Turbo Native Modules don't support ",(0,a.kt)("inlineCode",{parentName:"p"},"int64_t")," numbers yet - because JavaScript doesn't support numbers greater ",(0,a.kt)("inlineCode",{parentName:"p"},"2^53"),"."),(0,a.kt)("p",null,"We can't represent numbers > ",(0,a.kt)("inlineCode",{parentName:"p"},"2^53")," as JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"'s - but we can represent them as JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"'s and automatically convert (aka. ",(0,a.kt)("inlineCode",{parentName:"p"},"bridge"),") them to C++ ",(0,a.kt)("inlineCode",{parentName:"p"},"int64_t"),"'s by creating a custom Bridging header file called ",(0,a.kt)("inlineCode",{parentName:"p"},"Int64.h")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tm")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"Int64.h","Int64.h":!0}),'#pragma once\n\n#include <react/bridging/Bridging.h>\n\nnamespace facebook::react {\n\ntemplate <>\nstruct Bridging<int64_t> {\n  static int64_t fromJs(jsi::Runtime &rt, const jsi::String &value) {\n    try {\n      size_t pos;\n      auto str = value.utf8(rt);\n      auto num = std::stoll(str, &pos);\n      if (pos != str.size()) {\n        throw std::invalid_argument("Invalid number"); // don\'t support alphanumeric strings\n      }\n      return num;\n    } catch (const std::logic_error &e) {\n      throw jsi::JSError(rt, e.what());\n    }\n  }\n\n  static jsi::String toJs(jsi::Runtime &rt, int64_t value) {\n    return bridging::toJs(rt, std::to_string(value));\n  }\n};\n\n} // namespace facebook::react\n')),(0,a.kt)("p",null,"The key components for your custom ",(0,a.kt)("inlineCode",{parentName:"p"},"bridging")," header are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Explicit specialization of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Bridging")," struct for your custom type, ",(0,a.kt)("inlineCode",{parentName:"li"},"int64_t")," in this case"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"fromJs")," function to convert from ",(0,a.kt)("inlineCode",{parentName:"li"},"jsi::")," types to your custom type"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"toJS")," function to convert from your custom type to ",(0,a.kt)("inlineCode",{parentName:"li"},"jsi:")," types")),(0,a.kt)("p",null,"Omitting either ",(0,a.kt)("inlineCode",{parentName:"p"},"fromJS")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"toJS")," would make you ",(0,a.kt)("inlineCode",{parentName:"p"},"bridging")," header either ",(0,a.kt)("em",{parentName:"p"},"readonly")," or ",(0,a.kt)("em",{parentName:"p"},"writeonly"),"."),(0,a.kt)("p",null,"Now you can add the following function to your JavaScript spec:"),(0,a.kt)(r.Z,{groupId:"turbomodule-specs",defaultValue:i.Z.defaultJavaScriptSpecLanguages,values:i.Z.javaScriptSpecLanguages,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-typescript",metastring:'title="NativeSampleModule.ts"',title:'"NativeSampleModule.ts"'}),"   // ...\n   readonly cubicRoot: (input: string) => number;\n   // ..\n"))),(0,a.kt)(o.Z,{value:"flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-js",metastring:'title="NativeSampleModule.js"',title:'"NativeSampleModule.js"'}),"   // ...\n   +cubicRoot: (input: string) => number;\n   // ..\n")))),(0,a.kt)("p",null,"Declare it in your ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h")," file and include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Int64.h")," header file:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'//...\n#include "Int64.h"\n//...\nint32_t cubicRoot(jsi::Runtime& rt, int64_t input);\n')),(0,a.kt)("p",null,"And implement it in ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.cpp"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"//...\n#include <cmath>\n//...\nint32_t NativeSampleModule::cubicRoot(jsi::Runtime& rt, int64_t input) {\n    return std::cbrt(input);\n}\n")),(0,a.kt)("p",null,"In your app you can call this new native function via:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-js"}),"<Section title=\"Cxx TurboModule\">\n  NativeSampleModule.cubicRoot(...) ={' '}\n  {JSON.stringify(\n    NativeSampleModule.cubicRoot('9223372036854775807'),\n  )}\n</Section>\n")),(0,a.kt)("p",null,"which should return ",(0,a.kt)("inlineCode",{parentName:"p"},"2097152"),"."),(0,a.kt)("h2",y({},{id:"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\u4efb\u610f\u81ea\u5b9a\u4e49\u7c7b\u578b"),(0,a.kt)("p",null,"Similar to the example above you can now write custom ",(0,a.kt)("inlineCode",{parentName:"p"},"bridging")," functionality for any custom C++ type you want to expose to react-native. E.g., you can add support for ",(0,a.kt)("inlineCode",{parentName:"p"},"folly::StringPiece"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"QString"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"boost::filesystem::path"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"absl::optional")," or any other type you need to support in your C++ Turbo Native Modules."),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:'title="Path.h"',title:'"Path.h"'}),"#pragma once\n\n#include <react/bridging/Bridging.h>\n#include <boost/filesystem.hpp>\n\nnamespace facebook::react {\n\ntemplate<>\nstruct Bridging<boost::filesystem::path> {\n  static boost::filesystem::path fromJs(jsi::Runtime& rt, const std::string& value) { // auto-bridge from jsi::String to std::string\n    return boost::filesystem::path(value);\n  }\n\n  static jsi::String toJs(jsi::Runtime& rt, boost::filesystem::path value) {\n    return bridging::toJs(rt, value.string());\n  }\n};\n\n} // namespace facebook::react\n")),(0,a.kt)("h2",y({},{id:"custom-structs"}),"Custom structs"),(0,a.kt)("p",null,"You can use the same approach for you custom types in JavaScript such as this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-js"}),"export type CustomType = {\n  key: string,\n  enabled: boolean,\n  time?: number,\n};\n")),(0,a.kt)("p",null,"which can be exposed to your C++ Turbo Native Module via"),(0,a.kt)(r.Z,{groupId:"turbomodule-specs",defaultValue:i.Z.defaultJavaScriptSpecLanguages,values:i.Z.javaScriptSpecLanguages,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-typescript",metastring:'title="NativeSampleModule.ts"',title:'"NativeSampleModule.ts"'}),"   // ...\n   readonly passCustomType: (input: CustomType) => CustomType;\n   // ..\n"))),(0,a.kt)(o.Z,{value:"flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-js",metastring:'title="NativeSampleModule.js"',title:'"NativeSampleModule.js"'}),"   // ...\n   +passCustomType: (input: CustomType) => CustomType;\n   // ..\n")))),(0,a.kt)("h3",y({},{id:"manually-typed"}),"Manually typed"),(0,a.kt)("p",null,"To use this custom type in C++, you need to define your custom Struct and ",(0,a.kt)("inlineCode",{parentName:"p"},"bridging")," function e.g., directly in ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'struct CustomType {\n  std::string key;\n  bool enabled;\n  std::optional<int32_t> time;\n};\n\ntemplate <>\nstruct Bridging<CustomType> {\n  static CustomType fromJs(\n      jsi::Runtime &rt,\n      const jsi::Object &value,\n      const std::shared_ptr<CallInvoker> &jsInvoker) {\n    return CustomType{\n        bridging::fromJs<std::string>(\n            rt, value.getProperty(rt, "key"), jsInvoker),\n        bridging::fromJs<bool>(\n            rt, value.getProperty(rt, "enabled"), jsInvoker),\n        bridging::fromJs<std::optional<int32_t>>(\n            rt, value.getProperty(rt, "time"), jsInvoker)};\n  }\n\n  static jsi::Object toJs(jsi::Runtime &rt, const CustomType &value) {\n    auto result = facebook::jsi::Object(rt);\n    result.setProperty(rt, "key", bridging::toJs(rt, value.key));\n    result.setProperty(rt, "enabled", bridging::toJs(rt, value.enabled));\n    if (value.time) {\n      result.setProperty(rt, "time", bridging::toJs(rt, value.time.value()));\n    }\n    return result;\n  }\n};\n')),(0,a.kt)("p",null,"Declare it in your ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"  CustomType passCustomType(jsi::Runtime& rt, CustomType input);\n")),(0,a.kt)("p",null,"Implement it in ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.cpp"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'CustomType NativeSampleModule::passCustomType(jsi::Runtime& rt, CustomType input) {\n  input.key = "1909";\n  input.enabled = !input.enabled;\n  input.time = 42;\n  return input;\n}\n')),(0,a.kt)("p",null,"In your app you can call this new native function via:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-js"}),"<Section title=\"Cxx TurboModule\">\n  NativeSampleModule.passCustomType(...) ={' '}\n  {JSON.stringify(\n    NativeSampleModule.passCustomType({\n      key: '123',\n      enabled: true,\n      time: undefined,\n    }),\n  )}\n</Section>\n")),(0,a.kt)("p",null,"which should return ",(0,a.kt)("inlineCode",{parentName:"p"},'{"key":"1909","enabled":false","time":42}'),"."),(0,a.kt)("p",null,"This works - but is quite complex."),(0,a.kt)("h3",y({},{id:"struct-generator"}),"Struct generator"),(0,a.kt)("p",null,(0,a.kt)("a",y({parentName:"p"},{href:"/docs/0.71/the-new-architecture/pillars-codegen"}),(0,a.kt)("strong",{parentName:"a"},"Codegen"))," for C++ Turbo Native Modules does support struct generators, so you can simplify the code above in ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModule.h")," to:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"using CustomType = NativeSampleModuleBaseCustomType<std::string, bool, std::optional<int32_t>>;\ntemplate <>\nstruct Bridging<CustomType>\n    : NativeSampleModuleBaseCustomTypeBridging<std::string, bool, std::optional<int32_t>> {};\n")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"using CustomType")," you declare a name for your concrete struct."),(0,a.kt)("h4",y({},{id:"member-types"}),"Member types"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"std::string, bool, std::optional<int32_t>")," you define the property types of the struct members in the order they were defined in your JavaScript spec. The ",(0,a.kt)("strong",{parentName:"p"},"order matters"),". The ",(0,a.kt)("em",{parentName:"p"},"1st")," template argument refers to the ",(0,a.kt)("em",{parentName:"p"},"1st")," data type of the struct, and so forth."),(0,a.kt)("p",null,"Without any custom conversion functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you can only ",(0,a.kt)("inlineCode",{parentName:"li"},"bridge")," a JS string to a ",(0,a.kt)("a",y({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/ReactCommon/react/bridging/AString.h"}),"std::string")," and a JS boolean to a ",(0,a.kt)("a",y({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/ReactCommon/react/bridging/Bool.h"}),"bool"),"."),(0,a.kt)("li",{parentName:"ul"},"but you can choose different JS ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," ",(0,a.kt)("a",y({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/ReactCommon/react/bridging/Number.h"}),"representations in C++"),".")),(0,a.kt)("h4",y({},{id:"base-class"}),"Base class"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NativeSampleModuleBaseCustomType")," is an auto-generated template in your ",(0,a.kt)("inlineCode",{parentName:"p"},"AppSpecsJSI.h")," which name is generated by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NativeSampleModule")," (name of C++ Turbo Native Module in the JavaScript spec) +"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Base")," (constant) +"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CustomType")," (name of type in the JavaScript spec)")),(0,a.kt)("p",null,"The same naming schema applies to the necessary ",(0,a.kt)("inlineCode",{parentName:"p"},"Bridging")," struct which is defined via ",(0,a.kt)("inlineCode",{parentName:"p"},"struct Bridging<CustomType>"),"."))}C.isMDXComponent=!0}}]);