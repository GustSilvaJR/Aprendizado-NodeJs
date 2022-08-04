const fileSystem = require('fs'); // Importando módulo nativo do NodeJS chamado FileSystem. Ele é utilizado para manipulação de arquivos

fileSystem.readFile('doca.txt', 'utf8', function result(err, data){  //Utilizando um método do módulo fileSystem para ler um arquivo. O método pode receber 3 parametros, o caminho para o arquivo, o encoding, e uma função que vá tratar o retorno do método
    err ? console.log("Arquivo Inválido : "+err) : console.log("Dados: "+ data);
});
