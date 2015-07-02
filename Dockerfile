FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production
COPY dist /usr/src/app
COPY deploy/run_rex.sh /usr/src/app/
RUN chmod 777 run_rex.sh

ENTRYPOINT ["sh", "run_rex.sh"]

EXPOSE 3000
