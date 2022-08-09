const { response } = require('express');
const express = require('express'); //Importando o modulo
const {v4 : uuidv4} = require('uuid');

const app = express(); // Aqui estou usando uma função do modulo
const customers = [];

app.use(express.json()); //Utilizando um midlleware para conseguir receber Json

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - []
 */

app.post("/account", (request, response) => {
    const { cpf, name } = request.body; //Utilizando desestruturação
    const id = uuidv4();

    //Utilizando a função some para iterar em meu array de objetos representando contas cadastradas para verificar se há algum cpf ja cadastrado
    const customerAlreadyExists = customers.some( 
        (customer) => customer.cpf == cpf
    );
    
    //console.log(customerAlreadyExists, cpf, customers)

    if(customerAlreadyExists){
        return response.status(400).json({error:"Customer already exists!"});
    }

    customers.push({
        cpf,
        name,
        id,
        statement:[]
    });

    response.status(201).send(); //Retornando status 201, que é quando um dado foi salvo

});

app.get("/statement/:cpf", (request, response) => {

    const { cpf } = request.params;

    console.log("Entrei");
    customer = customers.find((customer) => customer.cpf === cpf);


    return response.json(customer.statement);
});

app.listen(3333);
































    //app.get("/courses", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    //     const query = request.query;
    //     console.log(query);
    //     return response.json(["Curso 1", "Curso 2", "Curso 3"]);
    // });
    
    // app.post("/courses", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    //     const body = request.body;
    //     console.log(body);
    //     return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
    // });
    
    // app.put("/courses/:id", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    //     const params = request.params;
    //     console.log(params);
    //     return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 0"]);
    // });
    
    // app.patch("/courses/:id", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    //     return response.json(["Curso 1", "Curso 2", "Curso -1", "Curso 0"]);
    // });
    
    // app.delete("/courses/:id", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    //     return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 0"]);
    // });