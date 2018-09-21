"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador");
const roteador = express_1.Router();
exports.roteador = roteador;
roteador.get('/autores', controlador_1.AutorControlador.todosAutores);
//# sourceMappingURL=rotas.js.map