FROM node:8.1.4

# reset npm loglevel (https://github.com/nodejs/docker-node/issues/57)
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /opt/code

COPY package.json .npmrc ./
RUN npm install

COPY . .

CMD ["npm", "start"]
