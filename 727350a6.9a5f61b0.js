(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{238:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(8),o=(a(0),a(413)),r={id:"native-modules-intro",title:"Native Modules Intro"},c={unversionedId:"native-modules-intro",id:"native-modules-intro",isDocsHomePage:!1,title:"Native Modules Intro",description:"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.",source:"@site/../cndocs/native-modules-intro.md",slug:"/native-modules-intro",permalink:"/docs/next/native-modules-intro",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-intro.md",version:"current",lastUpdatedAt:1608781688,sidebar:"docs",previous:{title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",permalink:"/docs/next/security"},next:{title:"Android \u539f\u751f\u6a21\u5757",permalink:"/docs/next/native-modules-android"}},l=[{value:"Native Module Setup",id:"native-module-setup",children:[]},{value:"Getting Started",id:"getting-started",children:[]}],s={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing."),Object(o.b)("p",null,"The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists. If React Native doesn't export a native API that your JS app needs you should be able to export it yourself!"),Object(o.b)("h2",{id:"native-module-setup"},"Native Module Setup"),Object(o.b)("p",null,"There are two ways to write a native module for your React Native application:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Directly within your React Native application\u2019s iOS/Android projects"),Object(o.b)("li",{parentName:"ol"},"As a NPM package that can be installed as a dependency by your/other React Native applications")),Object(o.b)("p",null,"This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"native-modules-setup"}),"Setting Up a Native Module as a NPM Package")," guide if you are interested in doing so."),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started"}),"here")," to setup a React Native application if you do not already have one."),Object(o.b)("p",null,"Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application."),Object(o.b)("p",null,"In the following sections you will create such a Calendar native module for both ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"native-modules-android"}),"Android")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"native-modules-ios"}),"iOS"),"."))}u.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},v=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),v=n,b=p["".concat(r,".").concat(v)]||p[v]||d[v]||o;return a?i.a.createElement(b,c(c({ref:t},s),{},{components:a})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}v.displayName="MDXCreateElement"}}]);