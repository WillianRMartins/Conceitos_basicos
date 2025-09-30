import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { json } from 'stream/consumers';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
    constructor(private recadosService: RecadosService) {}

    @Get()
    findAll(@Query() query: any){
        const {limit=10, page=1} = query;
        console.log(query);
        return this.recadosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.recadosService.findOne(Number(id));
    }

    @HttpCode(500)
    @Post()
    create(@Body() body: any){
        return "Essa rota cria um novo recado" + JSON.stringify(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any){
        return {id, ...body
            
        };
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `Essa rota remove o recado com id ${id}`;
    }
}
