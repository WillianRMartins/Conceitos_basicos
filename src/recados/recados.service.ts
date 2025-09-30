import { Injectable } from "@nestjs/common";
import { RecadoEntity } from "./entities/recado.entity";
import { text } from "stream/consumers";


@Injectable()
export class RecadosService {
    private lastId = 2;
    private recados:RecadoEntity[] = 
    [
        {
            id:1,
            texto:"Primeiro recado",
            de:"Willian",
            para:"Todos",
            lido:false,
            data: new Date()
        },
        {
            id:2,
            texto:"Segundo recado",
            de:"Nathan",
            para:"Willian",
            lido:false,
            data: new Date()
        }
    ]
    findAll(){
        return this.recados;
    }
    findOne(id:number){
        return this.recados.find(recado => recado.id === id);
    }
};
