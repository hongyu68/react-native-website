"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83125],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90776:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return b},default:function(){return y}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},m=void 0,f={unversionedId:"native-modules-setup",id:"version-0.67/native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e",description:"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find this guide useful.",source:"@site/versioned_docs/version-0.67/native-module-setup.md",sourceDirName:".",slug:"/native-modules-setup",permalink:"/docs/native-modules-setup",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-module-setup.md",tags:[],version:"0.67",frontMatter:{id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},sidebar:"docs",previous:{title:"iOS \u539f\u751f\u6a21\u5757",permalink:"/docs/native-modules-ios"},next:{title:"Android \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/native-components-android"}},b=[],v={toc:b};function y(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),c),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find ",(0,r.kt)("a",s({parentName:"p"},{href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"}),"this guide")," useful."),(0,r.kt)("p",null,"To get set up with the basic project structure for a native module we will use the community tool called ",(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/react-native-community/bob"}),"Bob"),". You can go ahead further and dive deep into how that library works, but for our needs we will only execute the basic ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"npx @react-native-community/bob create react-native-awesome-module\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-awesome-module")," is the name you would like for the new module. After doing this you will navigate into ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-awesome-module")," folder and bootstrap the example project by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"yarn bootstrap\n")),(0,r.kt)("p",null,"When the bootstrap is done, you will be able to start the example app by executing one of the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"# Android app\nyarn example android\n# iOS app\nyarn example ios\n")),(0,r.kt)("p",null,"When all steps above are done, you will be able to continue with ",(0,r.kt)("a",s({parentName:"p"},{href:"native-modules-android"}),"Android Native Modules")," or ",(0,r.kt)("a",s({parentName:"p"},{href:"native-modules-ios"}),"iOS Native Modules")," guides to add in some code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a less opinionated setup, have a look at the third party tool ",(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/brodybits/create-react-native-module"}),"create-react-native-module"),".")))}y.isMDXComponent=!0}}]);