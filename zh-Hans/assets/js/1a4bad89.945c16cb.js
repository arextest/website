"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2738],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||p;return a?r.createElement(u,i(i({ref:t},l),{},{components:a})):r.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const p={sidebar_position:1,title:"\u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b",keywords:["\u56de\u5f52\u6d4b\u8bd5","\u6d4b\u8bd5\u7528\u4f8b","\u6d41\u91cf\u5f55\u5236"]},i=void 0,o={unversionedId:"chapter4/Run Collection",id:"chapter4/Run Collection",title:"\u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b",description:"AREX \u652f\u6301\u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u901a\u8fc7\u5c06\u6d4b\u8bd5\u7528\u4f8b\u4fdd\u5b58\u5728\u96c6\u5408\u4e2d\uff0c\u8fd0\u884c\u96c6\u5408\u5373\u53ef\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/chapter4/Run Collection.md",sourceDirName:"chapter4",slug:"/chapter4/Run Collection",permalink:"/website/zh-Hans/docs/chapter4/Run Collection",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter4/Run Collection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b",keywords:["\u56de\u5f52\u6d4b\u8bd5","\u6d4b\u8bd5\u7528\u4f8b","\u6d41\u91cf\u5f55\u5236"]},sidebar:"tutorialSidebar",previous:{title:"Managing Test Cases",permalink:"/website/zh-Hans/docs/category/managing-test-cases"}},s={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u521b\u5efa\u6d4b\u8bd5\u7528\u4f8b\u96c6",id:"\u521b\u5efa\u6d4b\u8bd5\u7528\u4f8b\u96c6",level:2},{value:"\u6279\u91cf\u8fd0\u884c\u5e38\u89c4\u6d4b\u8bd5\u7528\u4f8b",id:"\u6279\u91cf\u8fd0\u884c\u5e38\u89c4\u6d4b\u8bd5\u7528\u4f8b",level:2},{value:"\u6279\u91cf\u8fd0\u884c\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b",id:"\u6279\u91cf\u8fd0\u884c\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b",level:2}],l={toc:c},m="wrapper";function d(e){let{components:t,...p}=e;return(0,n.kt)(m,(0,r.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"AREX \u652f\u6301\u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u901a\u8fc7\u5c06\u6d4b\u8bd5\u7528\u4f8b\u4fdd\u5b58\u5728\u96c6\u5408\u4e2d\uff0c\u8fd0\u884c\u96c6\u5408\u5373\u53ef\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6279\u91cf\u8fd0\u884c\u5e38\u89c4\u6d4b\u8bd5\u7528\u4f8b"),"\u3002\u5f53\u6211\u4eec\u9700\u8981\u6d4b\u8bd5\u540c\u4e00\u4e2a\u63a5\u53e3\u7684\u591a\u79cd\u60c5\u51b5\u65f6\uff0c\u53ef\u4ee5\u5c06\u6bcf\u79cd\u60c5\u51b5\u90fd\u4fdd\u5b58\u4e3a\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4e0b\u6b21\u8fdb\u884c\u6d4b\u8bd5\u65f6\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u586b\u5199\u8bf7\u6c42\u53c2\u6570\u7b49\u4fe1\u606f\u3002AREX \u652f\u6301\u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\uff0c\u901a\u8fc7\u5c06\u6d4b\u8bd5\u7528\u4f8b\u4fdd\u5b58\u5728\u96c6\u5408\u8bf7\u6c42\u4e2d\uff0c\u8fd0\u884c\u96c6\u5408\u5373\u53ef\u3002\u8fd9\u6837\u53ef\u4ee5\u4e00\u952e\u6d4b\u8bd5\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\uff0c\u6ee1\u8db3\u5feb\u901f\u56de\u5f52\u6d4b\u8bd5\u7684\u9700\u6c42\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6279\u91cf\u8fd0\u884c\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b"),"\u3002\u5f53\u6211\u4eec\u9700\u8981\u6bd4\u5bf9\u65b0\u8001\u7cfb\u7edf\u4e24\u4e2a\u63a5\u53e3\u54cd\u5e94\u62a5\u6587\u7684\u5dee\u5f02\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 AREX \u6bd4\u5bf9\u6d4b\u8bd5\uff0c\u5c06\u76f8\u540c\u7684\u8bf7\u6c42\u62a5\u6587\u53d1\u9001\u81f3\u4e0d\u540c\u73af\u5883\u7684\u4e24\u4e2a\u63a5\u53e3\u5730\u5740\u3002\u901a\u5e38\uff0c\u6bd4\u5bf9\u6d4b\u8bd5\u4e5f\u4f1a\u5b58\u5728\u591a\u79cd\u60c5\u51b5\u9700\u8981\u6d4b\u8bd5\uff0c\u5982\u679c\u6bcf\u79cd\u60c5\u51b5\u90fd\u9700\u8981\u4eba\u5de5\u8fdb\u884c\u6bd4\u5bf9\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u7684\u6548\u7387\u662f\u5f88\u4f4e\u7684\u3002\u4f7f\u7528\u6279\u91cf\u6267\u884c\u6bd4\u5bf9\u6d4b\u8bd5\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u81ea\u52a8\u5316\u6d4b\u8bd5\u8fc7\u7a0b\uff0c\u8ba9\u8f6f\u4ef6\u6d4b\u8bd5\u53d8\u5f97\u66f4\u5feb\u66f4\u9ad8\u6548\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u9700\u8981\u6bd4\u5bf9\u4e24\u4e2a\u63a5\u53e3\u5728\u591a\u79cd\u60c5\u51b5\u4e0b\u7684\u54cd\u5e94\u62a5\u6587\u5dee\u5f02\uff0c\u4e5f\u53ef\u5c06\u6240\u6709\u7684\u60c5\u51b5\u4fdd\u5b58\u4e3a\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b\uff0c\u6279\u91cf\u8fd0\u884c\u5373\u53ef\u3002"))),(0,n.kt)("h2",{id:"\u521b\u5efa\u6d4b\u8bd5\u7528\u4f8b\u96c6"},"\u521b\u5efa\u6d4b\u8bd5\u7528\u4f8b\u96c6"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb \u201cCollection\u201d \u53f3\u4fa7\u7684 \u201c",(0,n.kt)("strong",{parentName:"p"},"+"),"\u201d \u65b0\u5efa\u4e00\u4e2a\u96c6\u5408\u3002"),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TiPX.png",alt:"New Collection",width:"400",height:""})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u96c6\u5408\u53f3\u4fa7\u4e0b\u62c9\u83dc\u5355 ",(0,n.kt)("strong",{parentName:"p"},"Add Request")," \u65b0\u5efa\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5728\u8df3\u8f6c\u51fa\u7684\u9875\u9762\u4e2d\u586b\u5165 URL \u7b49\u914d\u7f6e\u4fe1\u606f\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Save")," \u4fdd\u5b58\u3002"),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T59J.png",alt:"New request",width:"400",height:""}),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u914d\u7f6e\u4fe1\u606f",src:a(5509).Z,width:"3838",height:"1737"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u8bf7\u6c42\u53f3\u4fa7\u4e0b\u62c9\u83dc\u5355 ",(0,n.kt)("strong",{parentName:"p"},"Add Case")," \u65b0\u5efa\u4e00\u4e2a\u5e38\u89c4\u6d4b\u8bd5\u7528\u4f8b/\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b\uff0c\u6d4b\u8bd5\u7528\u4f8b\u5c06\u81ea\u52a8\u7ee7\u627f Request \u7684\u914d\u7f6e\uff0c\u51cf\u5c11\u7528\u4f8b\u8bbe\u8ba1\u6210\u672c\u3002"),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/10/R09eC.png",alt:"R09eC.png",width:"400",height:""}),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u65b0\u5efa\u7528\u4f8b",src:a(1956).Z,width:"3101",height:"1497"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Add Tag")," \u53ef\u4e3a\u5f53\u524d Case \u6dfb\u52a0\u6807\u7b7e\u8fdb\u884c\u5206\u7c7b\uff0c\u65b9\u4fbf\u540e\u671f\u7ba1\u7406\u7528\u4f8b\u3002\u6807\u7b7e\u53ef\u5728\u5de5\u4f5c\u533a\u8bbe\u7f6e\u9875\u9762\u8fdb\u884c\u9884\u8bbe\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u7ba1\u7406\u6807\u7b7e",src:a(7275).Z,width:"3840",height:"1298"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"description")," \u4e3a\u7528\u4f8b\u6dfb\u52a0\u63cf\u8ff0\uff0c\u8fd9\u6837\u53ef\u4ee5\u8ba9\u5176\u4ed6\u4eba\u66f4\u5bb9\u6613\u7406\u89e3\u6d4b\u8bd5\u7528\u4f8b\u7684\u76ee\u7684\u548c\u9884\u671f\u7ed3\u679c\uff0c\u63d0\u9ad8\u53ef\u8bfb\u6027\uff0c\u5e76\u4e14\u80fd\u66f4\u597d\u7684\u628a\u63e1\u6d4b\u8bd5\u5185\u5bb9\u3002"))),(0,n.kt)("h2",{id:"\u6279\u91cf\u8fd0\u884c\u5e38\u89c4\u6d4b\u8bd5\u7528\u4f8b"},"\u6279\u91cf\u8fd0\u884c\u5e38\u89c4\u6d4b\u8bd5\u7528\u4f8b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u6d4b\u8bd5\u7528\u4f8b\u96c6\u5408\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684 ",(0,n.kt)("strong",{parentName:"p"},"Batch Run")," \u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"run folder",src:a(1616).Z,width:"1323",height:"1438"})),(0,n.kt)("p",{parentName:"li"},"\u6216\u5c06\u9f20\u6807\u79fb\u81f3 ",(0,n.kt)("strong",{parentName:"p"},"Collection")," \u53f3\u4fa7\u7684 ",(0,n.kt)("img",{src:a(4482).Z,width:"23",height:"23"}),"\u56fe\u6807\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Batch Run")," \u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"batch compare",src:a(8639).Z,width:"1109",height:"1292"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u6253\u5f00\u7684\u6807\u7b7e\u9875\u5de6\u4fa7\u9009\u62e9\u8981\u6267\u884c\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u70b9\u51fb\u53f3\u4fa7 ",(0,n.kt)("strong",{parentName:"p"},"Run Case")," \u8fd0\u884c\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"run case",src:a(7576).Z,width:"2956",height:"1843"})))),(0,n.kt)("p",null,"\u8fd0\u884c\u5b8c\u53ef\u5728\u4e0b\u65b9\u67e5\u770b\u6d4b\u8bd5\u7ed3\u679c\u3002"),(0,n.kt)("h2",{id:"\u6279\u91cf\u8fd0\u884c\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b"},"\u6279\u91cf\u8fd0\u884c\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u6d4b\u8bd5\u7528\u4f8b\u96c6\u5408\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684 ",(0,n.kt)("strong",{parentName:"p"},"Batch Compare")," \u6279\u91cf\u8fd0\u884c\u6bd4\u5bf9\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"batch compare",src:a(1128).Z,width:"1337",height:"1348"})),(0,n.kt)("p",{parentName:"li"},"\u6216\u5c06\u9f20\u6807\u79fb\u81f3 ",(0,n.kt)("strong",{parentName:"p"},"Collection")," \u53f3\u4fa7\u7684 ",(0,n.kt)("img",{src:a(4482).Z,width:"23",height:"23"}),"\u56fe\u6807\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Batch Compare")," \u6279\u91cf\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"batch compare",src:a(8639).Z,width:"1109",height:"1292"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u6253\u5f00\u7684\u6807\u7b7e\u9875\u5de6\u4fa7\u9009\u62e9\u8981\u6267\u884c\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u70b9\u51fb\u53f3\u4fa7 ",(0,n.kt)("strong",{parentName:"p"},"Run Comparison Cases")," \u8fd0\u884c\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"run case",src:a(7691).Z,width:"3042",height:"1841"})),(0,n.kt)("p",{parentName:"li"},"\u8fd0\u884c\u5b8c\u53ef\u5728\u4e0b\u65b9\u67e5\u770b\u6bcf\u4e2a Case \u7684\u6bd4\u5bf9\u7ed3\u679c\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"compare",src:a(7863).Z,width:"2881",height:"1474"})),(0,n.kt)("p",{parentName:"li"},"\u5c06\u9f20\u6807\u79fb\u81f3\u51fa\u73b0\u5dee\u5f02\u70b9\u7684\u8282\u70b9\u4e0a\uff0c\u663e\u793a\u7684\u662f\u8be5\u8282\u70b9\u5728\u54cd\u5e94\u62a5\u6587\u4e2d\u7684\u5177\u4f53\u4f4d\u7f6e\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"compare path",src:a(8928).Z,width:"1299",height:"371"})),(0,n.kt)("p",{parentName:"li"},"\u82e5\u5b58\u5728 timestamp\u3001\u968f\u673a\u6570\u3001ip \u7b49\u5e72\u6270\u6570\u636e\uff0c\u53ef\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Ignore Node")," \u5bf9\u8be5\u8282\u70b9\u8fdb\u884c\u5ffd\u7565\u914d\u7f6e\u3002"))))}d.isMDXComponent=!0},7275:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.addlabel-e014b95060e92fa63c29407d3732c7b4.png"},8639:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.batch-d0727c1bc0c3efbae5c997f6f12c059a.png"},1128:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.batchcompare-f80a364aa7be979bce4546157515be20.png"},1956:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.case-fdf96891479ea525bc220e60dc6263be.png"},7863:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.comparediff-76abbd16e6ad65f874ecc9d1b7a2f63b.png"},8928:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.comparepath-61c7ef3b8c306b3b741f7a4c9a24a0cb.png"},5509:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.request-7c304d50f2a216847431148cebead98d.png"},4482:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAAGg8xQEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHOUExURSEhIR8fHxwcHBoaGhsbGx4eHh0dHSIiIi0tLTU1NTY2NjAwMCUlJSAgICYmJkdHR3R0dJiYmKysrK+vr6GhoYGBgVVVVS8vLzw8PIKCgsLCwtPT08XFxbq6uri4uMDAwNDQ0M7OzpycnFFRUSMjI0tLS62trdra2qurq2lpaT8/PzExMTc3N1hYWJeXl9LS0sfHxyQkJLCwsNbW1n9/fyoqKhISEhMTExcXFxgYGBQUFFxcXMPDw8zMzGFhYSkpKZSUlEFBQScnJxUVFU1NTcHBwbm5uURERF5eXhkZGWBgYKmpqXNzcywsLBYWFmpqaoaGhsbGxmRkZNfX14qKikJCQjs7O6Ojoy4uLmVlZbe3t6enp1ZWVoCAgMnJyU5OToyMjK6urru7u3JycjIyMmNjY3Z2dldXV8rKyoeHh2hoaLOzs1RUVAQEBENDQ8TExFtbW8/Pz09PT4mJib29vZWVlXh4eD4+Pp2dnSsrK2dnZ3V1dXd3d8jIyCgoKJ6enklJScvLy6qqqlNTU5+fn0VFRZGRkY+Pj6WlpV9fX0BAQFBQUNTU1M3NzYODg0hISD09PWxsbJaWlrS0tL+/v76+vnl5eTQ0NEZGRgAAAPbU81sAAACadFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDLsIVjAAAACXBIWXMAABX9AAAV/QHNcFFhAAABIElEQVQoUz1Qu5EAIQg1IzahBTsgI6YGUsbE4DowovJ7z725nXEBfR9giMkQtSERL1dEFxsWuV2GSR65Q2QWgUAIwpKJMBFbgNaZMjZeHsEvIfhutzKiWLLxHtQwF8noK3rhOlVyATWDMPXYOwGAP62MBwVVXvEpx+xDO+TVe+tKYs61ALio5GbrmOyyEUesozZ8v3xXMCfGG5rAWKcpuE2uFcSjQIe+ZTlu/yb67+HrSzBVoJGv1w8D0+PLq8odw/3hxaKwFwMfR92TD8MsF1qSxDr4vZL3UXMDkdWFHSI7jiUNMAm3W/oTzrF1Xe4U+EevM/3S5NIBfeYj4J5ysPOJkv1oQfHrR6Ih9Xwpor2qz5zlBYN3zx/p9ub9lmAivy53XoG1muaCAAAAAElFTkSuQmCC"},7576:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.runcase-bfbacee06c6797e8122c637e6dcc120e.png"},7691:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.runcompare-45506ceb8ab79b15e64c54095d680799.png"},1616:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/c4.runfloder-8643beabd44c6c9f0b05b51887307daa.png"}}]);