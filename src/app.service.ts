import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Yongyut!!';
  }
  getHealth(): string {
    return 'OK';
  }
}
