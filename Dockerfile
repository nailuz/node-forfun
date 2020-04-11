FROM node:13.12.0-alpine

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=3000 HOST='0.0.0.0'

EXPOSE 3000
