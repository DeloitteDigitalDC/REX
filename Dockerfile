FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
ADD dist /usr/src/app
ADD deploy/run_rex.sh /usr/src/app

ENTRYPOINT ["./run_rex.sh"]

EXPOSE 3000
