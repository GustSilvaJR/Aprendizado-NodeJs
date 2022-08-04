//interno
const soma  = require('./soma.js');

//externo
const minimist = require('minimist');

let params = minimist((process.argv).slice(2));

console.log(params, typeof(params), Object.values(params), typeof(params['num1']));

console.log(soma.sum(params['num1'] , params['num2']));
