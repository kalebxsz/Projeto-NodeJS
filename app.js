// Importar módulo express
const express = require('express')

// APP
const app = express();

// Rota Hello World
app.get('/', (req, res)=> {
    res.write('O colorado joga hoje as 19h');
    res.end();
});



// Servidor
app.listen(8080);