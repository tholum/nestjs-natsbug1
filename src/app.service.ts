import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  logger = new Logger(AppService.name);
  constructor( 
    @Inject('NATS') private client: ClientProxy
){
   this.loop();
}
async loop(){
  
  setInterval( ()=> {
    const date = new Date().toISOString();
    this.logger.log(` ====== Sending Event ======`);
    this.client.emit(`core.test`, { date });
  } , 5000 );
}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
}
