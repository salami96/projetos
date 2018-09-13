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
const mongodb = require("mongodb");
const url = 'mongodb://localhost:27017/teste';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cli = yield mongodb.MongoClient.connect(url, { useNewUrlParser: true });
            const db = cli.db('teste');
            console.log("conectou :D");
            const colecao = db.collection('exemplos');
            const result = yield colecao.insertOne({ name: 'Jhon Doe' });
            console.log(`InsertId: ${result.insertedId}`);
            const cursor = colecao.find({});
            while (yield cursor.hasNext()) {
                let documento = yield cursor.next();
                console.log(documento);
            }
        }
        catch (erro) {
            console.log(erro);
        }
    });
}
main();
//# sourceMappingURL=index.js.map