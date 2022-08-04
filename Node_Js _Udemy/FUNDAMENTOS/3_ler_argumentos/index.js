console.log(process.argv);


let val = (process.argv).slice(2);
console.log(val);

val = val[0].split('=');
console.log(val);

val = val[1];
console.log(val);