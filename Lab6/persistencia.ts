import {LivroModel, AutorModel, EmprestimoModel} from './esquemas';

export class Persistencia {
    //Função assíncrona que retorna uma Promise
    //Observe a inferência do tipo de retorno da função
    static async criarAutor(primeiroNome: string, ultimoNome: string) {
        let novoAutor = new AutorModel({primeiro_nome : primeiroNome, ultimo_nome: ultimoNome});
        return novoAutor.save();
    }
}