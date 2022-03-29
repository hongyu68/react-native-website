"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[93375],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,n){var a=n(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(27378),r=n(14185),l=n(40488);var i=function(){const e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(18870),s=n(38944),u="tabItem_c0e5",p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&k(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&k(e,n,t[n]);return e};function v(e){var t,n,r;const{lazy:l,block:p,defaultValue:d,values:h,groupId:f,className:k}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=h?h:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,o.lx)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:null!=(r=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=v[0])?void 0:n.props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=i(),[x,C]=(0,a.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&g.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==x&&(P(t),C(a),null!=f&&O(f,a))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]||T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]||T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},k)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=b({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:I,onFocus:j,onClick:j},n),l={className:(0,s.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":x===e})},c(r,m(l))),null!=t?t:e);var r,l}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function g(e){const t=(0,r.Z)();return a.createElement(v,b({key:String(t)},e))}},12329:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return k},metadata:function(){return b},toc:function(){return v},default:function(){return y}});var a=n(35318),r=n(65941),l=n(37785),i=n(11674),o=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&d(e,n,t[n]);return e};const f={id:"optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316"},k=void 0,b={unversionedId:"optimizing-flatlist-configuration",id:"optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316",description:"\u672f\u8bed\u5b9a\u4e49",source:"@site/../cndocs/optimizing-flatlist-configuration.md",sourceDirName:".",slug:"/optimizing-flatlist-configuration",permalink:"/docs/next/optimizing-flatlist-configuration",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/optimizing-flatlist-configuration.md",tags:[],version:"current",frontMatter:{id:"optimizing-flatlist-configuration",title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316"},sidebar:"docs",previous:{title:"\u6027\u80fd\u7efc\u8ff0",permalink:"/docs/next/performance"},next:{title:"RAM Bundles \u548c\u5185\u8054\u5f15\u7528\u4f18\u5316",permalink:"/docs/next/ram-bundles-inline-requires"}},v=[{value:"\u672f\u8bed\u5b9a\u4e49",id:"\u672f\u8bed\u5b9a\u4e49",children:[],level:2},{value:"Props",id:"props",children:[{value:"removeClippedSubviews",id:"removeclippedsubviews",children:[],level:3},{value:"maxToRenderPerBatch",id:"maxtorenderperbatch",children:[],level:3},{value:"updateCellsBatchingPeriod",id:"updatecellsbatchingperiod",children:[],level:3},{value:"initialNumToRender",id:"initialnumtorender",children:[],level:3},{value:"windowSize",id:"windowsize",children:[],level:3}],level:2},{value:"List items",id:"list-items",children:[{value:"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6",id:"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6",children:[],level:3},{value:"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6",id:"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6",children:[],level:3},{value:"\u4f7f\u7528 shouldComponentUpdate",id:"\u4f7f\u7528-shouldcomponentupdate",children:[],level:3},{value:"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93",id:"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93",children:[],level:3},{value:"\u4f7f\u7528 getItemLayout",id:"\u4f7f\u7528-getitemlayout",children:[],level:3},{value:"\u4f7f\u7528 keyExtractor \u6216 key",id:"\u4f7f\u7528-keyextractor-\u6216-key",children:[],level:3},{value:"\u907f\u514d\u5728 renderItem \u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570",id:"\u907f\u514d\u5728-renderitem-\u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570",children:[],level:3}],level:2}],g={toc:v};function y(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},g),d),s(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h2",h({},{id:"\u672f\u8bed\u5b9a\u4e49"}),"\u672f\u8bed\u5b9a\u4e49"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"VirtualizedList:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u80cc\u540e\u7684\u57fa\u7840\u652f\u6491\u7ec4\u4ef6\uff08\u662f React Native \u5bf9",(0,a.kt)("a",h({parentName:"p"},{href:"https://bvaughn.github.io/react-virtualized/#/components/List"}),(0,a.kt)("inlineCode",{parentName:"a"},"\u865a\u62df\u5217\u8868 Virtual List")),"\u6982\u5ff5\u7684\u5b9e\u73b0\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5185\u5b58\u5f00\u9500 Memory consumption:")," \u5217\u8868\u5728\u5185\u5b58\u4e2d\u5b58\u653e\u591a\u5c11\u6570\u636e\u3002\u5f00\u9500\u8fc7\u5927\u53ef\u80fd\u5bfc\u81f4\u5e94\u7528\u5d29\u6e83\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5ea6 Responsiveness:")," \u5e94\u7528\u5bf9\u4e8e\u7528\u6237\u64cd\u4f5c\u7684\u54cd\u5e94\u901f\u5ea6\u3002\u6bd4\u5982\u4f4e\u54cd\u5e94\u5ea6\u5c31\u662f\u4f60\u5728\u64cd\u4f5c\u65f6\uff0c\u5e94\u7528\u8981\u5361\u4e00\u4f1a\u513f\u624d\u54cd\u5e94\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u767d\u533a Blank areas:")," \u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList"),"\u6e32\u67d3\u7684\u901f\u5ea6\u8ddf\u4e0d\u4e0a\u4f60\u6ed1\u52a8\u7684\u901f\u5ea6\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728\u5217\u8868\u4e2d\u770b\u5230\u4e00\u4e9b\u5c1a\u672a\u5b8c\u6210\u6e32\u67d3\u7684\u7a7a\u767d\u5360\u4f4d\u5143\u7d20\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u89c6\u53e3 Viewport:")," \u5df2\u6e32\u67d3\u5185\u5bb9\u7684\u53ef\u89c6\u533a\u57df\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6ed1\u52a8\u7a97\u53e3 Window:")," The area in which items should be mounted, which is generally much larger than the viewport."))),(0,a.kt)("h2",h({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Here are a list of props that can help to improve ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," performance:"),(0,a.kt)("h3",h({},{id:"removeclippedsubviews"}),"removeClippedSubviews"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"False")))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", views that are outside of the viewport are detached from the native view hierarchy."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," \u542f\u7528\u6b64\u9009\u9879\u53ef\u51cf\u5c11\u82b1\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u7684\u65f6\u95f4\uff0c\u4ece\u800c\u964d\u4f4e\u4e22\u5e27\u7684\u98ce\u9669\u3002\u539f\u7406\u662f\u5bf9\u89c6\u53e3\u4e4b\u5916\u7684\u89c6\u56fe\u4e0d\u8fdb\u884c\u672c\u5730\u6e32\u67d3\u548c\u7ed8\u56fe\u904d\u5386\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," \u8bf7\u6ce8\u610f\uff0c\u8fd9\u79cd\u5b9e\u73b0\u53ef\u80fd\u4f1a\u6709 bug\uff0c\u6bd4\u5982\u4e22\u5931\u5185\u5bb9\uff08\u4e3b\u8981\u662f\u5728 iOS \u4e0a\u89c2\u5bdf\u5230\u7684\uff09\uff0c\u7279\u522b\u662f\u5f53\u4f60\u4f7f\u7528\u53d8\u6362\u548c/\u6216\u7edd\u5bf9\u5b9a\u4f4d\u505a\u590d\u6742\u7684\u4e8b\u60c5\u65f6\u3002\u53e6\u5916\uff0c\u8bf7\u6ce8\u610f\u8fd9\u5e76\u4e0d\u4f1a\u8282\u7701\u5927\u91cf\u7684\u5185\u5b58\uff0c\u56e0\u4e3a\u89c6\u56fe\u5e76\u6ca1\u6709\u88ab\u9500\u6bc1\uff0c\u53ea\u662f\u88ab\u5206\u79bb\u4e86\u3002"),(0,a.kt)("h3",h({},{id:"maxtorenderperbatch"}),"maxToRenderPerBatch"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"10")))),(0,a.kt)("p",null,"It is a ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList")," prop that can be passed through ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList"),". This controls the amount of items rendered per batch, which is the next chunk of items rendered on every scroll."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Setting a bigger number means less visual blank areas when scrolling (increases the fill rate)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," More items per batch means longer periods of JavaScript execution potentially blocking other event processing, like presses, hurting responsiveness."),(0,a.kt)("h3",h({},{id:"updatecellsbatchingperiod"}),"updateCellsBatchingPeriod"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"50")))),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," tells the amount of items rendered per batch, setting ",(0,a.kt)("inlineCode",{parentName:"p"},"updateCellsBatchingPeriod")," tells your ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList")," the delay in milliseconds between batch renders (how frequently your component will be rendering the windowed items)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Combining this prop with ",(0,a.kt)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," gives you the power to, for example, render more items in a less frequent batch, or less items in a more frequent batch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," Less frequent batches may cause blank areas, More frequent batches may cause responsiveness issues."),(0,a.kt)("h3",h({},{id:"initialnumtorender"}),"initialNumToRender"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"10")))),(0,a.kt)("p",null,"The initial amount of items to render."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," \u4e3a\u6bcf\u4e2a\u8bbe\u5907\u5b9a\u4e49\u7cbe\u786e\u7684\uff08\u521a\u597d\u53ef\u4ee5\uff09\u8986\u76d6\u5c4f\u5e55\u7684\u9879\u76ee\u6570\u91cf\u3002\u8fd9\u53ef\u4ee5\u5927\u5927\u63d0\u5347\u521d\u59cb\u6e32\u67d3\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," Setting a low ",(0,a.kt)("inlineCode",{parentName:"p"},"initialNumToRender")," may cause blank areas, especially if it's too small to cover the viewport on initial render."),(0,a.kt)("h3",h({},{id:"windowsize"}),"windowSize"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"21")))),(0,a.kt)("p",null,"The number passed here is a measurement unit where 1 is equivalent to your viewport height. The default value is 21 (10 viewports above, 10 below, and one in between)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u597d\u5904\uff1a")," Bigger ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize")," will result in less chance of seeing blank space while scrolling. On the other hand, smaller ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize")," will result in fewer items mounted simultaneously, saving memory."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u574f\u5904\uff1a")," For a bigger ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize"),", you will have more memory consumption. For a lower ",(0,a.kt)("inlineCode",{parentName:"p"},"windowSize"),", you will have a bigger chance of seeing blank areas."),(0,a.kt)("h2",h({},{id:"list-items"}),"List items"),(0,a.kt)("p",null,"Below are some tips about list item components. They are the core of your list, so they need to be fast."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6"}),"\u4f7f\u7528\u7b80\u5355\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u8d8a\u590d\u6742\u4e00\u822c\u6e32\u67d3\u5c31\u8d8a\u6162\u3002Try to avoid a lot of logic and nesting in your list items. If you are reusing this list item component a lot in your app, create a component just for your big lists and make them with as little logic and nesting as possible."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6"}),"\u4f7f\u7528\u8f7b\u91cf\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u592a\u91cd\u81ea\u7136\u4e5f\u4f1a\u62d6\u6162\u6e32\u67d3\u3002\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5927\u56fe\u7247\uff08\u4f18\u5148\u4f7f\u7528\u88c1\u526a\u8fc7\u7684\u7248\u672c\u6216\u662f\u7f29\u7565\u56fe\uff0c\u603b\u4e4b\u8d8a\u5c0f\u8d8a\u597d\uff09\u3002\u548c\u8d1f\u8d23\u8bbe\u8ba1\u7684\u540c\u4e8b\u534f\u5546\uff0c\u5728\u5217\u8868\u4e2d\u5c3d\u53ef\u80fd\u7b80\u5316\u7279\u6548\u548c\u4ea4\u4e92\uff0c\u7cbe\u7b80\u8981\u5c55\u793a\u7684\u4fe1\u606f\uff0c\u628a\u957f\u5185\u5bb9\u79fb\u5230\u8be6\u60c5\u9875\u4e2d\u3002"),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528-shouldcomponentupdate"}),"\u4f7f\u7528 shouldComponentUpdate"),(0,a.kt)("p",null,"Implement update verification to your components. React's ",(0,a.kt)("inlineCode",{parentName:"p"},"PureComponent")," implement a ",(0,a.kt)("a",h({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"shouldComponentUpdate"))," with shallow comparison. This is expensive here because it need to check all your props. If you want a good bit-level performance, create the strictest rules for your list item components, checking only props that could potentially change. If your list is simple enough, you could even use"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"shouldComponentUpdate() {\n  return false\n}\n")),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93"}),"\u4f7f\u7528\u4f18\u5316\u7f13\u5b58\u7684\u56fe\u7247\u5e93"),(0,a.kt)("p",null,"You can use the community packages (such as ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/DylanVann/react-native-fast-image"}),"react-native-fast-image")," from ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/DylanVann"}),"@DylanVann"),") for more performant images. Every image in your list is a ",(0,a.kt)("inlineCode",{parentName:"p"},"new Image()")," instance. The faster it reaches the ",(0,a.kt)("inlineCode",{parentName:"p"},"loaded")," hook, the faster your Javascript thread will be free again."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528-getitemlayout"}),"\u4f7f\u7528 getItemLayout"),(0,a.kt)("p",null,"If all your list item components have the same height (or width, for a horizontal list), providing the ",(0,a.kt)("a",h({parentName:"p"},{href:"flatlist#getitemlayout"}),"getItemLayout")," prop removes the need for your ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," to manage async layout calculations. This is a very desirable optimization technique."),(0,a.kt)("p",null,"If your components have dynamic size and you really need performance, consider asking your design team if they may think of a redesign in order to perform better."),(0,a.kt)("h3",h({},{id:"\u4f7f\u7528-keyextractor-\u6216-key"}),"\u4f7f\u7528 keyExtractor \u6216 key"),(0,a.kt)("p",null,"You can set the ",(0,a.kt)("a",h({parentName:"p"},{href:"flatlist#keyextractor"}),(0,a.kt)("inlineCode",{parentName:"a"},"keyExtractor"))," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," component. This prop is used for caching and as the React ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," to track item re-ordering."),(0,a.kt)("p",null,"You can also use a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," prop in you item component."),(0,a.kt)("h3",h({},{id:"\u907f\u514d\u5728-renderitem-\u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570"}),"\u907f\u514d\u5728 renderItem \u4e2d\u4f7f\u7528\u533f\u540d\u51fd\u6570"),(0,a.kt)("p",null,"Move out the ",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem")," function to the outside of render function, so it won't recreate itself each time render function called."),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"renderItem = ({ item }) => (<View key={item.key}><Text>{item.title}</Text></View>);\n\nrender(){\n  // ...\n\n  <FlatList\n    data={items}\n    renderItem={renderItem}\n  />\n\n  // ...\n}\n"))),(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const renderItem = ({ item }) => (\n   <View key={item.key}>\n      <Text>{item.title}</Text>\n   </View>\n );\nreturn (\n  // ...\n  <FlatList data={items} renderItem={renderItem} />;\n  // ...\n);\n")))))}y.isMDXComponent=!0}}]);