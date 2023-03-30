import { createServer } from 'http';
import { readFile, writeFile } from 'fs';
import { parse } from 'url'; 


const port = 3000;


const server = createServer((req, res) => {
    const url = parse(req.url, true); 
    const name = url.query.name;

    if(!name){
        readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            return res.end();
        })
    }else{
        writeFile('log.txt', name, (err,data)=>{
            res.writeHead(302, {
                Location: '/',
            })

        }, ()=>{
            console.log("Arquivo escrito!");
        })
    }
    
})

server.listen(port, ()=>{
    console.log("Rodando");
})