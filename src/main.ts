import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { swaggerConfig } from './main/config/docs/swagger-config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // log
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // swagger
  swaggerConfig(app);

  // nest usar class validator
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // arranque
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT') as number;

  await app.listen(port, () => {
    logger.log(`Application is running on: http://localhost:${port}`);
  });
}

bootstrap();
