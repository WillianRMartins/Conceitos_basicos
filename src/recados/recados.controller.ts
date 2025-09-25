import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { json } from 'stream/consumers';

@Controller('recados')
export class RecadosController {
    @Get()
    findAll(){
        return "Essa rota retorna todos os recados";
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return `Essa rota retorna o recado específico com id ${id}`;
    }

    @HttpCode(500)
    @Post()
    create(@Body() body: any){
        return "Essa rota cria um novo recado" + JSON.stringify(body);
    }
}
