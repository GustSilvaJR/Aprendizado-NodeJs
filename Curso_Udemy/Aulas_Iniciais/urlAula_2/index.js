const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    const urlReq = url.parse(req.url, true);

    const queryParam = urlReq.query.name;

    console.log(queryParam, typeof queryParam)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')

    if(queryParam==undefined){
        res.end('<h1>Manda o nome aí vacilão</h1>');
    }else{
        res.end(`<h1> ${queryParam} ... Belo nome ><  </h1>`)
    }
})

server.listen(port, ()=>{
    console.log("To rodante!");
})