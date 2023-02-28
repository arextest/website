"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1075],{1229:r=>{r.exports=JSON.parse('{"blogPosts":[{"id":"deploy-arex","metadata":{"permalink":"/website/blog/deploy-arex","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-28-deploy-arex/deploy-arex.md","source":"@site/blog/2023-02-28-deploy-arex/deploy-arex.md","title":"\u5982\u4f55\u5728\u672c\u5730\u5feb\u901f\u5b89\u88c5\u90e8\u7f72 AREX","description":"\u672c\u6587\u5c06\u8be6\u7ec6\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884c AREX \u7684\u7f16\u8bd1\u548c\u914d\u7f6e\u3002","date":"2023-02-28T00:00:00.000Z","formattedDate":"February 28, 2023","tags":[{"label":"\u5b89\u88c5\u90e8\u7f72","permalink":"/website/blog/tags/\u5b89\u88c5\u90e8\u7f72"},{"label":"\u65b0\u624b\u5b9e\u8df5","permalink":"/website/blog/tags/\u65b0\u624b\u5b9e\u8df5"}],"readingTime":14.64,"hasTruncateMarker":true,"authors":[{"name":"Haibing Wang","url":"https://github.com/haibing-wang","image_url":"https://avatars.githubusercontent.com/u/16603256?v=4","imageURL":"https://avatars.githubusercontent.com/u/16603256?v=4"}],"frontMatter":{"slug":"deploy-arex","title":"\u5982\u4f55\u5728\u672c\u5730\u5feb\u901f\u5b89\u88c5\u90e8\u7f72 AREX","authors":{"name":"Haibing Wang","url":"https://github.com/haibing-wang","image_url":"https://avatars.githubusercontent.com/u/16603256?v=4","imageURL":"https://avatars.githubusercontent.com/u/16603256?v=4"},"tags":["\u5b89\u88c5\u90e8\u7f72","\u65b0\u624b\u5b9e\u8df5"],"keywords":["Regression Testing","\u56de\u5f52\u6d4b\u8bd5","\u6d41\u91cf\u5f55\u5236\u56de\u653e"]}},"content":"\u672c\u6587\u5c06\u8be6\u7ec6\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884c AREX \u7684\u7f16\u8bd1\u548c\u914d\u7f6e\u3002\\r\\n\\r\\n![\u67b6\u6784\u56fe](./architecture.png)\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## \u80cc\u666f\\r\\n\\r\\n[AREX](https://github.com/arextest) \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u5de5\u5177\uff0c \u57fa\u4e8eJava Agent\u6280\u672f\uff0c\u5f55\u5236\u751f\u4ea7\u73af\u5883\u771f\u5b9e\u7528\u6237\u7684\u6d41\u91cf\uff0c\u5e76\u5728\u6d4b\u8bd5\u73af\u5883\u56de\u653e\u6d41\u91cf\uff0c\u540c\u65f6\u667a\u80fd\u6bd4\u5bf9\u5206\u6790\u56de\u653e\u7ed3\u679c\uff0c\u4ece\u800c\u5b9e\u73b0\u5feb\u901f\u6709\u6548\u7684\u56de\u5f52\u6d4b\u8bd5\u3002\u9664\u6b64\u4ee5\u5916\uff0c\u4e5f\u63d0\u4f9b\u4e86\u7528\u4f8b\u7ba1\u7406\u3001\u63a5\u53e3\u6d4b\u8bd5\uff08\u811a\u672c\u9a8c\u8bc1\u3001\u53cc\u73af\u5883\u6bd4\u5bf9\uff09\u7b49\u4e30\u5bcc\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u529f\u80fd\uff0c\u662f\u4e00\u4e2a\u4e0d\u9700\u8981\u7f16\u7a0b\u6280\u672f\uff0c\u4e5f\u53ef\u5feb\u901f\u4e0a\u624b\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u5de5\u5177\u5e73\u53f0\u3002\\r\\n\\r\\n\u76ee\u524d\u4f60\u53ef\u4ee5\u901a\u8fc7 Docker-Compose \u547d\u4ee4\uff0c\u4e00\u952e\u7f3a\u7701\u5b89\u88c5 AREX \u6240\u6709\u57fa\u7840\u670d\u52a1\u7ec4\u4ef6\uff0c\u5305\u62ec\u524d\u7aef UI\uff0cMongoDB \u6570\u636e\u5e93\uff0cRedis \u7f13\u5b58\uff0c\u6570\u636e\u5b58\u53d6\u670d\u52a1\uff08Storage Service\uff09\uff0c \u8c03\u5ea6\u670d\u52a1\uff08Schedule Service\uff09\uff0c\u5206\u6790\u670d\u52a1\uff08Report Service\uff09\u7b49\uff08\u5982\u4e0a\u56fe\u6240\u793a\uff09\u3002\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u9700\u8981\u624b\u52a8\u5b89\u88c5\u548c\u914d\u7f6e\u6bcf\u4e2a\u670d\u52a1\uff0c\u5927\u5927\u7b80\u5316\u4e86\u5b89\u88c5\u8fc7\u7a0b\uff0c\u63d0\u9ad8\u90e8\u7f72\u6548\u7387\u3002\uff08\u8be6\u89c1[\u6587\u6863](https://arextest.github.io/website/zh-Hans/docs/intro/)\uff09\\r\\n\\r\\n\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u672c\u673a\u4e0a\u6784\u5efa Docker \u955c\u50cf\u7684\u65b9\u5f0f\u5728\u672c\u5730\u5bf9\u5404\u4e2a\u670d\u52a1\u7ec4\u4ef6\u8fdb\u884c\u7f16\u8bd1\u548c\u5b89\u88c5\u3002\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u9700\u8981\u5bf9\u5355\u4e2a\u670d\u52a1\u8fdb\u884c\u5f00\u53d1\u548c\u6d4b\u8bd5\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u907f\u514d\u5b89\u88c5\u4e0d\u5fc5\u8981\u7684\u4f9d\u8d56\u9879\uff0c\u540c\u65f6\u4e5f\u9002\u7528\u4e8e\u9700\u8981\u5728\u79bb\u7ebf\u73af\u5883\u4e0b\u90e8\u7f72\u7684\u573a\u666f\u3002\\r\\n\\r\\n\u672c\u6587\u5c06\u8be6\u7ec6\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884c AREX \u7684\u7f16\u8bd1\u548c\u914d\u7f6e\u3002\uff08\u5982\u679c\u4f60\u6709\u5176\u4ed6\u7279\u6b8a\u7684\u90e8\u7f72\u9700\u6c42\u6216\u5efa\u8bae\uff0c\u4e5f\u53ef\u4ee5\u5728[ GitHub Issue](https://github.com/arextest/deployments/issues) \u4e2d\u63d0\u51fa\uff09\\r\\n\\r\\n## \u672c\u5730\u6784\u5efa Docker \u955c\u50cf\\r\\n\\r\\n\u9996\u5148\uff0c\u521b\u5efa github-arex \u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u653e AREX \u5404\u4e2a\u670d\u52a1\u7ec4\u4ef6\u3002\u5efa\u8bae\u5c06 AREX \u5404\u4e2a\u9879\u76ee\u653e\u5728\u540c\u4e00\u4e2a\u76ee\u5f55\u4e0b\uff0c[Deployment \u4ed3\u5e93](https://github.com/arextest/deployments/)\u4e2d Shell \u811a\u672c\u90fd\u662f\u4ee5\u76f8\u5bf9\u8def\u5f84\u6765\u8fdb\u884c\u8bbf\u95ee\u7684\uff0c\u5982\u679c\u76ee\u5f55\u8def\u5f84\u53d1\u751f\u53d8\u66f4\uff0c\u4e5f\u9700\u8981\u540c\u6b65\u4fee\u6539 Shell \u811a\u672c\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u3002\\r\\n\\r\\n### \u4e0b\u8f7d AREX Deployment \u4ed3\u5e93\\r\\n\\r\\nDeployment \u4ed3\u5e93\u4e2d\u5305\u542b\u7f16\u8bd1\u547d\u4ee4\u3001[Dockerfile](https://github.com/arextest/deployments/tree/dev/dockerfile)\uff08\u7528\u4e8e\u6784\u5efa\u955c\u50cf\uff0c\u5305\u542b\u4e86\u6784\u5efa\u955c\u50cf\u6240\u9700\u7684\u6307\u4ee4\u548c\u4f9d\u8d56\u9879\uff09 \u548c [Docker-Compose file](https://github.com/arextest/deployments/blob/dev/docker-compose.yml)\uff08\u7528\u505a\u5bb9\u5668\u7f16\u6392\u8fdb\u884c\u73af\u5883\u90e8\u7f72\uff09\u7b49\u6587\u4ef6\uff0c\u7f16\u8bd1\u65f6\u9700\u8981\u5207\u6362\u81f3 dev \u5206\u652f\u3002\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/deployments.git\\r\\ncd deployments\\r\\ngit checkout dev # \u5207\u6362\u5230\u4ee3\u7801\u4ed3\u5e93\u7684 dev \u5206\u652f\uff0c\u5e76\u5c06\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u4ee3\u7801\u66f4\u65b0\u4e3a dev \u5206\u652f\u7684\u6700\u65b0\u7248\u672c\\r\\n```\\r\\n\\r\\n### \u4e0b\u8f7d\u7f16\u8bd1 AREX \u524d\u7aef UI\\r\\n\\r\\nAREX \u524d\u7aef UI\uff0c\u662f\u4ea4\u4e92\u7ec4\u4ef6\uff0c\u4e3b\u8981\u8d1f\u8d23\u7528\u6237\u914d\u7f6e\u6267\u884c\u7684\u4ea4\u4e92\u754c\u9762\u3002\\r\\n\\r\\n![\u524d\u7aef\u754c\u9762](./arex-ui.png)\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/arex.git\\r\\ncd arex-front-end\\r\\ngit pull --rebase\\r\\ncd ../deployments\\r\\n./front.build.sh # \u6267\u884c front.build.sh \u811a\u672c\uff0c\u6784\u5efa AREX \u524d\u7aef UI \u7ec4\u4ef6 \\r\\ncat front.build.sh # \u67e5\u770b\u811a\u672c\\r\\ncat dockerfile/front.Dockerfile # \u67e5\u770b Dockerfile \u914d\u7f6e\\r\\n```\\r\\n\\r\\n`front.build.sh` \u811a\u672c\u5982\u4e0b\u6240\u793a\uff0c\u6267\u884c\u65f6\u4f1a\u590d\u5236 Dockerfile \u5e76\u6267\u884c `docker build` \u547d\u4ee4\u6765\u6839\u636e Dockerfile \u6784\u5efa Docker \u955c\u50cf\uff0c\u5176\u4e2d\u7248\u672c\u7f16\u53f7\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u4fee\u6539\u3002\\r\\n\\r\\n```shell\\r\\ncd ../arex-front-end \\r\\n\\r\\ncp ../deployments/dockerfile/front.Dockerfile ./Dockerfile # \u5c06 front.Dockerfile\u6587\u4ef6\u590d\u5236\u5230\u5f53\u524d\u76ee\u5f55\uff0c\u5e76\u547d\u540d\u4e3a Dockerfile \\r\\ndocker build -t arexadmin01/arex:0.2.6  .  --build-arg http_proxy=http://ntproxy.qa.nt.ctripcorp.com:8080 --build-arg https_proxy=http://ntproxy.qa.nt.ctripcorp.com:8080 # \u4f7f\u7528 Dockerfile \u6784\u5efa\u540d\u4e3a arexadmin01/arex:0.2.6 \u7684 Docker \u955c\u50cf\uff0c\u5e76\u6307\u5b9a\u4e86 http_proxy \u548c https_proxy \u53c2\u6570\uff0c\u4ee5\u4fbf\u80fd\u591f\u901a\u8fc7\u4ee3\u7406\u52a0\u901f\u955c\u50cf\u4e0b\u8f7d\\r\\nrm -rf ./Dockerfile # \u6784\u5efa\u5b8c\u6210\u540e\u5220\u9664 Dockerfile \\r\\n\\r\\ncd ..\\r\\n```\\r\\n\\r\\n\u6ce8: \u5982\u4fee\u6539\u7248\u672c\u7f16\u53f7\uff0c\u8fd8\u9700\u8981\u5bf9 Docker-Compose file\uff08docker-compose.yml\uff09\u4e2d\u7684\u7248\u672c\u7f16\u53f7\u8fdb\u884c\u540c\u6b65\u4fee\u6539\u3002\\r\\n\\r\\n`front.Dockerfile` \u6587\u4ef6\u5982\u4e0b\u6240\u793a\uff0c\u5176\u4e2d\u5305\u542b Nodejs \u4e2d npm \u7684\u5b89\u88c5\u548c\u7aef\u53e3\u66b4\u9732\uff088080\uff09\u7b49\u3002\\r\\n\\r\\n```dockerfile\\r\\nFROM node:14.18.1 # \u4f7f\u7528 node:14.18.1 \u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\\r\\n# Create app directory \\r\\nWORKDIR /usr/src/app \\r\\n\\r\\n# Install app dependencies \\r\\n# A wildcard is used to ensure both package.json AND package-lock.json are copied \\r\\n# where available (npm@5+) \\r\\n# COPY package*.json ./ \\r\\nCOPY . . \\r\\n\\r\\nRUN npm install  --loglevel verbose // \u5b89\u88c5\u4f9d\u8d56 \\r\\nRUN npm run build // \u6784\u5efa\u9879\u76ee \\r\\n\\r\\n# Bundle app event \\r\\n# COPY . . \\r\\n\\r\\nEXPOSE 8080 // \u66b4\u9732\u5bb9\u5668\u7aef\u53e3 8080 \\r\\nCMD [ \\"node\\", \\"server.js\\",\\">\\",\\"./logs/app.log\\",\\"2>\\", \\"./logs/error.log\\"] // \u4f7f\u7528 Node.js \u8fd0\u884c server.js\uff0c\u5e76\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230 ./logs/app.log \u548c ./logs/error.log \u4e2d\\r\\n```\\r\\n\\r\\n\u6ce8\u610f\uff1a\u5982\u679c\u4e0d\u4f7f\u7528 Docker \u8fdb\u884c\u5b89\u88c5\uff0c\u4e5f\u53ef\u76f4\u63a5\u7f16\u8bd1\u8fd0\u884c\u3002\u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u4e0d\u9700\u8981\u4f7f\u7528 Docker \u8fdb\u884c\u73af\u5883\u9694\u79bb\u548c\u5bb9\u5668\u5316\u7684\u573a\u666f\u3002\u5176\u4ed6\u670d\u52a1\u7ec4\u4ef6\u4e5f\u53ef\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u76f4\u63a5\u7f16\u8bd1\u8fd0\u884c\uff0c\u540e\u7eed\u8fd9\u90e8\u5206\u4e0d\u518d\u8d58\u8ff0\u3002\\r\\n\\r\\n### \u4e0b\u8f7d\u7f16\u8bd1 AREX \u6570\u636e\u5b58\u53d6\u670d\u52a1\\r\\n\\r\\nAREX \u6570\u636e\u5b58\u53d6\u670d\u52a1\uff08Storage Service\uff09\u4e3b\u8981\u8d1f\u8d23\u5b58\u50a8 Agent \u7684\u5f55\u5236\u6570\u636e\uff0c\u83b7\u53d6\u56de\u653e\u6570\u636e\uff0c\u4ee5\u53ca\u5f55\u5236\u56de\u653e\u914d\u7f6e\u7684\u8bfb\u53d6 \u3002\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-storage.git\\r\\ngit pull --rebase\\r\\ncd ../deployments\\r\\n./storage.build.sh # \u6267\u884c storage.build.sh \u811a\u672c\uff0c\u6784\u5efa AREX \u6570\u636e\u5b58\u53d6\u670d\u52a1\u7ec4\u4ef6 \\r\\n```\\r\\n\\r\\n### \u4e0b\u8f7d\u7f16\u8bd1 AREX \u8c03\u5ea6\u670d\u52a1\\r\\n\\r\\nAREX \u8c03\u5ea6\u670d\u52a1\uff08Schedule Service\uff09\u662f\u8c03\u5ea6\u7ec4\u4ef6\uff0c\u7528\u4e8e\u534f\u8c03 AREX \u6267\u884c\u56de\u653e\u4efb\u52a1\u7684\u8fc7\u7a0b\u4ee5\u53ca\u56de\u653e\u7ed3\u679c\u6bd4\u5bf9\u3002\u5f53 AREX \u6267\u884c\u56de\u653e\u4efb\u52a1\u65f6\uff0c\u8c03\u5ea6\u670d\u52a1\u901a\u8fc7 Storage Service \u670d\u52a1\u4ece\u6570\u636e\u5e93\u4e2d\u63d0\u53d6\u88ab\u6d4b\u5e94\u7528\u7684\u5f55\u5236\u6570\u636e\uff08\u8bf7\u6c42\uff09\uff0c\u7136\u540e\u5411\u76ee\u6807\u9a8c\u8bc1\u670d\u52a1\u53d1\u9001\u63a5\u53e3\u8bf7\u6c42\u3002\u4e00\u65e6\u670d\u52a1\u63a5\u6536\u5230\u8bf7\u6c42\uff0c\u4fbf\u4f1a\u5904\u7406\u8bf7\u6c42\u903b\u8f91\u3002\u540c\u65f6\uff0c\u7531 Agent \u88c5\u8f7d\u9700\u8981 MOCK \u7684\u5916\u90e8\u4f9d\u8d56\u6570\u636e\uff0c\u5904\u7406\u5b8c\u6210\u540e\u8fd4\u56de\u54cd\u5e94\u62a5\u6587\u3002\u8c03\u5ea6\u670d\u52a1\u4f1a\u5c06\u5f55\u5236\u7684\u54cd\u5e94\u62a5\u6587\u4e0e\u56de\u653e\u7684\u54cd\u5e94\u62a5\u6587\u8fdb\u884c\u6bd4\u5bf9\uff0c\u5e76\u5c06\u6bd4\u5bf9\u7ed3\u679c\u63a8\u9001\u7ed9\u5206\u6790\u670d\u52a1\uff0c\u7528\u4e8e\u540e\u7eed\u7684\u56de\u653e\u62a5\u544a\u751f\u6210\u3002\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-replay-schedule.git\\r\\ngit pull \u2013rebase \\r\\ncd ../deployments \\r\\n./schedule.build.sh # \u6267\u884c schedle.build.sh \u811a\u672c\uff0c\u6784\u5efa AREX \u8c03\u5ea6\u670d\u52a1\u7ec4\u4ef6 \\r\\n```\\r\\n\\r\\n### \u4e0b\u8f7d\u7f16\u8bd1 AREX \u5206\u6790\u670d\u52a1\\r\\n\\r\\nAREX \u5206\u6790\u670d\u52a1\uff08Report Service\uff09\u662f\u5206\u6790\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u5206\u6790\u5f55\u5236\u6570\u636e\u3001\u56de\u653e\u7ed3\u679c\uff0c\u751f\u6210\u56de\u653e\u62a5\u544a\uff0c\u4ee5\u53ca\u5904\u7406\u7528\u4f8b\u7ba1\u7406\u903b\u8f91\u3002\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-report.git\\r\\ngit pull -rebase \\r\\ncd ../deployments \\r\\n./ report.build.sh # \u6267\u884c report.build.sh \u811a\u672c\uff0c\u6784\u5efa AREX \u5206\u6790\u670d\u52a1\u7ec4\u4ef6\\r\\n```\\r\\n\\r\\n### \u4e0b\u8f7d\u7f16\u8bd1 AREX Community Test\\r\\n\\r\\n**AREX Community Test** \u662f\u7531 AREX \u793e\u533a\u63d0\u4f9b\u7684\u7528\u6765\u9a8c\u8bc1\u529f\u80fd\u7684\u4e00\u4e2a\u6a21\u62df\u670d\u52a1\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u8bd5\u7528 AREX \u7684\u6d41\u91cf\u5f55\u5236\u56de\u653e\u529f\u80fd\u3002\\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/arex-commuty-test.git\\r\\ngit pull \u2013rebase \\r\\ncd ../deployments \\r\\n./ community.build.sh # \u6267\u884c community.build.sh \u811a\u672c\uff0c\u6784\u5efa AREX Community Test \u670d\u52a1\\r\\n```\\r\\n\\r\\n### \u4e0b\u8f7d\u7f16\u8bd1 AREX Java Agent\\r\\n\\r\\nAREX Java Agent \u662f\u5f55\u5236\u56de\u653e\u7ec4\u4ef6\uff0c\u8d1f\u8d23 Java \u5e94\u7528\u7684\u6570\u636e\u5f55\u5236\u53ca\u56de\u653e\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e Mock\uff0c\u5728\u88ab\u6d4b\u5e94\u7528\u7684\u540e\u53f0\u6267\u884c\u3002\u5f55\u5236\u8fc7\u7a0b\u4e2d\uff0cAgent \u4f1a\u8bb0\u5f55 Java \u5e94\u7528\u7684\u6570\u636e\u6d41\u91cf\u548c\u8bf7\u6c42\u4fe1\u606f\uff0c\u5e76\u5c06\u8fd9\u4e9b\u4fe1\u606f\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\u3002\u56de\u653e\u8fc7\u7a0b\u4e2d\uff0cAgent \u4f1a\u5c06\u5f55\u5236\u7684\u5916\u90e8\u4f9d\u8d56\uff08\u5916\u90e8\u8bf7\u6c42/DB\uff09\u7684\u54cd\u5e94\u8fd4\u56de\u7ed9\u88ab\u6d4b\u5e94\u7528\uff0c\u4ece\u800c\u5b9e\u73b0 Mock \u7684\u6548\u679c\u3002\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/arex-agent-java.git\\r\\ngit pull \u2013rebase\\r\\ncd ../ arex-agent-java/\\r\\nmvn clean package # \u8fdb\u884c\u6e05\u7406\u5e76\u6253\u5305\uff0c\u4ee5\u4fbf\u4e8e\u90e8\u7f72\u548c\u8fd0\u884c\\r\\n```\\r\\n\\r\\n\u7f16\u8bd1\u5b8c\u6210\uff1a\\r\\n\\r\\n![\u7f16\u8bd1\u6210\u529f](./build-success.png)\\r\\n\\r\\n\u6267\u884c `ls arex-agent-jar/` \u547d\u4ee4\uff0c\u5373\u53ef\u67e5\u770b\u751f\u6210\u7684\u6700\u65b0\u7684 Java Agent \u6587\u4ef6\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a\\r\\n\\r\\n ![Java Agent \u6587\u4ef6](./java-agent.png)\\r\\n\\r\\n### \u4e0b\u8f7d\u7f16\u8bd1 AREX \u6279\u91cf\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u670d\u52a1\uff08Node Service\uff09\\r\\n\\r\\n**Node Service** \u662f\u6d4b\u8bd5\u7528\u4f8b\u7684\u811a\u672c\u6267\u884c\u670d\u52a1\uff0c\u8d1f\u8d23\u5728 Collection \u6a21\u5757\u4e2d\u7528\u4f8b\u7684\u524d\u7f6e\u811a\u672c\u548c\u9a8c\u8bc1\u811a\u672c\u7684\u6267\u884c\u3002\\r\\n\\r\\n```shell\\r\\ncd github-arex\\r\\ngit clone https://github.com/arextest/arex-node-service.git \\r\\ncd arex-node-service/ \\r\\ngit pull --rebase \\r\\ncd ../deployments \\r\\n./node.build.sh\\r\\n```\\r\\n\\r\\n\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6240\u6709\u7ec4\u4ef6\u5747\u5df2\u7f16\u8bd1\u5b8c\u6210\u3002\\r\\n\\r\\n ![\u7ec4\u4ef6\u7f16\u8bd1\u5b8c\u6210](./build-service.png)\\r\\n\\r\\n\u5982\u679c\u9700\u8981\u5bf9 AREX \u6574\u4e2a\u7cfb\u7edf\u4e2d\u7684\u67d0\u4e2a\u7ec4\u4ef6\u8fdb\u884c\u5355\u72ec\u914d\u7f6e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 Docker-Compose file \u4e2d\u7684\u914d\u7f6e\u9879\u6765\u5b8c\u6210\u3002\\r\\n\\r\\n\u4ee5\u4e0b\u5c06\u5bf9\u5982\u4f55\u4fee\u6539\u5404\u4e2a\u670d\u52a1\u7ec4\u4ef6\u7684\u914d\u7f6e\u5c55\u5f00\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u5982\u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e\u3001\u670d\u52a1\u7aef\u53e3\u914d\u7f6e\u7b49\u3002\u5b8c\u6210\u4fee\u6539\u540e\uff0cAREX \u7cfb\u7edf\u4e2d\u5c31\u53ef\u4ee5\u6309\u7167\u4f60\u7684\u9700\u6c42\u6765\u8fd0\u884c\u3002\\r\\n\\r\\n## \u5355\u72ec\u914d\u7f6e\u5404\u4e2a\u670d\u52a1\\r\\n\\r\\n![docker-compose](./docker-compose.png)\\r\\n\\r\\nDocker Compose \u662f\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668 Docker \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\uff0c\u4f7f\u7528 Compose \u53ef\u5728\u4e00\u53f0\u4e3b\u8ba1\u7b97\u673a\u4e0a\u65b9\u4fbf\u5730\u534f\u8c03\u591a\u4e2a\u5bb9\u5668\u6620\u50cf\u3002 \u5728 Docker Compose \u4e2d\uff0c\u901a\u5e38\u4f1a\u4f7f\u7528\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6 docker-compose.yml \u6765\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u670d\u52a1\u3002 \u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5404\u4e2a\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u66f4\u52a0\u7075\u6d3b\u5730\u8fd0\u884c AREX \u4e2d\u7684\u6bcf\u4e2a\u670d\u52a1\u3002\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ea\u9700\u8fd0\u884c\u4e00\u6761\u547d\u4ee4\uff0c\u5373\u53ef\u4ece\u914d\u7f6e\u4e2d\u521b\u5efa\u5e76\u542f\u52a8\u6240\u6709\u670d\u52a1\u3002 \\r\\n\\r\\n```shell\\r\\ncd github-arex \\r\\ngit clone https://github.com/arextest/deployments.git \\r\\ncd deployments \\r\\ncat docker-compose.yml\\r\\n```\\r\\n\\r\\n### \u914d\u7f6e AREX \u524d\u7aef UI\\r\\n\\r\\n\u914d\u7f6e\u6587\u4ef6\u4e2d\u5173\u4e8e AREX \u524d\u7aef UI \u90e8\u5206\u7684\u8be6\u7ec6\u914d\u7f6e\u89c1\u4e0b\u56fe\uff1a\\r\\n\\r\\n ![UI \u914d\u7f6e](./docker-compose-ui.png)\\r\\n\\r\\n\u5176\u4e2d\uff1a\\r\\n\\r\\n1. AREX \u524d\u7aef\u670d\u52a1\u914d\u7f6e\u7684\u7aef\u53e3\u662f 8080\uff0c\u901a\u8fc7 Docker \u5bb9\u5668\u5bf9\u5916\u66b4\u9732\u7684\u7aef\u53e3\u662f 8088\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4fee\u6539\uff1b\\r\\n2. \u65e5\u5fd7\u5b58\u50a8\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 arex-logs/arex-front \u76ee\u5f55\u4e0b\u3002\\r\\n3. AREX \u524d\u7aef\u670d\u52a1\u4f9d\u8d56\u4e8e\u56db\u4e2a\u670d\u52a1\\r\\n   1. \u5206\u6790\u670d\u52a1\uff08arex-report-service\uff09\uff0c\u7528\u4e8e\u83b7\u53d6\u5206\u6790\u6570\u636e\uff1b\\r\\n   2. \u8c03\u5ea6\u670d\u52a1\uff08arex-schedule-service\uff09\uff0c\u7528\u4e8e\u524d\u7aef\u89e6\u53d1\u56de\u653e\u64cd\u4f5c\u7b49\u8c03\u7528\uff1b\\r\\n   3. \u6570\u636e\u5b58\u50a8\u670d\u52a1\uff08arex-storage-service\uff09\uff0c\u7528\u4e8e\u8bfb\u53d6\u914d\u7f6e\u7b49\u64cd\u4f5c\uff1b\\r\\n   4. Node \u670d\u52a1\uff0c\u7528\u4e8e\u5b9e\u73b0\u6279\u91cf\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u3002\\r\\n\\r\\n### \u914d\u7f6e AREX Node\u670d\u52a1\\r\\n\\r\\nNode \u670d\u52a1\u662f\u4e00\u4e2a\u7b80\u5355\u670d\u52a1\uff0c\u5185\u90e8\u7aef\u53e3 3000\uff0c \u5bf9\u5916\u66b4\u9732\u7aef\u53e3 10001\uff0c\u4e00\u822c\u4e0d\u6d89\u53ca\u5916\u90e8\u8c03\u7528\uff0c\u6b64\u5904\u53ef\u5ffd\u7565\u3002\\r\\n\\r\\n### \u914d\u7f6e AREX \u5206\u6790\u670d\u52a1\\r\\n\\r\\n![AREX Report Service](./arex-report-service.png)\\r\\n\\r\\n1. AREX \u5206\u6790\u670d\u52a1\u4f9d\u8d56\u4e8e Mongodb \u6570\u636e\u5e93\uff0c\u9700\u8981\u8fde\u63a5 MongoDB \u6570\u636e\u5e93\u8fdb\u884c\u6570\u636e\u5b58\u50a8\u548c\u67e5\u8be2\uff0c\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f MongoDB \u7684\u914d\u7f6e\u3002\u5982\u679c\u7528\u6237\u4f7f\u7528\u81ea\u5df1\u7684 MongoDB \u670d\u52a1\uff0c\u9700\u8981\u5c06\u8fde\u63a5\u4fe1\u606f\u6539\u4e3a\u81ea\u5df1\u7684 MongoDB \u914d\u7f6e\u3002\\r\\n2. \u4f9d\u8d56\u4e8e Storage \u670d\u52a1\uff0c\u4e0d\u9700\u8981\u4fee\u6539\u6b64\u90e8\u5206\uff0c\u5982\u679c\u72ec\u7acb\u90e8\u7f72\uff0c\u9700\u8981\u4fee\u6539\u5730\u5740\u548c\u7aef\u53e3\u3002\\r\\n3. AREX \u5206\u6790\u670d\u52a1\u7684\u5185\u90e8\u7aef\u53e3\u662f 8080\uff0c\u901a\u8fc7 Docker \u5bb9\u5668\u5bf9\u5916\u66b4\u9732\u7684\u7aef\u53e3\u662f 8090\u3002\\r\\n\\r\\n\u6ce8\u610f\uff1a`Arex.ui.url` \u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u914d\u7f6e\u9879\uff0c\u5b83\u7528\u4e8e\u5728 AREX \u90ae\u4ef6\u670d\u52a1\u4e2d\u7ec4\u88c5\u767b\u5f55\u94fe\u63a5\u3002\u56e0\u4e3a AREX \u7684\u767b\u5f55\u9700\u8981\u7528\u6237\u8f93\u5165\u90ae\u7bb1\uff0c\u800c\u90ae\u4ef6\u670d\u52a1\u53d1\u9001\u7684\u94fe\u63a5\u9700\u8981\u6307\u5411\u53ef\u8bbf\u95ee\u7684 AREX \u524d\u7aef\u5730\u5740\uff0c\u56e0\u6b64\u5fc5\u987b\u5c06 `Arex.ui.url` \u914d\u7f6e\u4e3a\u5b9e\u9645\u7684\u524d\u7aef\u5730\u5740\uff0c\u800c\u4e0d\u662f Docker-Compose \u4e2d\u5bb9\u5668\u7684\u5730\u5740\u3002\u5982\u679c\u914d\u7f6e\u4e0d\u6b63\u786e\uff0c\u90ae\u4ef6\u901a\u77e5\u4e2d\u7684\u94fe\u63a5\u5c06\u4f1a\u8df3\u8f6c\u5230\u9519\u8bef\u9875\u9762\u3002\\r\\n\\r\\n### \u914d\u7f6e AREX \u6570\u636e\u5b58\u50a8\u670d\u52a1\\r\\n\\r\\n![AREX Storage Service](./arex-storage-service.png)\\r\\n\\r\\n1. \u6570\u636e\u5b58\u50a8\u670d\u52a1\u5185\u90e8\u7aef\u53e3 8080\uff0c \u5bf9\u5916\u66b4\u9732\u7aef\u53e3 8093\u3002\\r\\n2. \u6570\u636e\u5b58\u50a8\u670d\u52a1\u4f9d\u8d56\u4e8e\uff1a\\r\\n   1. mongodb \u6570\u636e\u5e93\uff0c\u914d\u7f6e\u65b9\u5f0f\u540c\u4e0a\u4e00\u8282\uff1b\\r\\n   2. Redis \u7f13\u5b58\uff0c\u7528\u4e8e\u5f55\u5236\u548c\u56de\u653e\u4e2d\u5b58\u50a8\u7f13\u5b58\uff0c\u52a0\u901f\u6027\u80fd\uff1b\\r\\n   3. \u5206\u6790\u670d\u52a1\\r\\n\\r\\n### \u914d\u7f6e AREX \u8c03\u5ea6\u670d\u52a1\\r\\n\\r\\n![AREX Schedule Service](./arex-schedule-service.png)\\r\\n\\r\\n1. AREX \u8c03\u5ea6\u670d\u52a1\u5185\u90e8\u7aef\u53e3 8080\uff0c\u5bf9\u5916\u66b4\u9732\u7aef\u53e38092\u3002\\r\\n2. \u4e0e\u6570\u636e\u5b58\u50a8\u670d\u52a1\u57fa\u672c\u4e00\u81f4\uff0cAREX \u8c03\u5ea6\u670d\u52a1\u540c\u6837\u4f9d\u8d56\u4e8e\uff1a\\r\\n   1. mongodb \u6570\u636e\u5e93\uff1b\\r\\n   2. Redis \u7f13\u5b58\uff1b\\r\\n   3. \u5206\u6790\u670d\u52a1\u3002\\r\\n\\r\\n###  \u914d\u7f6e Redis \u7f13\u5b58\u670d\u52a1\\r\\n\\r\\n![Redis \u670d\u52a1](./redis.png)\\r\\n\\r\\nRedis \u5b9e\u4f8b\uff0c\u5185\u90e8\u7aef\u53e3 6379\uff0c \u5bf9\u5916\u66b4\u9732\u7aef\u53e3 6379\u3002\\r\\n\\r\\n\u5982\u679c\u9009\u62e9\u4f7f\u7528\u5176\u4ed6\u73af\u5883\u4e2d\u7684 Redis \u670d\u52a1\uff0c\u5219\u9700\u8981\u5220\u9664 Docker-Compose \u6587\u4ef6\u4e2d Redis \u670d\u52a1\u8282\u70b9\u7684\u914d\u7f6e\uff0c\u5e76\u5c06\u6240\u6709\u4f9d\u8d56\u670d\u52a1\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u4fee\u6539\u4e3a\u8fde\u63a5\u5230\u5df2\u6709\u7684 Redis \u670d\u52a1\u3002\\r\\n\\r\\n### \u914d\u7f6e MongoDB \u6570\u636e\u5e93\u670d\u52a1\\r\\n\\r\\n![MongoDB \u670d\u52a1](./MongoDB.png)\\r\\n\\r\\n\u6570\u636e\u5e93\u670d\u52a1\u5185\u90e8\u7aef\u53e3 27017\uff0c\u5bf9\u5916\u66b4\u9732\u7aef\u53e3 27017\u3002\\r\\n\\r\\n\u540c\u4e0a\uff0c\u5982\u679c\u9009\u62e9\u4f7f\u7528\u5176\u4ed6\u73af\u5883\u4e2d\u7684\u6570\u636e\u670d\u52a1\uff0c\u5219\u9700\u8981\u5220\u9664\u914d\u7f6e\u6587\u4ef6\u4e2d MongoDB \u670d\u52a1\u8282\u70b9\u7684\u914d\u7f6e\uff0c\u5e76\u5c06\u6240\u6709\u4f9d\u8d56\u670d\u52a1\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u4fee\u6539\u4e3a\u8fde\u63a5\u5230\u5df2\u6709\u7684\u6570\u636e\u5e93\u670d\u52a1\u3002\\r\\n\\r\\n`mongo-allone-init.js` \u662f\u670d\u52a1\u542f\u52a8\u8fc7\u7a0b\u4e2d\u7684\u4f9d\u8d56\u7684\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u521d\u59cb\u5316 MongoDB \u6570\u636e\u5e93\u7684\u4e00\u4e9b\u914d\u7f6e\u3002\u5982\u4e0b\uff1a\\r\\n\\r\\n![mongo-allone](./mongo.js.png)\\r\\n\\r\\n\u6570\u636e\u5b58\u50a8\u5728\u5f53\u524d\u76ee\u5f55\u7684 arex-data/mongodb \u76ee\u5f55\u4e2d\u3002\\r\\n\\r\\n## AREX Docker Compose \u542f\u52a8\\r\\n\\r\\n\u6240\u6709\u914d\u7f6e\u8c03\u6574\u597d\u540e\uff0c \u542f\u52a8 AREX \u670d\u52a1\uff1a\\r\\n\\r\\n```\\r\\ndocker-compose up \u2013d\\r\\n```\\r\\n\\r\\n\u505c\u6b62 AREX \u670d\u52a1\uff1a\\r\\n\\r\\n```\\r\\ndocker-compose down \u2013v\\r\\n```\\r\\n\\r\\n\u67e5\u770b\u65e5\u5fd7\uff1a\\r\\n\\r\\n```\\r\\ndocker-compose logs\\r\\n```\\r\\n\\r\\nlogs \u547d\u4ee4\u7528\u6765\u67e5\u770b\u670d\u52a1\u8fdb\u7a0b\u72b6\u6001\uff0c \u5f53 State \u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 logs \u547d\u4ee4\u6765\u8c03\u8bd5\u8ddf\u8e2a\u3002\\r\\n\\r\\n![\u65e5\u5fd7](./state.png)"}]}')}}]);