"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7861],{35318:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(a),m=l,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(k,o(o({ref:e},u),{},{components:a})):n.createElement(k,o({ref:e},u))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11674:function(t,e,a){var n=a(63445);const l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=l?"ios":"android",i=l?"macos":r?"windows":"linux";e.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(t=["android","ios","web","windows"])=>[t.includes("android")?{label:"Android",value:"android"}:void 0,t.includes("ios")?{label:"iOS",value:"ios"}:void 0,t.includes("web")?{label:"Web",value:"web"}:void 0,t.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(t,e,a){var n=a(27378),l=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;e.Z=function({children:t,hidden:e,className:a}){return n.createElement("div",((t,e)=>{for(var a in e||(e={}))o.call(e,a)&&s(t,a,e[a]);if(r)for(var a of r(e))i.call(e,a)&&s(t,a,e[a]);return t})({role:"tabpanel"},{hidden:e,className:a}),t)}},65941:function(t,e,a){a.d(e,{Z:function(){return y}});var n=a(27378),l=a(14185),r=a(40488);var o=function(){const t=(0,n.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=a(18870),s=a(38944),d="tabItem_c0e5",u=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,b=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,g=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&b(t,a,e[a]);if(m)for(var a of m(e))A.call(e,a)&&b(t,a,e[a]);return t};function f(t){var e,a,l;const{lazy:r,block:u,defaultValue:m,values:k,groupId:A,className:b}=t,f=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=k?k:f.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),N=(0,i.lx)(y,((t,e)=>t.value===e.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:null!=(l=null!=m?m:null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)?l:null==(a=f[0])?void 0:a.props.value;if(null!==h&&!y.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:C}=o(),[D,B]=(0,n.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=A){const t=v[A];null!=t&&t!==D&&y.some((e=>e.value===t))&&B(t)}const x=t=>{const e=t.currentTarget,a=O.indexOf(e),n=y[a].value;n!==D&&(w(e),B(n),null!=A&&C(A,n))},E=t=>{let e=null;switch(t.key){case"ArrowRight":{const a=O.indexOf(t.currentTarget)+1;e=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(t.currentTarget)-1;e=O[a]||O[O.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},b)},y.map((({value:t,label:e,attributes:a})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:t=>O.push(t),onKeyDown:E,onFocus:x,onClick:x},a),r={className:(0,s.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":D===t})},p(l,c(r))),null!=e?e:t);var l,r}))),r?(0,n.cloneElement)(f.filter((t=>t.props.value===D))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==D})))))}function y(t){const e=(0,l.Z)();return n.createElement(f,g({key:String(e)},t))}},75777:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return A},contentTitle:function(){return b},metadata:function(){return g},toc:function(){return f},default:function(){return N}});var n=a(35318),l=a(65941),r=a(37785),o=a(11674),i=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&m(t,a,e[a]);if(u)for(var a of u(e))c.call(e,a)&&m(t,a,e[a]);return t};const A={id:"alert",title:"Alert"},b=void 0,g={unversionedId:"alert",id:"alert",title:"Alert",description:"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002",source:"@site/../cndocs/alert.md",sourceDirName:".",slug:"/alert",permalink:"/docs/next/alert",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/alert.md",tags:[],version:"current",frontMatter:{id:"alert",title:"Alert"},sidebar:"api",previous:{title:"AccessibilityInfo",permalink:"/docs/next/accessibilityinfo"},next:{title:"Animated",permalink:"/docs/next/animated"}},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3},{value:"iOS",id:"ios",children:[],level:2},{value:"Android",id:"android",children:[{value:'\u793a\u4f8b <div class="label android">Android</div>',id:"\u793a\u4f8b-android",children:[],level:3}],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>alert()</code>",id:"alert",children:[],level:3},{value:'<code>prompt()</code> <div class="label ios">iOS</div>',id:"prompt-ios",children:[],level:3}],level:2},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:'AlertButtonStyle <div class="label ios">iOS</div>',id:"alertbuttonstyle-ios",children:[],level:3},{value:'AlertType <div class="label ios">iOS</div>',id:"alerttype-ios",children:[],level:3},{value:"Buttons",id:"buttons",children:[],level:3},{value:'Options <div class="label android">Android</div>',id:"options-android",children:[],level:3}],level:2}],y={toc:f};function N(t){var e,a=t,{components:i}=a,m=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&u)for(var n of u(t))e.indexOf(n)<0&&c.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},y),m),s(e,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4e00\u7cfb\u5217\u7684\u6309\u94ae\uff0c\u70b9\u51fb\u5bf9\u5e94\u7684\u6309\u94ae\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684 onPress \u56de\u8c03\u5e76\u4e14\u5173\u95ed\u63d0\u793a\u6846\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8bdd\u6846\u4f1a\u4ec5\u6709\u4e00\u4e2a'\u786e\u5b9a'\u6309\u94ae\u3002"),(0,n.kt)("p",null,"\u672c\u63a5\u53e3\u53ef\u4ee5\u5728 iOS \u548c Android \u4e0a\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u3002\u53ea\u6709 iOS \u7cfb\u7edf\u652f\u6301\u5728\u63d0\u793a\u6846\u4e2d\u52a0\u5165\u6587\u672c\u6846\u3002"),(0,n.kt)("h3",k({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"Alert Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20const%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7BcreateTwoButtonAlert%7D%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%223-Button%20Alert%22%7D%20onPress%3D%7BcreateThreeButtonAlert%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"Alert Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7Bthis.createTwoButtonAlert%7D%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B%223-Button%20Alert%22%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.createThreeButtonAlert%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h2",k({},{id:"ios"}),"iOS"),(0,n.kt)("p",null,"\u5728 iOS \u4e0a\u4f60\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684\u6309\u94ae\u3002\u6bcf\u4e2a\u6309\u94ae\u8fd8\u90fd\u53ef\u4ee5\u6307\u5b9a\u81ea\u5df1\u7684\u6837\u5f0f\uff0c\u6b64\u5916\u8fd8\u53ef\u4ee5\u6307\u5b9a\u63d0\u793a\u7684\u7c7b\u522b\u3002\u53c2\u9605",(0,n.kt)("a",k({parentName:"p"},{href:"#alertbuttonstyle.md"}),"AlertButtonStyle"),"\u6765\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"),(0,n.kt)("h2",k({},{id:"android"}),"Android"),(0,n.kt)("p",null,"\u5728 Android \u4e0a\u6700\u591a\u80fd\u6307\u5b9a\u4e09\u4e2a\u6309\u94ae\uff0c\u8fd9\u4e09\u4e2a\u6309\u94ae\u5206\u522b\u5177\u6709\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\u7684\u6982\u5ff5\uff1a"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u6307\u5b9a\u4e00\u4e2a\u6309\u94ae\uff0c\u5219\u5b83\u5177\u6709\u201c\u79ef\u6781\u6001\u201d\u7684\u5c5e\u6027\uff08\u6bd4\u5982\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e24\u4e2a\u6309\u94ae\uff0c\u5219\u5206\u522b\u662f\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u53d6\u6d88\u201d\u548c\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e09\u4e2a\u6309\u94ae\u5219\u610f\u5473\u7740\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u7a0d\u5019\u518d\u8bf4\u201d\uff0c\u201c\u53d6\u6d88\u201d\uff0c\u201c\u786e\u5b9a\u201d\uff09\u3002"),(0,n.kt)("p",null,"\u5728 Android \u4e0a\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u63d0\u793a\u6846\u7684\u5916\u9762\u6765\u53d6\u6d88\u63d0\u793a\u6846\uff0c\u4f46\u8fd9\u4e00\u884c\u4e3a\u9ed8\u8ba4\u6ca1\u6709\u542f\u7528\u3002\u4f60\u53ef\u4ee5\u5728",(0,n.kt)("a",k({parentName:"p"},{href:"#options"}),(0,n.kt)("inlineCode",{parentName:"a"},"Options")),"\u4e2d\u63d0\u4f9b\u4e00\u4e2a\u989d\u5916\u53c2\u6570\u6765\u542f\u7528\u8fd9\u4e00\u884c\u4e3a\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"{ cancelable: true }"),"\u3002"),(0,n.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"options"),"\u4e2d\u6dfb\u52a0",(0,n.kt)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u51fd\u6570\u6765\u6355\u83b7\u7528\u6237\u7684\u53d6\u6d88\u64cd\u4f5c\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"{ onDismiss: () => {} }"),"\u3002"),(0,n.kt)("h3",k({},{id:"\u793a\u4f8b-android"}),"\u793a\u4f8b ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"Alert Android Dissmissable Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20showAlert%20%3D%20()%20%3D%3E%0A%20%20Alert.alert(%0A%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20Alert.alert(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20cancelable%3A%20true%2C%0A%20%20%20%20%20%20onDismiss%3A%20()%20%3D%3E%0A%20%20%20%20%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%20%20%20%20%22This%20alert%20was%20dismissed%20by%20tapping%20outside%20of%20the%20alert%20dialog.%22%0A%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%7D%0A%20%20)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20title%3D%22Show%20alert%22%20onPress%3D%7BshowAlert%7D%20%2F%3E%0A)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",k({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",k({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",k({},{id:"alert"}),(0,n.kt)("inlineCode",{parentName:"h3"},"alert()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static alert(title, message?, buttons?, options?)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The dialog's title. Passing ",(0,n.kt)("inlineCode",{parentName:"td"},"null")," or empty string will hide the title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"An optional message that appears below the dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"buttons"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"alert#buttons"}),"Buttons")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"An optional array containg buttons configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"alert#options"}),"Options")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"An optional Alert configuration for the Android.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"prompt-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"prompt()")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static prompt(title, message?, callbackOrButtons?, type?, defaultValue?, keyboardType?)\n")),(0,n.kt)("p",null,"Create and display a prompt to enter some text in form of Alert."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"An optional message that appears above the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"callbackOrButtons"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function",(0,n.kt)("hr",null),(0,n.kt)("a",k({parentName:"td"},{href:"alert#buttons"}),"Buttons")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"If passed a function, it will be called with the prompt's value",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"(text: string) => void"),", when the user taps 'OK'.",(0,n.kt)("hr",null),"If passed an array, buttons will be configured based on the array content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"alert#alerttype"}),"AlertType")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"This configures the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"defaultValue"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The default text in text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"keyboardType"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The keyboard type of first text field (if exists). One of TextInput ",(0,n.kt)("a",k({parentName:"td"},{href:"textinput#keyboardtype"}),"keyboardTypes"),".")))),(0,n.kt)("hr",null),(0,n.kt)("h2",k({},{id:"\u7c7b\u578b\u5b9a\u4e49"}),"\u7c7b\u578b\u5b9a\u4e49"),(0,n.kt)("h3",k({},{id:"alertbuttonstyle-ios"}),"AlertButtonStyle ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"An iOS Alert button style."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'default'")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Default button style.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'cancel'")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Cancel button style.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'destructive'")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Destructive button style.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"alerttype-ios"}),"AlertType ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"An iOS Alert type."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u503c"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'default'")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Default alert with no inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'plain-text'")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Plain text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'secure-text'")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Secure text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'login-password'")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Login and password alert")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"buttons"}),"Buttons"),(0,n.kt)("p",null,"Array of objects containg Alert buttons configuration."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"array of objects")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Objects properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Button label.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"onPress"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Callback function when button is pressed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"style ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"alert#alertbuttonstyle"}),"AlertButtonStyle")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Button style, on Android this property will be ignored.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"options-android"}),"Options ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"cancelable"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Defines if alert can be dismissed by tapping outside of the alert box.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"onDismiss"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Callback function fired when alert has been dismissed.")))))}N.isMDXComponent=!0}}]);