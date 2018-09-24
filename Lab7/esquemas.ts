import * as mongoose from 'mongoose';
import {Autor, Livro, Emprestimo} from './entidades';

interface AutorDocument extends Autor, mongoose.Document {}

export const AutorModel = mongoose.model<AutorDocument>('Autor', new mongoose.Schema({
    primeiro_nome: { type: String, required: true, max: 100 },
       ultimo_nome: { type: String, required: true, max: 100 }
}), 'autores');

interface LivroDocument extends Livro, mongoose.Document {}

export const LivroModel = mongoose.model<LivroDocument>('Livro', new mongoose.Schema({
    titulo: { type: String, required: true },
    autores: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Autor' }]
}), 'livros');

interface EmprestimoDocument extends Emprestimo, mongoose.Document {}

export const EmprestimoModel = mongoose.model<EmprestimoDocument>('Emprestimo', new mongoose.Schema({
    livro: { type: mongoose.SchemaTypes.ObjectId, ref: 'Livro', required: true },
    status: { type: String, required: true, enum: ['Disponivel', 'Emprestado'], default: 'Disponivel' },
    dataEntrega: { type: Date, default: Date.now }
}), 'emprestimos');