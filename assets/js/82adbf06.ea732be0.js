"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_position:3,title:"Writing Scripts",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},i=void 0,l={unversionedId:"chapter2/Writing Scripts",id:"chapter2/Writing Scripts",title:"Writing Scripts",description:"AREX allows you to add dynamic behavior to requests and collections through scripting (JavaScript code snippets).",source:"@site/docs/chapter2/Writing Scripts.md",sourceDirName:"chapter2",slug:"/chapter2/Writing Scripts",permalink:"/website/docs/chapter2/Writing Scripts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter2/Writing Scripts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Writing Scripts",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},sidebar:"tutorialSidebar",previous:{title:"AREX Comparison Testing",permalink:"/website/docs/chapter2/Comparison Testing"},next:{title:"Managing Environment",permalink:"/website/docs/chapter2/Managing Environments"}},o={},p=[{value:"What is scripts used for?",id:"what-is-scripts-used-for",level:4},{value:"Re-using pre-request scripts",id:"re-using-pre-request-scripts",level:2},{value:"Scripting before your request runs",id:"scripting-before-your-request-runs",level:2},{value:"Validating responses",id:"validating-responses",level:2},{value:"Reference",id:"reference",level:2},{value:"1. Using variables in scripts",id:"1-using-variables-in-scripts",level:3},{value:"Environment variables",id:"environment-variables",level:4},{value:"Temporary variables",id:"temporary-variables",level:4},{value:"2. Sending requests from scripts",id:"2-sending-requests-from-scripts",level:3},{value:"3. Database Query",id:"3-database-query",level:3},{value:"4. Validating responses",id:"4-validating-responses",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"AREX allows you to add dynamic behavior to requests and collections through scripting (",(0,n.kt)("inlineCode",{parentName:"p"},"JavaScript")," code snippets)."),(0,n.kt)("h4",{id:"what-is-scripts-used-for"},"What is scripts used for?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Test (assert) the correctness of the request return result (test script)."),(0,n.kt)("li",{parentName:"ol"},"Dynamically modifying interface request parameters, such as adding interface signature parameters, etc. (pre-request script)"),(0,n.kt)("li",{parentName:"ol"},"Passing data between interface requests (using scripts to manipulate variables).")),(0,n.kt)("p",null,"You can add JavaScript code to execute during two events in the flow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Before a request is sent to the server, as a pre-request script under the Pre-request Script tab."),(0,n.kt)("li",{parentName:"ol"},"After a response is received, as a test script under the Tests tab.")),(0,n.kt)("p",null,"You can add pre-request and test scripts to a collection, a folder, or a single request within a collection:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set pre-request or test scripts for the entire collection or a folder under the collection. Once set, they will run for every request in the collection or direct child request in the folder."),(0,n.kt)("li",{parentName:"ul"},"Set pre-request or test scripts for individual requests. Once set, they will run only for a single request.")),(0,n.kt)("h1",{id:"execution-order-of-scripts"},"Execution order of scripts"),(0,n.kt)("p",null,"The script execution order for a single request looks like this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A pre-request script associated with a request will execute before the request is sent."),(0,n.kt)("li",{parentName:"ol"},"A test script associated with a request will execute after the request is sent.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(8836).Z,width:"1797",height:"448"})),(0,n.kt)("p",null,"For every request in a collection, scripts will execute in the following order:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A pre-request script associated with a collection will run prior to every request in the collection."),(0,n.kt)("li",{parentName:"ol"},"A pre-request script associated with a folder will run prior to every direct child request in the folder."),(0,n.kt)("li",{parentName:"ol"},"A test script associated with a collection will run after every request in the collection."),(0,n.kt)("li",{parentName:"ol"},"A test script associated with a folder will run after every direct child request in the folder.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4908).Z,width:"2855",height:"842"})),(0,n.kt)("h1",{id:"writing-pre-request-scripts"},"Writing pre-request scripts"),(0,n.kt)("h2",{id:"re-using-pre-request-scripts"},"Re-using pre-request scripts"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Collection")," in the sidebar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the collection or the folder you want to add Re-using pre-request scripts.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Pre-request")," Scripts tab >> ",(0,n.kt)("strong",{parentName:"p"},"Add Script Block")," >> ",(0,n.kt)("strong",{parentName:"p"},"CustomScript"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u6dfb\u52a0\u96c6\u5408\u811a\u672c",src:r(3188).Z,width:"3840",height:"1658"})),(0,n.kt)("p",null,"Enter code that will run before every request in the collection or direct child request in the folder."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u96c6\u5408\u811a\u672c",src:r(9092).Z,width:"2721",height:"1561"})),(0,n.kt)("h2",{id:"scripting-before-your-request-runs"},"Scripting before your request runs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the request, then select the ",(0,n.kt)("strong",{parentName:"p"},"Pre-request Script")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Add Script Block")," and enter the JavaScript you need to process before the request runs, then select Save.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select Send to send the request. The code will execute before Postman sends the request to the API."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8bf7\u6c42\u6dfb\u52a0\u524d\u7f6e\u811a\u672c",src:r(5239).Z,width:"2722",height:"1465"})),(0,n.kt)("h1",{id:"writing-test-scripts"},"Writing test scripts"),(0,n.kt)("p",null,"You can use test scripts to ",(0,n.kt)("inlineCode",{parentName:"p"},"assert")," whether your API is working as expected or not, and set the result data returned by the request as environment variables, etc."),(0,n.kt)("h2",{id:"validating-responses"},"Validating responses"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"open the request and select the ",(0,n.kt)("strong",{parentName:"p"},"Tests")," tab."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"\u6dfb\u52a0\u540e\u7f6e\u811a\u672c",src:r(7828).Z,width:"2723",height:"1545"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Add Script Block")," and enter your code for your request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Send")," and the tests will execute after the request runs. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The output is in the response's ",(0,n.kt)("strong",{parentName:"p"},"Result")," tab."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"\u65ad\u8a00\u7ed3\u679c",src:r(6137).Z,width:"2462",height:"1297"})))),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"1-using-variables-in-scripts"},"1. Using variables in scripts"),(0,n.kt)("h4",{id:"environment-variables"},"Environment variables"),(0,n.kt)("p",null,"Your scripts can use the arex.environment methods to access and manipulate variables in the active (currently selected) environment."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the variable with the specified name and value in the active environment:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.environment.set("variable_key", "variable_value");\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Get the variable with the specified name in the active environment:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.environment.get("variable_key");\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Delete the variable:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.environment.delete("variable_key");\n')),(0,n.kt)("h4",{id:"temporary-variables"},"Temporary variables"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the temporary variables with the specified name and value:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.variables.set("variable_key", "variable_value")\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Get the temporary variables:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.variables.get("variable_key")\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Delete the temporary variables:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.variables.delete("variable_key")\n')),(0,n.kt)("h3",{id:"2-sending-requests-from-scripts"},"2. Sending requests from scripts"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sending GET requests")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'let response = await arex.sendRequest({method:"GET",url:"http://10.5.153.1:8090/api/config/schedule/useResult/appId/arex-0.2.4.test2"});  \n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sending POST requests")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'let response = await arex.sendRequest({url:"http://10.5.153.1:8088/api/report/queryDifferences",method:"POST",data:"{"categoryName":"ServletEntrance","operationName":"/owners/{ownerId}","planItemId":"633184edc9af0157f44eaeba"}",headers:{"Content-Type":"application/json","access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbmZvIjoidGVzdCJ9.YeLmUW--fqrtmag1QTDmL8U7RVZlb34xPAAxorxSCPM"}});  \n')),(0,n.kt)("h3",{id:"3-database-query"},"3. Database Query"),(0,n.kt)("p",null,"You can use pre-request scripts to connect to a MySQL database and execute a SQL query statement."),(0,n.kt)("p",null,"Use a connectConfig object to store the configuration information required to connect to the database. This includes the host, port, username, password, and name of the database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'let connectConfig={host:"10.5.153.1",port:"13306",user:"root",password:"",database:"community"};\n')),(0,n.kt)("p",null,"Use another object executeBody to store information required for executing the SQL query. It includes a SQL query statement (sql) and a parameter array (params):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'let executeBody={sql:"select * from mealrecomrestaurant where id = ?",params:[1]};\n')),(0,n.kt)("p",null,"Call the function arex.executeMySql(connectConfig, executeBody) to connect to the database and execute the SQL query. The function requires two parameters: the configuration information needed to connect to the database and the information needed to execute the SQL query. The return value of the function is assigned to the variable response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},"let response = await arex.executeMySql(connectConfig,executeBody);\n")),(0,n.kt)("h3",{id:"4-validating-responses"},"4. Validating responses"),(0,n.kt)("p",null,"Test if the response status code is 200:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.test("Status code is 200", ()=> {\n    arex.expect(arex.response.status).toBe(200);\n});\n')),(0,n.kt)("p",null,"Test if the age in the result messages is 18:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},'arex.test("Check JSON response property", ()=> {\n    arex.expect(arex.response.body.age).toBe(18);\n});\n')))}d.isMDXComponent=!0},5239:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c2.add.pre-f053610797a447ece0a91fd9acd82890.png"},7828:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c2.addtest-d4c961d4526853f778304a684a471445.png"},3188:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c2.collection.addpre-27bb195d9dd7c2f2423b1b1c36187446.png"},9092:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c2.collection.pre-6e471747735b520bd227ff551850f885.png"},8836:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c2.order1-a0de6eae6469034adc15ca5f7789a592.png"},4908:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c2.order2-eaa5c6a1ed7d1919e439ec446ed1c174.png"},6137:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/c2.tests.result-19c5afe985fe1a58b887be40282a5241.png"}}]);