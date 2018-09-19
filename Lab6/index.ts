import { connect } from 'mongoose';
import {AutorRepositorio, LivroRepositorio} from './persistencia';

async function inicializar() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criarAutor({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criarAutor({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);

        console.log('Adicionando livros...');
        let l1 = await LivroRepositorio.criarLivro({
            titulo: 'TypeScript com Node',
            autores: [a1,a2]
        });
        console.log(`Livro inserido: ${l1}`);
        
        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

inicializar();