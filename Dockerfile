FROM node:latest
MAINTAINER Leandro Alexandrino

WORKDIR /usr/usr/app

COPY . /usr/src/app

RUN npm i

EXPOSE 3000
