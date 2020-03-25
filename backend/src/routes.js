const express = require('express');

// desacoplando as rotas do express nessa nova variavel
const routes = express.Router();

// cria rota padrão / 
// a função sempre passa dois 

routes.post('/users', (request, response) => {
    const body = request.body;

    // para exibir no terminal
    console.log(body);

    return response.json({ 
        evento: 'Semana Omnistack 11.0 ',
        aluno: 'Cleiton Hessel'});
});

// exportando variável  para outro arquivo
module.exports = routes; 