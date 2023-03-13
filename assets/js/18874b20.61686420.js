"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1075],{1229:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"deploy-arex","metadata":{"permalink":"/website/blog/deploy-arex","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-28-deploy-arex/deploy-arex.md","source":"@site/blog/2023-02-28-deploy-arex/deploy-arex.md","title":"How to Install and Deploy AREX Locally","description":"This article explains how to deploy and configure AREX locally.","date":"2023-02-28T00:00:00.000Z","formattedDate":"February 28, 2023","tags":[{"label":"Installation and Deployment","permalink":"/website/blog/tags/installation-and-deployment"}],"readingTime":10.555,"hasTruncateMarker":true,"authors":[{"name":"Haibing Wang","url":"https://github.com/haibing-wang","image_url":"https://avatars.githubusercontent.com/u/16603256?v=4","imageURL":"https://avatars.githubusercontent.com/u/16603256?v=4"}],"frontMatter":{"slug":"deploy-arex","title":"How to Install and Deploy AREX Locally","authors":{"name":"Haibing Wang","url":"https://github.com/haibing-wang","image_url":"https://avatars.githubusercontent.com/u/16603256?v=4","imageURL":"https://avatars.githubusercontent.com/u/16603256?v=4"},"tags":["Installation and Deployment"],"keywords":["Regression Testing","Interface Testing","Automation Testing","DevOPS"]}},"content":"This article explains how to deploy and configure AREX locally.\\r\\n\\r\\n![\u67b6\u6784\u56fe](./architecture.png)\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## Background Information\\r\\n\\r\\n[AREX](https://github.com/arextest) is an open-source automation testing tool based on Java Agent technology. It records real traffic in the production environment and replays it in the testing environment while performing intelligent comparison and analysis of the replay results, enabling quick and effective regression testing. In addition to this, it also provides a range of automation testing functions such as test case management, interface testing (script verification, dual-environment comparison), and more, making it a user-friendly automation testing platform that does not require programming skills.\\r\\n\\r\\nCurrently, users can easily install all the basic components of AREX, including the front-end UI, MongoDB database, Redis cache, data storage service (Storage Service), scheduling service (Schedule Service), and analysis service (Report Service), by using the Docker-Compose command with one click (as shown in the figure above). This approach eliminates the need for manual installation and configuration of each service, greatly simplifying the installation process and improving deployment efficiency.\uff08See the details in [Docs](https://arextest.github.io/website/docs/chapter1/Quick%20Installation/)\uff09\\r\\n\\r\\nAlternatively, you can also compile and install each service component locally by building Docker images on your machine. This approach is suitable for scenarios that require development and testing of individual services, as it avoids the installation of unnecessary dependencies. It is also suitable for deployment scenarios in offline environments.\\r\\n\\r\\nThis article will provide a detailed guide on how to compile and configure AREX locally. (If you have any other special deployment requirements or suggestions, you can also raise them in a [GitHub Issue](https://github.com/arextest/deployments/issues).)\\r\\n\\r\\n## Building Docker Images Locally\\r\\n\\r\\nFirst, create a directory named \\"github-arex\\" to store the AREX service components. It is recommended to put all AREX projects in the same directory. The shell scripts in the [Deployment repository](https://github.com/arextest/deployments/) are accessed by relative paths. If the directory path changes, the relevant configuration in the shell script needs to be updated accordingly.\\r\\n\\r\\n### Download and Compile the AREX Deployment repository.\\r\\n\\r\\nThe Deployment repository includes compilation commands, [Dockerfile](https://github.com/arextest/deployments/tree/dev/dockerfile) (used to build images, containing instructions and dependencies required to build images) and [Docker-Compose file](https://github.com/arextest/deployments/blob/dev/docker-compose.yml) (used for container orchestration and environment deployment), etc. Switch to the dev branch to compile.\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/deployments.git\\r\\ncd deployments\\r\\ngit checkout dev # Switch to the dev branch and update the code to the latest version of the dev branch\\r\\n```\\r\\n\\r\\n### Download and Compile the AREX UI\\r\\n\\r\\nAREX UI is an interactive component that is primarily responsible for providing users with an interactive interface to configure and execute tests.\\r\\n\\r\\n![\u524d\u7aef\u754c\u9762](./arex-ui.png)\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/arex.git\\r\\ncd arex-front-end\\r\\ngit pull --rebase\\r\\ncd ../deployments\\r\\n./front.build.sh # Execute the front.build.sh script to build the AREX UI component\\r\\ncat front.build.sh # View the script\\r\\ncat dockerfile/front.Dockerfile # View the Dockerfile configuration\\r\\n```\\r\\n\\r\\nThe `front.build.sh` script is as follows. When executed, it will copy the Dockerfile and execute the docker build command to build a Docker image based on the Dockerfile. The version number can be modified according to the actual situation.\\r\\n\\r\\n```shell\\r\\ncd ../arex-front-end \\r\\n\\r\\ncp ../deployments/dockerfile/front.Dockerfile ./Dockerfile # Copy the file front.Dockerfile and rename it to Dockerfile\\r\\ndocker build -t arexadmin01/arex:0.2.6  .  --build-arg http_proxy=http://ntproxy.qa.nt.ctripcorp.com:8080 --build-arg https_proxy=http://ntproxy.qa.nt.ctripcorp.com:8080 # Build the Docker image named arexadmin01/arex:0.2.6 using the Dockerfile, and specify the http_proxy and https_proxy parameters to speed up the image download through the proxy\\r\\nrm -rf ./Dockerfile # Delete the Dockerfile after the build\\r\\n\\r\\ncd ..\\r\\n```\\r\\n\\r\\nNote: If you modify the version number, you also need to synchronize the version number in the Docker-Compose file (docker-compose.yml).\\r\\n\\r\\nThe `front.Dockerfile` file is shown below, which includes the installation of npm in Nodejs and the exposure of the port (8080).\\r\\n\\r\\n```dockerfile\\r\\nFROM node:14.18.1 // Use node:14.18.1 as the base image\\r\\n# Create app directory \\r\\nWORKDIR /usr/src/app \\r\\n\\r\\n# Install app dependencies \\r\\n# A wildcard is used to ensure both package.json AND package-lock.json are copied \\r\\n# where available (npm@5+) \\r\\n# COPY package*.json ./ \\r\\nCOPY . . \\r\\n\\r\\nRUN npm install  --loglevel verbose // Install dependencies\\r\\nRUN npm run build\\r\\n\\r\\n# Bundle app event \\r\\n# COPY . . \\r\\n\\r\\nEXPOSE 8080\\r\\nCMD [ \\"node\\", \\"server.js\\",\\">\\",\\"./logs/app.log\\",\\"2>\\", \\"./logs/error.log\\"] // Run server.js using Node.js and output logs to ./logs/app.log and ./logs/error.log.\\r\\n```\\r\\n\\r\\nNote: If you don\'t need to install with Docker, it can also be compiled and run directly. This method is suitable for scenarios that do not require environment isolation and containerization using Docker. Other service components can also be compiled and run directly in this way.\\r\\n\\r\\n### Download and Compile AREX Storage Service\\r\\n\\r\\nThe AREX Storage Service is mainly responsible for storing the recording data of the Agent, obtaining replay data, and reading the recording and replay configuration.\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-storage.git\\r\\ngit pull --rebase\\r\\ncd ../deployments\\r\\n./storage.build.sh # Execute the storage.build.sh script to build the AREX storage component\\r\\n```\\r\\n\\r\\n### Download and Compile AREX Schedule Service\\r\\n\\r\\nThe AREX Schedule Service is a scheduling component responsible for coordinating the execution and result comparison of AREX replay tasks. When AREX executes a replay task, the Schedule Service extracts recorded data (requests) of the tested application from the database through the Storage Service and sends interface requests to the target verification service. Once the service receives the request, it processes the request logic, while the Agent loads external dependent data that needs to be MOCKed and returns the response message after processing. The Schedule Service compares the recorded response message with the replay response message and pushes the comparison result to the Analysis Service for subsequent replay report generation.\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-replay-schedule.git\\r\\ngit pull \u2013rebase \\r\\ncd ../deployments \\r\\n./schedule.build.sh # Execute the schedle.build.sh script to build the AREX schedule component\\r\\n```\\r\\n\\r\\n### Download and Compile AREX Report Service\\r\\n\\r\\nThe AREX Report Service is an analysis component responsible for analyzing recording data, replay results, generating replay reports, and managing test case logic.\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-report.git\\r\\ngit pull -rebase \\r\\ncd ../deployments \\r\\n./ report.build.sh # Execute the report.build.sh script to build the AREX report component\\r\\n```\\r\\n\\r\\n### Download and Compile AREX Community Test\\r\\n\\r\\n**AREX Community Test** is a simulated service provided by the AREX community for verifying functionality. You can use it to try out AREX\'s traffic recording and replay capabilities.\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-commuty-test.git\\r\\ngit pull \u2013rebase \\r\\ncd ../deployments \\r\\n./ community.build.sh # Execute the community.build.sh script to build the AREX Community Test component\\r\\n```\\r\\n\\r\\n### Download and Compile AREX Java Agent\\r\\n\\r\\nAREX Java Agent is a recording and replay component responsible for data recording and data mocking during the replay process of Java applications, running in the background of the tested application. During the recording process, the Agent records the data traffic and request information of the Java application and stores this information in the database. During the replay process, the Agent returns the recorded external dependency (external request/DB) responses to the tested application, thereby achieving the effect of mocking.\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/arex-agent-java.git\\r\\ngit pull \u2013rebase\\r\\ncd ../ arex-agent-java/\\r\\nmvn clean package # Clean up and package for deployment and running\\r\\n```\\r\\nCompilation completed:\\r\\n\\r\\n![\u7f16\u8bd1\u6210\u529f](./build-success.png)\\r\\n\\r\\nTo view the latest generated Java Agent file, execute the command `ls arex-agent-jar/` as shown in the figure below:\\r\\n\\r\\n ![Java Agent \u6587\u4ef6](./java-agent.png)\\r\\n\\r\\n### Download and Compile AREX Node Service\\r\\n\\r\\n**Node Service** is a script execution service for test cases, responsible for executing pre-test scripts and validation scripts in the **Collection** module.\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/arex-node-service.git \\r\\ncd arex-node-service/ \\r\\ngit pull --rebase \\r\\ncd ../deployments \\r\\n./node.build.sh\\r\\n```\\r\\n\\r\\nAs shown in the figure below, all components have been compiled.\\r\\n\\r\\n ![\u7ec4\u4ef6\u7f16\u8bd1\u5b8c\u6210](./build-service.png)\\r\\n\\r\\nIf you need to configure a component of the entire AREX system separately, you can modify the configuration items in the Docker-Compose file to achieve it.\\r\\n\\r\\nThe following will provide detailed instructions on how to modify the configuration of various service components, such as modifying database configuration, service port configuration, etc. After completing the modification, the AREX system can run according to your needs.\\r\\n\\r\\n## Configuring Individual Services Separately\\r\\n\\r\\n![docker-compose](./docker-compose.png)\\r\\n\\r\\nDocker Compose is a tool for defining and running multi-container Docker applications. Using Compose, multiple container images can be conveniently coordinated on a single host. In Docker Compose, a configuration file named docker-compose.yml is typically used to configure the services of an application. By modifying the various configuration options in the configuration file, each service in AREX can be run more flexibly. After the configuration is completed, simply run a command to create and start all services from the configuration.\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/deployments.git \\r\\ncd deployments \\r\\ncat docker-compose.yml\\r\\n```\\r\\n\\r\\n### Configuring the AREX UI Service\\r\\n\\r\\nFor detailed configuration of the AREX UI in the configuration file, please refer to the figure below:\\r\\n\\r\\n ![UI \u914d\u7f6e](./docker-compose-ui.png)\\r\\n\\r\\nWhere:\\r\\n\\r\\n1. The port for the AREX frontend service is 8080, and the port exposed to the outside through the Docker container is 8088. Users can modify it as needed.\\r\\n2. Logs are stored in the arex-logs/arex-front directory under the current directory.\\r\\n3. The AREX UI service depends on four services:\\r\\n   1. Analysis service (arex-report-service) for retrieving analysis data.\\r\\n   2. Scheduling service (arex-schedule-service) for frontend-triggered replay operations and other calls.\\r\\n   3. Storage service (arex-storage-service) for reading configurations and other operations.\\r\\n   4. Node service for batch execution of test cases.\\r\\n\\r\\n### Configuring the AREX Node Service\\r\\n\\r\\nThe Node service is a simple service with an internal port of 3000 and an external port of 10001. It generally does not involve external calls and can be ignored.\\r\\n\\r\\n### Configuring the AREX Report Service\\r\\n\\r\\n![AREX Report Service](./arex-report-service.png)\\r\\n\\r\\n1. AREX analysis service depends on the MongoDB database and needs to connect to MongoDB database for data storage and querying. The username and password are the configuration of MongoDB. If the user uses their own MongoDB service, they need to change the connection information to their own MongoDB configuration.\\r\\n2. It depends on the Storage service, and this part does not need to be modified. If it is deployed independently, the address and port need to be modified.\\r\\n3. The internal port of the AREX analysis service is 8080, and the port exposed by Docker container is 8090.\\r\\n\\r\\nNote: `Arex.ui.url` is a special configuration item that is used to assemble the login link in the AREX email service. Because AREX\'s login requires users to enter their email address, and the link sent by the email service needs to point to the accessible AREX frontend address, Arex.ui.url must be configured to the actual frontend address, not the container address in Docker-Compose. If the configuration is incorrect, the link in the email notification will redirect to the wrong page.\\r\\n\\r\\n### Configuring the AREX Storage Service\\r\\n\\r\\n![AREX Storage Service](./arex-storage-service.png)\\r\\n\\r\\n1. The internal port of the data storage service is 8080, and the external port is 8093.\\r\\n2. The data storage service depends on:\\r\\n   1. MongoDB database, configured as described in the previous section;\\r\\n   2. Redis cache, used to store cache in recording and replay to improve performance;\\r\\n   3. Report service.\\r\\n\\r\\n### Configuring the AREX Schedule Service\\r\\n\\r\\n![AREX Schedule Service](./arex-schedule-service.png)\\r\\n\\r\\n1. The internal port of AREX schedule service is 8080, and the port exposed to the outside is 8092.\\r\\n2. The dependencies of AREX schedule service are basically the same as those of the data storage service:\\r\\n   1. MongoDB database;\\r\\n   2. Redis cache;\\r\\n   3. Report service.\\r\\n\\r\\n### Configuring the Redis Service\\r\\n\\r\\n![Redis \u670d\u52a1](./redis.png)\\r\\n\\r\\nRedis instance, internal port 6379, exposed port 6379.\\r\\n\\r\\nIf you choose to use a Redis service from another environment, you need to remove the configuration of the Redis service node from the Docker-Compose file and change the relevant configuration in all dependent services to connect to the Redis service which you want.\\r\\n\\r\\n### Configuring MongoDB Service\\r\\n\\r\\n![MongoDB \u670d\u52a1](./MongoDB.png)\\r\\n\\r\\nThe MongoDB service has internal port 27017 and externally exposed port 27017.\\r\\n\\r\\nAs above, if you choose to use a database from another environment, you need to remove the configuration of the MongoDB service node from the configuration file and change the relevant configuration in all dependent services to connect to the database which you want to work with.\\r\\n\\r\\n`mongo-allone-init.js` is a configuration file that depends on the service startup process and is used to initialize some configurations of the MongoDB database. As follows:\\r\\n\\r\\n![mongo-allone](./mongo.js.png)\\r\\n\\r\\nThe data is stored in the arex-data/mongodb directory in the current directory.\\r\\n\\r\\n## Start AREX with Docker Compose\\r\\n\\r\\nOnce all configurations have been done, start the AREX service:\\r\\n\\r\\n```\\r\\ndocker-compose up \u2013d\\r\\n```\\r\\n\\r\\nStop the AREX service:\\r\\n\\r\\n```\\r\\ndocker-compose down \u2013v\\r\\n```\\r\\n\\r\\nView the logs:\\r\\n\\r\\n```\\r\\ndocker-compose logs\\r\\n```\\r\\n\\r\\nThe logs command is used to view the process status of the service. When there is a problem with the State, the logs command can be used for debugging and tracking.\\r\\n\\r\\n![\u65e5\u5fd7](./state.png)"}]}')}}]);