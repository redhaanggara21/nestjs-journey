FROM node:14-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

#COPY package*.json ./

#COPY . .

#COPY --from=development /src/app/package*.json ./

# COPY package*.json ./

COPY --from=development /src/app/.env ./

COPY ["package*.json", "./"]

RUN npm install --only=production

COPY --from=development /src/app/tsconfig*.json ./

COPY --from=development /usr/src/app/migrations migrations

COPY --from=development /usr/src/app/seeds seeds

COPY --from=development /usr/src/app/data data

COPY --from=development /usr/src/app/knexfile.ts ./

COPY --from=development /usr/src/app/dist dist

CMD ["node", "dist/main"]
#CMD ["npm", "run", "start:production"]