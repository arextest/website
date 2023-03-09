"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,u=m["".concat(c,".").concat(d)]||m[d]||h[d]||o;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,title:"Run Collection",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},s=void 0,i={unversionedId:"chapter4/Run Collection",id:"chapter4/Run Collection",title:"Run Collection",description:"AREX allows you to automate API testing by running a collection of saved requests. This is a convenient way to perform automated API testing on a large number of test cases at once, rather than running each test case individually.",source:"@site/docs/chapter4/Run Collection.md",sourceDirName:"chapter4",slug:"/chapter4/Run Collection",permalink:"/website/docs/chapter4/Run Collection",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter4/Run Collection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Run Collection",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},sidebar:"tutorialSidebar",previous:{title:"Managing Test Cases",permalink:"/website/docs/category/managing-test-cases"}},c={},l=[{value:"Scenarios",id:"scenarios",level:2},{value:"Create colletions to store test cases",id:"create-colletions-to-store-test-cases",level:2},{value:"Batch Run",id:"batch-run",level:2},{value:"Batch Compare",id:"batch-compare",level:2}],p={toc:l},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AREX allows you to automate API testing by running a collection of saved requests. This is a convenient way to perform automated API testing on a large number of test cases at once, rather than running each test case individually."),(0,r.kt)("h2",{id:"scenarios"},"Scenarios"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Batch run test cases"),". When testing multiple scenarios for the same URL, you can save requests in different scenarios as test cases and run it directly the next time without having to re-add the request details. The ",(0,r.kt)("strong",{parentName:"p"},"Batch Run")," enables you to run multiple test cases in a collection at once, making regression testing more efficient and convenient.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Batch run comparison cases"),"\u3002In order to compare the response messages from two different request URLs, we can use AREX for comparison testing. Typically, there are many scenarios to be tested in comparison testing, and manual comparison for each scenario can be time-consuming and result in low testing efficiency. By saving every comparison scenario as test cases and running them in batch, we can automate the testing process and improve the speed and efficiency of software testing."))),(0,r.kt)("h2",{id:"create-colletions-to-store-test-cases"},"Create colletions to store test cases"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Collection")," in the sidebar and select the ",(0,r.kt)("strong",{parentName:"p"},"+")," icon to create a new collection."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3TiPX.png",alt:"New Collection",width:"400",height:""})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add Request")," from the dropdown list of the collection to create a new request or comparison request, and then select ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T59J.png",alt:"New request",width:"400",height:""}),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u914d\u7f6e\u4fe1\u606f",src:a(72).Z,width:"3838",height:"1737"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add Case")," frome the dropdown list of the request to create a new test case. Test cases will automatically inherit the configuration of Request, reducing the cost of designing test cases."),(0,r.kt)("img",{src:"https://i.328888.xyz/2023/02/10/R09eC.png",alt:"R09eC.png",width:"400",height:""})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can categorize your test cases by adding tags. Hover over the ",(0,r.kt)("strong",{parentName:"p"},"Add Tag")," and select the ",(0,r.kt)("img",{src:a(1543).Z,width:"27",height:"24"})," icon."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u67e5\u770b\u7528\u4f8b",src:a(3950).Z,width:"2862",height:"925"})),(0,r.kt)("p",{parentName:"li"},"Tags can be pre-configured by selecting the ",(0,r.kt)("strong",{parentName:"p"},"Edit Workspace")," icon >> ",(0,r.kt)("strong",{parentName:"p"},"Labels")," tab."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u7ba1\u7406\u6807\u7b7e",src:a(8224).Z,width:"3840",height:"1298"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Description")," of test cases makes it easier for others to understand the purpose and expected results of the test cases, improves readability, and provides a better understanding of the testing content. To add a description, move your cursor to ",(0,r.kt)("strong",{parentName:"p"},"description")," and select the ",(0,r.kt)("img",{src:a(1543).Z,width:"27",height:"24"})," icon."))),(0,r.kt)("h2",{id:"batch-run"},"Batch Run"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Batch Run")," from the dropdown list of the collection which you want to run."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"run folder",src:a(7379).Z,width:"1323",height:"1438"})),(0,r.kt)("p",{parentName:"li"},"Or you can hover over the ",(0,r.kt)("img",{src:a(491).Z,width:"23",height:"23"})," icon in the sidebar and select ",(0,r.kt)("strong",{parentName:"p"},"Batch Run"),". All collections within the current ",(0,r.kt)("strong",{parentName:"p"},"workspace")," will be selected in this way."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"batch compare",src:a(1078).Z,width:"1109",height:"1292"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the test cases from the list and select ",(0,r.kt)("strong",{parentName:"p"},"Run Case")," to run."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"run case",src:a(8199).Z,width:"2956",height:"1843"})))),(0,r.kt)("p",null,"You can view the test results after running."),(0,r.kt)("h2",{id:"batch-compare"},"Batch Compare"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Batch compare")," refers to the capability of running multiple comparison tests in AREX at once, as a batch. This feature allows you to send the same request to different environment addresses and compare the responses from each, without having to manually compare each scenario. This makes the testing process more efficient and streamlined."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Batch Compare")," from the dropdown list of the collection which you want to run."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"batch compare",src:a(5061).Z,width:"1337",height:"1348"})),(0,r.kt)("p",{parentName:"li"},"Or you can move your cursor to ",(0,r.kt)("img",{src:a(491).Z,width:"23",height:"23"})," icon in the sidebar and select ",(0,r.kt)("strong",{parentName:"p"},"Batch Compare"),". All collections within the current ",(0,r.kt)("strong",{parentName:"p"},"workspace")," will be selected in this way."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"batch compare",src:a(1078).Z,width:"1109",height:"1292"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the comparison cases from the list and select ",(0,r.kt)("strong",{parentName:"p"},"Run Comparison Cases")," to run."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"run case",src:a(4151).Z,width:"3042",height:"1841"})),(0,r.kt)("p",{parentName:"li"},"You can view the comparison results after running."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"compare",src:a(9059).Z,width:"2881",height:"1474"})),(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"+")," icon to view the details of the comparison case."),(0,r.kt)("p",{parentName:"li"},"It will display the specific location of the node in the response message when you move your cursor to the path."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"compare path",src:a(644).Z,width:"1299",height:"371"})),(0,r.kt)("p",{parentName:"li"},"If there is data such as timestamp, random number, IP, etc. that may interfere with the comparison results, you can select ",(0,r.kt)("strong",{parentName:"p"},"Ignore Node")," to configure the node to be ignored."))))}h.isMDXComponent=!0},1543:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADtSURBVEhL1dQNDYMwEIbhOakCFFQBClCAggqpgipAAQpQgIIqqIIuX9MjQHr8XVmyN2nGuuSerIx94g/7P8x7n6+OE2PDMESlVHo9S4QRROsMfIytIWPMJfARtoZoeGlv322MGxpCiFrrtN+2bd7ddgs7ggAQhPelLmNSCF3CakDoFKsFoUOsJoRYbBzHqhBisb7v00DnXN6RQYjF6JmhgVIIsRiGNk0T53lORyqFUBGbpikN3i8JhIoYvg0BXdelP1prrQhC7DFKB5disTfaYDguHFuNhUdn34JxPwrJwsx1C4Z7hA9rru19j/ELKvfaXZQpEKAAAAAASUVORK5CYII="},3950:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c3.case.3-2961bf0760249ca33fe005fdc00ba14d.png"},8224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.addlabel-e014b95060e92fa63c29407d3732c7b4.png"},1078:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.batch-d0727c1bc0c3efbae5c997f6f12c059a.png"},5061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.batchcompare-f80a364aa7be979bce4546157515be20.png"},9059:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.comparediff-76abbd16e6ad65f874ecc9d1b7a2f63b.png"},644:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.comparepath-61c7ef3b8c306b3b741f7a4c9a24a0cb.png"},72:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.request-7c304d50f2a216847431148cebead98d.png"},491:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAAGg8xQEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHOUExURSEhIR8fHxwcHBoaGhsbGx4eHh0dHSIiIi0tLTU1NTY2NjAwMCUlJSAgICYmJkdHR3R0dJiYmKysrK+vr6GhoYGBgVVVVS8vLzw8PIKCgsLCwtPT08XFxbq6uri4uMDAwNDQ0M7OzpycnFFRUSMjI0tLS62trdra2qurq2lpaT8/PzExMTc3N1hYWJeXl9LS0sfHxyQkJLCwsNbW1n9/fyoqKhISEhMTExcXFxgYGBQUFFxcXMPDw8zMzGFhYSkpKZSUlEFBQScnJxUVFU1NTcHBwbm5uURERF5eXhkZGWBgYKmpqXNzcywsLBYWFmpqaoaGhsbGxmRkZNfX14qKikJCQjs7O6Ojoy4uLmVlZbe3t6enp1ZWVoCAgMnJyU5OToyMjK6urru7u3JycjIyMmNjY3Z2dldXV8rKyoeHh2hoaLOzs1RUVAQEBENDQ8TExFtbW8/Pz09PT4mJib29vZWVlXh4eD4+Pp2dnSsrK2dnZ3V1dXd3d8jIyCgoKJ6enklJScvLy6qqqlNTU5+fn0VFRZGRkY+Pj6WlpV9fX0BAQFBQUNTU1M3NzYODg0hISD09PWxsbJaWlrS0tL+/v76+vnl5eTQ0NEZGRgAAAPbU81sAAACadFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDLsIVjAAAACXBIWXMAABX9AAAV/QHNcFFhAAABIElEQVQoUz1Qu5EAIQg1IzahBTsgI6YGUsbE4DowovJ7z725nXEBfR9giMkQtSERL1dEFxsWuV2GSR65Q2QWgUAIwpKJMBFbgNaZMjZeHsEvIfhutzKiWLLxHtQwF8noK3rhOlVyATWDMPXYOwGAP62MBwVVXvEpx+xDO+TVe+tKYs61ALio5GbrmOyyEUesozZ8v3xXMCfGG5rAWKcpuE2uFcSjQIe+ZTlu/yb67+HrSzBVoJGv1w8D0+PLq8odw/3hxaKwFwMfR92TD8MsF1qSxDr4vZL3UXMDkdWFHSI7jiUNMAm3W/oTzrF1Xe4U+EevM/3S5NIBfeYj4J5ysPOJkv1oQfHrR6Ih9Xwpor2qz5zlBYN3zx/p9ub9lmAivy53XoG1muaCAAAAAElFTkSuQmCC"},8199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.runcase-bfbacee06c6797e8122c637e6dcc120e.png"},4151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.runcompare-45506ceb8ab79b15e64c54095d680799.png"},7379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/c4.runfloder-8643beabd44c6c9f0b05b51887307daa.png"}}]);