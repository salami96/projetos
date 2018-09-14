import {LivroModel, AutorModel, EmprestimoModel} from './esquemas';
import { Autor, Livro, Emprestimo } from './entidades';

export class AutorRepo {
    //Função assíncrona que retorna uma Promise
    //Observe a inferência do tipo de retorno da função
    static async salvar(autor:Autor):Promise<Autor> {
        let novoAutor = new AutorModel(autor);
        return novoAutor.save();
    }
    static async buscarTodos():Promise<Autor[]>{
        return await AutorModel.find().exec();
    }
}
export class LivroRepo {
    static async salvar(livro:Livro):Promise<Livro> {
        let novoLivro = new LivroModel(livro)
        return novoLivro.save();
    }
}
export class EmprestimoRepo {
    static async salvar(emprestimo:Emprestimo):Promise<Emprestimo> {
        let novoEmprestimo = new EmprestimoModel(emprestimo)
        return novoEmprestimo.save();
    }
}