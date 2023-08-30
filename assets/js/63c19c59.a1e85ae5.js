"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[77191],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86386:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),r=n(38944);const o="tabItem_wHwb";var l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(27378),r=n(38944),o=n(12112),l=n(35331),i=n(14953),s=n(27886),p=n(7106),u=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function h(e){return function(e){var t,n;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function k(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:h(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const n=(0,l.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);var a,o;t.set(r,e),n.replace((a=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))b.call(t,n)&&f(e,n,t[n]);return e})({},n.location),o={search:t.toString()},c(a,d(o))))}),[r,n])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=k(e),[l,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=y({queryString:n,groupId:r}),[c,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,p.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),m=(()=>{const e=null!=s?s:c;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var w=n(14185);const T="tabList_J5MA",O="tabItem_l0OV";var V=Object.defineProperty,E=Object.defineProperties,C=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))_.call(t,n)&&x(e,n,t[n]);if(S)for(var n of S(t))j.call(t,n)&&x(e,n,t[n]);return e};function A({className:e,block:t,selectedValue:n,selectValue:l,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),r=i[a].value;r!==n&&(p(t),l(r))},c=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;a=null!=(t=s[n])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=null!=(n=s[t])?n:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>{return a.createElement("li",(l=P({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:c,onClick:u},o),i={className:(0,r.Z)("tabs__item",O,null==o?void 0:o.className,{"tabs__item--active":n===e})},E(l,C(i))),null!=t?t:e);var l,i})))}function H({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function I(e){const t=N(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",T)},a.createElement(A,P(P({},e),t)),a.createElement(H,P(P({},e),t)))}function D(e){const t=(0,w.Z)();return a.createElement(I,P({key:String(t)},e))}},71465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>y,frontMatter:()=>v,metadata:()=>f,toc:()=>k});var a=n(35318),r=n(48375),o=n(86386),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&d(e,n,t[n]);return e};const v={id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",hide_table_of_contents:!0},b=void 0,f={unversionedId:"building-for-tv",id:"version-0.67/building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",description:"\u76ee\u524d\u7684 React Native \u5e94\u7528\u53ea\u9700\u5728 JavaScript \u7aef\u7b80\u5355\u4fee\u6539\u751a\u81f3\u65e0\u9700\u4fee\u6539\uff0c\u5728\u7535\u89c6\u548c\u673a\u9876\u76d2\u8bbe\u5907\u4e0a\u5c31\u57fa\u672c\u53ef\u7528\u4e86\u3002",source:"@site/versioned_docs/version-0.67/building-for-tv.md",sourceDirName:".",slug:"/building-for-tv",permalink:"/docs/0.67/building-for-tv",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/building-for-tv.md",tags:[],version:"0.67",frontMatter:{id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"\u96c6\u6210\u5230 Android Fragment",permalink:"/docs/0.67/integration-with-android-fragment"},next:{title:"\u591a\u5e73\u53f0\u652f\u6301",permalink:"/docs/0.67/out-of-tree-platforms"}},h={},k=[{value:"\u7f16\u8bd1\u4fee\u6539",id:"\u7f16\u8bd1\u4fee\u6539",level:2},{value:"\u4ee3\u7801\u4fee\u6539",id:"\u4ee3\u7801\u4fee\u6539",level:2},{value:"\u7f16\u8bd1\u53d8\u66f4",id:"\u7f16\u8bd1\u53d8\u66f4",level:2},{value:"\u4ee3\u7801\u4fee\u6539",id:"\u4ee3\u7801\u4fee\u6539-1",level:2}],g={toc:k};function y(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u76ee\u524d\u7684 React Native \u5e94\u7528\u53ea\u9700\u5728 JavaScript \u7aef\u7b80\u5355\u4fee\u6539\u751a\u81f3\u65e0\u9700\u4fee\u6539\uff0c\u5728\u7535\u89c6\u548c\u673a\u9876\u76d2\u8bbe\u5907\u4e0a\u5c31\u57fa\u672c\u53ef\u7528\u4e86\u3002"),(0,a.kt)(r.Z,{groupId:"tv",defaultValue:"androidtv",values:[{label:"Android TV",value:"androidtv"},{label:"\ud83d\udea7 tvOS",value:"tvos"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"androidtv",mdxType:"TabItem"},(0,a.kt)("h2",m({},{id:"\u7f16\u8bd1\u4fee\u6539"}),"\u7f16\u8bd1\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\u539f\u751f\u7aef"),": \u5728 Android TV \u4e0a\u8fd0\u884c React Native \u9879\u76ee\u8bf7\u5148\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),"\u4e2d\u52a0\u5165\u4e0b\u5217\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-xml"}),'  \x3c!-- \u52a0\u5165\u81ea\u5b9a\u4e49\u7684banner\u56fe\u4f5c\u4e3aTV\u8bbe\u5907\u4e0a\u7684\u56fe\u6807 --\x3e\n <application\n  ...\n  android:banner="@drawable/tv_banner"\n  >\n    ...\n    <intent-filter>\n      ...\n      \x3c!-- Needed to properly create a launch intent when running on Android TV --\x3e\n      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>\n    </intent-filter>\n    ...\n  </application>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"JavaScript \u7aef"),": \u5bf9\u4e8e\u7535\u89c6\u8bbe\u5907\u7684\u68c0\u6d4b\u4ee3\u7801\u5df2\u7ecf\u52a0\u5165\u5230\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"Platform"),"\u6a21\u5757\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u68c0\u6d4b\u5f53\u524d\u8fd0\u884c\u8bbe\u5907\u662f\u5426\u662f\u7535\u89c6\u8bbe\u5907\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"import { Platform } from 'react-native';\nconst running_on_tv = Platform.isTV;\n")),(0,a.kt)("h2",m({},{id:"\u4ee3\u7801\u4fee\u6539"}),"\u4ee3\u7801\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u8bbf\u95ee\u53ef\u70b9\u51fb\u7684\u63a7\u4ef6"),": When running on Android TV the Android framework will automatically apply a directional navigation scheme based on relative position of focusable elements in your views. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableHighlight"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback")," will work as expected. In particular:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactAndroidTVRootViewHelper"),", sets up key events handlers for TV remote events. When TV remote events occur, this class fires a JS event. This event will be picked up by instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"const TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({board: cmp.state.board.move(2)});\n      } else if(evt && evt.eventType === 'up') {\n        cmp.setState({board: cmp.state.board.move(1)});\n      } else if(evt && evt.eventType === 'left') {\n        cmp.setState({board: cmp.state.board.move(0)});\n      } else if(evt && evt.eventType === 'down') {\n        cmp.setState({board: cmp.state.board.move(3)});\n      } else if(evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Dev Menu support"),": On the emulator, cmd-M will bring up the developer menu, similar to Android. To bring it up on a real Android TV device, press the menu button or long press the fast-forward button on the remote. (Please do not shake the Android TV device, that will not work :) )")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u5df2\u77e5\u95ee\u9898"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextInput"),"\u7ec4\u4ef6\u4e0d\u80fd\u83b7\u5f97\u7126\u70b9\uff0c\u8bf7\u53c2\u8003\u8fd9\u91cc\u8ba8\u8bba\u7684",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/16500#issuecomment-629285638"}),"\u4e34\u65f6\u89e3\u51b3\u65b9\u6848"),"\u3002"))))),(0,a.kt)(o.Z,{value:"tvos",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," \u8bf7\u4f7f\u7528",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/react-native-community/react-native-tvos"}),"react-native-tvos"),"\u4ee3\u66ff\u3002")),(0,a.kt)("h2",m({},{id:"\u7f16\u8bd1\u53d8\u66f4"}),"\u7f16\u8bd1\u53d8\u66f4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u539f\u751f\u7aef"),": React Native \u751f\u6210\u7684 Xcode \u9879\u76ee\u73b0\u90fd\u5df2\u5305\u542b Apple TV \u7f16\u8bd1\u76ee\u6807\uff0c\u5176\u540d\u5b57\u90fd\u5e26\u6709'-tvOS'\u540e\u7f00\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"react-native init"),": \u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"react-native init"),"\u547d\u4ee4\u521b\u5efa\u7684\u65b0\u9879\u76ee\u4f1a\u81ea\u52a8\u5728 Xcode \u65b0\u9879\u76ee\u4e2d\u5305\u542b Apple TV \u7f16\u8bd1\u76ee\u6807\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"JavaScript \u7aef"),": \u5bf9\u4e8e\u7535\u89c6\u8bbe\u5907\u7684\u68c0\u6d4b\u4ee3\u7801\u5df2\u7ecf\u52a0\u5165\u5230\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Platform"),"\u6a21\u5757\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u68c0\u6d4b\u5f53\u524d\u8fd0\u884c\u8bbe\u5907\u662f\u5426\u662f\u7535\u89c6\u8bbe\u5907\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import { Platform } from 'react-native';\nconst running_on_tv = Platform.isTV;\n\n// \u5982\u679c\u4f60\u60f3\u66f4\u7cbe\u786e\u5730\u9488\u5bf9tvOS\u8bbe\u5907\uff08\u5373\u6392\u9664Android\u8bbe\u5907\uff09\uff0c\n// \u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\uff1a\nconst running_on_apple_tv = Platform.isTVOS;\n")),(0,a.kt)("h2",m({},{id:"\u4ee3\u7801\u4fee\u6539-1"}),"\u4ee3\u7801\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"General support for tvOS"),": Apple TV specific changes in native code are all wrapped by the TARGET_OS_TV define. These include changes to suppress APIs that are not supported on tvOS (e.g. web views, sliders, switches, status bar, etc.), and changes to support user input from the TV remote or keyboard.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Common codebase"),": Since tvOS and iOS share most Objective-C and JavaScript code in common, most documentation for iOS applies equally to tvOS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u8bbf\u95ee\u53ef\u70b9\u51fb\u7684\u63a7\u4ef6"),": When running on Apple TV, the native view class is ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVView"),", which has additional methods to make use of the tvOS focus engine. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," will work as expected. In particular:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVRemoteHandler"),", sets up gesture recognizers for TV remote events. When TV remote events occur, this class fires notifications that are picked up by ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVNavigationEventEmitter")," (a subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTEventEmitter"),"), that fires a JS event. This event will be picked up by instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Dev Menu support"),": On the simulator, cmd-D will bring up the developer menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote animations"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVView")," native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Back navigation with the TV remote menu button"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler")," component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote."))))))}y.isMDXComponent=!0}}]);