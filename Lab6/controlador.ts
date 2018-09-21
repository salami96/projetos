import { Request, Response, NextFunction } from "express";
import {AutorRepositorio} from './persistencia';

export class AutorControlador{
    static async todosAutores(req:Request,res:Response,next:NextFunction){
        try {
            let autores = await AutorRepositorio.todosAutores();
            res.json(autores);
            console.log(autores);
            
        } catch (erro) {
            next(erro);
        }
    }
}