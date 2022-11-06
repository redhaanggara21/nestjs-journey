import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

require('dotenv').config();
@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
      isGlobal: true,
      validationSchema
    }),
    // ConfigModule.forRoot({
    //   envFilePath: `.${process.env.NODE_ENV}.env`,
    // }),
    // ServeStaticModule.forRoot({
    //   rootPath: path.resolve(__dirname, 'static'),
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        useNullAsDefault: true,
        entities: entities,
        synchronize: true,
        autoLoadEntities: true,
        // ssl: false,
        // extra: {
        //   ssl: {
        //     rejectUnauthorized: false,
        //   },
        // }
      })
    }),
    UsersModule,
    CustomersModule,
    CommentsModule,
    PostsModule
  ],
  controllers: [],
  providers: [
    // EasyConfiguration
  ],
})
export class AppModule {}