FROM node:10.16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm i -g nodemon
# COPY . .
EXPOSE 3001
CMD [ "nodemon", "index.js" ]