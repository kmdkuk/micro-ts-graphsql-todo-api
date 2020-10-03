FROM node:12.18.3-buster-slim

WORKDIR /app

RUN npm install yarn

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD ["yarn", "start"]
