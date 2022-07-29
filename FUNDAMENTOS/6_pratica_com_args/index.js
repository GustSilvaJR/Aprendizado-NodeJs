//interno
const soma  = require('./soma.js');

//externo
const minimist = require('minimist');

let params = minimist((process.argv).slice(2));

console.log(params, typeof(params), Object.values(params), params[0], params[1], params[2]);

//console.log(soma.sum(params[0]['num1'] + params[1]['num2']));
