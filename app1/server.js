/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
// Importando modulo nativo do node js que por exemplo irá permitir que eu crie uma instancia do meu servidor
const http = require('http');

const { parse } = require('url');
const config = require('./config.json');
const fileHandler = require('./filehandler');

// Importando o metodo parse de um dos modulos nativos do node js

const { types } = config;
const { rootFolder } = config;
const { defaultIndex } = config;

// Exportando para uso dos demais arquivos da aplicação uma instancia do meu servidor, que a partir do http.createServer() é criada
const server = http.createServer();
module.exports = server;

// A partir dessa instancia, consigo criar eventos e definir o que vai ocorrer de acordo com os parametros passados
// Nesse caso, quando o servidor receber um request, deverá executar a função onRequest. O evento request, é predefinido pelo servidor http do nodejs
server.on('request', onRequest);

function onRequest(req, res) {
  // A partir do metodo parse, consigo extrair um json com partes estrategicas da minha url, como pathname que é o arquvio requisitado, host, port, search e outros
  let filename = parse(req.url).pathname;

  if (filename === '/') {
    filename = defaultIndex;
  }

  // Atribuo o caminho total até o arquivo que o usuario deseja acessar, sendo rootFolder vindo mdo meu arquivo config e representando minha pasta raiz e filename o nome do aruqivo que se deseja acessar
  const fullPath = rootFolder + filename;

  // Retorno a extensão do filename que o usuário pretende acessar, para descobrir o tipo do arquivo que será apresentado pelo browser
  const split = filename.split('.');
  const extension = split[split.length - 1];

  fileHandler(fullPath, (data) => {
    res.writeHead(200, {
      'Content-Type': types[extension] || 'text/plain',
      'Content-Length': data.length,
    });
    res.end(data);
  // eslint-disable-next-line no-unused-vars
  }, (err) => {
    res.writeHead(404);
    res.end();
  });
}
