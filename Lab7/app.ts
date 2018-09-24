import express = require('express');
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import router from './rotas';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.rotas();
    }

    private async config(): Promise<void> {
        const url = 'mongodb://localhost:27017/biblioteca';
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Conectado ao BD com sucesso');
        //Aqui vem as configurações de midleware
        //via this.app.use()
        //Para suportar requisições POST com tipo application/json
        this.app.use(bodyParser.json());
        //Para suportar requisições POST com tipo application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private rotas(): void {
        //Aqui vem as configurações de rotas
        this.app.use('/api/v1', router);
    }
}

export default new App().app;