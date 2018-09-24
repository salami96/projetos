import {Request,Response, NextFunction} from 'express';
import { AutorRepositorio } from './persistencia';

export class AutorController {
    async todosAutores(req: Request, res: Response, next: NextFunction): Promise<void>{
        try{
            let autores = await AutorRepositorio.todosAutores();
            res.json(autores);
        } catch(erro) {
            res.status(500);
            next(erro);
        }
    }
    async inserirAutor(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            console.log(req.body);
            //Seria melhor utilizar um framework de validação de dados
            if (!req.body.primeiro_nome || !req.body.ultimo_nome) {
                res.status(400).send('Objeto inválido de requisição');
            }
            let {primeiro_nome, ultimo_nome} = req.body;
            let novoAutor = await AutorRepositorio.criarAutor(req.body);
            res.status(201).json(novoAutor);
        } catch(erro) {
            res.status(500);
            next(erro);
        }
    }
}