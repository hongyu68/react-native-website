"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22112],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),v=i,f=d["".concat(c,".").concat(v)]||d[v]||p[v]||r;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63007:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return v},metadata:function(){return f},toc:function(){return m},default:function(){return y}});var n=a(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&u(e,a,t[a]);return e};const d={id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},v=void 0,f={unversionedId:"native-modules-intro",id:"version-0.65/native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb",description:"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.",source:"@site/versioned_docs/version-0.65/native-modules-intro.md",sourceDirName:".",slug:"/native-modules-intro",permalink:"/docs/0.65/native-modules-intro",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-intro.md",tags:[],version:"0.65",frontMatter:{id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},sidebar:"version-0.65/docs",previous:{title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",permalink:"/docs/0.65/security"},next:{title:"Android \u539f\u751f\u6a21\u5757",permalink:"/docs/0.65/native-modules-android"}},m=[{value:"\u521b\u5efa\u539f\u751f\u6a21\u5757",id:"\u521b\u5efa\u539f\u751f\u6a21\u5757",children:[],level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",children:[],level:2}],h={toc:m};function y(e){var t,a=e,{components:i}=a,u=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},h),u),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing."),(0,n.kt)("p",null,"The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists. If React Native doesn't export a native API that your JS app needs you should be able to export it yourself!"),(0,n.kt)("h2",p({},{id:"\u521b\u5efa\u539f\u751f\u6a21\u5757"}),"\u521b\u5efa\u539f\u751f\u6a21\u5757"),(0,n.kt)("p",null,"There are two ways to write a native module for your React Native application:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Directly within your React Native application\u2019s iOS/Android projects"),(0,n.kt)("li",{parentName:"ol"},"As a NPM package that can be installed as a dependency by your/other React Native applications")),(0,n.kt)("p",null,"This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the ",(0,n.kt)("a",p({parentName:"p"},{href:"native-modules-setup"}),"Setting Up a Native Module as a NPM Package")," guide if you are interested in doing so."),(0,n.kt)("h2",p({},{id:"\u6559\u7a0b"}),"\u6559\u7a0b"),(0,n.kt)("p",null,"In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps ",(0,n.kt)("a",p({parentName:"p"},{href:"getting-started"}),"here")," to setup a React Native application if you do not already have one."),(0,n.kt)("p",null,"Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application."),(0,n.kt)("p",null,"In the following sections you will create such a Calendar native module for both ",(0,n.kt)("a",p({parentName:"p"},{href:"native-modules-android"}),"Android")," and ",(0,n.kt)("a",p({parentName:"p"},{href:"native-modules-ios"}),"iOS"),"."))}y.isMDXComponent=!0}}]);