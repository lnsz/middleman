FROM node:12.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node ../

USER node

# Build .ts and move files to dist
RUN npm run build
COPY ormconfig.json ./dist/
COPY .env ./dist/
WORKDIR ./dist

CMD [ "npm", "start" ]