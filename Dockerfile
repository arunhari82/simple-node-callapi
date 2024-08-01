FROM --platform=linux/amd64 node:18.16.0-alpine3.17
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install --verbose
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "index.js" ]