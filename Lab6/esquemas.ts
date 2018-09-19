import {Document, model, Schema, SchemaTypes} from 'mongoose';
import {Autor, Livro, Emprestimo} from './entidades';

interface AutorDocument extends Autor, Document {}

export const AutorModel = model<AutorDocument>('Autor', new Schema({
    primeiro_nome: { type: String, required: true, max: 100 },
       ultimo_nome: { type: String, required: true, max: 100 }
}), 'autores');

interface LivroDocument extends Livro, Document {}

export const LivroModel = model<LivroDocument>('Livro', new Schema({
    titulo: { type: String, required: true },
    autores: [{ type: SchemaTypes.ObjectId, ref: 'Autor' }]
}), 'livros');

interface EmprestimoDocument extends Emprestimo, Document {}

export const EmprestimoModel = model<EmprestimoDocument>('Emprestimo', new Schema({
    livro: { type: SchemaTypes.ObjectId, ref: 'Livro', required: true },
    status: { type: String, required: true, enum: ['Disponivel', 'Emprestado'], default: 'Disponivel' },
    dataEntrega: { type: Date, default: Date.now }
}), 'emprestimos');