import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigureModule } from './infrastructure/configure/configure.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [ConfigureModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
