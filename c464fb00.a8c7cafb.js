(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{333:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(413)),i={id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},c={unversionedId:"native-modules-setup",id:"version-0.63/native-modules-setup",isDocsHomePage:!1,title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e",description:"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find this guide useful.",source:"@site/versioned_docs/version-0.63/native-module-setup.md",slug:"/native-modules-setup",permalink:"/docs/native-modules-setup",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/native-module-setup.md",version:"0.63",lastUpdatedAt:1608781688,sidebar:"version-0.63/docs",previous:{title:"iOS \u539f\u751f\u6a21\u5757",permalink:"/docs/native-modules-ios"},next:{title:"Android \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/native-components-android"}},u=[],l={toc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"}),"this guide")," useful."),Object(o.b)("p",null,"To get set up with the basic project structure for a native module we will use the community tool called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/bob"}),"Bob"),". You can go ahead further and dive deep into how that library works, but for our needs we will only execute the basic ",Object(o.b)("inlineCode",{parentName:"p"},"create")," script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx @react-native-community/bob create react-native-awesome-module\n")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-awesome-module")," is the name you would like for the new module. After doing this you will navigate into ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-awesome-module")," folder and bootstrap the example project by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn bootstrap\n")),Object(o.b)("p",null,"When the bootstrap is done, you will be able to start the example app by executing one of the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Android app\nyarn example android\n# iOS app\nyarn example ios\n")),Object(o.b)("p",null,"When all steps above are done, you will be able to continue with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"native-modules-android"}),"Android Native Modules")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"native-modules-ios"}),"iOS Native Modules")," guides to add in some code."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For a less opinionated setup, have a look at the third party tool ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/brodybits/create-react-native-module"}),"create-react-native-module"),".")),Object(o.b)("hr",null),Object(o.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(o.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}s.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);