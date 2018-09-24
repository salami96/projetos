import express = require('express');
import { AutorController } from './autorController';

const router = express.Router();

const autorControlador = new AutorController();
router
.get('/autores', autorControlador.todosAutores)
.post('/autores', autorControlador.inserirAutor);

export default router;