import express from 'express';
import {roteador} from './rotas';

const app = express();
app.use('/biblioteca',roteador);

export {app};