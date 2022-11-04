import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('documentation example')
    .setDescription('The example API description')
    .setVersion('1.0')
    .addTag('documentation example')
    .build();// await app.listen(3000);
  // await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
