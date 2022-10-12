import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { AppService } from './app.service';
// import { getEnvPath } from './common/helper/env.helper';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

// const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      // envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
      validationSchema, 
     }),
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
    CommentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}