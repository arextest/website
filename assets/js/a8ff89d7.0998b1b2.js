"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,title:"Custom Installation",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},i=void 0,l={unversionedId:"chapter1/Custom Installation",id:"chapter1/Custom Installation",title:"Custom Installation",description:"Multi-instance installation",source:"@site/docs/chapter1/Custom Installation.md",sourceDirName:"chapter1",slug:"/chapter1/Custom Installation",permalink:"/website/docs/chapter1/Custom Installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter1/Custom Installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Custom Installation",keywords:["Regression Testing","Automation Testing","Traffic Replay"]},sidebar:"tutorialSidebar",previous:{title:"Quick Installation",permalink:"/website/docs/chapter1/Quick Installation"},next:{title:"Overview",permalink:"/website/docs/chapter1/Overview"}},s={},d=[{value:"Multi-instance installation",id:"multi-instance-installation",level:2},{value:"Individual service deployment and non-containerized installation",id:"individual-service-deployment-and-non-containerized-installation",level:2},{value:"Configure environment variables",id:"configure-environment-variables",level:3},{value:"Windows",id:"windows",level:4},{value:"Linux",id:"linux",level:4},{value:"Configure AREX UI",id:"configure-arex-ui",level:3},{value:"Windows",id:"windows-1",level:4},{value:"Linux",id:"linux-1",level:4},{value:"Configure AREX Schedule Service",id:"configure-arex-schedule-service",level:3},{value:"Configuration with source code",id:"configuration-with-source-code",level:4},{value:"Individual deployment configuration",id:"individual-deployment-configuration",level:4},{value:"Configure AREX Storage Service",id:"configure-arex-storage-service",level:3},{value:"Configuration with source code",id:"configuration-with-source-code-1",level:4},{value:"Individual deployment configuration",id:"individual-deployment-configuration-1",level:4},{value:"Configure AREX Report Service",id:"configure-arex-report-service",level:3},{value:"Configuration with source code",id:"configuration-with-source-code-2",level:4},{value:"Individual deployment configuration",id:"individual-deployment-configuration-2",level:4},{value:"Configure MongoDB",id:"configure-mongodb",level:3},{value:"Deploy AREX Agent",id:"deploy-arex-agent",level:4}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"multi-instance-installation"},"Multi-instance installation"),(0,a.kt)("p",null,"In the previous ",(0,a.kt)("a",{parentName:"p",href:"Quick%20Installation"},"Quick Installation"),", we introduced how to install all AREX components including AREX UI, services, database, etc. by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file provided by AREX."),(0,a.kt)("p",null,"If you want to install multiple instances according to your needs, you can use the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose-distribute.yml")," file for a simple Out-of-the-box setup. Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/arextest/deployments.git \ncd deployments \ndocker-compose -f docker-compose-distribute.yml up -d\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Stopping command\ndocker-compose -f docker-compose-distribute.yml down -v\n\n# List running containers and their status\ndocker-compose -f docker-compose-distribute.yml ps\n")),(0,a.kt)("p",null,"The default setup of the scheduling and storage service involves 2 instances, with the following specific components:"),(0,a.kt)("p",null,"The default configuration of the scheduling service and storage service is 2 instances, with specific component instances as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Number of Instance"),(0,a.kt)("th",{parentName:"tr",align:null},"Model Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/arextest/arex-replay-schedule"},"Schedule Service")),(0,a.kt)("td",{parentName:"tr",align:null},"A set of schedule APIs that provide replay send and retrieve all responses for comparison.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/arextest/arex-report"},"Replay Report Service")),(0,a.kt)("td",{parentName:"tr",align:null},"A set of report APIs that provide difference summaries and show the difference result details after the responses are compared.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/arextest/arex-storage"},"Storage Service")),(0,a.kt)("td",{parentName:"tr",align:null},"A set of remote storage APIs that provide ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/arextest/arex-agent-java"},"Agent Hook Service")," to save records and get responses as mocks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/arextest/arex-front-end"},"Front-End")),(0,a.kt)("td",{parentName:"tr",align:null},"A visual web site that provide entry to all operations in your ",(0,a.kt)("strong",{parentName:"td"},"AREX"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5b58\u50a8\u53ca\u914d\u7f6e\u7ba1\u7406\u6570\u636e\u5e93")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Redis"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ad8\u901f\u56de\u653e\u7f13\u5b58")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Nginx"),(0,a.kt)("td",{parentName:"tr",align:null},"Schedule \u8d1f\u8f7d\u5747\u8861\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Nginx"),(0,a.kt)("td",{parentName:"tr",align:null},"Storage \u8d1f\u8f7d\u5747\u8861\u670d\u52a1")))),(0,a.kt)("p",null,"You an also ",(0,a.kt)("strong",{parentName:"p"},"modify")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose-distribute.yml")," configuration file to configure multiple instances according to your needs."),(0,a.kt)("h2",{id:"individual-service-deployment-and-non-containerized-installation"},"Individual service deployment and non-containerized installation"),(0,a.kt)("p",null,"If you don't need to use the MongoDB data storage services provided by AREX, or if you need to scale the Schedule, Storage, etc. high CPU services in your own distributed environment, then you can also perform individual service deployment and non-containerized installation and install the services individually. (Non-containerized installation is not recommended, we'll consider the request if there is a demand for it). "),(0,a.kt)("p",null,"However, you will need to configure the service-to-service calls yourself. Details are as follows:"),(0,a.kt)("h3",{id:"configure-environment-variables"},"Configure environment variables"),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Set environment variables in the JAVA_OPTS environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# set the URL for a storage service to http://10.3.1.4:8080\nset JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080\n\n# set the host for a MongoDB database to mongodb://username:password@my-mongodb:27017/arex_storage_db\n-Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db\n\n# set the host for an email service to smtp.msn.com\n-Darex.report.email.host=smtp.msn.com \n")),(0,a.kt)("h4",{id:"linux"},"Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080 -Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db -Darex.report.email.host=smtp.msn.com\n")),(0,a.kt)("h3",{id:"configure-arex-ui"},"Configure AREX UI"),(0,a.kt)("p",null,"You need to configure two environment variables, corresponding to the report service url, and the schedule service url, respectively."),(0,a.kt)("h4",{id:"windows-1"},"Windows"),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# set the URL for a report service to http://10.192.1.1:8080\nset SERVICE_REPORT_URL=http://10.192.1.1:8080\n\n# set the URL for a schedule service to http://10.192.1.1:8080\nset SERVICE_SCHEDULE_URL=http://10.192.1.1:8080\n")),(0,a.kt)("h4",{id:"linux-1"},"Linux"),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# set the URL for a report service to http://10.192.1.1:8080\nexport SERVICE_REPORT_URL=http://10.192.1.1:8080\n\n# set the URL for a schedule service to http://10.192.1.1:8080\nexport SERVICE_REPORT_URL=http://10.192.1.1:8080\n")),(0,a.kt)("h3",{id:"configure-arex-schedule-service"},"Configure AREX Schedule Service"),(0,a.kt)("h4",{id:"configuration-with-source-code"},"Configuration with source code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"arex.storage.service.api=http://arex-storage-service:8080 \narex.report.service.api=http://arex-report-service:8080\n")),(0,a.kt)("h4",{id:"individual-deployment-configuration"},"Individual deployment configuration"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'environment:\n  - "JAVA_OPTS=-Darex.storage.service.api=http://10.3.1.1:8080 -Darex.report.service.api=http://10.3.1.2:8080 "\n')),(0,a.kt)("h3",{id:"configure-arex-storage-service"},"Configure AREX Storage Service"),(0,a.kt)("h4",{id:"configuration-with-source-code-1"},"Configuration with source code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"arex.storage.cache.expired.seconds=7200 \narex.storage.cache.provider.host= \nmongo.host=mongodb://arex:iLoveArex@mongodb:27017/arex_storage_db\n")),(0,a.kt)("h4",{id:"individual-deployment-configuration-1"},"Individual deployment configuration"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'environment:\n  - "JAVA_OPTS=-Darex.storage.service.api=http://arex-storage-service:8080 -Darex.report.service.api=http://arex-report-service:8080\n')),(0,a.kt)("h3",{id:"configure-arex-report-service"},"Configure AREX Report Service"),(0,a.kt)("h4",{id:"configuration-with-source-code-2"},"Configuration with source code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"arex.report.mongo.uri=mongodb://arex:iLoveArex@ip:27017/arex_storage_db \narex.storage.service.url=http://arex-storage-service:8080 \narex.ui.url=http://your_arex_ip_address:port\n")),(0,a.kt)("h4",{id:"individual-deployment-configuration-2"},"Individual deployment configuration"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'environment:\n  - "JAVA_OPTS=-Darex.storage.service.url=http://10.3.1.4:8080 -Darex.storage.mongo.host=mongodb://username:password@my-mongodb:27017/arex_storage_db -Darex.report.email.host=smtp.msn.com -Darex.ui.url=http://your_arex_ip_address:port" \n')),(0,a.kt)("h3",{id:"configure-mongodb"},"Configure MongoDB"),(0,a.kt)("p",null,"First, you should remove the related configuration for MongoDB in the official ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. MongoDB does not have an initialized configuration, so the parameters of the services that rely on MongoDB need to be configured based on your actual service."),(0,a.kt)("h4",{id:"deploy-arex-agent"},"Deploy AREX Agent"),(0,a.kt)("p",null,"The same as ",(0,a.kt)("a",{parentName:"p",href:"Quick%20Installation#deploy-arex-agent"},"Quick Installation"),"."))}p.isMDXComponent=!0}}]);