"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4,title:"Get Started",keywords:["Regression Testing","Mock testing","Traffic Replay"]},i=void 0,s={unversionedId:"chapter1/Get Started",id:"chapter1/Get Started",title:"Get Started",description:"Creating collection",source:"@site/docs/chapter1/Get Started.md",sourceDirName:"chapter1",slug:"/chapter1/Get Started",permalink:"/website/docs/chapter1/Get Started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter1/Get Started.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Get Started",keywords:["Regression Testing","Mock testing","Traffic Replay"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/website/docs/chapter1/Overview"},next:{title:"Routine Testing",permalink:"/website/docs/category/routine-testing"}},l={},c=[{value:"Creating collection",id:"creating-collection",level:2},{value:"Creating a workspace",id:"creating-a-workspace",level:2},{value:"Work with your team",id:"work-with-your-team",level:2},{value:"Sending request",id:"sending-request",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"creating-collection"},"Creating collection"),(0,n.kt)("p",null,"Collections are a group of saved requests. You can save your requests in groups by creating collections, which can help you manage requests better."),(0,n.kt)("p",null,"To create a new collection, select ",(0,n.kt)("strong",{parentName:"p"},"Collection")," > ",(0,n.kt)("strong",{parentName:"p"},"New")," from the sidebar."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u65b0\u5efa\u96c6\u5408",src:r(4650).Z,width:"3840",height:"1750"})),(0,n.kt)("p",null,"Or select the ",(0,n.kt)("strong",{parentName:"p"},"+")," icon to create a new collection\uff1a"),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TiPX.png",alt:"New Collection",width:"400",height:""}),(0,n.kt)("p",null,"Once created, you can manage all your collections under ",(0,n.kt)("strong",{parentName:"p"},"Collections")," in the sidebar. You can also add new subsets/folders under collections."),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TndN.png",alt:"New Collection",width:"500",height:""}),(0,n.kt)("p",null,"To customize and configure the new collection, click directly on the collection:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Authorization")," to configure authorization details for the collection. If you do not want to expose the interface to the public, you can use authorization. The authorization process will verify that you have permission to access the data required by the server, and when you send a request, you usually need to include parameters to ensure that the request has permission to access and return the required data. By default, this will take effect for requests under the entire collection/folder. If you need to modify the authorization type for a particular request, you can do so separately in that request."),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T0Eb.png",alt:"Authorization",width:"600",height:""})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Pre-request Script")," to define a pre-request script for your collection, which will run before requests are sent to the server."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u96c6\u5408\u524d\u7f6e\u811a\u672c",src:r(8569).Z,width:"2865",height:"1550"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Tests")," to define a test script for your collection, which will run after a response is received."))),(0,n.kt)("h2",{id:"creating-a-workspace"},"Creating a workspace"),(0,n.kt)("p",null,"You will be in your default personal workspace when first log in AREX. You can not only create various workspaces for your personal use, but also invite your team to collaborate in your workspace to manage ",(0,n.kt)("strong",{parentName:"p"},"Collections"),", share ",(0,n.kt)("strong",{parentName:"p"},"Environments")," etc."),(0,n.kt)("p",null,"To create a new workspace:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"+")," icon in the upper right to ",(0,n.kt)("strong",{parentName:"p"},"Add Workspace"),". You can also select other workspaces from the dropdown list."),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T2pw.png",alt:"New workspace",width:"400",height:""})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a Name for your workspace and click the ",(0,n.kt)("strong",{parentName:"p"},"\u221a")," icon to save\u3002"),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3ThBt.png",alt:"Save",width:"400",height:""}))),(0,n.kt)("h2",{id:"work-with-your-team"},"Work with your team"),(0,n.kt)("p",null,"AREX provides collaboration features, where you can invite others to join your workspace and collaborate online within the same workspace. Members who join the workspace can share resources such as environment, test collections and test cases in the ",(0,n.kt)("strong",{parentName:"p"},"Collection"),". To invite members to join a workspace:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch to the workspace where you want to collaborate with others by selecting the workspace in the top left corner."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u5207\u6362\u5de5\u4f5c\u533a",src:r(6027).Z,width:"3806",height:"1119"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Invite")," in the top right corner of the workbench to invite your team members to join the current workspace via email. After entering their email and setting their permissions, select ",(0,n.kt)("strong",{parentName:"p"},"Send Invites")," to send the invitation. The invitee will receive an email invitation, and they can accept it and join the workspace by clicking the link in the email."),(0,n.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3Tb4x.png",alt:"Invite",width:"700",height:""}),(0,n.kt)("p",{parentName:"li"},"There are three types of permissions: Admin, Editor, and Viewer."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Admin"),": has administrative permissions, can manage detailed information in the workspace, delete the workspace, and set permissions for members."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Editor"),": can create and edit resources (such as test cases) in the workspace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Viewer"),": cannot edit the data in the workspace, but can view and export the resources in the workspace."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("img",{alt:"\u7f16\u8f91",src:r(5676).Z,width:"27",height:"24"})," icon in the upper right to ",(0,n.kt)("strong",{parentName:"p"},"Edit Workspace"),", where you can edit the name of the workspace, manage collaborators, and delete the workspace."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u7f16\u8f91\u5de5\u4f5c\u533a",src:r(7911).Z,width:"2873",height:"1632"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Overview"),": Administrators can modify the name of the workspace, view team members and modify permissions, and delete the workspace on this page. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u7ba1\u7406\u6807\u7b7e",src:r(7407).Z,width:"2905",height:"462"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Labels"),"\uff1aAdministrators and editors can add test case tags on this page to manage test case."))),(0,n.kt)("h2",{id:"sending-request"},"Sending request"),(0,n.kt)("p",null,"You can use AREX to create and send API requests."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"+")," icon in the workbench to open a new tab."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u65b0\u5efa\u8bf7\u6c42",src:r(7001).Z,width:"2875",height:"1253"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the request URL.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Send"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"\u53d1\u9001\u8bf7\u6c42",src:r(1448).Z,width:"2826",height:"1590"})))))}h.isMDXComponent=!0},7407:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c1.addlabel-ea6df330575eca218ecaf57d38e5b394.png"},7911:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c1.editworkspace-12d81ca629797f3153b7ff000bd76928.png"},6027:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c1.invite1-204b98baac043df925fa428d3f36cfe5.png"},7001:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c1.new.request-f5874dfa6279bddb02472718868d2351.png"},4650:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c1.newcollection-066570e67736f752d7869be33a00b418.png"},8569:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c1.prerequest-9e1a105e833ab61eed26ab7d44bbb700.png"},5676:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADtSURBVEhL1dQNDYMwEIbhOakCFFQBClCAggqpgipAAQpQgIIqqIIuX9MjQHr8XVmyN2nGuuSerIx94g/7P8x7n6+OE2PDMESlVHo9S4QRROsMfIytIWPMJfARtoZoeGlv322MGxpCiFrrtN+2bd7ddgs7ggAQhPelLmNSCF3CakDoFKsFoUOsJoRYbBzHqhBisb7v00DnXN6RQYjF6JmhgVIIsRiGNk0T53lORyqFUBGbpikN3i8JhIoYvg0BXdelP1prrQhC7DFKB5disTfaYDguHFuNhUdn34JxPwrJwsx1C4Z7hA9rru19j/ELKvfaXZQpEKAAAAAASUVORK5CYII="},1448:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c1.request-94936db36c02f8368f1d4daf6d14fb1a.png"}}]);