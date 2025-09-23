import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutoService {
    getAuto(): string {
        return 'Conceitos Auto';
    }
}
