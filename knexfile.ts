require('dotenv').config();

// console.dir(process.env);

// PORT_APP=3000
// DB_HOST='localhost'
// DB_PORT=5432
// DB_USERNAME='postgres'
// DB_PASSWORD='123456'
// DB_NAME='nest_journey'
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
        tableName: 'migrations',
        directory: './migrations/users'
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
    //   console.log(process.env.DB_NAME),
      client: 'pg',
      connection: {
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        migrations: {
            tableName: 'migrations',
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
            tableName: 'migrations',
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
            tableName: 'migrations',
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