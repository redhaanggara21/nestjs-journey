## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## How to Migrate
npx knex migrate:latest

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:development

# production mode
$ npm run start:production
```

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

to export what env you choose for run on this project
export NODE_ENV=production


## Reference the app
```bash
https://wanago.io/2022/08/29/api-nestjs-postgresql-raw-sql-queries/

https://planetscale.com/blog/how-to-seed-a-database-with-prisma-and-next-js

https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f

https://github.com/knex/knex/issues/2624

https://knexjs.org/guide/migrations.html#migration-cli

Migrate
https://github.com/Tony133/nestjs-knexjs
```

npx knex migrate:latest --env development
npx knex migrate:latest --env development
npx knex migrate:latest --env developmentTwo
npx knex init
npx knex migrate:make [name_migrations]

#run migrate
npx knex migrate:latest

#seeder
npx knex seed:make comment
npx knex seed:run
npx knex seed:run

#fast install
npm i
npm run run:pg-docker
npm run migrate && npm run seed
npm run start

#setup oldest
    % // "migrate:local": "knex migrate:latest --env development",
    % // "migrate:staging": "knex migrate:latest --env staging",
    % // "migrate:production": "knex migrate:latest --env production",
    % // "db:seed": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed",
    % // "knex": "babel-node -r dotenv/config node_modules/.bin/knex",
    % // "test:knex": "DOTENV_CONFIG_PATH=.env.test npm run knex"
    // "start:dev": "nest start --watch",
    // "start:debug": "nest start --debug --watch",
    // "start:prod": "node dist/main",



    // "migrate": "npm run knex migrate:latest",
    // "migrate:make": "npm run knex migrate:make -- -x ts",
    // "seed": "npm run knex seed:run",
    // "seed:make": "npm run knex seed:make -- -x ts",