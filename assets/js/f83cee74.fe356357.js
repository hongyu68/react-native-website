"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[56034],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),C=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=C(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=C(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var C=2;C<o;C++)s[C]=n[C];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(38944);const o="tabItem_wHwb";var s=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))C.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>X});var a=n(27378),r=n(38944),o=n(12112),s=n(35331),l=n(14953),i=n(27886),C=n(7106),c=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function D(e){return function(e){var t,n;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:D(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function B({value:e,tabValues:t}){return t.some((t=>t.value===e))}function w({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,o;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))y.call(t,n)&&f(e,n,t[n]);return e})({},n.location),o={search:t.toString()},u(a,d(o))))}),[r,n])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=b(e),[s,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!B({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=w({queryString:n,groupId:r}),[u,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,C.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),p=(()=>{const e=null!=i?i:u;return B({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{p&&l(p)}),[p]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!B({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var g=n(14185);const v="tabList_J5MA",h="tabItem_l0OV";var E=Object.defineProperty,k=Object.defineProperties,A=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&S(e,n,t[n]);if(T)for(var n of T(t))O.call(t,n)&&S(e,n,t[n]);return e};function j({className:e,block:t,selectedValue:n,selectValue:s,tabValues:l}){const i=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=l[a].value;r!==n&&(C(t),s(r))},u=e=>{var t,n;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=null!=(t=i[n])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=null!=(n=i[t])?n:i[i.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>{return a.createElement("li",(s=F({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:c},o),l={className:(0,r.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":n===e})},k(s,A(l))),null!=t?t:e);var s,l})))}function N({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function P(e){const t=x(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",v)},a.createElement(j,F(F({},e),t)),a.createElement(N,F(F({},e),t)))}function X(e){const t=(0,g.Z)();return a.createElement(P,F({key:String(t)},e))}},50573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>x,frontMatter:()=>y,metadata:()=>D,toc:()=>B});var a=n(35318),r=n(48375),o=n(86386),s=n(11674),l=Object.defineProperty,i=Object.defineProperties,C=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&p(e,n,t[n]);return e};const y={id:"transforms",title:"Transforms"},f=void 0,D={unversionedId:"transforms",id:"version-0.67/transforms",title:"Transforms",description:"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.",source:"@site/versioned_docs/version-0.67/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/docs/0.67/transforms",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/transforms.md",tags:[],version:"0.67",frontMatter:{id:"transforms",title:"Transforms"},sidebar:"api",previous:{title:"Systrace",permalink:"/docs/0.67/systrace"},next:{title:"Vibration",permalink:"/docs/0.67/vibration"}},b={},B=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>transform()</code>",id:"transform",level:3},{value:"<code>decomposedMatrix</code>, <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>transformMatrix</code>, <code>translateX</code>, <code>translateY</code>",id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",level:3}],w={toc:B};function x(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},w),p),i(t,C({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps."),(0,a.kt)("h2",m({},{id:"example"}),"Example"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CScrollView%5Cn%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%5C%2230deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%5C%2230deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%3C%2FSafeAreaView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%5Cn%20%20%7D%2C%5Cn%20%20scrollContentContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingBottom%3A%2060%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20marginVertical%3A%2040%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20color%3A%20%5C%22%23000%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,a.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CScrollView%5Cn%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%5C%2230deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%5C%2230deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%5Cn%20%20%7D%2C%5Cn%20%20scrollContentContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingBottom%3A%2060%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20marginVertical%3A%2040%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20color%3A%20%5C%22%23000%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"reference"}),"Reference"),(0,a.kt)("h2",m({},{id:"methods"}),"Methods"),(0,a.kt)("h3",m({},{id:"transform"}),(0,a.kt)("inlineCode",{parentName:"h3"},"transform()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transform")," accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object."),(0,a.kt)("p",null,"The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }]);\n")),(0,a.kt)("p",null,"The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"transform([{ skewX: '45deg' }]);\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"array of objects: {matrix: number[]}, {perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"decomposedMatrix"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"rotation"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"scaleX"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"scaleY"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"transformMatrix"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"translateX"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"translateY")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,a.kt)("a",m({parentName:"p"},{href:"transforms#transform"}),(0,a.kt)("inlineCode",{parentName:"a"},"transform"))," prop instead.")))}x.isMDXComponent=!0}}]);