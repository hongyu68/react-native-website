"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[47374],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),k=i,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},922:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return k},metadata:function(){return m},toc:function(){return f},default:function(){return v}});var r=t(35318),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))c.call(n,t)&&s(e,t,n[t]);return e};const u={id:"linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93"},k=void 0,m={unversionedId:"linking-libraries-ios",id:"version-0.65/linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93",description:"\u5e76\u4e0d\u662f\u6240\u6709\u7684 APP \u90fd\u9700\u8981\u4f7f\u7528\u5168\u90e8\u7684\u539f\u751f\u529f\u80fd\uff0c\u5305\u542b\u652f\u6301\u5168\u90e8\u7279\u6027\u7684\u4ee3\u7801\u4f1a\u589e\u5927\u5e94\u7528\u7684\u4f53\u79ef\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u80fd\u8ba9\u4f60\u7b80\u5355\u5730\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6dfb\u52a0\u9700\u8981\u7684\u7279\u6027\u3002",source:"@site/versioned_docs/version-0.65/linking-libraries-ios.md",sourceDirName:".",slug:"/linking-libraries-ios",permalink:"/docs/0.65/linking-libraries-ios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/linking-libraries-ios.md",tags:[],version:"0.65",frontMatter:{id:"linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93"},sidebar:"version-0.65/docs",previous:{title:"\u6253\u5305\u53d1\u5e03",permalink:"/docs/0.65/signed-apk-android"},next:{title:"\u5728iOS\u6a21\u62df\u5668\u4e0a\u8fd0\u884c",permalink:"/docs/0.65/running-on-simulator-ios"}},f=[{value:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\uff1a",id:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4",children:[{value:"\u81ea\u52a8\u94fe\u63a5",id:"\u81ea\u52a8\u94fe\u63a5",children:[{value:"\u7b2c\u4e00\u6b65",id:"\u7b2c\u4e00\u6b65",children:[],level:4},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65",children:[],level:4}],level:3},{value:"\u624b\u52a8\u94fe\u63a5",id:"\u624b\u52a8\u94fe\u63a5",children:[{value:"\u7b2c\u4e00\u6b65",id:"\u7b2c\u4e00\u6b65-1",children:[],level:4},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65-1",children:[],level:4},{value:"\u7b2c\u4e09\u6b65",id:"\u7b2c\u4e09\u6b65",children:[],level:4}],level:3}],level:2}],b={toc:f};function v(e){var n,i=e,{components:s}=i,u=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(i,["components"]);return(0,r.kt)("wrapper",(n=d(d({},b),u),a(n,l({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5e76\u4e0d\u662f\u6240\u6709\u7684 APP \u90fd\u9700\u8981\u4f7f\u7528\u5168\u90e8\u7684\u539f\u751f\u529f\u80fd\uff0c\u5305\u542b\u652f\u6301\u5168\u90e8\u7279\u6027\u7684\u4ee3\u7801\u4f1a\u589e\u5927\u5e94\u7528\u7684\u4f53\u79ef\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u80fd\u8ba9\u4f60\u7b80\u5355\u5730\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6dfb\u52a0\u9700\u8981\u7684\u7279\u6027\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u601d\u60f3\u4e0b\uff0c\u6211\u4eec\u628a\u8bb8\u591a\u7279\u6027\u90fd\u53d1\u5e03\u6210\u4e3a\u4e92\u4e0d\u76f8\u5173\u7684\u9759\u6001\u5e93\u3002"),(0,r.kt)("p",null,"\u5927\u90e8\u5206\u7684\u5e93\u53ea\u9700\u8981\u62d6\u8fdb\u4e24\u4e2a\u6587\u4ef6\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\uff0c\u5076\u5c14\u4f60\u8fd8\u9700\u8981\u51e0\u6b65\u989d\u5916\u7684\u5de5\u4f5c\uff0c\u4f46\u4e0d\u4f1a\u518d\u6709\u66f4\u591a\u7684\u4e8b\u60c5\u8981\u505a\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u6211\u4eec\u968f\u7740 React Native \u53d1\u5e03\u7684\u6240\u6709\u5e93\u90fd\u5728\u4ed3\u5e93\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"em"},"Libraries"),"\u6587\u4ef6\u5939\u4e0b\u3002\u5176\u4e2d\u6709\u4e00\u4e9b\u662f\u7eaf Javascript \u4ee3\u7801\uff0c\u4f60\u53ea\u9700\u8981\u53bb",(0,r.kt)("inlineCode",{parentName:"em"},"import"),"\u5b83\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002\u53e6\u5916\u6709\u4e00\u4e9b\u5e93\u57fa\u4e8e\u4e00\u4e9b\u539f\u751f\u4ee3\u7801\u5b9e\u73b0\uff0c\u4f60\u5fc5\u987b\u628a\u8fd9\u4e9b\u6587\u4ef6\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\uff0c\u5426\u5219\u5e94\u7528\u4f1a\u5728\u4f60\u4f7f\u7528\u8fd9\u4e9b\u5e93\u7684\u65f6\u5019\u4ea7\u751f\u62a5\u9519\u3002")),(0,r.kt)("h2",d({},{id:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4"}),"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,r.kt)("h3",d({},{id:"\u81ea\u52a8\u94fe\u63a5"}),"\u81ea\u52a8\u94fe\u63a5"),(0,r.kt)("h4",d({},{id:"\u7b2c\u4e00\u6b65"}),"\u7b2c\u4e00\u6b65"),(0,r.kt)("p",null,"\u5b89\u88c5\u4e00\u4e2a\u5e26\u539f\u751f\u4f9d\u8d56\u7684\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"$ npm install \u67d0\u4e2a\u5e26\u6709\u539f\u751f\u4f9d\u8d56\u7684\u5e93\n")),(0,r.kt)("h4",d({},{id:"\u7b2c\u4e8c\u6b65"}),"\u7b2c\u4e8c\u6b65"),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5b83\u4f1a\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u6587\u4ef6\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u8bb0\u5f55\u6765\u94fe\u63a5\u6240\u6709\u9700\u8981\u94fe\u63a5\u7684\u5e93\uff08\u6ce8\u610f\u4e00\u4e9b\u8001\u7684\u6559\u7a0b\u548c\u6587\u6863\u53ef\u80fd\u4f1a\u63d0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"rnpm link"),"\u547d\u4ee4\uff0c\u6b64\u547d\u4ee4\u5df2\u8fc7\u65f6\u4e0d\u518d\u4f7f\u7528\uff0c\u7531\u4e0b\u9762\u8fd9\u4e2a\u547d\u4ee4\u4ee3\u66ff\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"$ npx react-native link\n")),(0,r.kt)("p",null,"\u5982\u679c\u53ea\u9700\u8981\u94fe\u63a5\u67d0\u4e00\u4e2a\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"$ react-native link \u67d0\u5df2\u5b89\u88c5\u7684\u5177\u4f53\u5e93\u540d\n")),(0,r.kt)("p",null,"\u597d\u4e86\uff01\u73b0\u5728\u539f\u751f\u4f9d\u8d56\u5c31\u6210\u529f\u5730\u94fe\u63a5\u5230\u4f60\u7684 iOS/Android \u9879\u76ee\u4e86\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," If your iOS project is using CocoaPods (contains ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),") and linked library has ",(0,r.kt)("inlineCode",{parentName:"p"},"podspec")," file, then ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native link")," will link library using Podfile. To support non-trivial Podfiles add ",(0,r.kt)("inlineCode",{parentName:"p"},"# Add new pods below this line")," comment to places where you expect pods to be added.")),(0,r.kt)("h3",d({},{id:"\u624b\u52a8\u94fe\u63a5"}),"\u624b\u52a8\u94fe\u63a5"),(0,r.kt)("h4",d({},{id:"\u7b2c\u4e00\u6b65-1"}),"\u7b2c\u4e00\u6b65"),(0,r.kt)("p",null,"\u5982\u679c\u8be5\u5e93\u5305\u542b\u539f\u751f\u4ee3\u7801\uff0c\u90a3\u4e48\u5728\u5b83\u7684\u6587\u4ef6\u5939\u4e0b\u4e00\u5b9a\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},".xcodeproj"),"\u6587\u4ef6\u3002\u628a\u8fd9\u4e2a\u6587\u4ef6\u62d6\u5230\u4f60\u7684 XCode \u5de5\u7a0b\u4e0b\uff08\u901a\u5e38\u62d6\u5230 XCode \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Libraries"),"\u5206\u7ec4\u91cc\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(83751).Z})),(0,r.kt)("h4",d({},{id:"\u7b2c\u4e8c\u6b65-1"}),"\u7b2c\u4e8c\u6b65"),(0,r.kt)("p",null,"\u70b9\u51fb\u4f60\u7684\u4e3b\u5de5\u7a0b\u6587\u4ef6\uff0c\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"Build Phases"),"\uff0c\u7136\u540e\u628a\u521a\u624d\u6240\u6dfb\u52a0\u8fdb\u53bb\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".xcodeproj"),"\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Products"),"\u6587\u4ef6\u5939\u4e2d\u7684\u9759\u6001\u5e93\u6587\u4ef6\uff08.a \u6587\u4ef6\uff09\uff0c\u62d6\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Link Binary With Libraries"),"\u7ec4\u5185\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(46153).Z})),(0,r.kt)("h4",d({},{id:"\u7b2c\u4e09\u6b65"}),"\u7b2c\u4e09\u6b65"),(0,r.kt)("p",null,"\u4e0d\u662f\u6240\u6709\u7684\u5e93\u90fd\u9700\u8981\u8fdb\u884c\u8fd9\u4e2a\u6b65\u9aa4\uff0c\u4f60\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\u5728\u4e8e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u6211\u9700\u8981\u5728\u7f16\u8bd1\u7684\u671f\u95f4\u4e86\u89e3\u5e93\u7684\u5185\u5bb9\u5417\uff1f")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u610f\u601d\u662f\uff0c\u4f60\u662f\u9700\u8981\u5728\u539f\u751f\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u5e93\uff0c\u8fd8\u662f\u53ea\u9700\u8981\u901a\u8fc7 JavaScript \u8bbf\u95ee\uff1f\u5982\u679c\u4f60\u53ea\u9700\u8981\u901a\u8fc7 JavaScript \u8bbf\u95ee\u8fd9\u4e2a\u5e93\uff0c\u4f60\u5c31\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u6b65\u4e86\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u9aa4\u5bf9\u4e8e\u6211\u4eec\u968f React Native \u53d1\u5e03\u7684\u5927\u90e8\u5206\u5e93\u6765\u8bf4\u90fd\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4f46\u6709\u4e24\u4e2a\u4f8b\u5916\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"PushNotificationIOS"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"LinkingIOS"),"\u3002"),(0,r.kt)("p",null,"\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"PushNotificationIOS"),"\u4e3a\u4f8b\uff0c\u4f60\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"AppDelegate"),"\u6bcf\u6536\u5230\u4e00\u6761\u63a8\u9001\u901a\u77e5\u4e4b\u540e\uff0c\u8c03\u7528\u5e93\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u9700\u8981\u80fd\u591f\u8bbf\u95ee\u5230\u5e93\u7684\u5934\u6587\u4ef6\u3002\u4e3a\u4e86\u80fd\u591f\u987a\u5229\u6253\u5305\uff0c\u4f60\u9700\u8981\u6253\u5f00\u4f60\u7684\u5de5\u7a0b\u6587\u4ef6\uff0c\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"Build Settings"),"\uff0c\u7136\u540e\u641c\u7d22",(0,r.kt)("inlineCode",{parentName:"p"},"Header Search Paths"),"\uff0c\u7136\u540e\u6dfb\u52a0\u5e93\u6240\u5728\u7684\u76ee\u5f55\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(81877).Z})))}v.isMDXComponent=!0},46153:function(e,n,t){n.Z=t.p+"assets/images/AddToBuildPhases-3e79422ff24780db618eae2d7a5ea604.png"},83751:function(e,n,t){n.Z=t.p+"assets/images/AddToLibraries-92a6a7f58c75a8344d9bbeeae4ac167b.png"},81877:function(e,n,t){n.Z=t.p+"assets/images/AddToSearchPaths-7b278a6ea5ef28cfa94e8d22da5a8b13.png"}}]);