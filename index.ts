import * as mongodb from 'mongodb';
const url = 'mongodb://localhost:27017/teste';

async function main() {
    try {
        const cli = await mongodb.MongoClient.connect(url,{useNewUrlParser: true});
        const db = cli.db('teste');
        console.log("conectou :D");
        const colecao = db.collection('exemplos');
        const result = await colecao.insertOne({name:'Jhon Doe'});
        console.log(`InsertId: ${result.insertedId}`);
                
    } catch(erro) {
        console.log(erro);
    }
}
main();
