import { Injectable } from '@nestjs/common';
// import abcd from 'abcd';

@Injectable()
export class AppService {
  getHello(): string {
    // console.log(abcd);
    // console.log('from lib', addArray([]));
    return 'Hello WorldZ!';
  }
}
