import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppController2 } from './app.controller';
import { AppService } from './app.service';
import {ConceitosManualModule} from "../conceitos-manual/conceitos-manual.module";

@Module({
  imports: [ConceitosManualModule],
  controllers: [AppController, AppController2],
  providers: [AppService],
})
export class AppModule {}
