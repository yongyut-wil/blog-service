import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Yongyut!!!';
  }
  getHealth(): string {
    return 'OK';
  }
}
