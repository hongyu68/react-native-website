"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[11410],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,f=m["".concat(c,".").concat(g)]||m[g]||p[g]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10537:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return d},default:function(){return v}});var o=r(35318),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const m={id:"using-a-scrollview",title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe"},g=void 0,f={unversionedId:"using-a-scrollview",id:"version-0.67/using-a-scrollview",title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe",description:"ScrollView\u662f\u4e00\u4e2a\u901a\u7528\u7684\u53ef\u6eda\u52a8\u7684\u5bb9\u5668\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u5165\u591a\u4e2a\u7ec4\u4ef6\u548c\u89c6\u56fe\uff0c\u800c\u4e14\u8fd9\u4e9b\u7ec4\u4ef6\u5e76\u4e0d\u9700\u8981\u662f\u540c\u7c7b\u578b\u7684\u3002ScrollView \u4e0d\u4ec5\u53ef\u4ee5\u5782\u76f4\u6eda\u52a8\uff0c\u8fd8\u80fd\u6c34\u5e73\u6eda\u52a8\uff08\u901a\u8fc7horizontal\u5c5e\u6027\u6765\u8bbe\u7f6e\uff09\u3002",source:"@site/versioned_docs/version-0.67/using-a-scrollview.md",sourceDirName:".",slug:"/using-a-scrollview",permalink:"/docs/using-a-scrollview",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/using-a-scrollview.md",tags:[],version:"0.67",frontMatter:{id:"using-a-scrollview",title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe"},sidebar:"docs",previous:{title:"\u5904\u7406\u6587\u672c\u8f93\u5165",permalink:"/docs/handling-text-input"},next:{title:"\u4f7f\u7528\u957f\u5217\u8868",permalink:"/docs/using-a-listview"}},d=[],D={toc:d};function v(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=p(p({},D),u),a(t,i({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,(0,o.kt)("a",p({parentName:"p"},{href:"/docs/scrollview"}),(0,o.kt)("inlineCode",{parentName:"a"},"ScrollView")),"\u662f\u4e00\u4e2a\u901a\u7528\u7684\u53ef\u6eda\u52a8\u7684\u5bb9\u5668\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u5165\u591a\u4e2a\u7ec4\u4ef6\u548c\u89c6\u56fe\uff0c\u800c\u4e14\u8fd9\u4e9b\u7ec4\u4ef6\u5e76\u4e0d\u9700\u8981\u662f\u540c\u7c7b\u578b\u7684\u3002ScrollView \u4e0d\u4ec5\u53ef\u4ee5\u5782\u76f4\u6eda\u52a8\uff0c\u8fd8\u80fd\u6c34\u5e73\u6eda\u52a8\uff08\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal"),"\u5c5e\u6027\u6765\u8bbe\u7f6e\uff09\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u4e86\u4e00\u4e2a\u5782\u76f4\u6eda\u52a8\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\uff0c\u5176\u4e2d\u8fd8\u6df7\u6742\u4e86\u56fe\u7247\u548c\u6587\u5b57\u7ec4\u4ef6\u3002"),(0,o.kt)("div",p({},{className:"snack-player","data-snack-name":"Using ScrollView","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20ScrollView%2C%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20logo%20%3D%20%7B%0A%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png'%2C%0A%20%20width%3A%2064%2C%0A%20%20height%3A%2064%0A%7D%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CScrollView%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScroll%20me%20plz%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EIf%20you%20like%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScrolling%20down%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EWhat's%20the%20best%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EFramework%20around%3F%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2080%20%7D%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FScrollView%3E%0A)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,o.kt)("p",null,"ScrollViews \u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"pagingEnabled"),"\u5c5e\u6027\u6765\u5141\u8bb8\u4f7f\u7528\u6ed1\u52a8\u624b\u52bf\u5bf9\u89c6\u56fe\u8fdb\u884c\u5206\u9875\uff0c\u5728 Android \u4e0a\u4e5f\u53ef\u4ee5\u5229\u7528",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/react-native-viewpager"}),"ViewPager"),"\u7ec4\u4ef6\u6c34\u5e73\u6ed1\u52a8\u89c6\u56fe\u3002"),(0,o.kt)("p",null,"\u5728 iOS \u4e0a\u5305\u542b\u5355\u4e2a\u5b50\u5143\u7d20\u7684 ScrollViews \u53ef\u4ee5\u5141\u8bb8\u7528\u6237\u5bf9\u5185\u5bb9\u8fdb\u884c\u7f29\u653e. \u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"maximumZoomScale"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"minimumZoomScale"),"\u4e24\u8005\u7684\u5c5e\u6027, \u60a8\u7684\u7528\u6237\u80fd\u591f\u5229\u7528\u634f\u5408\u4ee5\u53ca\u6269\u5927\u624b\u52bf\u6765\u653e\u5927\u6216\u7f29\u5c0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\u9002\u5408\u7528\u6765\u663e\u793a\u6570\u91cf\u4e0d\u591a\u7684\u6eda\u52a8\u5143\u7d20\u3002\u653e\u7f6e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\u4e2d\u7684\u6240\u6709\u7ec4\u4ef6\u90fd\u4f1a\u88ab\u6e32\u67d3\uff0c\u54ea\u6015\u6709\u4e9b\u7ec4\u4ef6\u56e0\u4e3a\u5185\u5bb9\u592a\u957f\u88ab\u6324\u51fa\u4e86\u5c4f\u5e55\u5916\u3002\u5982\u679c\u4f60\u9700\u8981\u663e\u793a\u8f83\u957f\u7684\u6eda\u52a8\u5217\u8868\uff0c\u90a3\u4e48\u5e94\u8be5\u4f7f\u7528\u529f\u80fd\u5dee\u4e0d\u591a\u4f46\u6027\u80fd\u66f4\u597d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u7ec4\u4ef6\u3002\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770b",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/using-a-listview"}),"\u5982\u4f55\u4f7f\u7528\u957f\u5217\u8868"),"\u3002"))}v.isMDXComponent=!0}}]);