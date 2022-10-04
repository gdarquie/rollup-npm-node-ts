import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { tester, welcome, work } from 'aha';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    // const aha = require('aha');
    // console.log(aha.welcome);
    // console.log(aha.tester());
    // const res = await aha.work();
    // if (res.data) console.log(res.data);

    console.log(tester());
    console.log(welcome);

    return (await work()).data;
    // return this.appService.getHello();
  }
}
