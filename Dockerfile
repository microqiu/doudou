FROM index.alauda.cn/linfeiyang/apline-perl
RUN apk add --no-cache nodejs
MAINTAINER linfeiyang <329379172@qq.com>
COPY app app
WORKDIR app
RUN npm install
RUN npm install pm2 -g
COPY run.sh run.sh
EXPOSE 3000
CMD ['run.sh']
