FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN apk add --update npm
RUN npm install
COPY . .
RUN npm run build
