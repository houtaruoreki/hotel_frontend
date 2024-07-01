FROM node:15.8.0-alpine


WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build