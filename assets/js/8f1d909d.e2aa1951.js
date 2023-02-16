"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},A=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},A),{},{components:n})):r.createElement(m,o({ref:t},A))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o=void 0,l={unversionedId:"chapter1/Overview",id:"chapter1/Overview",title:"Overview",description:"After installation, you can access the AREX-UI via Chrome browser:",source:"@site/docs/chapter1/Overview.md",sourceDirName:"chapter1",slug:"/chapter1/Overview",permalink:"/website/docs/chapter1/Overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter1/Overview.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Installation",permalink:"/website/docs/chapter1/Custom Installation"},next:{title:"Get Started",permalink:"/website/docs/chapter1/Get Started"}},s={},c=[{value:"First Login",id:"first-login",level:2},{value:"Chrome Extension Installation",id:"chrome-extension-installation",level:2},{value:"Interface Overview",id:"interface-overview",level:2},{value:"Header",id:"header",level:3},{value:"Sidebar",id:"sidebar",level:3},{value:"Workbench",id:"workbench",level:3},{value:"Tabs",id:"tabs",level:4},{value:"Switching environments",id:"switching-environments",level:4}],A={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After installation, you can access the ",(0,a.kt)("strong",{parentName:"p"},"AREX-UI")," via ",(0,a.kt)("strong",{parentName:"p"},"Chrome")," browser:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the port configuration has not been modified, access port 8088 directly (port 8088 exposed by Docker Compose) ",(0,a.kt)("a",{parentName:"li",href:"http://0.0.0.0:8088/"},"http://0.0.0.0:8088/")),(0,a.kt)("li",{parentName:"ul"},"If the AREX-UI is deployed independently and the port has not been modified (default port 8080), then access ",(0,a.kt)("a",{parentName:"li",href:"http://0.0.0.0:8080/"},"http://0.0.0.0:8080/")),(0,a.kt)("li",{parentName:"ul"},"If the port has been modified, access the modified port.")),(0,a.kt)("h2",{id:"first-login"},"First Login"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u767b\u5f55",src:n(6829).Z,width:"488",height:"409"})),(0,a.kt)("p",null,"For the first login, you need to enter your personal E-mail. After receiving the verification code, select ",(0,a.kt)("strong",{parentName:"p"},"Login")," to login."),(0,a.kt)("p",null,"You can also log in as a guest by selecting the ",(0,a.kt)("strong",{parentName:"p"},"Guest"),", but you will have limited access and will not be able to use the invitation and case sharing features."),(0,a.kt)("h2",{id:"chrome-extension-installation"},"Chrome Extension Installation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u63d2\u4ef6",src:n(1513).Z,width:"2344",height:"207"})),(0,a.kt)("p",null,"Before using, please install the Chrome extension according to the browser prompt to remove the browser cross-domain restrictions."),(0,a.kt)("p",null,"In the redirected page, select ",(0,a.kt)("strong",{parentName:"p"},"Add to Chrome")," option to download the extension."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u63d2\u4ef6",src:n(5888).Z,width:"1577",height:"327"})),(0,a.kt)("p",null,"If you cannot access the Chrome extension, it also can be installed locally by downloading from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/arextest/arex-chrome-extension/releases"},"Release"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download ",(0,a.kt)("inlineCode",{parentName:"p"},"arex-chrome-extension.zip")," and unzip it."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u63d2\u4ef6",src:n(8215).Z,width:"1797",height:"245"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the Chrome browser and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://extensions/")," to access the extension page. Enable the Developer mode by selecting ",(0,a.kt)("strong",{parentName:"p"},"Developer mode")," on the upper right corner. Then select ",(0,a.kt)("strong",{parentName:"p"},"Load unpacked"),", goto location where you unzip the chrome extension and select the installer folder."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u63d2\u4ef6",src:n(8857).Z,width:"3799",height:"268"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Installation complete."),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3aFVk.png",alt:"\u5b89\u88c5\u5b8c\u6210",width:"500",height:""}))),(0,a.kt)("h2",{id:"interface-overview"},"Interface Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u754c\u9762\u6982\u89c8",src:n(30).Z,width:"3837",height:"1854"})),(0,a.kt)("p",null,"The interface of AREX-UI consists of three primary areas: ",(0,a.kt)("strong",{parentName:"p"},"Header"),", ",(0,a.kt)("strong",{parentName:"p"},"Sidebar"),", and ",(0,a.kt)("strong",{parentName:"p"},"Workbench"),"."),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u9875\u7709",src:n(619).Z,width:"303",height:"53"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Invite"),": Invite others to collaborate on the same Workspace."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{alt:"Settings icon",src:n(5901).Z,width:"21",height:"20"})," ",(0,a.kt)("strong",{parentName:"li"},"Setting"),": Switch between Dark/Light mode and Chinese/English mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sign out"),"\uff1aYou can sign out of your current account.")),(0,a.kt)("h3",{id:"sidebar"},"Sidebar"),(0,a.kt)("img",{src:"https://i.328888.xyz/2023/02/15/mxrXb.png",alt:"Sidebar",width:"400",height:""}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{alt:"\u5de5\u4f5c\u533a",src:n(1795).Z,width:"22",height:"21"}),"  ",(0,a.kt)("strong",{parentName:"li"},"Workspace"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select the dropdown list to switch workspaces; "),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"+")," to create a new workspace; "),(0,a.kt)("li",{parentName:"ul"},"Select  ",(0,a.kt)("img",{alt:"\u7f16\u8f91\u5de5\u4f5c\u533a",src:n(5676).Z,width:"27",height:"24"}),"  icon to edit the workspace\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Select  ",(0,a.kt)("img",{alt:"\u5bfc\u5165",src:n(9938).Z,width:"23",height:"22"}),"  icon to import a local file as a collection into the workspace."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Collection"),"\uff1aGroups of saved requests. You can send requests and manage your test cases here."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Replay"),": Execute traffic replay and view the reports."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Environment"),": Create a new environment and set environment variables."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AppSetting"),": Set up the recording application.")),(0,a.kt)("h3",{id:"workbench"},"Workbench"),(0,a.kt)("p",null,"The workbench is the primary area when performing operations such as API testing, traffic replay, and comparison testing. The tab bar allows you to quickly manage various requests, collections, and replay. The environment selector on the top right corner allows you to quickly select the environment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5de5\u4f5c\u53f0",src:n(3180).Z,width:"1731",height:"745"})),(0,a.kt)("h4",{id:"tabs"},"Tabs"),(0,a.kt)("p",null,"Tabs allow you to organize and work between requests."),(0,a.kt)("p",null,"You can open a new request by selecting ",(0,a.kt)("strong",{parentName:"p"},"+")," in the workbench."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u65b0\u5efa\u8bf7\u6c42",src:n(1645).Z,width:"2878",height:"846"})),(0,a.kt)("h4",{id:"switching-environments"},"Switching environments"),(0,a.kt)("p",null,"As needed, you can quickly switch to the environment you need on the top right corner. Select the appropriate environment to access the variables in that environment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5207\u6362\u73af\u5883",src:n(4949).Z,width:"2874",height:"1057"})))}h.isMDXComponent=!0},5888:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.add.extension-a78c2f4e58f28e2ed18acc270bc6ca6e.png"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.add.extension2-ff2d4dba190703129c72a6792f0bf382.png"},8857:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.add.extension3-50850ac8fb359313edef3c46a191b492.png"},4949:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.change.environment-9f63b6fc6cc8e248b5a1f1e420f63988.png"},1513:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.chrome.extension-1ecf4f36c03d4de75a5ae1dbf3ac2232.png"},619:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},9938:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAMAAAFrr8ehAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwUExURf////z8/Kenp8nJyb29vSMjI0RERObm5tra2jo6OhkZGRcXF2VlZfLy8vPz83FxcSQkJB8fHyEhISwsLJ2dnf39/fX19c/Pz7CwsC0tLUlJSdfX1+Tk5DIyMlhYWN7e3jExMVZWVvT09N/f3/Dw8C4uLlRUVP7+/unp6eLi4vr6+qmpqTw8PE1NTW1tbfj4+Hp6ekpKStDQ0I+Pjw0NDZKSku3t7fb29lpaWhwcHMDAwBMTE5WVlV5eXiIiIsLCwpGRkcHBwRQUFCsrKyoqKhsbGyUlJcPDw8TExEtLS0xMTF9fX+Xl5ejo6Ozs7AAAAP8zgJUAAABQdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////8AE3OmeQAAAAlwSFlzAAAV/QAAFf0BzXBRYQAAAKBJREFUKFN9kMEKxCAMRAMWTx57leDZS8HiRcj/f9YmMduNLd0HMmOIThQeFIAGQ1zWvRQAIqNmsk3pTppaCNI57UIn2s0yeN3FZ3WDvJrdAWT6Blkwc5BrtokV778tEiJ1OX6aJn6LeKGwj8X4ZfyhBjMLmMdI5j1hoxhkiDtI7nMdmF/qt/6aqypGi01RY9pwn870QjrwftLKmHXoDwA+NkcU+NluSsEAAAAASUVORK5CYII="},6829:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.log-6a77cbd1ef40db01a222635366d44395.png"},1645:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.newrequest-837bcefb38f79ebbca2cb86e52ee535a.png"},30:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.overview-4def4ce57a6a17311f0ede0f3a91a0e5.jpg"},5676:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADtSURBVEhL1dQNDYMwEIbhOakCFFQBClCAggqpgipAAQpQgIIqqIIuX9MjQHr8XVmyN2nGuuSerIx94g/7P8x7n6+OE2PDMESlVHo9S4QRROsMfIytIWPMJfARtoZoeGlv322MGxpCiFrrtN+2bd7ddgs7ggAQhPelLmNSCF3CakDoFKsFoUOsJoRYbBzHqhBisb7v00DnXN6RQYjF6JmhgVIIsRiGNk0T53lORyqFUBGbpikN3i8JhIoYvg0BXdelP1prrQhC7DFKB5disTfaYDguHFuNhUdn34JxPwrJwsx1C4Z7hA9rru19j/ELKvfaXZQpEKAAAAAASUVORK5CYII="},5901:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAAEikraXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuUExURf////r6+vDw8Jubm1paWlBQUDAwMDw8PIqKiujo6Obm5uvr66WlpSAgII6Ojh8fH6SkpPX19WhoaEZGRn9/f1VVVRoaGmNjY9vb22trayUlJVRUVJaWlh0dHWpqaj09Pbi4uPT09Pn5+cPDw0JCQi8vL9/f31lZWe/v7+7u7uXl5YKCgmVlZdra2vv7+9XV1Tc3N0RERNHR0f7+/snJyTg4OEpKSi4uLr29vdLS0kVFRcXFxUxMTPf391dXV15eXunp6VNTUy0tLcbGxk9PTzU1NdPT0zY2Nrm5uby8vDQ0NMzMzFFRUUtLS+Pj4zs7O6CgoKysrOLi4lJSUnR0dLa2tsHBwW9vb0lJScvLy+3t7XNzcycnJyoqKtDQ0N7e3kFBQdjY2NfX1/b29tnZ2ZSUlB4eHm1tbTExMT4+PsLCwkNDQ2dnZ3x8fCYmJm5ubtzc3Ofn5+Dg4Orq6qGhoY+Pj5mZmY2NjVZWVgAAAMA/BzgAAAB6dFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A6D/oJgAAAAlwSFlzAAAOnAAADpwBB5RT3QAAANxJREFUGFdlUDGuBSEInNKGUu9AQsMxFqtN7LmF53+Du8X/740hgiADg4NIwOK4UwA3OiqivDyin0RBeRBYtImkofMcbN+vY8Eit1ZB5IU5T4nTrnqqgFcj0S/6205xt72LDhL8NmMA6ZjuF5zj9mokpysHuqYxQJoiE7pqnyWZ0mqVqqnCv6jO34jY8Y73oPvqw5J9pa+jCjlKDwqxjCyq1I1kNSAZnPxqzLtQm4IHP5QyN1XxZ7kMZ1aXhCyOMf3psIdFrUpcETZePZUs92hoY3O5f2Pv3vtbBXwAzSwtbp+UIDAAAAAASUVORK5CYII="},3180:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/c1.workbench-a1e3c86dd47e5bc724d878a64f51552b.png"},1795:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAMAAAEC+d4xAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHUExURf////7+/unp6eHh4e7u7uDg4I+Pj09PTzExMSsrKzY2NltbW6Ojo+/v7/n5+ZaWlikpKRcXFxYWFi0tLTc3NyEhIRgYGDo6OrS0tPX19WtraxQUFG5ubioqKsrKyldXV6enpyQkJICAgEBAQBoaGpCQkPz8/HBwcAoKCvHx8T8/P5KSklFRUYyMjF9fX2pqakFBQRISEpqammRkZDk5OfPz81NTU46OjsvLyy4uLmZmZjMzMyIiIs7OzkZGRvDw8KampiYmJiMjI3Z2dqurq0JCQqWlpWNjYxkZGcXFxdvb215eXv39/a2tra+vr2hoaFxcXDs7O2lpaU1NTW9vb35+fh0dHdXV1eXl5S8vL9PT00xMTIGBgfj4+Jubm8zMzJmZmTAwMN3d3VJSUo2Njbi4uPT09HFxcT4+PlZWVkhISE5OTlVVVfr6+jw8PIWFhYSEhGxsbHV1dWdnZ3x8fH9/fycnJ9zc3FRUVHd3d3l5eeTk5MnJydLS0kNDQ97e3r6+vhUVFZiYmERERDg4OHJyciUlJUtLSzIyMnp6en19fdTU1B4eHpycnMHBwR8fH0lJSefn57q6upeXlzQ0NOLi4pOTkxAQEFlZWebm5vv7+zU1NSAgILy8vBsbG11dXYKCgmFhYSwsLLe3t8DAwEpKShwcHGJiYtjY2Ht7e4qKis/PzwAAALKQ9rIAAACtdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/UUE8AAAAAlwSFlzAAAOnAAADpwBB5RT3QAAAQhJREFUKFM9UbGVxTAIo/Aw19ICpfewn2sWcM0GHoMpT/DvvvKcKMQWEqEvhmIV2WT1+NkU9QRuLW96+h6CTRZ7kas/orVdcZxi9WdjNUaZSIfdmLxKUd1wRbgQMYWaKUl13Mp+vZsCo00UNptyyRKJKKXTD+iIaRPvA4ZkjENJCj3IQ7p7wAedTx38IQe83k5lAZ23rXuwzDRrn4jgkR/WONkGfX7dAMJy7fielsr7rzg51OHSk5aJqvUMZuUP8RIRxwBxEOWA6aVg2E2vJm41XNVMsZupXiTzGoaEMwMbFq24iIO/8XiWeOi6rPNEnmTbj0sDSPaBoIHEefQ/GbCCmc2wpFwQ/QJnAWLgM0vB4wAAAABJRU5ErkJggg=="}}]);