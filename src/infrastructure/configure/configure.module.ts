import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ThrottlerModule.forRoot([{ ttl: 600000, limit: 10 }]),
  ],
})
export class ConfigureModule {}
