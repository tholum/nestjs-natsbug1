import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern(`core.test`)
  async testA(data: any ,) {
      console.log( "From A"  );
      // console.log('Ticket created All :', data);
  }

  @EventPattern(`core.test`)
  async testB(data: any ,) {
      console.log( "From B"  );
      // console.log('Ticket created All :', data);
  }
  @EventPattern(`core.*`)
  async testC(data: any ,) {
      console.log( "From C"  );
      // console.log('Ticket created All :', data);
  }
  
}
