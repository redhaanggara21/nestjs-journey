require('dotenv').config();
interface KnexConfig {
  [key: string]: object;
}

console.log("check: " + process.env.PORT_APP);

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
            // tableName: './migrations/',
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
            // tableName: './migrations/',
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
            tableName: 'knex_migrations',
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