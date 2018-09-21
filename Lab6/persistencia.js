"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const esquemas_1 = require("./esquemas");
class AutorRepositorio {
    static todosAutores() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield esquemas_1.AutorModel.find().exec();
        });
    }
    static criarAutor(autor) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoAutor = yield esquemas_1.AutorModel.create(autor);
            return novoAutor.save();
        });
    }
}
exports.AutorRepositorio = AutorRepositorio;
class LivroRepositorio {
    static criarLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoLivro = yield esquemas_1.LivroModel.create(livro);
            return novoLivro.save();
        });
    }
}
exports.LivroRepositorio = LivroRepositorio;
//# sourceMappingURL=persistencia.js.map