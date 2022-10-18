# FROM node:16.14.2-alpine AS base

# Assign variable env-variable to dotenv variable
# docker build -t baeldung_greetings --build-arg env=production .
# docker build -t test-args --build-arg=env=production -f df.nest-backend .
# docker build -t hello-world:latest --build-arg VERSION=0.2 --build-arg PORT=80 .
# docker run --env NODE_ENV=development <image-name>
# docker run --env-file ./.env <IMAGE-NAME>


# ARG env
# ENV NODE_ENV=$env


#ARG ARGNAME=default
# RUN echo "NODE_ENV active from variable = ${NODE_ENV}"

# RUN if [ "$NODE_ENV" = "production" ] ; then echo "production mode "; else echo "development mode" ; fi

# RUN if [ "$NODE_ENV" = "production" ] ; then echo "production mode"; else echo "development mode" ; fi

# Create app directory, this is in our container/in our image
# WORKDIR /usr/src/app

# Install app dependencies
#COPY package*.json ./
# COPY ./package.json .

# install dependencies
# RUN npm install

# COPY . .

# RUN npm run build

# COPY --from=development /src/tsconfig*.json ./

# COPY --from=development /usr/src/app/dist ./dist

# COPY --from=development /usr/src/app/config/env/ env

# COPY --from=development /usr/src/app/migrations migrations

# COPY --from=development /usr/src/app/seeds seeds

# COPY --from=development /usr/src/app/data data

# COPY --from=development  /usr/src/app/knexfile.ts ./

# COPY --from=budevelopmentild /usr/src/app/dist dist

# EXPOSE 5000

#CMD [ "npm", "run", "start:production" ]
#CMD [ "node" , "env=production dist/main.js" ]

FROM node:12.13-alpine As development

RUN if [ "$NODE_ENV" = "production" ] ; then echo "production mode"; else echo "development mode" ; fi

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.13-alpine as production

RUN if [ "$NODE_ENV" = "production" ] ; then echo "production mode"; else echo "development mode" ; fi

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

#COPY --from=build /usr/src/app/package*.json ./

COPY --from=build /usr/src/app/config/production.env ./

RUN npm install --only=production

COPY --from=production /usr/src/app/tsconfig*.json ./

COPY --from=production /usr/src/app/migrations migrations

COPY --from=production /usr/src/app/seeds seeds

COPY --from=production /usr/src/app/data data

COPY --from=production /usr/src/app/knexfile.ts ./

COPY --from=production /usr/src/app/dist dist

EXPOSE 5000

#CMD ["node", "dist/main"]
CMD [ "npm", "run", "start:production" ]