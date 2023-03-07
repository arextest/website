"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),f=r,h=d["".concat(c,".").concat(f)]||d[f]||g[f]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:4,title:"Save Recorded Cases",keywords:["Regression test","Automation Testing","Traffic Replay"]},i=void 0,o={unversionedId:"chapter 3/Save Recorded Cases",id:"chapter 3/Save Recorded Cases",title:"Save Recorded Cases",description:"Scenarios",source:"@site/docs/chapter 3/Save Recorded Cases.md",sourceDirName:"chapter 3",slug:"/chapter 3/Save Recorded Cases",permalink:"/website/docs/chapter 3/Save Recorded Cases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter 3/Save Recorded Cases.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Save Recorded Cases",keywords:["Regression test","Automation Testing","Traffic Replay"]},sidebar:"tutorialSidebar",previous:{title:"Force Record",permalink:"/website/docs/chapter 3/Force Record"},next:{title:"Managing Test Cases",permalink:"/website/docs/category/managing-test-cases"}},c={},l=[{value:"Scenarios",id:"scenarios",level:3},{value:"Creat a collection to save test cases",id:"creat-a-collection-to-save-test-cases",level:2},{value:"Save test cases",id:"save-test-cases",level:2},{value:"View test cases",id:"view-test-cases",level:2}],p={toc:l},d="wrapper";function g(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"scenarios"},"Scenarios"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"AREX can record real online traffic to generate rich test cases, which can then be saved for your needs to increase the number of test cases.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test cases recorded by AREX will be deleted if they exceed the validity period. By saving test cases manually, they can be retained for a longer time and replayed anytime you want."))),(0,r.kt)("h2",{id:"creat-a-collection-to-save-test-cases"},"Creat a collection to save test cases"),(0,r.kt)("p",null,"First, you need to creat a new collection to save the recorded test cases."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"+")," icon besides ",(0,r.kt)("strong",{parentName:"p"},"Collection")," to creat a new collection."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TiPX.png",alt:"New Collection",width:"400",height:""})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add Request")," in the dropdown list of the new collection to creat a new request, storing test cases that need to be saved later."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T59J.png",alt:"New request",width:"400",height:""}))),(0,r.kt)("h2",{id:"save-test-cases"},"Save test cases"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Replay")," in the sidebar and select the application you are working with."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u56de\u653e\u62a5\u544a",src:a(6155).Z,width:"3432",height:"1706"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the replay execution list, select the replay task in which you want to save test cases and view the recorded test cases by selecting ",(0,r.kt)("strong",{parentName:"p"},"Case Table"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u7528\u4f8b",src:a(3531).Z,width:"1164",height:"793"})),(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Detail")," to view the details of the test cases:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u7528\u4f8b\u7ec6\u8282",src:a(1030).Z,width:"2776",height:"1748"})),(0,r.kt)("p",{parentName:"li"},"The validation of the main interface in AREX is mainly based on comparing the differences between the recorded and replayed response messages, while the validation of other external dependencies is validated by comparing their request message. "),(0,r.kt)("p",{parentName:"li"},"The left side shows the request message sent to the external dependencies such as database calls, and the response messages of the main interface during ",(0,r.kt)("strong",{parentName:"p"},"recording"),"."),(0,r.kt)("p",{parentName:"li"},"The right side shows the request message sent to the dependencies and the response messages of the main interface during ",(0,r.kt)("strong",{parentName:"p"},"replay"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5195).Z,width:"25",height:"23"})," icon indicates points of difference, ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3273).Z,width:"24",height:"23"})," icon indicates no point of difference.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save")," to save the case into the collection created previously."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u4fdd\u5b58\u7528\u4f8b",src:a(6933).Z,width:"2560",height:"887"})),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/10/RtvHb.png",alt:"RtvHb.png",width:"400",height:""}))),(0,r.kt)("h2",{id:"view-test-cases"},"View test cases"),(0,r.kt)("p",null,"Once the test case is saved, you can view it under the corresponding collection request with a similar pattern as a request."),(0,r.kt)("p",null,"You can categorize your test cases by adding tags. Just place your cursor on ",(0,r.kt)("strong",{parentName:"p"},"Add Tag")," and select the ",(0,r.kt)("img",{src:a(1543).Z,width:"27",height:"24"})," icon. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u7528\u4f8b",src:a(3950).Z,width:"2862",height:"925"})),(0,r.kt)("p",null,"Tags can be pre-configured by selecting the ",(0,r.kt)("strong",{parentName:"p"},"Edit Workspace")," icon >> ",(0,r.kt)("strong",{parentName:"p"},"Labels")," tab."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7ba1\u7406\u6807\u7b7e",src:a(8224).Z,width:"3840",height:"1298"})),(0,r.kt)("p",null,"The request URL is configured with the path of the interface by default, you can enter the test port in front of the path and send request to debug."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"arex-record-id")," in the request ",(0,r.kt)("strong",{parentName:"p"},"Headers")," is the recording ID, if you want to replay the case in test environment, you can add the arex-record-id in the request header of the new request, and send the request."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u7528\u4f8b",src:a(1468).Z,width:"2924",height:"1175"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Mock")," tab shows all data and third-party dependencies mocked from the production environment during recording. "),(0,r.kt)("p",null,"The left side displays the mocked request messages sent to the main interface and external dependencies, while the right side displays the corresponding response messages."),(0,r.kt)("p",null,'The mocked data can be edited, so if you are not satisfied with it, you can manually modify it and select "Save" to save it. Then, in next repaly, you can request by using the modified mock data.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u7528\u4f8b",src:a(3664).Z,width:"2914",height:"1374"})))}g.isMDXComponent=!0},1543:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADtSURBVEhL1dQNDYMwEIbhOakCFFQBClCAggqpgipAAQpQgIIqqIIuX9MjQHr8XVmyN2nGuuSerIx94g/7P8x7n6+OE2PDMESlVHo9S4QRROsMfIytIWPMJfARtoZoeGlv322MGxpCiFrrtN+2bd7ddgs7ggAQhPelLmNSCF3CakDoFKsFoUOsJoRYbBzHqhBisb7v00DnXN6RQYjF6JmhgVIIsRiGNk0T53lORyqFUBGbpikN3i8JhIoYvg0BXdelP1prrQhC7DFKB5disTfaYDguHFuNhUdn34JxPwrJwsx1C4Z7hA9rru19j/ELKvfaXZQpEKAAAAAASUVORK5CYII="},3273:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAMAAAFR+E+JAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxUExURfr6+vv6+vz6+//8/f/9///7/P37+/37/P/8/v77/Pb5+Lvo2XrWuGHQq1zOqF3OqGrSr5bext3y6/v6+7/p20XInAe2fAi3fRu8hyS/jCK+ihK6ggO1enzXuOz28pTexRC5gA+5gLzo2uLz7e/39dHv5ZrfyDjElgG1eUHGmtjx6P/7/pXexQW2fDLCksPr3vz7+//7/f/8/4DYuwe2fTTDlDLDk9zx6pHdxAS1e1vOp/j6+vb5+UrJnxG5gcTr3/z7/GbRrQW2e67l08Dq3G3Sscfs37Hl1Nfw6Be7hE7KoXbVtgu3fsfs4Mns4RO6g3HUs/v7/P78/RW6g9nx6f77/VDLoirAjur18vH49j7GmTjEle739Jnfx77p2/f5+T7GmMfr32TQrMvt4XzXuRK5gbzp2ga2fK/l00PInELHmuz28zvFlzPDk/P4973p2g24f4favsTq3q3l00nJnjXDlMzt4ha7hGPQrDbDlEbInfT596zk0rTm1l/Pqhm7hgC0eR29iNPv5gm3fcvt4p7gywK1epzfyWXRrZ7gyi/BkeLz7iG+ivn6+aTizX3XuonbwHfWttXw6CW+iyS+i9/y7EzKoAS2e4XZvfr6+9Xw56jj0N7y7D7FmQK1eVjNpsns4JjfxyO+iwq3fo/cw+b18GHPqw+4gEfInZLdxIrbwAG1eqjjz7Xn1lnNpxy8hw64gAy4f4HYvN7y6+b08NTv5s7u48/u49zy6vD39QAAAM8FLXQAAAC7dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBh8v5oAAAACXBIWXMAAA6cAAAOnAEHlFPdAAABYUlEQVQoUy1RMWrEQAxcBvXpt1quOLLG7b3BRQxxZRZyTdaQPj9QmwX1Lgz5gB+Z0TqCO0sarUYjBREJBgviP/rVcmjYg1gt6qnHDA0m8x57Qa9P5RwkbLDtkJBhgIQC2GnB6hJ7K5Ov3/Xb7Ml6SYfRRI3B6pXWIMqgHgYd7Aqw7kRwKBvA7SDCzD/vZeHJTstaD6cIZmO6yfBoPdj4Ic24MmBH+jgleRC9XS72c5OAD5T4uRuGk0gCRk6MfSMSCwnBQV2lKV2gnZ2naB6rni6VbVEo3Ss525Pcz//pfKgr5gY5ikxZX2OMSd/fimdcDfPf2rZeLFLolwuQktN2VZGDWNXp0r/o4JvgpbDNC3lf0uFrtpw58GfdgGX2p5h0En+Rm59lmGvL8JY49UZVIne989hAvbtUQ2mNk7GV7LoQcQ7+YYjcRhfIkzx0JQUEZYw69nddIOummmZa23lXAoY/IdaP8HkSArYAAAAASUVORK5CYII="},3950:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.case.3-2961bf0760249ca33fe005fdc00ba14d.png"},3531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.case-6e1171546823ed86cfaad5b9e7c0caad.png"},1468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.case1-cd99baddca72293e7f190f48910e886d.png"},3664:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.case2-361513c6f8299d880e469516fe0c5167.png"},1030:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.detail-526ea3c4b455839f8612c34d8bbb4017.png"},5195:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAMAAAG+OiS3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuUExURfr6+vr7+/r///r+/vrw8PjHw/iyrfedlvemoPi3svnV0vr7+vr8/Pnc2veRivVXS/RBNPRCNfREN/RAMvRGOfVmXPeuqPnx8Pr5+fitqPVPQvQ8L/VpX/ejnfjFwfjMyvjMyfi7t/aSivVUSPQ6LPZtY/eak/VgVfm/u/r49/rr6veemPREOPRPQ/jKxvr9/fenofQ+MfVwZvnm5PjCvfROQvVQRPnX1Pr+//nX1fRGOvVgVvnq6fi8uPQ9MPZ0a/r39/aHfvjBvvrz8verpfr5+vr9/vno5/ipo/nDwPaEfPRAM/jBvfVqYPaRifiwq/r19fZ7cvnPzPRFOPaIgPjDv/Q/MvaZkvRBM/i9uPaNhfi/u/VbUPVeU/rv7vewq/Q9L/izr/r8/frx8PaBePRJPPi0r/Z3bvRIO/np6Pespvi5tPr6+/ejnPQ5K/RIPPna1/Z9dPRDNfi/uve4s/aBefVjWPRgVfnj4vRYTfru7fna2PVNQfV5cPr39vr7/PjCv/RHOvr4+PRSRvVnXfRLP/Z6cfr29vVvZfZ+dfnv7vjLx/VmW/eqpPefmfM5LPQ8LvZ8c/ns6/RNQfeUjvr6+fnj4fVnXPi9ufru7vVvZPaFffnk4vjGw/VfVPeknvrp6faAd/VWSveelvnSz/rs6/nl4/aCefRCNvispvi1sPQ6LfQ/MfRRRfVZTvVYTPRLPvaAePnZ1vnx8fnLx/eclvV+dPVsYvirpQAAAOkTZjYAAAC6dFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ALtpJHUAAAAJcEhZcwAADpwAAA6cAQeUU90AAAFjSURBVChTNVExisMwEBTTqw24ceDMgep8wPpAirg0+YJViEMQOFXGTRo3LrLddYG49v9uVk4Wg3Z2dnZHsgHDQByM93dmRCueZpaJ+do1yjoJwtP7NEbFJQyqwSUhegmcqTwsgoEnJUYQogUPCOql0prqhlSkdZnSLYLeMUVDZE9AxGhhWyLqrYpuQ9nnOYihs9/b99BGSDV0eir4TXW3hK60xV302xE8HQaPDQgEM6uhd8CV7gPBoCYuBJN4ly1NTmyrc5kOO+q0c9b1R7arg0eYxjmTNaKmSnh9i6LQb48P/DC2b9YY4xpT9abKFdCHRD8lZIu0/Ga6eFWaWTng5pYZp9nmW8vLXEHaWJfWvnirwqu8lFxiZKbKlk9BxgU+AJmf+Ey3ff1tVMbjzL8FyVmvmA4sbOGg04hz+OImHagGbAoPpsp4CuZxO97/xD5yjBSwhXuUAu7HLZ9P/aH8R3jgHwfNdoKLUHHMAAAAAElFTkSuQmCC"},6155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.report2-d5c615f277fb69144ad647ed0c3b7250.png"},6933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.savecase-8658b6ba53c97afd69739cc9338c7ffd.png"},8224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.addlabel-e014b95060e92fa63c29407d3732c7b4.png"}}]);