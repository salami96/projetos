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
    const schema = new mongoose.Schema({
        nome: {type: String, required: true},
        idade: {type: Number, required: true}
    });
    const Pessoa = mongoose.model('Pessoa',schema,'Pessoas');
    /*let doc = new Pessoa({nome:'gabriel', idade:22});
    //let res = await doc.save();
    //console.log(res._id);
    let query = Pessoa.where('idade').equals(22);
    console.log(await query.lean().exec());*/
    let doc = await Pessoa.findOne({nome:'gabriel'}).exec();
    if(doc){
        doc.set('idade',17);
        doc.set('nome','nicole');
        await doc.save();
    }
    //console.log('oi');
      
    
}
main();