"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),g=s,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,a[1]=o;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(7462),s=(r(7294),r(3905));const i={sidebar_position:1,title:"API Testing",keywords:["Regression test","API Testing","software testing"]},a=void 0,o={unversionedId:"chapter2/API Testing",id:"chapter2/API Testing",title:"API Testing",description:"Creating new requests",source:"@site/docs/chapter2/API Testing.md",sourceDirName:"chapter2",slug:"/chapter2/API Testing",permalink:"/website/docs/chapter2/API Testing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter2/API Testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"API Testing",keywords:["Regression test","API Testing","software testing"]},sidebar:"tutorialSidebar",previous:{title:"Routine Testing",permalink:"/website/docs/category/routine-testing"},next:{title:"AREX Comparison Testing",permalink:"/website/docs/chapter2/Comparison Testing"}},l={},d=[{value:"Creating new requests",id:"creating-new-requests",level:2},{value:"Adding request details",id:"adding-request-details",level:2},{value:"Setting request URLs",id:"setting-request-urls",level:3},{value:"Selecting request methods",id:"selecting-request-methods",level:3},{value:"Setting parameters",id:"setting-parameters",level:3},{value:"Configuring request headers",id:"configuring-request-headers",level:3},{value:"Sending body data",id:"sending-body-data",level:3},{value:"Writing scripts",id:"writing-scripts",level:3},{value:"Pre-request Script",id:"pre-request-script",level:4},{value:"Tests",id:"tests",level:4},{value:"Receiving responses",id:"receiving-responses",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,s.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"creating-new-requests"},"Creating new requests"),(0,s.kt)("p",null,"You can create a new request by selecting ",(0,s.kt)("strong",{parentName:"p"},"Add Request")," in the dropdown list of the collection to open a new tab."),(0,s.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3T59J.png",alt:"New request",width:"400",height:""}),(0,s.kt)("p",null,"After opening the new tab, you can add the details you need for your request."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"new tab",src:r(8536).Z,width:"2856",height:"1756"})),(0,s.kt)("h2",{id:"adding-request-details"},"Adding request details"),(0,s.kt)("h3",{id:"setting-request-urls"},"Setting request URLs"),(0,s.kt)("p",null,"Each request you send requires a URL representing the API endpoint you are working with. The URL will typically be the base location plus path. For example, in the request ",(0,s.kt)("inlineCode",{parentName:"p"},"https://arextest.github.io/website"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"https://arextest.github.io")," is the base URL, and ",(0,s.kt)("inlineCode",{parentName:"p"},"/website")," is the endpoint path."),(0,s.kt)("p",null,"Enter the URL for the request into the URL field."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"new tab",src:r(5746).Z,width:"2869",height:"1739"})),(0,s.kt)("h3",{id:"selecting-request-methods"},"Selecting request methods"),(0,s.kt)("p",null,"The default method for a new request is set as ",(0,s.kt)("inlineCode",{parentName:"p"},"GET"),"\uff0cwhich means retrieving data from an API. You can also use a variety of other methods, including the following most common options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"POST \u2014 add new data"),(0,s.kt)("li",{parentName:"ul"},"PUT \u2014 replace existing data"),(0,s.kt)("li",{parentName:"ul"},"PATCH \u2014 update some existing data fields"),(0,s.kt)("li",{parentName:"ul"},"DELETE \u2014 delete existing data")),(0,s.kt)("h3",{id:"setting-parameters"},"Setting parameters"),(0,s.kt)("p",null,"You can send query parameters with your requests using the URL field and the ",(0,s.kt)("strong",{parentName:"p"},"Parameters")," tab. ",(0,s.kt)("strong",{parentName:"p"},"Query parameters")," are appended to the end of the request URL, following ? and listed in key value pairs, separated by & using the following syntax: ",(0,s.kt)("inlineCode",{parentName:"p"},"?id=1&type=new"),"."),(0,s.kt)("p",null,"To send a query parameter, you can add it directly to the URL or open ",(0,s.kt)("strong",{parentName:"p"},"Parameters"),' tab and select "',(0,s.kt)("strong",{parentName:"p"},"+"),'" to enter the name and value.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"parameters",src:r(9350).Z,width:"2867",height:"1752"})),(0,s.kt)("p",null,"The ",(0,s.kt)("img",{alt:"disable params",src:r(3273).Z,width:"24",height:"23"})," icon indicates that the parameter is in use, and you can click the icon to disable it."),(0,s.kt)("p",null,"Select ",(0,s.kt)("img",{alt:"re-enable params",src:r(5610).Z,width:"21",height:"23"})," icon to re-enable."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"disable params",src:r(2729).Z,width:"2791",height:"566"})),(0,s.kt)("h3",{id:"configuring-request-headers"},"Configuring request headers"),(0,s.kt)("p",null,"Some APIs require specific headers to be included in requests, usually to provide additional information about the operation being performed. These headers can be configured in the ",(0,s.kt)("strong",{parentName:"p"},"Headers")," tab. Simply enter the necessary key-value pairs, and AREX will include them in the request."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"request headers",src:r(2599).Z,width:"2809",height:"957"})),(0,s.kt)("p",null,"You can select the ",(0,s.kt)("strong",{parentName:"p"},"action.record")," icon ",(0,s.kt)("img",{alt:"record",src:r(9875).Z,width:"24",height:"20"})," to force record the request as test cases by sending it. See the details in ",(0,s.kt)("a",{parentName:"p",href:"/docs/chapter%203/Force%20record"},(0,s.kt)("strong",{parentName:"a"},"Force Record")),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"force record",src:r(3423).Z,width:"2830",height:"878"})),(0,s.kt)("h3",{id:"sending-body-data"},"Sending body data"),(0,s.kt)("p",null,"When you need to add or update structured data, body data must be included in requests. This is typically done with ",(0,s.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"POST"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"PATCH")," requests."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u8bf7\u6c42\u4f53",src:r(9210).Z,width:"3086",height:"1615"})),(0,s.kt)("p",null,"You can specify a JSON data in the ",(0,s.kt)("strong",{parentName:"p"},"Body")," tab to send with your request."),(0,s.kt)("h3",{id:"writing-scripts"},"Writing scripts"),(0,s.kt)("p",null,"You can add JavaScript code to run before sending a request or after receiving a response with:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Pre-request script in the ",(0,s.kt)("strong",{parentName:"li"},"Pre-request Script")," tab."),(0,s.kt)("li",{parentName:"ul"},"Test script in the ",(0,s.kt)("strong",{parentName:"li"},"Tests")," tab.")),(0,s.kt)("h4",{id:"pre-request-script"},"Pre-request Script"),(0,s.kt)("p",null,"To include code you want to execute before sending a request, select the ",(0,s.kt)("strong",{parentName:"p"},"Pre-request Script")," tab \u2192 ",(0,s.kt)("strong",{parentName:"p"},"Add Script Block")," and enter the JavaScript you need to process before the request runs, then select Save."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add pre-script",src:r(5239).Z,width:"2722",height:"1465"})),(0,s.kt)("p",null,"The interface provides commonly used pre-request scripts that can be used directly by clicking on the right side."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"pre-script",src:r(9437).Z,width:"3048",height:"1489"})),(0,s.kt)("h4",{id:"tests"},"Tests"),(0,s.kt)("p",null,"Tests confirm that your API is working as expected. On the ",(0,s.kt)("strong",{parentName:"p"},"Tests")," tab, you can test the correctness of the request response results by writing test scripts in JavaScript. This can also help in debugging when something goes wrong with your API project. You can, for instance, write a test to validate your API's error handling by sending a request with missing information or incorrect parameters."),(0,s.kt)("p",null,"The page provides various commonly used post-request scripts that can be used directly by clicking on them."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"test script",src:r(7394).Z,width:"2457",height:"1242"})),(0,s.kt)("p",null,"After configuring the request parameters, click ",(0,s.kt)("strong",{parentName:"p"},"Send")," to get the response."),(0,s.kt)("h2",{id:"receiving-responses"},"Receiving responses"),(0,s.kt)("p",null,"The response viewer displays the status code, request time, and size of the request body at the top."),(0,s.kt)("p",null,"The Response Body is the content of the response, which is the data returned from the server. The default data format is JSON."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"status code",src:r(2785).Z,width:"2483",height:"1642"})),(0,s.kt)("p",null,"The Raw view displays the raw response body as a large text area, allowing you to see if the response is minified."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"raw",src:r(371).Z,width:"2461",height:"937"})),(0,s.kt)("p",null,"Headers are displayed as key-value pairs under the ",(0,s.kt)("strong",{parentName:"p"},"Headers")," tab. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"response header",src:r(1722).Z,width:"2465",height:"969"})),(0,s.kt)("p",null,"The test results for the API request can be found in the ",(0,s.kt)("strong",{parentName:"p"},"Result")," tab, if any test scripts were run."),(0,s.kt)("img",{src:"https://i.328888.xyz/2023/02/09/3aRio.png",alt:"result",width:"500",height:""}))}u.isMDXComponent=!0},3423:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c1.force.record-de6d31d175ff30e20378801469422d66.png"},5239:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.add.pre-f053610797a447ece0a91fd9acd82890.png"},5610:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAMAAAGkBsQ5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJPUExURf////z+/tz07MDt3bDn1aPkzqblz7Lp1sPt39/17uf48qHjzVDMoiC9iSS/izXElDDCkh29iCS+i1fNpqzn0+/799f06mnTrx28hzHDkmXSrY7ew7Do1qXl0ITavmDQqyS/jBu8hn7Zu+L38Nfz6k7LoRG5gcbu4bXp2FHMoxW6g27VsuP38e/79mPSrQq3fRi7haDjzef482jSrxe7hIjcwPP8+ZbgxyG+ijbElTDCkafl0fr+/P7//+T38U3LoSe/jL3s3OX48UXInDrFl8zw5Lfq2i/CkS3CkK7o1P3//rPp1x+9iG3User59Kvm04bbv/b8+irBj7Tp1/7//vf9+1jOp8/x5Yzdwh69iLnq2qrm0iW/jDXDlILavR+9ib/s3YHavT7Gmcvw5KLjziK+ijvFl8Ds3aTkzy3BkLLo1nrYuVLMpNTy6JnhykPIm8bv4brr2zbElqjl0YDZuz/Gmcvw45PfxRq8hkrKoK7n1DHCk6/n1Yvdwrrq2/n9+xe7hdDx5iK+i73s3Ry9h5Pfxvn9/PX8+oXbvxS6g1bOpdPy5ye/jcrv4zzGmEDHmfP7+X3Zul3Pqdr068Xu4Ifcv4PbvfP7+HXXthu8h2XSrlPNpOf38VLMoyO+ip3iy/X8+fT8+WvTsA+5gAa2fHbXtu369TrFlv3+/tz07XTWtRS6gk/Lodjz6rvr3EXJncXu4ZHfxUbInRm7hlvPqNPx6NTz6DTElBi7hCvAjkbInii/jhO5goncwOX38cjv4oncwXzYuordwZ7iywAAAAocB9UAAADFdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ANFbHkQAAAAlwSFlzAAAOnAAADpwBB5RT3QAAASRJREFUKFN9UDGKwzAQ3MrdVq4sRJqUV1ynX+QFfoLBAoHlIqQIqvQAddfZGBz8gfzuZlcmcM0NaDWy1jujIUUvZVf6JEfROaKrKYN+SXId56bVkyBbJvIdEZPHSqi03LHSVBtSb69K3DrKZgpKRr/FXhI65WuOyjfe5LRWNWpec3XyB1fbx8pMeFiTZbzBREhkR1tIcARdQ2OiypkK5owBNKgOzbDJtMMoTBwR7znU3W0VA943cc5VOs4XvfkHbvTMHWduLcKq2P1qTpfJ5y99Fj24DZ0GLNg8i5U+IxHLQbjAte8n0RBQkACHc8oozYM/T/NyKOvviLHPH4dlaWG7Zfm5LKXKQuqVzaFqeNCbJQ3BfluOT8D76768p4m/p/JDRPQLvDtY/RG4+eoAAAAASUVORK5CYII="},2729:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.ban2-767e2544be39180670916f7c31fe0409.png"},9210:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.body-e78a4760ab7204b71ac6e7747baf6343.png"},2599:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.header-4f157ff8c6199e291a7236c986f32988.png"},9350:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.parameters-c68dbd336110cc49a7483f376aeb0a6a.png"},9437:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.pre.demo-699e080acec1361c5527134c3b1406d2.png"},371:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.raw-082ff0e3f245e2ea9e7de4bd4d264d64.png"},8536:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.request-5263602b75f121f3718d81460be1ad92.png"},5746:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.requestURL-72687efe8ed1e6e7ef4ed9ca1ec4361e.png"},1722:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.response.header-16c2bc29f4e6ef95479dad3f1a7597ee.png"},2785:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.response-334e3a6d5b25debd1881f1c496e47ec5.png"},3273:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAMAAAFR+E+JAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxUExURfr6+vv6+vz6+//8/f/9///7/P37+/37/P/8/v77/Pb5+Lvo2XrWuGHQq1zOqF3OqGrSr5bext3y6/v6+7/p20XInAe2fAi3fRu8hyS/jCK+ihK6ggO1enzXuOz28pTexRC5gA+5gLzo2uLz7e/39dHv5ZrfyDjElgG1eUHGmtjx6P/7/pXexQW2fDLCksPr3vz7+//7/f/8/4DYuwe2fTTDlDLDk9zx6pHdxAS1e1vOp/j6+vb5+UrJnxG5gcTr3/z7/GbRrQW2e67l08Dq3G3Sscfs37Hl1Nfw6Be7hE7KoXbVtgu3fsfs4Mns4RO6g3HUs/v7/P78/RW6g9nx6f77/VDLoirAjur18vH49j7GmTjEle739Jnfx77p2/f5+T7GmMfr32TQrMvt4XzXuRK5gbzp2ga2fK/l00PInELHmuz28zvFlzPDk/P4973p2g24f4favsTq3q3l00nJnjXDlMzt4ha7hGPQrDbDlEbInfT596zk0rTm1l/Pqhm7hgC0eR29iNPv5gm3fcvt4p7gywK1epzfyWXRrZ7gyi/BkeLz7iG+ivn6+aTizX3XuonbwHfWttXw6CW+iyS+i9/y7EzKoAS2e4XZvfr6+9Xw56jj0N7y7D7FmQK1eVjNpsns4JjfxyO+iwq3fo/cw+b18GHPqw+4gEfInZLdxIrbwAG1eqjjz7Xn1lnNpxy8hw64gAy4f4HYvN7y6+b08NTv5s7u48/u49zy6vD39QAAAM8FLXQAAAC7dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBh8v5oAAAACXBIWXMAAA6cAAAOnAEHlFPdAAABYUlEQVQoUy1RMWrEQAxcBvXpt1quOLLG7b3BRQxxZRZyTdaQPj9QmwX1Lgz5gB+Z0TqCO0sarUYjBREJBgviP/rVcmjYg1gt6qnHDA0m8x57Qa9P5RwkbLDtkJBhgIQC2GnB6hJ7K5Ov3/Xb7Ml6SYfRRI3B6pXWIMqgHgYd7Aqw7kRwKBvA7SDCzD/vZeHJTstaD6cIZmO6yfBoPdj4Ic24MmBH+jgleRC9XS72c5OAD5T4uRuGk0gCRk6MfSMSCwnBQV2lKV2gnZ2naB6rni6VbVEo3Ss525Pcz//pfKgr5gY5ikxZX2OMSd/fimdcDfPf2rZeLFLolwuQktN2VZGDWNXp0r/o4JvgpbDNC3lf0uFrtpw58GfdgGX2p5h0En+Rm59lmGvL8JY49UZVIne989hAvbtUQ2mNk7GV7LoQcQ7+YYjcRhfIkzx0JQUEZYw69nddIOummmZa23lXAoY/IdaP8HkSArYAAAAASUVORK5CYII="},7394:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/c2.tests-0ed1debd1954139e45db52e77d574bc1.png"},9875:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAAHXbD0nAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTUExURf////T09O3t7ezs7MLCwnl5eURERCkpKSQkJEZGRnd3d8jIyPLy8nh4eB4eHicnJ1BQUHZ2dk5OTiUlJSIiIn9/f1ZWVhgYGHV1ddzc3NTU1G9vbxQUFPr6+nFxcRsbG6Kiov7+/v39/ZqamhoaGry8vIeHh/f3952dnb29vSMjI8rKymFhYTU1NfDw8EJCQuXl5YODg/Hx8UpKSn5+fr6+vnNzc3BwcMnJycHBwbi4uKqqqkVFRbS0tLe3tx8fH8DAwIGBgfj4+Pb29hwcHGVlZYiIiNXV1ZmZmfz8/ISEhCAgIJ+fnywsLEtLS/v7+6CgoJycnBkZGa6ursXFxWpqaufn57GxsUxMTO/v7zAwMNLS0s3NzSgoKM7Ozi4uLrKysi0tLc/Pzz8/PxYWFlhYWJCQkLW1tY+Pj1JSUhUVFYaGhj09PTw8PJSUlO7u7gAAABM7WDAAAABxdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AKUzAZQAAAAlwSFlzAAAOnAAADpwBB5RT3QAAANZJREFUKFNlUTGOxDAIpKJwjSJFoqX0C1Lb8iP8B/7f3QBJdu9uJMfA4PHgUGFgSUYT8RmBn8TYFo0iEkoNXweD/UTzQtrpSpKoCe871DhKM1MzSi0cBMDQPu1u9K4SIv+xWcNW4ojrNI+TTaySKdONrI2Qi1L4S0QifpX5FQ5HmUA5sv44naK9lD/wvwXAm8rR2iHy3pEY+oxPS7+okareq/QRNIV7FBhz0MWBLIBIS84x9m7tMYjHu40v4d/GnN8xaMvdVcDzHdOuycr5P7/h22y/SkQ/M1kd5mXi/PEAAAAASUVORK5CYII="}}]);