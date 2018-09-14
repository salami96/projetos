import * as mongoose from 'mongoose';
import {AutorModel, EmprestimoModel, LivroModel} from './esquemas';
import {Persistencia} from './persistencia';

async function inicializar() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        console.log('Adicionando autores...');
        let a1 = await Persistencia.criarAutor('John', 'Doe');
        console.log(`Autor inserido: ${a1._id}`);
        let a2 = await Persistencia.criarAutor('Mary', 'Doe');
        console.log(`Autor inserido: ${a2._id}`);

        console.log('Adicionando livros...');
        let l1 = new LivroModel({ titulo: 'JavaScript Legal', autores: a1 });
        let rl1 = await l1.save();
        console.log(`Livro inserido: ${rl1._id}`);
        let l2 = new LivroModel({ titulo: 'JavaScript Outra Vez', autores: [a1,a2] });
        let rl2 = await l2.save();
        console.log(`Livro inserido: ${rl2._id}`);      
        
        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

inicializar();