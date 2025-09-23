import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller("novo")
export class AppController2{
  @Get()
  getNovo(): string {
    return "Novo endpoint";
  }
}

