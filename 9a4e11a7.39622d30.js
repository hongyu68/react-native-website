(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{293:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(8),a=(t(0),t(413)),o={id:"removing-default-permissions",title:"\u79fb\u9664\u4e0d\u9700\u8981\u7684\u6743\u9650"},p={unversionedId:"removing-default-permissions",id:"removing-default-permissions",isDocsHomePage:!1,title:"\u79fb\u9664\u4e0d\u9700\u8981\u7684\u6743\u9650",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u7ed9\u6700\u7ec8\u6253\u5305\u7684 APK \u52a0\u5165\u4e00\u4e9b\u6743\u9650\u7533\u8bf7\uff0c\u5177\u4f53\u5982\u4e0b\uff1a",source:"@site/../cndocs/removing-default-permissions.md",slug:"/removing-default-permissions",permalink:"/docs/next/removing-default-permissions",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/removing-default-permissions.md",version:"current",lastUpdatedAt:1608781688},s=[{value:"\u63d0\u793a",id:"\u63d0\u793a",children:[]}],c={toc:s};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u7ed9\u6700\u7ec8\u6253\u5305\u7684 APK \u52a0\u5165\u4e00\u4e9b\u6743\u9650\u7533\u8bf7\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"android.permission.INTERNET - \u8c03\u8bd5\u6a21\u5f0f\u6240\u9700\u3002"),Object(a.b)("li",{parentName:"ul"},"android.permission.SYSTEM_ALERT_WINDOW - \u8c03\u8bd5\u6a21\u5f0f\u6240\u9700\u3002"),Object(a.b)("li",{parentName:"ul"},"android.permission.READ_PHONE_STATE - \u975e\u5fc5\u9700\u3002"),Object(a.b)("li",{parentName:"ul"},"android.permission.WRITE_EXTERNAL_STORAGE - \u975e\u5fc5\u9700\u3002"),Object(a.b)("li",{parentName:"ul"},"android.permission.READ_EXTERNAL_STORAGE - \u975e\u5fc5\u9700\u3002")),Object(a.b)("p",null,"\u8fd9\u4e9b\u6743\u9650\u7533\u8bf7\u4f1a\u5728\u7528\u6237\u5b89\u88c5\u6216\u8fd0\u884c\u65f6\u5f39\u51fa\u63d0\u793a\u6253\u65ad\u7528\u6237\u751a\u81f3\u4f7f\u7528\u6237\u611f\u5230\u53cd\u611f\uff0c\u6240\u4ee5\u6211\u4eec\u5e94\u8be5\u5c3d\u91cf\u79fb\u9664\u4e0d\u5fc5\u8981\u7684\u6743\u9650\u7533\u8bf7\uff0c\u4ee5\u6539\u8fdb\u7528\u6237\u4f53\u9a8c\u548c\u63d0\u5347\u7528\u6237\u597d\u611f\u3002"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"\u6211\u4eec\u9996\u5148\u53ef\u4ee5\u8003\u8651\u79fb\u9664",Object(a.b)("inlineCode",{parentName:"p"},"READ_PHONE_STATE"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"WRITE_EXTERNAL_STORAGE"),"\u548c ",Object(a.b)("inlineCode",{parentName:"p"},"READ_EXTERNAL_STORAGE"),"\u4e09\u9879\u975e\u5fc5\u9700\u7684\u6743\u9650\u3002\u5373\u4fbf\u4f60\u4f7f\u7528\u4e86",Object(a.b)("inlineCode",{parentName:"p"},"AsyncStorage"),"\u4e5f\u4e0d\u9700\u8981\u8fd9\u4e09\u4e2a\u6743\u9650\uff0c\u6240\u4ee5\u79fb\u9664\u662f\u5f88\u5b89\u5168\u7684\u3002\u5f53\u4f60\u4ee5\u540e\u9700\u8981\u4f7f\u7528\u65f6\uff0c\u8fd8\u53ef\u4ee5\u518d\u52a0\u56de\u6765\u3002")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"\u6253\u5f00",Object(a.b)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml"),"\u6587\u4ef6\u3002")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Even though these three permissions are not listed in the manifest they get added in. We add the three permissions with ",Object(a.b)("inlineCode",{parentName:"p"},'tools:node="remove"'),' attribute, to make sure it gets removed during build. Note that the package identifier will be different, for below it is "com.myapp" because the project was created with ',Object(a.b)("inlineCode",{parentName:"p"},"npx react-native init myapp"),"."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.myappid"\n+   xmlns:tools="http://schemas.android.com/tools"\n    >\n\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_PHONE_STATE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_EXTERNAL_STORAGE" />\n\n    <application\n      android:name=".MainApplication"\n      android:label="@string/app_name"\n      android:icon="@mipmap/ic_launcher"\n      android:allowBackup="false"\n      android:theme="@style/AppTheme">\n      <activity\n        android:name=".MainActivity"\n        android:label="@string/app_name"\n        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"\n        android:windowSoftInputMode="adjustResize">\n        <intent-filter>\n            <action android:name="android.intent.action.MAIN" />\n            <category android:name="android.intent.category.LAUNCHER" />\n        </intent-filter>\n      </activity>\n      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />\n    </application>\n\n</manifest>\n')))),Object(a.b)("p",null,"That's it. We did not remove the ",Object(a.b)("inlineCode",{parentName:"p"},"INTERNET")," permission as pretty much all apps use it. Now whenever you create a production APK all these 4 permissions will be removed. When you create a debug APK (",Object(a.b)("inlineCode",{parentName:"p"},"npx react-native run-android"),") it will install the APK with all four permissions removed."),Object(a.b)("h2",{id:"\u63d0\u793a"},"\u63d0\u793a"),Object(a.b)("p",null,'If your App is free to use in the App-Store and there is no "In-App-Purchase" possible in your App, you also can remove: '),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"- android.vending.CHECK_LICENSE\n")))}d.isMDXComponent=!0},413:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),d=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=d(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(t),u=r,b=l["".concat(o,".").concat(u)]||l[u]||m[u]||a;return t?i.a.createElement(b,p(p({ref:n},c),{},{components:t})):i.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);