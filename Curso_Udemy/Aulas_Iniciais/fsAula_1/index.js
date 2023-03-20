import { createServer } from 'http';
import { readFile } from 'fs';

const port = 3000;

const server = createServer((req, res) =>{

readFile('./data.txt', (err, data) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write(data)
    return res.end()
})
});

server.listen(port, ()=>{
    console.log('Estou rodando');
});