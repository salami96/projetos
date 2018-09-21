"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.AutorModel = mongoose_1.model('Autor', new mongoose_1.Schema({
    primeiro_nome: { type: String, required: true, max: 100 },
    ultimo_nome: { type: String, required: true, max: 100 }
}), 'autores');
exports.LivroModel = mongoose_1.model('Livro', new mongoose_1.Schema({
    titulo: { type: String, required: true },
    autores: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: 'Autor' }]
}), 'livros');
exports.EmprestimoModel = mongoose_1.model('Emprestimo', new mongoose_1.Schema({
    livro: { type: mongoose_1.SchemaTypes.ObjectId, ref: 'Livro', required: true },
    status: { type: String, required: true, enum: ['Disponivel', 'Emprestado'], default: 'Disponivel' },
    dataEntrega: { type: Date, default: Date.now }
}), 'emprestimos');
//# sourceMappingURL=esquemas.js.map