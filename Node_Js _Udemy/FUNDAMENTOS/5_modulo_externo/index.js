let minimist = require('minimist'); //Consigo pegar argumentos pela minha lista de comandos, e criar um array associativo por exemplo

let paramsOriginal = process.argv.slice(2);
let params = minimist(process.argv.slice(2)); //Retorna um objeto que dentro dele consta um array associativo das informações passadas

console.log(params, paramsOriginal);

