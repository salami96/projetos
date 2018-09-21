import express = require('express');
import { json } from 'body-parser';
import  { main, Page } from './bd';

let app = express();
app.use(json());

main();

app.listen(80,() => console.log("server running..."));
app.get('/:path',function (req,res){
    let path = req.params.path;
    let doc = Page.findOne({titulo:path});
    res.json(doc);
});
