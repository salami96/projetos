import * as mongodb from 'mongodb';
const url = 'mongodb://localhost:27017/teste';

async function main() {
    try {
        const cli = await mongodb.MongoClient.connect(url,{useNewUrlParser: true});
        const db = cli.db('teste');
        console.log("conectou :D");
        const colecao = db.collection('exemplos');
        const result = await colecao.insertOne({fruta:'chuchu'});
        console.log(`InsertId: ${result.insertedId}`);
        const cursor = colecao.find({})
        while(await cursor.hasNext()){
            let documento = await cursor.next();
            console.log(documento);
        }
    } catch(erro) {
        console.log(erro);
    }
}
main();
