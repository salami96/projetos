import { AutorModel, LivroModel } from './esquemas';
import { Autor, Livro } from './entidades';

export class AutorRepositorio {
    static async criarAutor(autor: Autor): Promise<Autor> {
        let novoAutor = new AutorModel(autor);
        return novoAutor.save();
    }
    static async todosAutores(): Promise<Autor[]> {
        let autores = await AutorModel.find().lean().exec();
        return autores;
    }
}

export class LivroRepositorio {
    static async criarLivro(livro: Livro): Promise<Livro> {
        let novoLivro = new LivroModel(livro);
        return novoLivro.save();
    }
}