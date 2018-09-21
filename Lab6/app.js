"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rotas_1 = require("./rotas");
const app = express_1.default();
exports.app = app;
app.use('/biblioteca', rotas_1.roteador);
//# sourceMappingURL=app.js.map