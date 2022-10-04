import post from 'axios';
import { testerModule } from './tester/tester.module';

export const welcome = "This is a message from the demo package";

export async function work() { 
    return await post('https://ptsv2.com/t/373dw-1664806001/post');
}

export function tester() {
    return testerModule();
}