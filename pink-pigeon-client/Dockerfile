FROM node:12.13-alpine
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
RUN npm ci && mv node_modules ../
COPY . .
EXPOSE 4200
CMD npm start