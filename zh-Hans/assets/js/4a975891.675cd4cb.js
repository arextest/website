"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||p;return r?n.createElement(g,s(s({ref:t},i),{},{components:r})):n.createElement(g,s({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,s=new Array(p);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<p;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const p={sidebar_position:2,title:"\u56de\u653e\u6d4b\u8bd5",keywords:["\u56de\u5f52\u6d4b\u8bd5","\u6d41\u91cf\u56de\u653e","\u81ea\u52a8\u5316\u6d4b\u8bd5"]},s=void 0,o={unversionedId:"chapter 3/Traffic Replay",id:"chapter 3/Traffic Replay",title:"\u56de\u653e\u6d4b\u8bd5",description:"\u5f00\u59cb\u56de\u653e",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/chapter 3/Traffic Replay.md",sourceDirName:"chapter 3",slug:"/chapter 3/Traffic Replay",permalink:"/zh-Hans/docs/chapter 3/Traffic Replay",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter 3/Traffic Replay.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u56de\u653e\u6d4b\u8bd5",keywords:["\u56de\u5f52\u6d4b\u8bd5","\u6d41\u91cf\u56de\u653e","\u81ea\u52a8\u5316\u6d4b\u8bd5"]},sidebar:"tutorialSidebar",previous:{title:"\u5f55\u5236\u56de\u653e\u8bbe\u7f6e",permalink:"/zh-Hans/docs/chapter 3/Pre-setting"},next:{title:"\u5f3a\u5236\u5f55\u5236",permalink:"/zh-Hans/docs/chapter 3/Force Record"}},l={},c=[{value:"\u5f00\u59cb\u56de\u653e",id:"\u5f00\u59cb\u56de\u653e",level:2},{value:"\u56de\u653e\u62a5\u544a",id:"\u56de\u653e\u62a5\u544a",level:3},{value:"\u5206\u6790\u62a5\u6587\u5dee\u5f02",id:"\u5206\u6790\u62a5\u6587\u5dee\u5f02",level:2}],i={toc:c},u="wrapper";function d(e){let{components:t,...p}=e;return(0,a.kt)(u,(0,n.Z)({},i,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5f00\u59cb\u56de\u653e"},"\u5f00\u59cb\u56de\u653e"),(0,a.kt)("p",null,"\u5e94\u7528\u5f55\u5236\u5e76\u8bbe\u7f6e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u8fdb\u884c\u56de\u653e\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb\u9700\u8981\u8fdb\u884c\u56de\u653e\u6d4b\u8bd5\u7684\u5e94\u7528\uff0c\u8fdb\u5165\u56de\u653e\u8bb0\u5f55\u9875\u9762\uff0c\u5de5\u4f5c\u533a\u663e\u793a\u7684\u662f\u4e4b\u524d\u7684\u56de\u653e\u7ed3\u679c\u8bb0\u5f55\u3002\u70b9\u51fb\u53f3\u4e0a\u89d2 ",(0,a.kt)("strong",{parentName:"p"},"Start replay"),"\uff0c\u5373\u53ef\u8fdb\u884c\u56de\u653e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56de\u653e\u9875\u9762",src:r(7534).Z,width:"3840",height:"1833"})),(0,a.kt)("p",null,"\u5728\u8df3\u8f6c\u51fa\u7684\u7a97\u53e3\u4e2d\u4f9d\u6b21\u586b\u5165\u672c\u5730/\u6d4b\u8bd5\u73af\u5883\u4e2d\u9700\u8981\u6d4b\u8bd5\u7684\u7aef\u53e3\u5730\u5740\uff08Target Host\uff09\uff0c\u9009\u62e9\u9700\u8981\u56de\u653e\u7684\u8d77\u6b62\u65e5\u671f\uff0c\u5373\u53ef\u5bf9\u8be5\u65e5\u671f\u533a\u95f4\u5185\u5f55\u5236\u5230\u7684\u7ebf\u4e0a\u8bf7\u6c42\u8fdb\u884c\u56de\u653e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5f00\u59cb\u56de\u653e",src:r(795).Z,width:"592",height:"363"})),(0,a.kt)("h3",{id:"\u56de\u653e\u62a5\u544a"},"\u56de\u653e\u62a5\u544a"),(0,a.kt)("p",null,"\u56de\u653e\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u56de\u653e\u8bb0\u5f55\uff0c\u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u7684\u56de\u653e\u62a5\u544a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56de\u653e\u62a5\u544a",src:r(9291).Z,width:"3415",height:"1626"})),(0,a.kt)("p",null,"\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u70b9\u51fb\u53f3\u4e0a\u89d2 ",(0,a.kt)("strong",{parentName:"p"},"Delete")," \u5220\u9664\u8be5\u56de\u653e\u62a5\u544a\u3002\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Run Aagin")," \u53ef\u4ee5\u91cd\u65b0\u8fdb\u884c\u56de\u653e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pass Rate"),"\uff1a\u56de\u653e\u7528\u4f8b\u6d4b\u8bd5\u901a\u8fc7\u7387\u3002(\u5f55\u5236\u56de\u653e\u8fd4\u56de\u7ed3\u679c\u65e0\u5dee\u5f02\u89c6\u4e3a\u901a\u8fc7)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API Pass Rate"),"\uff1a\u63a5\u53e3\u6d4b\u8bd5\u901a\u8fc7\u7387\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API"),"\uff1a\u5f55\u5236\u53ca\u56de\u653e\u4e2d\u8bbf\u95ee\u7684\u6240\u6709\u63a5\u53e3\u5217\u8868\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"State"),"\uff1a\u63a5\u53e3\u6d4b\u8bd5\u72b6\u6001\uff0c",(0,a.kt)("strong",{parentName:"p"},"running")," \u8868\u793a\u6b63\u5728\u8fd0\u884c\u4e2d\uff0c",(0,a.kt)("strong",{parentName:"p"},"done")," \u8868\u793a\u56de\u653e\u5b8c\u6210\uff0c",(0,a.kt)("strong",{parentName:"p"},"interrupted")," \u8868\u793a\u56de\u653e\u4e2d\u65ad\uff0c\u53ef\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Rerun")," \u6309\u94ae\u91cd\u65b0\u8fd0\u884c\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Time consumed(s)"),"\uff1a\u8be5\u63a5\u53e3\u56de\u653e\u6d4b\u8bd5\u7684\u6267\u884c\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u201cs\u201d\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Total Cases"),"\uff1a\u8be5\u63a5\u53e3\u4e0b\u6d4b\u8bd5\u7528\u4f8b\u7684\u4e2a\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Passed\u3001Failed\u3001Invalid\u3001Blocked"),"\uff1a\u5206\u8868\u8868\u793a\u56de\u653e\u901a\u8fc7\u3001\u5931\u8d25\u3001\u65e0\u6548\u3001\u4e2d\u65ad\u7684\u6d4b\u8bd5\u7528\u4f8b\u4e2a\u6570\u3002"),(0,a.kt)("h2",{id:"\u5206\u6790\u62a5\u6587\u5dee\u5f02"},"\u5206\u6790\u62a5\u6587\u5dee\u5f02"),(0,a.kt)("p",null,"\u63a5\u53e3\u7528\u4f8b\u4e2d\u51fa\u73b0 ",(0,a.kt)("strong",{parentName:"p"},"Failed")," \u8bf4\u660e\u56de\u653e\u4e0e\u5f55\u5236\u8fd4\u56de\u62a5\u6587\u51fa\u73b0\u5dee\u5f02\uff0c\u70b9\u51fb\u53f3\u4fa7\u7684 ",(0,a.kt)("strong",{parentName:"p"},"DiffScenes"),"\uff0c\u67e5\u770b\u5dee\u5f02\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u62a5\u6587\u5dee\u5f02",src:r(2883).Z,width:"2870",height:"952"})),(0,a.kt)("p",null,"\u5de6\u4e0a\u65b9\u533a\u57df\u663e\u793a\u7684\u662f\u6d4b\u8bd5\u7684\u4e3b\u63a5\u53e3\uff0c\u4e0b\u65b9\u5c55\u793a\u7684\u662f\u4e3b\u63a5\u53e3\u53ca\u5176\u5916\u90e8\u8c03\u7528\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u6bd4\u5982\u6570\u636e\u5e93\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u63a5\u53e3\u4f9d\u8d56",src:r(8625).Z,width:"2870",height:"952"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Point of difference"),"\uff1a\u5c55\u793a\u56de\u653e\u6d4b\u8bd5\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u5dee\u5f02\u8282\u70b9\u3002\u5bf9\u4e8e\u4e3b\u63a5\u53e3\u7684\u9a8c\u8bc1\uff0c\u4e3b\u8981\u9a8c\u8bc1\u5f55\u5236\u4e0e\u56de\u653e\u54cd\u5e94\u62a5\u6587\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u5bf9\u4e8e\u5176\u4ed6\u5916\u90e8\u8c03\u7528\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u7684\u9a8c\u8bc1\uff0c\u5219\u901a\u8fc7\u6bd4\u5bf9\u5176\u8bf7\u6c42\u5185\u5bb9\uff08\u5982\u6570\u636e\u5e93\u7684 sql \u8bed\u53e5\uff09\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scene Count"),"\uff1a\u51fa\u73b0\u8be5\u5dee\u5f02\u70b9\u7684\u573a\u666f\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Case Count"),"\uff1a\u51fa\u73b0\u8be5\u5dee\u5f02\u70b9\u7684\u6d4b\u8bd5\u7528\u4f8b\u6570\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb\u5dee\u5f02\u70b9\uff0c\u67e5\u770b\u62a5\u6587\u5dee\u5f02\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u62a5\u6587\u5dee\u5f02",src:r(5749).Z,width:"2870",height:"952"})),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Tree Mode")," \u53ef\u4ee5\u67e5\u770b\u6811\u5f62\u7ed3\u6784\u7684\u5dee\u5f02\u5bf9\u6bd4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6811\u5f62",src:r(249).Z,width:"2794",height:"1069"})),(0,a.kt)("p",null,"\u82e5\u8be5\u51fa\u73b0\u5dee\u5f02\u7684\u8282\u70b9\u4e0d\u9700\u8981\u8fdb\u884c\u6bd4\u5bf9\uff0c\u6bd4\u5982\u65f6\u95f4\u3001IP \u7b49\u548c\u4e1a\u52a1\u65e0\u5173\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},'"Ignore Node"')," \u5c06\u8fd9\u4e9b\u8282\u70b9\u8fdb\u884c\u5ffd\u7565\uff0c\u63d0\u9ad8\u56de\u653e\u6548\u7387\u3002"))}d.isMDXComponent=!0},2883:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.diff-77f4ff7604589d94f01949d05c9fd746.png"},249:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.diff.tree-8d0dac691c730ad435c099458ad8a1d8.png"},8625:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.diff2-5f0955ba49ac191d6d906a3c88a7e425.png"},5749:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.diff3-398b7b586627260da0d4aa5c4edf6e1c.png"},9291:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.report-7cbeb0b18a6eca09c13681487bd9619c.png"},7534:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.reportlist-adbe5dc80192c4a621c5bd48f65df105.png"},795:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.start-0a3dc6d2c48c759ec3ac3b6328d7f60f.png"}}]);