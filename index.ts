//import * as mongodb from 'mongodb';
//const url = 'mongodb://localhost:27017/teste';
import * as mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/testemongoose';

/*async function main() {
    try {
        const cli = await mongodb.MongoClient.connect(url,{useNewUrlParser: true});
        const db = cli.db('teste');
        console.log("conectou :D");
        const colecao = db.collection('exemplos');
        //const result = await colecao.insertOne({fruta:'chuchu'});
        //console.log(`InsertId: ${result.insertedId}`);
        const cursor = colecao.find({});
        let array = await cursor.toArray();
        console.log(array);
        let res = await colecao.updateOne({name:'nicole'},{$set:{idade:19}});
        console.log(res.result);
        let resRemov = await colecao.deleteOne({fruta:{$exists:true}});
        console.log("remoção: "+resRemov);
        await cli.close;               
    } catch(erro) {
        console.log(erro);
    }
}
main();
*/

async function main (){
    const cli = await mongoose.connect(url,{useNewUrlParser: true});
    console.log('conectou');
    
}
main();