import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { tester, welcome, work } from 'aha';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    console.log(tester());
    console.log(welcome);

    return (await work()).data;
  }
}
