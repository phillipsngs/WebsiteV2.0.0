FROM node:18-alpine

RUN apk add --no-cache git

WORKDIR .

COPY package.json .

COPY .git .git

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]