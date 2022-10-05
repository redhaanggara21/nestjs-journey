import type { Knex } from "knex";

require('dotenv').config();

const config: { [key: string]: Knex.Config } = {
  local: {
    client: 'postgresql',
    connection: {
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
    migrations: {
        tableName: 'knex_migrations',
    },
  },
  development: {
      client: 'postgresql',
      connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    
    staging: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    
  production: {
      client: 'postgresql',
      connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          database: process.env.DB_NAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    
};

module.exports = config;