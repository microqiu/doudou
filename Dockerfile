FROM index.alauda.cn/linfeiyang/apline-perl
RUN apk add --no-cache nodejs
MAINTAINER linfeiyang <329379172@qq.com>
COPY app app
WORKDIR app
RUN npm install
RUN apk add --no-cache curl
EXPOSE 3000
CMD ['bin/www']
