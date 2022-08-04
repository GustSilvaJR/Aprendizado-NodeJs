const express = require('express'); //Importando o modulo

const app = express(); // Aqui estou usando uma função do modulo

app.get("/courses", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    const body = request.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    const params = request.params;
    console.log(params);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 0"]);
});

app.patch("/courses/:id", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    return response.json(["Curso 1", "Curso 2", "Curso -1", "Curso 0"]);
});

app.delete("/courses/:id", (request, response) => { //Criando uma rota para uma requisição get. Para url que seja localhost:3333/
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 0"]);
});

app.listen(3333)