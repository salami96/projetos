import express = require('express');

let app = express();

app.listen(80,() => console.log("server running..."));
app.get('/alo',function (req,res){
    console.log(req.hostname+" "+req.method);
    res.send('Hello f*cking world');
});
app.get('/alo/:nome',function (req,res){
    console.log(req.hostname+" "+req.method);
    res.send('ola ' + req.params.nome);
});