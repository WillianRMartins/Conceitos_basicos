import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppController2 } from './app.controller';
import { AppService } from './app.service';
import {ConceitosManualModule} from "../conceitos-manual/conceitos-manual.module";
import { ConceitosAutoModule } from 'src/conceitos-auto/conceitos-auto.module';

@Module({
  imports: [ConceitosManualModule, ConceitosAutoModule],
  controllers: [AppController, AppController2],
  providers: [AppService],
})
export class AppModule {}
