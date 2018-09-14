import * as mongoose from 'mongoose';

const Livro = new mongoose.Schema(
    {
        titulo: { type: String, required: true },
        autores: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Autor' }]
    }
);

const Autor = new mongoose.Schema(
    {
        primeiro_nome: { type: String, required: true, max: 100 },
        ultimo_nome: { type: String, required: true, max: 100 }
    }
);

const Emprestimo = new mongoose.Schema(
    {
        livro: { type: mongoose.SchemaTypes.ObjectId, ref: 'Livro', required: true },
        status: { type: String, required: true, enum: ['Disponivel', 'Emprestado'], default: 'Disponivel' },
        dataEntrega: { type: Date, default: Date.now }
    }
);

export const LivroModel = mongoose.model('Livro', Livro);
export const AutorModel = mongoose.model('Autor', Autor);
export const EmprestimoModel = mongoose.model('Emprestimo', Emprestimo);