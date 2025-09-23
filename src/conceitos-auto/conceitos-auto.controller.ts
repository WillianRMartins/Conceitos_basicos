import { Controller, Get } from '@nestjs/common';
import { ConceitosAutoService } from './conceitos-auto.service';

@Controller('conceitos-auto')
export class ConceitosAutoController {
    constructor(private readonly conceitosAutoService: ConceitosAutoService) {}
    @Get()
    getAuto(): string {
        return this.conceitosAutoService.getAuto();
    }
}
