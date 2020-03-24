
// instancia a funcionalidade de express na aplicação
const express =  require('express');

//dá a aplicação os poderes de express
const app = express();

// cria rota padrão / 
// a função sempre passa dois parametros
app.get('/', (request, response) => {
    return response.json({ 
        evento: 'Semana Omnistack 11.0 ',
        aluno: 'Larissa Hessel'});
});

// abre a porta localhost3333 (mas sem roda ainda)
//e aparece CANNOT GET
app.listen(3333);
