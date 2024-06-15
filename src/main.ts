import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        queue: process.env.NATS_QUEUE,
        servers: process.env.NATS_URL.split(';'),
        token: process.env.NATS_TOKEN
      }    
    },
  );
  await app.listen();
}
bootstrap();