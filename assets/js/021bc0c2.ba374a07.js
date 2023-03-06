"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),h=a,m=l["".concat(s,".").concat(h)]||l[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3,title:"Force Record",keywords:["Regression test","Automation Testing","Traffic Replay"]},i=void 0,c={unversionedId:"chapter 3/Force Record",id:"chapter 3/Force Record",title:"Force Record",description:"Mock is to replace the dependent objects with mock objects. These mock objects simulate or \u2018mock\u2019 the behavior of real objects and exhibit the exact characteristics of the authentic ones, making the testing process faster with mock objects.",source:"@site/docs/chapter 3/Force Record.md",sourceDirName:"chapter 3",slug:"/chapter 3/Force Record",permalink:"/docs/chapter 3/Force Record",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter 3/Force Record.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Force Record",keywords:["Regression test","Automation Testing","Traffic Replay"]},sidebar:"tutorialSidebar",previous:{title:"Traffic Replay",permalink:"/docs/chapter 3/Traffic Replay"},next:{title:"Save Recorded Cases",permalink:"/docs/chapter 3/Save Recorded Cases"}},s={},d=[{value:"Use Cases",id:"use-cases",level:3},{value:"Step 1: Record one request",id:"step-1-record-one-request",level:2},{value:"Step 2\uff1aEdit Mock data",id:"step-2edit-mock-data",level:2},{value:"Step 3\uff1aReplay the request",id:"step-3replay-the-request",level:2}],p={toc:d},l="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(l,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mock")," is to replace the dependent objects with mock objects. These mock objects simulate or \u2018mock\u2019 the behavior of real objects and exhibit the exact characteristics of the authentic ones, making the testing process faster with mock objects."),(0,a.kt)("p",null,"With AREX, you can verify the correctness of your system by recording a real online request and replaying it in your test environment. AREX's powerful mock mechanism will automatically mock all third-party dependencies during the recording process, perfectly reproducing the production data environment, resolving the challenges of constructing data and writing test cases in regression testing."),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Reproduce the online issues in test environment"),"\uff1aIf you need to debug a specific request in the production environment, you can force record the request with AREX, and then run the request again in test environment for debugging. During the recording process, AREX will collect and mock all dependencies, making the local data environment almost identical to the production environment, thus ensuring a successful reproduction of issues.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test the new feature"),"\uff1aYou can also record an online request in the same way and make corresponding changes in the returned mock data to meet the new functionality. With AREX, you can automatically mock the data required for this request without having to manually construct the data, which is very convenient."))),(0,a.kt)("h2",{id:"step-1-record-one-request"},"Step 1: Record one request"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new request and specify its details with the case that needs to be recorded, including the request line (URL and method), request header, and request body.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can select the ",(0,a.kt)("strong",{parentName:"p"},"action.record")," icon ",(0,a.kt)("img",{alt:"record",src:r(741).Z,width:"24",height:"20"})," to force record the request as test cases."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u5f3a\u5236\u5f55\u5236",src:r(2558).Z,width:"2861",height:"990"})),(0,a.kt)("p",{parentName:"li"},"And the ",(0,a.kt)("strong",{parentName:"p"},"Key"),': "arex-force-record" and ',(0,a.kt)("strong",{parentName:"p"},"Value"),': "true" will be added in the request ',(0,a.kt)("strong",{parentName:"p"},"Header"),". Then select ",(0,a.kt)("strong",{parentName:"p"},"Send")," to record the request."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u5f3a\u5236\u5f55\u5236",src:r(3614).Z,width:"2863",height:"900"})))),(0,a.kt)("h2",{id:"step-2edit-mock-data"},"Step 2\uff1aEdit Mock data"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After sending the request, a Record ID with ",(0,a.kt)("strong",{parentName:"p"},"Key"),': "arex-record-id" and ',(0,a.kt)("strong",{parentName:"p"},"Value"),': "Record ID" will be generated in the response message.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u5f55\u5236ID",src:r(1558).Z,width:"1419",height:"469"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The newly added ",(0,a.kt)("strong",{parentName:"p"},"Mock")," is all the dependencies' data mocked during the recording process."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"mock",src:r(2959).Z,width:"1421",height:"494"})))),(0,a.kt)("p",null,"If you are unsatisfied with the mocked data, you can manually modify it to meet the needs of the new functionality. Select ",(0,a.kt)("strong",{parentName:"p"},"Save")," to save your changes, then you can request the new functionality interface in the test environment, and verify its correctness using the modified mock data."),(0,a.kt)("h2",{id:"step-3replay-the-request"},"Step 3\uff1aReplay the request"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new request and enter the URL that needs to be tested in your test environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter ",(0,a.kt)("strong",{parentName:"p"},"Key"),': "arex-record-id", ',(0,a.kt)("strong",{parentName:"p"},"Value"),": the Record ID obtained previously in the request header.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Send")," to replay the request in your test environment for debugging purposes."))))}u.isMDXComponent=!0},2558:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.force.record-dd2b891e1e762531dcd9b5db2de31d39.png"},3614:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.force.record2-dbc7153ea75aa5e30f2cbf8debfbe6fc.png"},1558:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.force.recordid-d99906189bd9566119b8901d88f9dc82.png"},2959:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c3.mock-cf6fcf0fcb2ae2681e4bb706e7ed3ce8.png"},741:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAAHXbD0nAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTUExURf////T09O3t7ezs7MLCwnl5eURERCkpKSQkJEZGRnd3d8jIyPLy8nh4eB4eHicnJ1BQUHZ2dk5OTiUlJSIiIn9/f1ZWVhgYGHV1ddzc3NTU1G9vbxQUFPr6+nFxcRsbG6Kiov7+/v39/ZqamhoaGry8vIeHh/f3952dnb29vSMjI8rKymFhYTU1NfDw8EJCQuXl5YODg/Hx8UpKSn5+fr6+vnNzc3BwcMnJycHBwbi4uKqqqkVFRbS0tLe3tx8fH8DAwIGBgfj4+Pb29hwcHGVlZYiIiNXV1ZmZmfz8/ISEhCAgIJ+fnywsLEtLS/v7+6CgoJycnBkZGa6ursXFxWpqaufn57GxsUxMTO/v7zAwMNLS0s3NzSgoKM7Ozi4uLrKysi0tLc/Pzz8/PxYWFlhYWJCQkLW1tY+Pj1JSUhUVFYaGhj09PTw8PJSUlO7u7gAAABM7WDAAAABxdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AKUzAZQAAAAlwSFlzAAAOnAAADpwBB5RT3QAAANZJREFUKFNlUTGOxDAIpKJwjSJFoqX0C1Lb8iP8B/7f3QBJdu9uJMfA4PHgUGFgSUYT8RmBn8TYFo0iEkoNXweD/UTzQtrpSpKoCe871DhKM1MzSi0cBMDQPu1u9K4SIv+xWcNW4ojrNI+TTaySKdONrI2Qi1L4S0QifpX5FQ5HmUA5sv44naK9lD/wvwXAm8rR2iHy3pEY+oxPS7+okareq/QRNIV7FBhz0MWBLIBIS84x9m7tMYjHu40v4d/GnN8xaMvdVcDzHdOuycr5P7/h22y/SkQ/M1kd5mXi/PEAAAAASUVORK5CYII="}}]);