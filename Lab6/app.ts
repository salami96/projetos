import express from 'express';
import {roteador} from './rotas';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/biblioteca',roteador);

export {app};