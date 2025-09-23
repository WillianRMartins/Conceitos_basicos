import { Module } from "@nestjs/common";
import { ConceitosManualController } from "./conceitos-manul.controller";
import { ConceitosManualService } from "./conceitos-manual.service";

@Module({
    imports: [],
    controllers: [ConceitosManualController],
    providers: [ConceitosManualService],
})
export class ConceitosManualModule{}

