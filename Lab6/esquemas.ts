import * as mongoose from 'mongoose';
import { Autor, Emprestimo, Livro } from './entidades';

const LivroEsq = new mongoose.Schema(
    {
        titulo: { type: String, required: true },
        autores: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Autor' }]
    }
);
interface LivroDocument extends Livro,mongoose.Document{};
export const LivroModel = mongoose.model<LivroDocument>('Livro', LivroEsq,'livros');

const AutorEsq = new mongoose.Schema(
    {
        primeiro_nome: { type: String, required: true, max: 100 },
        ultimo_nome: { type: String, required: true, max: 100 }
    }
);
interface AutorDocument extends Autor,mongoose.Document{};
export const AutorModel = mongoose.model<AutorDocument>('Autor', AutorEsq,'autores');

const EmprestimoEsq = new mongoose.Schema(
    {
        livro: { type: mongoose.SchemaTypes.ObjectId, ref: 'Livro', required: true },
        status: { type: String, required: true, enum: ['Disponivel', 'Emprestado'], default: 'Disponivel' },
        dataEntrega: { type: Date, default: Date.now }
    }
);

interface EmprestimoDocument extends Emprestimo,mongoose.Document{};
export const EmprestimoModel = mongoose.model<EmprestimoDocument>('Emprestimo', EmprestimoEsq,'emprestimos');