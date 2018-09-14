import * as mongoose from 'mongoose';
import {AutorModel, EmprestimoModel, LivroModel} from './esquemas';
import { Autor } from './entidades';
import { AutorRepo, LivroRepo } from './persistencia';

async function inicializar() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        console.log('Adicionando autores...');
        let a1 = await AutorRepo.salvar({primeiro_nome:'Jonh',ultimo_nome:'Doe'});
        let a2 = await AutorRepo.salvar({primeiro_nome:'Mary',ultimo_nome:'Doe'});
        console.log(await AutorRepo.buscarTodos());
        

        console.log('Adicionando livros...');
        let l1 = await LivroRepo.salvar({titulo:'JavaScript Legal',autores:[a1]});
        let l2 = await LivroRepo.salvar({titulo:'JavaScript Outra Vez',autores:[a1,a2]});
        
        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

inicializar();