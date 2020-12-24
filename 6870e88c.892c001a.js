(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{229:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return s}));var a=i(3),n=i(8),r=(i(0),i(413)),l={id:"pixelratio",title:"PixelRatio"},o={unversionedId:"pixelratio",id:"version-0.63/pixelratio",isDocsHomePage:!1,title:"PixelRatio",description:"PixelRatio \u53ef\u4ee5\u83b7\u53d6\u5230\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\u548c\u5b57\u4f53\u7f29\u653e\u6bd4\u3002",source:"@site/versioned_docs/version-0.63/pixelratio.md",slug:"/pixelratio",permalink:"/docs/pixelratio",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/pixelratio.md",version:"0.63",lastUpdatedAt:1608781688,sidebar:"version-0.63/api",previous:{title:"PanResponder",permalink:"/docs/panresponder"},next:{title:"PlatformColor",permalink:"/docs/platformcolor"}},c=[{value:"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247",id:"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247",children:[]},{value:"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50",id:"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>getFontScale()</code>",id:"getfontscale",children:[]},{value:"<code>getPixelSizeForLayoutSize()</code>",id:"getpixelsizeforlayoutsize",children:[]},{value:"<code>roundToNearestPixel()</code>",id:"roundtonearestpixel",children:[]}]}],b={toc:c};function s(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio")," \u53ef\u4ee5\u83b7\u53d6\u5230\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\u548c\u5b57\u4f53\u7f29\u653e\u6bd4\u3002"),Object(r.b)("h2",{id:"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247"},"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247"),Object(r.b)("p",null,"\u5982\u679c\u5e94\u7528\u8fd0\u884c\u5728\u4e00\u4e2a\u9ad8\u50cf\u7d20\u5bc6\u5ea6\u7684\u8bbe\u5907\u4e0a\uff0c\u663e\u793a\u7684\u56fe\u7247\u4e5f\u5e94\u5f53\u5206\u8fa8\u7387\u66f4\u9ad8\u3002\u4e00\u4e2a\u53d6\u5f97\u7f29\u7565\u56fe\u7684\u597d\u89c4\u5219\u5c31\u662f\u5c06\u663e\u793a\u5c3a\u5bf8\u4e58\u4ee5\u50cf\u7d20\u5bc6\u5ea6\u6bd4\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100),\n});\n<Image source={image} style={{width: 200, height: 100}} />\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8bd1\u6ce8: \u8fd9\u6bb5\u4ee3\u7801\u7684\u610f\u601d\u662f\uff0c\u5982\u679c\u4f60\u8981\u5728\u5c4f\u5e55\u4e0a\u6446\u653e\u4e00\u4e2a\u5bbd 200 \u9ad8 100 \u7684\u56fe\u7247\uff0c\u90a3\u4e48\u9996\u5148\u8981\u51c6\u5907\u591a\u4e2a\u5206\u8fa8\u7387\u5c3a\u5bf8\u7684\u56fe\u3002",Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio.getPixelSizeForLayoutSize(200)"),"\u65b9\u6cd5\u4f1a\u6839\u636e\u5f53\u524d\u8bbe\u5907\u7684 pixelratio \u8fd4\u56de\u5bf9\u5e94\u503c\uff0c\u6bd4\u5982\u5f53\u524d\u8bbe\u5907\u7684 pixelratio \u4e3a 2\uff0c\u5219\u8fd4\u56de 200 ","*"," 2 = 400\uff0c\u6700\u540e\u751f\u6210\u7684\u53c2\u6570\u4e3a{ width: 400, height: 200 }\uff0c\u7136\u540e\u5f00\u53d1\u8005\u81ea\u5df1\u5b9e\u73b0 getImage \u65b9\u6cd5\uff0c\u6839\u636e\u8fd9\u4e00\u53c2\u6570\uff0c\u8fd4\u56de\u6700\u7b26\u5408\u6b64\u5c3a\u5bf8\u7684\u56fe\u7247\u5730\u5740\u3002")),Object(r.b)("h2",{id:"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50"},"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50"),Object(r.b)("p",null,"\u5728 iOS \u8bbe\u5907\u4e0a\uff0c\u4f60\u53ef\u4ee5\u7ed9\u5143\u7d20\u6307\u5b9a\u4efb\u610f\u7cbe\u5ea6\u7684\u5750\u6807\u548c\u5c3a\u5bf8\uff0c\u4f8b\u5982 29.674825\u3002\u4e0d\u8fc7\u6700\u7ec8\u7684\u7269\u7406\u5c4f\u5e55\u4e0a\u53ea\u4f1a\u663e\u793a\u56fa\u5b9a\u7684\u5750\u6807\u6570\u3002\u8b6c\u5982 iPhone4 \u7684\u5206\u8fa8\u7387\u662f 640x960\uff0c\u800c iPhone6 \u662f 750","*","1334\u3002iOS \u4f1a\u8bd5\u56fe\u5c3d\u53ef\u80fd\u5fe0\u5b9e\u5730\u663e\u793a\u4f60\u6307\u5b9a\u7684\u5750\u6807\uff0c\u6240\u4ee5\u5b83\u91c7\u7528\u4e86\u4e00\u79cd\u628a\u4e00\u4e2a\u50cf\u7d20\u5206\u6563\u5230\u591a\u4e2a\u50cf\u7d20\u91cc\u7684\u505a\u6cd5\u6765\u6b3a\u9a97\u773c\u775b\u3002\u4f46\u8fd9\u4e2a\u4f5c\u7528\u7684\u8d1f\u9762\u5f71\u54cd\u662f\u663e\u793a\u51fa\u6765\u7684\u5143\u7d20\u770b\u8d77\u6765\u4f1a\u6709\u4e00\u4e9b\u6a21\u7cca\u3002"),Object(r.b)("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u5f00\u53d1\u8005\u4eec\u5e76\u4e0d\u60f3\u8981\u8fd9\u4e2a\u7279\u6027\uff0c\u53cd\u800c\u9700\u8981\u53bb\u505a\u4e00\u4e9b\u989d\u5916\u7684\u5de5\u4f5c\u6765\u786e\u4fdd\u5750\u6807\u4e0e\u50cf\u7d20\u5750\u6807\u5bf9\u9f50\uff0c\u6765\u907f\u514d\u5143\u7d20\u663e\u5f97\u6a21\u7cca\u3002\u5728 React Native \u4e2d\uff0c\u6211\u4eec\u4f1a\u81ea\u52a8\u5bf9\u9f50\u5750\u6807\u5230\u50cf\u7d20\u5750\u6807\u3002"),Object(r.b)("p",null,"\u6211\u4eec\u505a\u8fd9\u4e2a\u5bf9\u9f50\u7684\u65f6\u5019\u5fc5\u987b\u5341\u5206\u5c0f\u5fc3\u3002\u5982\u679c\u4f60\u540c\u65f6\u4f7f\u7528\u5df2\u7ecf\u5bf9\u9f50\u7684\u503c\u548c\u6ca1\u6709\u5bf9\u9f50\u7684\u503c\uff0c\u5c31\u4f1a\u5f88\u5bb9\u6613\u4ea7\u751f\u4e00\u4e9b\u56e0\u4e3a\u8fd1\u4f3c\u5bfc\u81f4\u7684\u7d2f\u79ef\u9519\u8bef\u3002\u5373\u4f7f\u8fd9\u6837\u7684\u7d2f\u79ef\u9519\u8bef\u53ea\u53d1\u751f\u4e00\u6b21\uff0c\u540e\u679c\u4e5f\u53ef\u80fd\u4f1a\u5f88\u4e25\u91cd\uff0c\u56e0\u4e3a\u5f88\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e2a\u50cf\u7d20\u5bbd\u7684\u8fb9\u6846\u6700\u7ec8\u7a81\u7136\u6d88\u5931\u6216\u8005\u663e\u793a\u4e3a\u4e24\u500d\u7684\u5bbd\u5ea6\u3002"),Object(r.b)("p",null,"\u5728 React Native \u4e2d\uff0c\u6240\u6709 JS \u4e2d\u7684\u4e1c\u897f\uff0c\u5305\u62ec\u5e03\u5c40\u5f15\u64ce\uff0c\u90fd\u4f7f\u7528\u4efb\u610f\u7cbe\u5ea6\u7684\u6570\u503c\u3002\u6211\u4eec\u53ea\u5728\u4e3b\u7ebf\u7a0b\u6700\u540e\u8bbe\u7f6e\u539f\u751f\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u548c\u5750\u6807\u7684\u65f6\u5019\u624d\u53bb\u505a\u5bf9\u9f50\u5de5\u4f5c\u3002\u800c\u4e14\uff0c\u5bf9\u9f50\u662f\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u8fdb\u884c\u7684\uff0c\u800c\u975e\u76f8\u5bf9\u4e8e\u7236\u5143\u7d20\u8fdb\u884c\uff0c\u8fdb\u4e00\u6b65\u907f\u514d\u8fd1\u4f3c\u8bef\u5dee\u7684\u7d2f\u79ef\u3002"),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PixelRatio Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Image%2C%20PixelRatio%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20TextInput%2C%20View%20%7D%20from%20%22react-native%22%3B%0Aconst%20size%20%3D%2050%3B%0Aconst%20cat%20%3D%20%7B%0A%20%20uri%3A%20%22https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat1.png%22%2C%0A%20%20width%3A%20size%2C%0A%20%20height%3A%20size%0A%7D%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CScrollView%20style%3D%7Bstyles.scrollContainer%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20Pixel%20Ratio%20is%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.get()%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20Font%20Scale%20is%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.getFontScale()%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EOn%20this%20device%20images%20with%20a%20layout%20width%20of%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bsize%7D%20px%3C%2FText%3E%0A%20%20%20%20%20%20%3CImage%20source%3D%7Bcat%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3Erequire%20images%20with%20a%20pixel%20width%20of%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%0A%20%20%20%20%20%20%20%20%7BPixelRatio.getPixelSizeForLayoutSize(size)%7D%20px%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20source%3D%7Bcat%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FScrollView%3E%0A)%3B%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20scrollContainer%3A%20%7B%0A%20%20%20%20flext%3A%201%2C%0A%20%20%20%20marginTop%3A%20%222em%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontSize%3A%2024%2C%0A%20%20%20%20marginBottom%3A%2012%2C%0A%20%20%20%20marginTop%3A%204%0A%20%20%7D%0A%7D)%3B%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(r.b)("h3",{id:"get"},Object(r.b)("inlineCode",{parentName:"h3"},"get()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static get()\n")),Object(r.b)("p",null,"\u8fd4\u56de\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\uff0c\u4f8b\u5982\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"mdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1.5"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"hdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 2"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone SE, 6S, 7, 8"),Object(r.b)("li",{parentName:"ul"},"iPhone XR"),Object(r.b)("li",{parentName:"ul"},"iPhone 11"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"iPhone 6S Plus, 7 Plus, 8 Plus"),Object(r.b)("li",{parentName:"ul"},"iPhone X, XS, XS Max"),Object(r.b)("li",{parentName:"ul"},"iPhone 11 Pro, 11 Pro Max"),Object(r.b)("li",{parentName:"ul"},"Pixel, Pixel 2"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxhdpi Android devices")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3.5"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Nexus 6"),Object(r.b)("li",{parentName:"ul"},"Pixel XL, Pixel 2 XL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxxhdpi Android devices"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getfontscale"},Object(r.b)("inlineCode",{parentName:"h3"},"getFontScale()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static getFontScale(): number\n")),Object(r.b)("p",null,"\u8fd4\u56de\u5b57\u4f53\u5927\u5c0f\u7f29\u653e\u6bd4\u4f8b\u3002\u8fd9\u4e2a\u6bd4\u4f8b\u53ef\u4ee5\u7528\u4e8e\u8ba1\u7b97\u7edd\u5bf9\u7684\u5b57\u4f53\u5927\u5c0f\uff0c\u6240\u4ee5\u5f88\u591a\u6df1\u5ea6\u4f9d\u8d56\u5b57\u4f53\u5927\u5c0f\u7684\u7ec4\u4ef6\u9700\u8981\u7528\u6b64\u51fd\u6570\u7684\u7ed3\u679c\u8fdb\u884c\u8ba1\u7b97\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Android \u4e0a\u5bf9\u5e94\u7684\u662f\u7528\u6237\u9009\u9879\u91cc\u7684\u201c\u8bbe\u7f6e > \u663e\u793a > \u5b57\u4f53\u5927\u5c0f\u201d\u3002"),Object(r.b)("li",{parentName:"ul"},"iOS \u4e0a\u5bf9\u5e94\u7684\u662f\u7528\u6237\u9009\u9879\u91cc\u7684",Object(r.b)("strong",{parentName:"li"},"Settings > Display & Brightness > Text Size"),", value can also be updated in ",Object(r.b)("strong",{parentName:"li"},"Settings > Accessibilty > Display & Test Size > Larger Text"))),Object(r.b)("p",null,"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u5b57\u4f53\u7f29\u653e\u5927\u5c0f\uff0c\u5b83\u4f1a\u76f4\u63a5\u8fd4\u56de\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\u3002"),Object(r.b)("p",null,"\u76ee\u524d\u8fd9\u4e2a\u51fd\u6570\u4ec5\u4ec5\u5728 Android \u8bbe\u5907\u4e0a\u5b9e\u73b0\u4e86\uff0c\u5728 iOS \u8bbe\u5907\u4e0a\u5b83\u4f1a\u76f4\u63a5\u8fd4\u56de\u9ed8\u8ba4\u7684\u50cf\u7d20\u5bc6\u5ea6\u3002"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpixelsizeforlayoutsize"},Object(r.b)("inlineCode",{parentName:"h3"},"getPixelSizeForLayoutSize()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static getPixelSizeForLayoutSize(layoutSize: number): number\n")),Object(r.b)("p",null,"\u5c06\u4e00\u4e2a\u5e03\u5c40\u5c3a\u5bf8(dp)\u8f6c\u6362\u4e3a\u50cf\u7d20\u5c3a\u5bf8(px)\u3002"),Object(r.b)("p",null,"\u4e00\u5b9a\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u503c\u3002"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"roundtonearestpixel"},Object(r.b)("inlineCode",{parentName:"h3"},"roundToNearestPixel()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static roundToNearestPixel(layoutSize)\n")),Object(r.b)("p",null,"Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",Object(r.b)("inlineCode",{parentName:"p"},"PixelRatio.roundToNearestPixel(8.4) = 8.33"),", which corresponds to exactly (8.33 ","*"," 3) = 25 pixels."),Object(r.b)("hr",null),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9816-sunnylqm184"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(98.16%), ",Object(r.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(1.84%)"))}s.isMDXComponent=!0},413:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var a=i(0),n=i.n(a);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(i),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return i?n.a.createElement(m,o(o({ref:t},b),{},{components:i})):n.a.createElement(m,o({ref:t},b))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<r;b++)l[b]=i[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);