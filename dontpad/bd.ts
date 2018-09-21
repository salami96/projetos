import * as mongoose from 'mongoose';
import { text } from 'body-parser';
const url = 'mongodb://localhost:27017/dontpad';

interface pageInterf{
    titulo:string,
    text:string
}
interface pageDocument extends pageInterf,mongoose.Document{}

let Page:mongoose.Model<pageDocument>;
export async function main (){
    const cli = await mongoose.connect(url,{useNewUrlParser: true});
    console.log('conectou');
    const schema = new mongoose.Schema({
        title: {type: String, required: true},
        text: {type: String, required: true}
    });
    Page = mongoose.model<pageDocument>('Page',schema,'Pages');
    let doc = new Page({nome:'gabriel', idade:22});
    /*//let res = await doc.save();
    //console.log(res._id);
    let query = Pessoa.where('idade').equals(22);
    console.log(await query.lean().exec());
    let doc = await Pessoa.findOne({nome:'gabriel'}).exec();
    if(doc){
        doc.set('idade',17);
        doc.set('nome','nicole');
        await doc.save();
    }
    //console.log('oi');*/
      
    
}
export {Page};
