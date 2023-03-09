"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>A,kt:()=>p});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},A=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),v=c(t),d=r,p=v["".concat(l,".").concat(d)]||v[d]||m[d]||a;return t?i.createElement(p,s(s({ref:n},A),{},{components:t})):i.createElement(p,s({ref:n},A))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[v]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:4,title:"Managing Environment",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},s=void 0,o={unversionedId:"chapter2/Managing Environments",id:"chapter2/Managing Environments",title:"Managing Environment",description:"A project will be in different environments at different stages, such as development environment, test environment, and production environment. Usually, different environments have different pre-fixed URLs and different parameter values for the interfaces. Changing the pre-fixed URL and parameters frequently due to different environments is very inconvenient. Different environments can be created in AREX and different environment variables can be set in each environment. When testing in different environments, you can simply switch environments.",source:"@site/docs/chapter2/Managing Environments.md",sourceDirName:"chapter2",slug:"/chapter2/Managing Environments",permalink:"/website/docs/chapter2/Managing Environments",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter2/Managing Environments.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Managing Environment",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},sidebar:"tutorialSidebar",previous:{title:"Writing Scripts",permalink:"/website/docs/chapter2/Writing Scripts"},next:{title:"Traffic Replay",permalink:"/website/docs/category/traffic-replay"}},l={},c=[{value:"Creating environments",id:"creating-environments",level:2},{value:"Adding environment variables",id:"adding-environment-variables",level:3},{value:"Accessing environments",id:"accessing-environments",level:2},{value:"Selecting an active environment",id:"selecting-an-active-environment",level:3},{value:"Editing environment variables",id:"editing-environment-variables",level:3},{value:"Setting environment variables from scripts",id:"setting-environment-variables-from-scripts",level:3}],A={toc:c},v="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(v,(0,i.Z)({},A,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A project will be in different environments at different stages, such as development environment, test environment, and production environment. Usually, different environments have different pre-fixed URLs and different parameter values for the interfaces. Changing the pre-fixed URL and parameters frequently due to different environments is very inconvenient. Different environments can be created in AREX and different environment variables can be set in each environment. When testing in different environments, you can simply switch environments."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Managing environments",src:t(7927).Z,width:"3840",height:"1171"})),(0,r.kt)("p",null,"You can access all environments from ",(0,r.kt)("strong",{parentName:"p"},"Environment")," in the sidebar."),(0,r.kt)("h2",{id:"creating-environments"},"Creating environments"),(0,r.kt)("p",null,"To create a new environment, select ",(0,r.kt)("strong",{parentName:"p"},"Environment")," in the sidebar and select ",(0,r.kt)("strong",{parentName:"p"},"+"),"."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/10/R4gDV.png",alt:"new environment",width:"400",height:""}),(0,r.kt)("p",null,"Select the new environment to open the environment editor."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edit environments",src:t(6058).Z,width:"3840",height:"1744"})),(0,r.kt)("p",null,"Select the ",(0,r.kt)("img",{src:t(1543).Z,width:"27",height:"24"})," icon to rename this environment."),(0,r.kt)("p",null,"Select the ",(0,r.kt)("img",{src:t(2910).Z,width:"25",height:"23"})," icon to make it the active environment."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/10/RUDAN.png",alt:"RUDAN.png",width:"400",height:""}),(0,r.kt)("p",null,"Select the ",(0,r.kt)("img",{src:t(3408).Z,width:"20",height:"21"})," icon to duplicate current environment."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/10/R4Lz5.png",alt:"R4Lz5.png",width:"300",height:""}),(0,r.kt)("h3",{id:"adding-environment-variables"},"Adding environment variables"),(0,r.kt)("p",null,"Environment variables are variables that change in response to environment switches. You can add variables to an active (currently selected) environment by opening the environment from the sidebar and editing it in the tab that opens."),(0,r.kt)("p",null,"You can the variable names and values inline, or use the ",(0,r.kt)("strong",{parentName:"p"},"Disable")," and ",(0,r.kt)("strong",{parentName:"p"},"Remove")," icon to disable and delete a variable. Enter the name in ",(0,r.kt)("strong",{parentName:"p"},"VARIABLE")," and values in ",(0,r.kt)("strong",{parentName:"p"},"VALUE")," for a new variable on a new line. Then select the ",(0,r.kt)("img",{src:t(5395).Z,width:"22",height:"21"})," icon to save your changes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting environment variables",src:t(7697).Z,width:"2482",height:"848"})),(0,r.kt)("h2",{id:"accessing-environments"},"Accessing environments"),(0,r.kt)("p",null,"You can access your environment variables from your request elements, including the URL, parameters, body data, and test scripts."),(0,r.kt)("h3",{id:"selecting-an-active-environment"},"Selecting an active environment"),(0,r.kt)("p",null,"To use the variables in an environment, select it from the environment selector at the right corner of the workbench."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5207\u6362\u73af\u5883",src:t(3101).Z,width:"2874",height:"1057"})),(0,r.kt)("p",null,"By selecting an environment through the environment selector, AREX recognizes it as the active one and executes all requests utilizing values from that environment in case your requests refer to environment variables."),(0,r.kt)("p",null,"To use an environment variable in a request, just reference it by name, surrounded with double curly braces like: ",(0,r.kt)("inlineCode",{parentName:"p"},"{{VARIABLE}}"),". The system will automatically replace them with the set values during actual execution."),(0,r.kt)("p",null,"You can use the same variable notation in request URLs, parameters, headers, and body data. Move your cursor to a variable reference to view its value."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/10/RD1NE.png",alt:"RD1NE.png",width:"700",height:""}),(0,r.kt)("h3",{id:"editing-environment-variables"},"Editing environment variables"),(0,r.kt)("p",null,"You are able to edit environments in the workspace where you have ",(0,r.kt)("strong",{parentName:"p"},"Editor")," access. "),(0,r.kt)("p",null,"You can edit the environment name, the names and values of your variables by opening an environment from ",(0,r.kt)("strong",{parentName:"p"},"Environments")," in the sidebar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edit environments",src:t(8990).Z,width:"3840",height:"1206"})),(0,r.kt)("h3",{id:"setting-environment-variables-from-scripts"},"Setting environment variables from scripts"),(0,r.kt)("p",null,"You can also update environment variable value via Pre-request and Tests scripts ."),(0,r.kt)("p",null,"Use arex.environment to set an environment variable in the active (currently selected) environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'arex.environment.set("variable_key", "variable_value");\n')),(0,r.kt)("p",null,"Mind that if you write scripts to assign values to environment variables, all requests that refer to these variables will reflect the updates."))}m.isMDXComponent=!0},3101:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/c1.change.environment-9f63b6fc6cc8e248b5a1f1e420f63988.png"},1543:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADtSURBVEhL1dQNDYMwEIbhOakCFFQBClCAggqpgipAAQpQgIIqqIIuX9MjQHr8XVmyN2nGuuSerIx94g/7P8x7n6+OE2PDMESlVHo9S4QRROsMfIytIWPMJfARtoZoeGlv322MGxpCiFrrtN+2bd7ddgs7ggAQhPelLmNSCF3CakDoFKsFoUOsJoRYbBzHqhBisb7v00DnXN6RQYjF6JmhgVIIsRiGNk0T53lORyqFUBGbpikN3i8JhIoYvg0BXdelP1prrQhC7DFKB5disTfaYDguHFuNhUdn34JxPwrJwsx1C4Z7hA9rru19j/ELKvfaXZQpEKAAAAAASUVORK5CYII="},3408:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAAEGDA4MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8UExURf////v7+4CAgFhYWF1dXVxcXJ6env7+/vr6+n5+flZWVltbW1paWiwsLPn5+dra2tjY2NXV1dTU1NbW1nh4eFdXV7e3ty4uLicnJygoKCoqKjIyMtfX16ampisrK6CgoLGxsa+vr7KysouLixoaGsXFxX9/f6enpzg4OOrq6s3NzR8fH8fHxzc3N+np6cnJyaioqDY2NuTk5Pz8/P39/SAgIElJSUpKSkRERJeXl8zMzIODg01NTWJiYnt7e1JSUr29vWZmZm5ubmRkZMPDw7W1tZubm7+/vxYWFsLCwsbGxh0dHcDAwC0tLRcXFx4eHhwcHMrKyt/f3wAAAL6+sTUAAABUdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ctEAAAAJcEhZcwAADpwAAA6cAQeUU90AAAChSURBVBhXrZGxEoMwDEM1e2ZjZOqWxXfBU7J59v9/TGUXCteBqe8OIRQSIoIP/bjwMqgBFiF8gGUYDA4sKI33U6Onfl+RKTJ3mpbsxkXQXhT7tTC3sY90dzbOlxoPYrGk1UG87Jri22UfUt3mmUJlmJfLDVSNBxYhWUW09gIMvYjlCNuafRKW+Vfova/5B+8hPz8Xlqmw1Whh6u7qmkcG4A1soiRnN7gh3AAAAABJRU5ErkJggg=="},7697:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/c2.add.env.parameters-bd4dde3450a8db707bc366fc392b93b2.png"},6058:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/c2.edit.env-a273a1df5f37d9121ebd595c1e84c4bf.png"},8990:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/c2.edit.env2-08cb40bc8fb632b6f773b3a8ab40882b.png"},7927:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/c2.environment-9bffa6b2d239a8de8bc78876d25a7daa.png"},5395:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAMAAAEC+d4xAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFNUExURf////j4+MbGxry8vLu7u7+/v76+vsrKyvv7+9/f30FBQTg4ODs7Ozo6Ojw8PKenp9HR0RcXF0lJSYGBgYKCgmBgYBISEnh4eICAgB8fHxsbGykpKaWlpfz8/NPT0x4eHo6OjhoaGvf39zExMW9vb05OTiUlJampqR0dHbi4uMXFxSAgIKOjo0NDQygoKKioqPr6+o2NjcPDwz4+PkJCQsvLyywsLNra2ubm5peXl4mJiYqKioiIiJOTk5ycnA8PD66urhQUFP39/cLCwvn5+b29vbW1tT09Pezs7EpKSsTExFtbW8HBwbS0tBgYGKurqyIiIpiYmLOzs1xcXDY2NpSUlJubm0hISGFhYVdXV+vr67GxseLi4qqqqpCQkKysrNLS0mJiYq+vr3Z2dhAQENnZ2S4uLi0tLTc3NzAwMCMjI/Hx8Z6enujo6AAAALx6rfUAAABvdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP5WdtUAAAAJcEhZcwAADpwAAA6cAQeUU90AAADWSURBVChTZVAxEsMgDPPAwgecBzB79Oa7rhnx2IGB/3+iEqQ97ioSR5GFjZF/FJGKF3gzaKUSmXkvEYpLG6JgKw7GAg5LhkgzrAYHreL4UbFKLsUa/CgHPtPuzcfGtZt+caMGC5HX5A65GGpIb2aj9sU3kCC3ll/uheTRW9qP32xDPp++4Dh6YAEs5uWAUyFcLWLqFYGna1/zoYxiT9Hixd111LYTTrmyKpCYPl/su9xMR+5ph/K73JjYis8O8yNv90pu4XSLz2bvdbzTfeCROy/yRHf5AIeSMa81fCeCAAAAAElFTkSuQmCC"},2910:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAMAAAG+OiS3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkUExURf///+vr6+fn5/z8/G5ublNTU+zs7E5OTi0tLerq6vv7+/T09FJSUjQ0NOHh4fr6+v39/enp6be3t4iIiC4uLiEhIXh4eK6urt/f38TExFtbWxwcHBgYGCwsLC8vLx0dHUlJSbGxsfX19bm5uTAwMKKiosjIyM3NzWpqaiMjIyIiIpmZmfn5+dXV1SUlJZubm7OzszU1NR4eHri4uP7+/hMTE5CQkO3t7fb29rKysiAgIEpKStzc3CQkJEVFRfj4+GhoaF1dXZ2dnfLy8mxsbBsbG7q6uvDw8Obm5ujo6KWlpREREYyMjLu7uxAQEKCgoLS0tBUVFYCAgJKSkkhISFFRUTc3NxYWFq+vr3R0dBQUFBcXF1BQUExMTG9vb4mJiTk5OUFBQTExMXZ2dlRUVNfX1yoqKjw8PGJiYu/v7+Xl5Z+fn42NjSkpKR8fH5SUlLW1tXt7e93d3aamplhYWFVVVY6OjhoaGry8vJ6enr6+vszMzDMzMycnJ6ioqMPDwzo6Oq2trSsrK9PT04SEhIqKiigoKHBwcGFhYd7e3mZmZgAAAI2WzM4AAACMdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AcRYuAwAAAAlwSFlzAAAOnAAADpwBB5RT3QAAAO5JREFUKFNtkdGtBCEIRenBxCKwAP5sgNiMiV8SCqDqBXVm3Zd3EhWEGa9XODQfKj7RGQvitQgg1BPdJI3Ze7woyhUtOmjtXuBZnYY67eSkCZALcF/ndQEd62+bgYLlxMEWcHgVBuPKmuR+QsAxG6YdW4lvODrJb9XYR/IsVYaMTB3X1VzaSJDDDVeE3jAf9Y1l92zuQ8HuZGM/DRc05FV40Qaz35jrH/fm60IT3Lo2HcMRtVH8IOOnlGqVSIwR2f3sjKP6uzhExe32N/CSr8qJ6BVpUdrGNqw/2hU56+wt4+PmF1JDtpDwD0O++wAfOS0/UfbjKNAAAAAASUVORK5CYII="}}]);