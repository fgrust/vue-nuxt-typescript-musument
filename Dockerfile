FROM node:14-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node . .

RUN yarn install

RUN yarn generate

EXPOSE 3000

CMD [ "yarn", "start" ]
