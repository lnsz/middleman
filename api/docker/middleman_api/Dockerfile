FROM node:12.2-alpine

WORKDIR /app

COPY package.json yarn* ./
RUN yarn

COPY . .

CMD [ "npm", "run", "start" ]