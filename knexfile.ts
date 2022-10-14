require('dotenv').config({path: `./src/config/env/${process.env.NODE_ENV}.env`});
// require('dotenv').config({ path: require('find-config')('.env') })
interface KnexConfig {
  [key: string]: object;
}

console.log("enviroment activated: " + process.env.ENV_NAME);
console.log(__dirname);
console.log(process.cwd());

const config: KnexConfig =  {
  local: {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    },
    migrations: {
        directory: __dirname + '/migrations',
        tableName: 'knex_migrations'
    },
    seeds: {
        directory: './seeds/'
    },
    pool: {
        min: 2,
        max: 10,
    },
  },
  development: {
      client: 'pg',
      connection: {
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        migrations: {
            directory: __dirname + '/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeds/'
        },
        pool: {
            min: 2,
            max: 10,
        },
    },
    
    staging: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        migrations: {
            directory: __dirname + '/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeds/'
        },
        pool: {
            min: 2,
            max: 10,
        },
    },
    
  production: {
      client: 'pg',
      connection: {
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        migrations: {
            directory: __dirname + '/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeds/'
        },
        pool: {
            min: 2,
            max: 10,
        },
    },
    
};

module.exports = config;