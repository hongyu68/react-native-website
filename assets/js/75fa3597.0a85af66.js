"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92405],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},C=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),C=d(n),c=l,m=C["".concat(s,".").concat(c)]||C[c]||p[c]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=C;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}C.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(63445);const l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:l?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:l?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),l=n(38944);const r="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(r,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(27378),l=n(38944),r=n(12112),o=n(35331),i=n(14953),s=n(27886),d=n(7106),u=Object.defineProperty,p=Object.defineProperties,C=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function h(e){return function(e){var t,n;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function y(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:h(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),l=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);var a,r;t.set(l,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(c)for(var n of c(t))b.call(t,n)&&k(e,n,t[n]);return e})({},n.location),r={search:t.toString()},p(a,C(r))))}),[l,n])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=y(e),[o,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=g({queryString:n,groupId:l}),[p,C]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,l]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:l}),c=(()=>{const e=null!=s?s:p;return f({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{c&&i(c)}),[c]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),C(e)}),[u,C,r]),tabValues:r}}var N=n(14185);const D="tabList_J5MA",w="tabItem_l0OV";var A=Object.defineProperty,B=Object.defineProperties,O=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&x(e,n,t[n]);if(E)for(var n of E(t))T.call(t,n)&&x(e,n,t[n]);return e};function P({className:e,block:t,selectedValue:n,selectValue:o,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),l=i[a].value;l!==n&&(d(t),o(l))},p=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=null!=(t=s[n])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=null!=(n=s[t])?n:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(o=V({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:p,onClick:u},r),i={className:(0,l.Z)("tabs__item",w,null==r?void 0:r.className,{"tabs__item--active":n===e})},B(o,O(i))),null!=t?t:e);var o,i})))}function j({lazy:e,children:t,selectedValue:n}){const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function M(e){const t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",D)},a.createElement(P,V(V({},e),t)),a.createElement(j,V(V({},e),t)))}function I(e){const t=(0,N.Z)();return a.createElement(M,V({key:String(t)},e))}},63563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>v,frontMatter:()=>b,metadata:()=>h,toc:()=>f});var a=n(35318),l=n(48375),r=n(86386),o=n(11674),i=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))C.call(t,n)&&c(e,n,t[n]);return e};const b={id:"modal",title:"Modal"},k=void 0,h={unversionedId:"modal",id:"version-0.64/modal",title:"Modal",description:"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002",source:"@site/versioned_docs/version-0.64/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/0.64/modal",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/modal.md",tags:[],version:"0.64",frontMatter:{id:"modal",title:"Modal"},sidebar:"version-0.64/\u7ec4\u4ef6",previous:{title:"KeyboardAvoidingView",permalink:"/docs/0.64/keyboardavoidingview"},next:{title:"Pressable",permalink:"/docs/0.64/pressable"}},y={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>visible</code>",id:"visible",level:3},{value:"<code>supportedOrientations</code>",id:"supportedorientations",level:3},{value:"<code>onRequestClose</code>",id:"onrequestclose",level:3},{value:"<code>onShow</code>",id:"onshow",level:3},{value:"<code>transparent</code>",id:"transparent",level:3},{value:"<code>animationType</code>",id:"animationtype",level:3},{value:"<code>hardwareAccelerated</code>",id:"hardwareaccelerated",level:3},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",level:3},{value:"<code>onDismiss</code>",id:"ondismiss",level:3},{value:"<code>onOrientationChange</code>",id:"onorientationchange",level:3},{value:"<code>presentationStyle</code>",id:"presentationstyle",level:3}],g={toc:f};function v(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&C.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),c),s(t,d({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Modal%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20TouchableHighlight%2C%5Cn%20%20View%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20useState(false)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%5Cn%20%20%20%20%20%20%3CModal%5Cn%20%20%20%20%20%20%20%20animationType%3D%5C%22slide%5C%22%5Cn%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%5Cn%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20Alert.alert(%5C%22Modal%20has%20been%20closed.%5C%22)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%5C%22%232196F3%5C%22%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FModal%3E%5Cn%5Cn%20%20%20%20%20%20%3CTouchableHighlight%5Cn%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setModalVisible(true)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20centeredView%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginTop%3A%2022%5Cn%20%20%7D%2C%5Cn%20%20modalView%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%2020%2C%5Cn%20%20%20%20padding%3A%2035%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20shadowColor%3A%20%5C%22%23000%5C%22%2C%5Cn%20%20%20%20shadowOffset%3A%20%7B%5Cn%20%20%20%20%20%20width%3A%200%2C%5Cn%20%20%20%20%20%20height%3A%202%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20shadowOpacity%3A%200.25%2C%5Cn%20%20%20%20shadowRadius%3A%203.84%2C%5Cn%20%20%20%20elevation%3A%205%5Cn%20%20%7D%2C%5Cn%20%20openButton%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23F194FF%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%2020%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20elevation%3A%202%5Cn%20%20%7D%2C%5Cn%20%20textStyle%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20modalText%3A%20%7B%5Cn%20%20%20%20marginBottom%3A%2015%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}))),(0,a.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Modal%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20TouchableHighlight%2C%5Cn%20%20View%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20modalVisible%3A%20false%5Cn%20%20%7D%3B%5Cn%5Cn%20%20setModalVisible%20%3D%20(visible)%20%3D%3E%20%7B%5Cn%20%20%20%20this.setState(%7B%20modalVisible%3A%20visible%20%7D)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7B%20modalVisible%20%7D%20%3D%20this.state%3B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CModal%5Cn%20%20%20%20%20%20%20%20%20%20animationType%3D%5C%22slide%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%5Cn%20%20%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%5Cn%20%20%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20Alert.alert(%5C%22Modal%20has%20been%20closed.%5C%22)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%5C%22%232196F3%5C%22%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FModal%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%3CTouchableHighlight%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(true)%3B%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20centeredView%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20marginTop%3A%2022%5Cn%20%20%7D%2C%5Cn%20%20modalView%3A%20%7B%5Cn%20%20%20%20margin%3A%2020%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%2020%2C%5Cn%20%20%20%20padding%3A%2035%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20shadowColor%3A%20%5C%22%23000%5C%22%2C%5Cn%20%20%20%20shadowOffset%3A%20%7B%5Cn%20%20%20%20%20%20width%3A%200%2C%5Cn%20%20%20%20%20%20height%3A%202%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20shadowOpacity%3A%200.25%2C%5Cn%20%20%20%20shadowRadius%3A%203.84%2C%5Cn%20%20%20%20elevation%3A%205%5Cn%20%20%7D%2C%5Cn%20%20openButton%3A%20%7B%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23F194FF%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%2020%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20elevation%3A%202%5Cn%20%20%7D%2C%5Cn%20%20textStyle%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20modalText%3A%20%7B%5Cn%20%20%20%20marginBottom%3A%2015%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",m({},{id:"props"}),"Props"),(0,a.kt)("h3",m({},{id:"visible"}),(0,a.kt)("inlineCode",{parentName:"h3"},"visible")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"visible"),"\u5c5e\u6027\u51b3\u5b9a modal \u662f\u5426\u663e\u793a\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"supportedorientations"}),(0,a.kt)("inlineCode",{parentName:"h3"},"supportedOrientations")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"supportedOrientations"),"\u7528\u4e8e\u6307\u5b9a\u5728\u8bbe\u5907\u5207\u6362\u6a2a\u7ad6\u5c4f\u65b9\u5411\u65f6\uff0cmodal \u4f1a\u5728\u54ea\u4e9b\u5c4f\u5e55\u671d\u5411\u4e0b\u8ddf\u968f\u65cb\u8f6c\u3002\u5728 iOS \u4e0a\uff0c\u9664\u4e86\u672c\u5c5e\u6027\u5916\uff0c\u8fd8\u4f1a\u53d7\u5230\u5e94\u7528\u7684 Info.plist \u6587\u4ef6\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"UISupportedInterfaceOrientations"),"\u7684\u9650\u5236\u3002\u5982\u679c\u8fd8\u8bbe\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"presentationStyle"),"\u5c5e\u6027\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"pageSheet"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"formSheet"),"\uff0c\u5219\u5728 iOS \u4e0a\u672c\u5c5e\u6027\u5c06\u88ab\u5ffd\u7565\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"onrequestclose"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onRequestClose")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onRequestClose"),"\u56de\u8c03\u4f1a\u5728\u7528\u6237\u6309\u4e0b Android \u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u952e\u6216\u662f Apple TV \u4e0a\u7684\u83dc\u5355\u952e\u65f6\u89e6\u53d1\u3002\u8bf7\u52a1\u5fc5\u6ce8\u610f\u672c\u5c5e\u6027\u5728 Android \u5e73\u53f0\u4e0a\u4e3a\u5fc5\u9700\uff0c\u4e14\u4f1a\u5728 modal \u5904\u4e8e\u5f00\u542f\u72b6\u6001\u65f6\u963b\u6b62",(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler"),"\u4e8b\u4ef6\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Android, Platform.isTVOS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"(Others)")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"onshow"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onShow")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onShow"),"\u56de\u8c03\u51fd\u6570\u4f1a\u5728 modal \u663e\u793a\u65f6\u8c03\u7528\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"transparent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transparent")," \u5c5e\u6027\u662f\u6307\u80cc\u666f\u662f\u5426\u900f\u660e\uff0c\u9ed8\u8ba4\u4e3a\u767d\u8272\uff0c\u5c06\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u4e3a\uff1atrue \u7684\u65f6\u5019\u5f39\u51fa\u4e00\u4e2a\u900f\u660e\u80cc\u666f\u5c42\u7684 modal\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"animationtype"}),(0,a.kt)("inlineCode",{parentName:"h3"},"animationType")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"animationType"),"\u6307\u5b9a\u4e86 modal \u7684\u52a8\u753b\u7c7b\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slide")," \u4ece\u5e95\u90e8\u6ed1\u5165\u6ed1\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fade")," \u6de1\u5165\u6de1\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"none")," \u6ca1\u6709\u52a8\u753b\uff0c\u76f4\u63a5\u8e66\u51fa\u6765\u3002")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"none"),"\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"enum('none', 'slide', 'fade')"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"hardwareaccelerated"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hardwareAccelerated")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hardwareAccelerated"),"\u5c5e\u6027\u51b3\u5b9a\u662f\u5426\u5f3a\u5236\u542f\u7528\u786c\u4ef6\u52a0\u901f\u6765\u7ed8\u5236\u5f39\u51fa\u5c42\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"statusbartranslucent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"statusBarTranslucent")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"statusBarTranslucent")," prop determines whether your modal should go under the system statusbar."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"ondismiss"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onDismiss")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u4f1a\u5728 modal \u88ab\u5173\u95ed\u65f6\u8c03\u7528\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"onorientationchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onOrientationChange")),(0,a.kt)("p",null,"\u6a21\u6001\u7a97\u663e\u793a\u7684\u65f6\u5019\uff0c\u5f53\u8bbe\u5907\u65b9\u5411\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u5c06\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"onOrientationChange"),"\u56de\u8c03\u65b9\u6cd5\u3002 \u63d0\u4f9b\u7684\u8bbe\u5907\u65b9\u5411\u4ec5\u4e3a\u201c\u7ad6\u5c4f\u201d\u6216\u201c\u6a2a\u5c4f\u201d\u3002 \u65e0\u8bba\u5f53\u524d\u65b9\u5411\u5982\u4f55\uff0c\u4e5f\u4f1a\u5728\u521d\u59cb\u6e32\u67d3\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u65b9\u6cd5\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"presentationstyle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"presentationStyle")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"presentationStyle"),"\u51b3\u5b9a modal\uff08\u5728\u8f83\u5927\u5c4f\u5e55\u7684\u8bbe\u5907\u6bd4\u5982 iPad \u6216\u662f Plus \u673a\u578b\uff09\u5982\u4f55\u5c55\u73b0\u3002\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u9605",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"}),"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pageSheet"),"\u7ad6\u76f4\u65b9\u5411\u51e0\u4e4e\u76d6\u6ee1\uff0c\u6c34\u5e73\u5c45\u4e2d\uff0c\u5de6\u53f3\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formSheet"),"\u7ad6\u76f4\u548c\u6c34\u5e73\u90fd\u5c45\u4e2d\uff0c\u56db\u5468\u90fd\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"overFullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\uff0c\u540c\u65f6\u5141\u8bb8\u900f\u660e\u3002")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u6839\u636e",(0,a.kt)("inlineCode",{parentName:"p"},"transparent"),"\u5c5e\u6027\u800c\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"overFullScreen"),"\u6216\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"fullScreen"),"\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))))}v.isMDXComponent=!0}}]);