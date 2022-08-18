const app = require('express');

app.length('/', (request, response) => response.json('Hello World!'));
