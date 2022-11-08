## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## How to Migrate
npx knex migrate:latest
npx knex migrate:make npx run knex migrate:latest -- -x ts

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:development

# production mode
$ npm run start:production
```

## unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

## test coverage
$ npm run test:cov

to export what env you choose for run on this project
export NODE_ENV=production

## run docker container
```bash
$ docker-compose up developent
start it in development mode. run on: http://localhost:3000 

$ docker-compose up production
start it in production mode. run on: http://localhost:3000 

$ docker-compose up -d production
P.S: If you want to ditch the terminal logging, you can run the container in a separate daemon using the -d flag like so
```


## Reference the app
```bash
https://wanago.io/2022/08/29/api-nestjs-postgresql-raw-sql-queries/

https://planetscale.com/blog/how-to-seed-a-database-with-prisma-and-next-js

https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f

https://github.com/knex/knex/issues/2624

https://knexjs.org/guide/migrations.html#migration-cli

https://progressivecoder.com/how-to-create-a-multi-stage-nestjs-docker-deployment/

Migrate
https://github.com/Tony133/nestjs-knexjs
```