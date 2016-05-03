FROM mhart/alpine-node
COPY app app
WORKDIR app
RUN npm install
EXPOSE 3000
CMD node bin/www
