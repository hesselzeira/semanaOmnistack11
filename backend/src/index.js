
// instancia a funcionalidade de express na aplicação
const express =  require('express');

// ./ pois é um arquivo e não um pacote
const routes = require('./routes');

//dá a aplicação os poderes de express
const app = express();

//comunica que estamos usando json 
app.use(express.json());
app.use(routes);
//métodos

// abre a porta localhost3333 (mas sem roda ainda)
//e aparece CANNOT GET
app.listen(3333);
