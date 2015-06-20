FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/
RUN npm install
ADD dist /usr/src/app

CMD [ "node", "server/app-server.js" ]

EXPOSE 3000