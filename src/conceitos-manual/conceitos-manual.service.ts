import {Injectable} from "@nestjs/common";

@Injectable()
export class ConceitosManualService {
    getTeste(entrada: string): string{
        return "seu texto" + entrada;
    }
}