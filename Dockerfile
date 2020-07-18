FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./ ./

RUN apk update; apk add curl; apk add --no-cache bash; npm install;cd public;mkdir images;

RUN npm run build

EXPOSE 3000

CMD npm run start:server
