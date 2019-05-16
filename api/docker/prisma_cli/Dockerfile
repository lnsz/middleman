FROM node:12.2-alpine

WORKDIR /app

RUN npm install -g npx prisma typescript ts-node

RUN mkdir prisma
RUN mkdir -p src/generated

CMD [ "tail", "-f", "/dev/null" ]