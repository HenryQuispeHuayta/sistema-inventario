import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatusApi(): string {
    return `API is running! ${new Date().toLocaleString()}`;
  }
}
