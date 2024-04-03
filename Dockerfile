# syntax=docker/dockerfile:1

FROM node:20.12.0

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN npm install

CMD ["npm", "start"]

EXPOSE 3000