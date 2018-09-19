import { AutorModel, LivroModel } from './esquemas';
import { Autor, Livro } from './entidades';

export class AutorRepositorio {
    static async criarAutor(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor.save();
    }
}

export class LivroRepositorio {
    static async criarLivro(livro: Livro): Promise<Livro> {
        let novoLivro = await LivroModel.create(livro);
        return novoLivro.save();
    }
}