"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88362],{35318:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return b}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||l;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},11674:function(e,n,t){var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",s=r?"macos":l?"windows":"linux";n.Z={defaultGuide:"native",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,n,t){var a=t(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;n.Z=function({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))i.call(n,t)&&o(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&o(e,t,n[t]);return e})({role:"tabpanel"},{hidden:n,className:t}),e)}},65941:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(27378),r=t(14185),l=t(40488);var i=function(){const e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(18870),o=t(38944),c="tabItem_c0e5",d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,A=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&f(e,t,n[t]);if(b)for(var t of b(n))h.call(n,t)&&f(e,t,n[t]);return e};function y(e){var n,t,r;const{lazy:l,block:d,defaultValue:b,values:m,groupId:h,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:y.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),k=(0,s.lx)(v,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===b?b:null!=(r=null!=b?b:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?r:null==(t=y[0])?void 0:t.props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:E}=i(),[w,N]=(0,a.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:B}=(0,s.o5)();if(null!=h){const e=C[h];null!=e&&e!==w&&v.some((n=>n.value===e))&&N(e)}const T=e=>{const n=e.currentTarget,t=D.indexOf(n),a=v[t].value;a!==w&&(B(n),N(a),null!=h&&E(h,a))},O=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]||D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]||D[D.length-1];break}}null==n||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(r=A({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>D.push(e),onKeyDown:O,onFocus:T,onClick:T},t),l={className:(0,o.Z)("tabs__item",c,null==t?void 0:t.className,{"tabs__item--active":w===e})},u(r,p(l))),null!=n?n:e);var r,l}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function v(e){const n=(0,r.Z)();return a.createElement(y,A({key:String(n)},e))}},59200:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return A},toc:function(){return y},default:function(){return k}});var a=t(35318),r=t(65941),l=t(37785),i=t(11674),s=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&b(e,t,n[t]);if(d)for(var t of d(n))p.call(n,t)&&b(e,t,n[t]);return e};const h={id:"accessibilityinfo",title:"AccessibilityInfo"},f=void 0,A={unversionedId:"accessibilityinfo",id:"version-0.63/accessibilityinfo",title:"AccessibilityInfo",description:"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u77e5\u9053\u7528\u6237\u7684\u8bbe\u5907\u662f\u5426\u6b63\u5728\u8fd0\u884c\u8bfb\u5c4f\u5e94\u7528\u3002AccessibilityInfo\u6b63\u662f\u7528\u4e8e\u6b64\u76ee\u7684\u3002\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u76d1\u542c\u5176\u72b6\u6001\u53d8\u5316\u3002",source:"@site/versioned_docs/version-0.63/accessibilityinfo.md",sourceDirName:".",slug:"/accessibilityinfo",permalink:"/docs/0.63/accessibilityinfo",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/accessibilityinfo.md",tags:[],version:"0.63",frontMatter:{id:"accessibilityinfo",title:"AccessibilityInfo"},sidebar:"version-0.63/api",next:{title:"Alert",permalink:"/docs/0.63/alert"}},y=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>isBoldTextEnabled()</code>",id:"isboldtextenabled",children:[],level:3},{value:"<code>isGrayscaleEnabled()</code>",id:"isgrayscaleenabled",children:[],level:3},{value:"<code>isInvertColorsEnabled()</code>",id:"isinvertcolorsenabled",children:[],level:3},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[],level:3},{value:"<code>isReduceTransparencyEnabled()</code>",id:"isreducetransparencyenabled",children:[],level:3},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[],level:3},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[],level:3},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(92.81%), sunnylqm(7.19%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9281-sunnylqm719",children:[],level:5}],level:3}],level:2}],v={toc:y};function k(e){var n,t=e,{components:s}=t,b=((e,n)=>{var t={};for(var a in e)u.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&d)for(var a of d(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},v),b),o(n,c({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u77e5\u9053\u7528\u6237\u7684\u8bbe\u5907\u662f\u5426\u6b63\u5728\u8fd0\u884c\u8bfb\u5c4f\u5e94\u7528\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"AccessibilityInfo"),"\u6b63\u662f\u7528\u4e8e\u6b64\u76ee\u7684\u3002\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u76d1\u542c\u5176\u72b6\u6001\u53d8\u5316\u3002"),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aclass%20AccessibilityStatusExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20reduceMotionEnabled%3A%20false%2C%0A%20%20%20%20screenReaderEnabled%3A%20false%2C%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20_handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20_handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bthis.styles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20%20%20container%3A%20%7B%0A%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20status%3A%20%7B%0A%20%20%20%20%20%20margin%3A%2030%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%7D%0A%0Aexport%20default%20AccessibilityStatusExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",m({},{id:"isboldtextenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isBoldTextEnabled()\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h3",m({},{id:"isgrayscaleenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isGrayscaleEnabled()\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h3",m({},{id:"isinvertcolorsenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isInvertColorsEnabled()\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h3",m({},{id:"isreducemotionenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isReduceMotionEnabled()\n")),(0,a.kt)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h3",m({},{id:"isreducetransparencyenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isReduceTransparencyEnabled()\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h3",m({},{id:"isscreenreaderenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isScreenReaderEnabled()\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u5f53\u524d\u662f\u5426\u5f00\u542f\u3002\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u89e3\u6790\u503c\u4e3a\u4e00\u4e2a\u5e03\u5c14\u503c\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u8868\u793a\u5f00\u542f\u72b6\u6001\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u53cd\u4e4b\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\uff0c\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boldTextChanged"),": iOS-only event. Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when bold text is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grayscaleChanged"),": iOS-only event. Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when a gray scale is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"invertColorsChanged"),": iOS-only event. Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when invert colors is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reduceMotionChanged"),": Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenReaderChanged"),": \u8bfb\u5c4f\u5e94\u7528\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002\u4f20\u9012\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u4e3a\u5e03\u5c14\u503c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u8868\u793a\u5f00\u542f\u72b6\u6001\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u53cd\u4e4b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reduceTransparencyChanged"),": iOS-only event. Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when reduce transparency is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"announcementFinished"),": \u4ec5 iOS \u53ef\u7528\u3002\u5728\u8bfb\u5c4f\u8f6f\u4ef6\u5b8c\u6210\u4e00\u6b21\u6717\u8bfb\u540e\u89e6\u53d1\u3002\u4f20\u9012\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u4e3a\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b\u4ee5\u4e0b\u4e24\u4e2a\u5b57\u6bb5\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"announcement"),": \u8bfb\u5c4f\u8f6f\u4ef6\u6240\u8bfb\u7684\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"success"),": \u6b64\u6b21\u6717\u8bfb\u662f\u5426\u6210\u529f\u5b8c\u6210\u3002")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"setaccessibilityfocus"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static setAccessibilityFocus(reactTag)\n")),(0,a.kt)("p",null,"\u5c06\u8bfb\u5c4f\u8f6f\u4ef6\u7684\u7126\u70b9\u8bbe\u7f6e\u5230\u67d0\u4e2a react \u7ec4\u4ef6\u4e0a\u3002\u5728 Android \u7b49\u540c\u4e8e\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent(reactTag, UIManager.AccessibilityEventTypes.typeViewFocused);"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": Make sure that any ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," you want to receive the accessibility focus has ",(0,a.kt)("inlineCode",{parentName:"p"},"accessible={true}"),".")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"announceforaccessibility"}),(0,a.kt)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static announceForAccessibility(announcement)\n")),(0,a.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u5b57\u7b26\u4e32\u7ed9\u8bfb\u5c4f\u5e94\u7528\u6717\u8bfb\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")),(0,a.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h5",m({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9281-sunnylqm719"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",m({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(92.81%), ",(0,a.kt)("a",m({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(7.19%)"))}k.isMDXComponent=!0}}]);