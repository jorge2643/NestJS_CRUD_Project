import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'REST_API_Project Runinng - Jorge Rodríguez';
  }
}
