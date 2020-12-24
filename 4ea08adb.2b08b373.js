(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(413)),i={id:"publishing-to-app-store",title:"\u4e0a\u67b6 App Store"},p={unversionedId:"publishing-to-app-store",id:"publishing-to-app-store",isDocsHomePage:!1,title:"\u4e0a\u67b6 App Store",description:"\u4e0a\u67b6\u5e94\u7528\u7684\u8fc7\u7a0b\u548c\u4efb\u4f55\u5176\u5b83\u539f\u751f iOS \u5e94\u7528\u4e00\u6837\uff0c\u4f46\u6709\u4e00\u4e9b\u989d\u5916\u7684\u6ce8\u610f\u4e8b\u9879\u8981\u8003\u8651\u3002",source:"@site/../cndocs/publishing-to-app-store.md",slug:"/publishing-to-app-store",permalink:"/docs/next/publishing-to-app-store",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/publishing-to-app-store.md",version:"current",lastUpdatedAt:1608781688,sidebar:"docs",previous:{title:"iOS\u5e94\u7528\u6269\u5c55",permalink:"/docs/next/app-extensions"}},c=[{value:"1. Enable App Transport Security",id:"1-enable-app-transport-security",children:[]},{value:"2. \u914d\u7f6e release scheme",id:"2-\u914d\u7f6e-release-scheme",children:[]},{value:"3. \u7f16\u8bd1\u53d1\u5e03 app",id:"3-\u7f16\u8bd1\u53d1\u5e03-app",children:[]}],b={toc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4e0a\u67b6\u5e94\u7528\u7684\u8fc7\u7a0b\u548c\u4efb\u4f55\u5176\u5b83\u539f\u751f iOS \u5e94\u7528\u4e00\u6837\uff0c\u4f46\u6709\u4e00\u4e9b\u989d\u5916\u7684\u6ce8\u610f\u4e8b\u9879\u8981\u8003\u8651\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you are using Expo then read the Expo Guide for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/distribution/building-standalone-apps/"}),"Building Standalone Apps"),".")),Object(o.b)("h3",{id:"1-enable-app-transport-security"},"1. Enable App Transport Security"),Object(o.b)("p",null,"App Transport Security \u662f iOS 9 \u5f15\u5165\u7684\u4e00\u9879\u5b89\u5168\u7279\u6027\uff0c\u62d2\u7edd\u4e0d\u901a\u8fc7 HTTPS \u53d1\u9001\u7684\u6240\u6709 HTTP \u8bf7\u6c42\u3002\u8fd9\u4f1a\u5bfc\u81f4 HTTP \u4f20\u8f93\u963b\u585e\uff0c\u5305\u62ec\u5f00\u53d1\u8005 React Native \u670d\u52a1\u5668\u3002\u4e3a\u4e86\u4f7f\u5f00\u53d1\u5bb9\u6613\uff0c\u5728 React Native projects \u91cc ATS \u9ed8\u8ba4\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"localhost"),"\u7981\u7528\u3002"),Object(o.b)("p",null,"You should re-enable ATS prior to building your app for production by removing the ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," entry from the ",Object(o.b)("inlineCode",{parentName:"p"},"NSExceptionDomains")," dictionary and setting ",Object(o.b)("inlineCode",{parentName:"p"},"NSAllowsArbitraryLoads")," to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"Info.plist")," file in the ",Object(o.b)("inlineCode",{parentName:"p"},"ios/")," folder. You can also re-enable ATS from within Xcode by opening your target properties under the Info pane and editing the App Transport Security Settings entry."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If your application needs to access HTTP resources on production, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/"}),"this post")," to learn how to configure ATS on your project.")),Object(o.b)("h3",{id:"2-\u914d\u7f6e-release-scheme"},"2. \u914d\u7f6e release scheme"),Object(o.b)("p",null,"\u9700\u8981\u5728 Xcode \u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"Release")," scheme \u7f16\u8bd1\u5728 App Store \u53d1\u5e03\u7684 app\u3002",Object(o.b)("inlineCode",{parentName:"p"},"Release"),"\u7248\u672c\u7684\u5e94\u7528\u4f1a\u81ea\u52a8\u7981\u7528\u5f00\u53d1\u8005\u83dc\u5355\uff0c\u540c\u65f6\u4e5f\u4f1a\u5c06 js \u6587\u4ef6\u548c\u9759\u6001\u56fe\u7247\u6253\u5305\u538b\u7f29\u540e\u5185\u7f6e\u5230\u5305\u4e2d\uff0c\u8fd9\u6837\u5e94\u7528\u53ef\u4ee5\u5728\u672c\u5730\u8bfb\u53d6\u800c\u65e0\u9700\u8bbf\u95ee\u5f00\u53d1\u670d\u52a1\u5668\uff08\u540c\u65f6\u8fd9\u6837\u4e00\u6765\u4f60\u4e5f\u65e0\u6cd5\u518d\u8c03\u8bd5\uff0c\u9700\u8981\u8c03\u8bd5\u8bf7\u5c06 Buiid Configuration \u518d\u6539\u4e3a debug\uff09\u3002",Object(o.b)("br",{parentName:"p"}),"\n","\u7531\u4e8e\u53d1\u5e03\u7248\u672c\u5df2\u7ecf\u5185\u7f6e\u4e86 js \u6587\u4ef6\uff0c\u56e0\u800c\u4e5f\u65e0\u6cd5\u518d\u901a\u8fc7\u5f00\u53d1\u670d\u52a1\u5668\u6765\u5b9e\u65f6\u66f4\u65b0\u3002\u9762\u5411\u7528\u6237\u7684\u70ed\u66f4\u65b0\uff0c\u8bf7\u4f7f\u7528\u4e13\u95e8\u7684",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pushy.reactnative.cn"}),"\u70ed\u66f4\u65b0\u670d\u52a1"),"\u3002"),Object(o.b)("p",null,"\u8981\u914d\u7f6e app \u4e3a\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"Release")," scheme \u7f16\u8bd1\uff0c\u8bf7\u524d\u5f80",Object(o.b)("strong",{parentName:"p"},"Product")," \u2192 ",Object(o.b)("strong",{parentName:"p"},"Scheme")," \u2192 ",Object(o.b)("strong",{parentName:"p"},"Edit Scheme"),"\u3002\u9009\u62e9\u4fa7\u8fb9\u680f\u7684",Object(o.b)("strong",{parentName:"p"},"Run"),"\u6807\u7b7e\uff0c\u7136\u540e\u8bbe\u7f6e\u4e0b\u62c9\u7684 Build Configuration \u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"Release"),"\u3002"),Object(o.b)("p",null,Object(o.b)("img",{src:n(530).default})),Object(o.b)("h4",{id:"\u5173\u4e8e\u542f\u52a8\u5c4f\u7684\u4f18\u5316\u6280\u5de7"},"\u5173\u4e8e\u542f\u52a8\u5c4f\u7684\u4f18\u5316\u6280\u5de7"),Object(o.b)("p",null,"\u968f\u7740 App \u5305\u5927\u5c0f\u7684\u589e\u957f\uff0c\u53ef\u80fd\u5f00\u59cb\u5728\u542f\u52a8\u5c4f(splash)\u548c\u6839\u5e94\u7528\u89c6\u56fe\u663e\u793a\u4e4b\u95f4\u770b\u5230\u767d\u5c4f\u95ea\u73b0\u3002\u5982\u679c\u662f\u8fd9\u6837\uff0c\u4e3a\u4e86\u5728\u8f6c\u6362\u671f\u95f4\u4fdd\u6301\u542f\u52a8\u5c4f\u663e\u793a\uff0c\u53ef\u4ee5\u6dfb\u52a0\u4e0b\u5217\u4ee3\u7801\u5230",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.m"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),'  // Place this code after "[self.window makeKeyAndVisible]" and before "return YES;"\n  UIStoryboard *sb = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];\n  UIViewController *vc = [sb instantiateInitialViewController];\n  rootView.loadingView = vc.view;\n')),Object(o.b)("p",null,"The static bundle is built every time you target a physical device, even in Debug. If you want to save time, turn off bundle generation in Debug by adding the following to your shell script in the Xcode Build Phase ",Object(o.b)("inlineCode",{parentName:"p"},"Bundle React Native code and images"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),' if [ "${CONFIGURATION}" == "Debug" ]; then\n  export SKIP_BUNDLING=true\n fi\n')),Object(o.b)("h3",{id:"3-\u7f16\u8bd1\u53d1\u5e03-app"},"3. \u7f16\u8bd1\u53d1\u5e03 app"),Object(o.b)("p",null,"\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb",Object(o.b)("inlineCode",{parentName:"p"},"\u2318B"),"\u6216\u4ece\u83dc\u5355\u680f\u9009\u62e9 ",Object(o.b)("strong",{parentName:"p"},"Product")," \u2192 ",Object(o.b)("strong",{parentName:"p"},"Build")," \u7f16\u8bd1\u53d1\u5e03 app\u3002\u4e00\u65e6\u7f16\u8bd1\u53d1\u5e03\uff0c\u5c31\u80fd\u591f\u5411 beta \u6d4b\u8bd5\u8005\u53d1\u5e03 app\uff0c\u63d0\u4ea4 app \u5230 App Store\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also use the ",Object(o.b)("inlineCode",{parentName:"p"},"React Native CLI")," to perform this operation using the option ",Object(o.b)("inlineCode",{parentName:"p"},"--configuration")," with the value ",Object(o.b)("inlineCode",{parentName:"p"},"Release")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"npx react-native run-ios --configuration Release"),").")))}l.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,p(p({ref:t},b),{},{components:n})):a.a.createElement(m,p({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},530:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ConfigureReleaseScheme-68e17e8d9a2cf2b73adb47865b45399d.png"}}]);