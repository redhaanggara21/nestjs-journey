FROM node:14-alpine as build

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine as prod

WORKDIR /src/app

COPY --from=build /src/app/package*.json ./

COPY --from=build /src/app/.env ./

RUN npm install --only=prod

COPY --from=build /src/app/tsconfig*.json ./

COPY --from=build /src/app/migrations migrations

COPY --from=build /src/app/seeds seeds

COPY --from=build /src/app/data data

COPY --from=build /src/app/knexfile.ts ./

COPY --from=build /src/app/dist dist

EXPOSE 5000

CMD [ "node" , "dist/main.js" ]
