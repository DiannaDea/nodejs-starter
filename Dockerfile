FROM node:11-alpine

WORKDIR /usr/app
RUN npm install --quiet
EXPOSE 5000