import fetch from 'node-fetch';
async function teste() {
    try {
        let resp = await fetch('http://jsonplaceholder.typicode.com/posts/1',{
            method: 'PATCH',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({title: 'teste'})
        });
        if(resp.ok) console.log(await resp.json());
        console.log(resp.statusText);    
    } catch (error) {
        console.log("ERROR"+error);
        
    }
}
teste();