"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[52642],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},64894:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return f},metadata:function(){return d},toc:function(){return v},default:function(){return k}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const s={id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0"},f=void 0,d={unversionedId:"xplat-implementation",id:"version-0.66/xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0",description:"This document refers to the architecture of the new renderer, Fabric, that is in active roll-out.",source:"@site/versioned_docs/version-0.66/xplat-implementation.md",sourceDirName:".",slug:"/xplat-implementation",permalink:"/docs/0.66/xplat-implementation",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/xplat-implementation.md",tags:[],version:"0.66",frontMatter:{id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0"},sidebar:"\u67b6\u6784",previous:{title:"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u6302\u8f7d\uff08\u6e32\u67d3\u6d41\u6c34\u7ebf\uff09",permalink:"/docs/0.66/render-pipeline"},next:{title:"\u89c6\u56fe\u62cd\u5e73",permalink:"/docs/0.66/view-flattening"}},v=[{value:"React Native \u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf",id:"react-native-\u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf",children:[],level:4}],b={toc:v};function k(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document refers to the architecture of the new renderer, ",(0,r.kt)("a",m({parentName:"p"},{href:"fabric-renderer"}),"Fabric"),", that is in active roll-out.")),(0,r.kt)("h4",m({},{id:"react-native-\u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf"}),"React Native \u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf"),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u4ee3 React Native \u6e32\u67d3\u5668\u4e2d\uff0cReact \u5f71\u5b50\u6811\u3001\u5e03\u5c40\u903b\u8f91\u3001\u89c6\u56fe\u62cd\u5e73\u7b97\u6cd5\u662f\u5728\u5404\u4e2a\u5e73\u53f0\u5355\u72ec\u5b9e\u73b0\u7684\u3002\u5f53\u524d\u7684\u6e32\u67d3\u5668\u7684\u8bbe\u8ba1\u4e0a\u91c7\u7528\u7684\u662f\u8de8\u5e73\u53f0\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5171\u4eab\u4e86\u6838\u5fc3\u7684 C++ \u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"React Native \u56e2\u961f\u8ba1\u5212\u5c06\u52a8\u753b\u7cfb\u7edf\u52a0\u5165\u5230\u6e32\u67d3\u7cfb\u7edf\u4e2d\uff0c\u5e76\u5c06 React Native \u7684\u6e32\u67d3\u7cfb\u7edf\u6269\u5c55\u5230\u65b0\u7684\u5e73\u53f0\uff0c\u4f8b\u5982 Windows\u3001\u6e38\u620f\u673a\u3001\u7535\u89c6\u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 C++ \u4f5c\u4e3a\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf\u6709\u51e0\u4e2a\u6709\u70b9\u3002\u9996\u5148\uff0c\u5355\u4e00\u5b9e\u73b0\u964d\u4f4e\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u3002\u5176\u6b21\uff0c\u5b83\u63d0\u5347\u4e86\u521b\u5efa React \u5f71\u5b50\u6811\u7684\u6027\u80fd\uff0c\u540c\u65f6\u5728 Android \u4e0a\uff0c\u4e5f\u56e0\u4e3a\u4e0d\u518d\u4f7f\u7528 JNI for Yoga\uff0c\u964d\u4f4e\u4e86 Yoga \u6e32\u67d3\u5f15\u64ce\u7684\u5f00\u9500\uff0c\u5e03\u5c40\u8ba1\u7b97\u7684\u6027\u80fd\u4e5f\u6709\u6240\u63d0\u5347\u3002\u6700\u540e\uff0c\u6bcf\u4e2a React \u5f71\u5b50\u8282\u70b9\u5728 C++ \u4e2d\u5360\u7528\u7684\u5185\u5b58\uff0c\u6bd4\u5728 Kotlin \u6216 Swift \u4e2d\u5360\u7528\u7684\u8981\u5c0f\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("p",{parentName:"blockquote"},"Java Native Interface (JNI)\uff1a\u4e00\u4e2a\u7528 Java \u5199\u7684 API\uff0c\u7528\u4e8e\u5728 Java \u4e2d\u5199 native(\u8bd1\u6ce8\uff1a\u6307\u8c03\u7528 C++) \u65b9\u6cd5\u3002\u4f5c\u7528\u662f\u5b9e\u73b0 Fabric \u7684 C++ \u6838\u5fc3\u548c Android \u7684\u901a\u4fe1\u3002")),(0,r.kt)("p",null,"React Native \u56e2\u961f\u8fd8\u4f7f\u7528\u4e86\u5f3a\u5236\u4e0d\u53ef\u53d8\u7684 C++ \u7279\u6027\uff0c\u6765\u786e\u4fdd\u5e76\u53d1\u8bbf\u95ee\u65f6\u5171\u4eab\u8d44\u6e90\u5373\u4fbf\u4e0d\u52a0\u9501\u4fdd\u62a4\uff0c\u4e5f\u4e0d\u4f1a\u6709\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4f46\u5728 Android \u7aef\u8fd8\u6709\u4e24\u79cd\u4f8b\u5916\uff0c\u6e32\u67d3\u5668\u4f9d\u7136\u4f1a\u6709 JNI \u7684\u5f00\u9500\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u590d\u6742\u89c6\u56fe\uff0c\u6bd4\u5982 Text\u3001TextInput \u7b49\uff0c\u4f9d\u7136\u4f1a\u4f7f\u7528 JNI \u6765\u4f20\u8f93\u5c5e\u6027 props\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6302\u8f7d\u9636\u6bb5\u4f9d\u7136\u4f1a\u4f7f\u7528 JNI \u6765\u53d1\u9001\u53d8\u66f4\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"React Native \u56e2\u961f\u5728\u63a2\u7d22\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteBuffer")," \u5e8f\u5217\u5316\u6570\u636e\u8fd9\u79cd\u65b0\u7684\u673a\u5236\uff0c\u6765\u66ff\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadableMap"),"\uff0c\u51cf\u5c11 JNI \u7684\u5f00\u9500\u3002\u76ee\u6807\u662f\u5c06 JNI \u7684\u5f00\u9500\u51cf\u5c11 35~50%\u3002"),(0,r.kt)("p",null,"\u6e32\u67d3\u5668\u63d0\u4f9b\u4e86  C++ \u4e0e\u4e24\u8fb9\u901a\u4fe1\u7684 API\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(i)"),"  \u4e0e React \u901a\u4fe1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(ii)")," \u4e0e\u5bbf\u4e3b\u5e73\u53f0\u901a\u4fe1")),(0,r.kt)("p",null,"\u5173\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"(i)  "),"React \u4e0e\u6e32\u67d3\u5668\u7684\u901a\u4fe1\uff0c\u5305\u62ec",(0,r.kt)("strong",{parentName:"p"},"\u6e32\u67d3\uff08render\uff09")," React \u6811\u548c\u76d1\u542c",(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\uff08event\uff09"),"\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"onLayout"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"onKeyPress"),"\u3001touch \u7b49\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"(ii)  ")," React Native \u6e32\u67d3\u5668\u4e0e\u5bbf\u4e3b\u5e73\u53f0\u7684\u901a\u4fe1\uff0c\u5305\u62ec\u5728\u5c4f\u5e55\u4e0a",(0,r.kt)("strong",{parentName:"p"},"\u6302\u8f7d\uff08mount\uff09"),"\u5bbf\u4e3b\u89c6\u56fe\uff0c\u5305\u62ec create\u3001insert\u3001update\u3001delete \u5bbf\u4e3b\u89c6\u56fe\uff0c\u548c\u76d1\u542c\u7528\u6237\u5728\u5bbf\u4e3b\u5e73\u53f0\u4ea7\u751f\u7684",(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\uff08event\uff09"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",m({parentName:"p"},{src:"https://reactnative.dev/assets/images/xplat-implementation-diagram-7611cf9dfb6d15667365630147d83ca5.png",alt:"Cross-platform implementation diagram"}))))}k.isMDXComponent=!0}}]);