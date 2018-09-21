import { Request, Response } from "express";

export class Controller{
    static getAlo(req:Request,res:Response){
        //throw new Error('Ops... ERRO');
        res.send('Alo Mundo');
    }
    static getAloNome(req:Request,res:Response){
        res.send('Alo '+req.params.nome)
    }
    static postAlo(req:Request,res:Response){
        if(!req.body.nome) res.sendStatus(400).send("Objeto sem Propriedade Nome");
        else res.send('Alo '+req.body.nome);
    }
}