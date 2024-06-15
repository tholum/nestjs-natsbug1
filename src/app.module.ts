import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();


@Module({
  imports: [ClientsModule.register([
    {
      name: 'NATS',
      transport: Transport.NATS,
      options: {
        servers: process.env.NATS_URL.split(';'),
        token: process.env.NATS_TOKEN
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
