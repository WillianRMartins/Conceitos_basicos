import { Module } from '@nestjs/common';
import { ConceitosAutoController } from './conceitos-auto.controller';
import { ConceitosAutoService } from './conceitos-auto.service';

@Module({
  controllers: [ConceitosAutoController],
  providers: [ConceitosAutoService]
})
export class ConceitosAutoModule {}
