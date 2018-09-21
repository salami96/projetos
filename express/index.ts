import express = require('express');
import { json } from 'body-parser';
import { router } from './router';

let app = express();
app.use(json());

app.use('/alo',router);

app.listen(80,() => console.log("server running..."));


