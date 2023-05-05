const express = require('express');

const app = express();
/* ./ nos indica que no es un modulo principal como por ejemplo express */
const {infoCursos} = require('./cursos.js');

//Routing
//Metodo  Camino y segundo argumento una funcion flecha
app.get('/',(req,res) =>{
    res.send('Mi primer servidor. Cursos :D')
});
// process.env.PORT se usa regularmente cuando la asignacion es en produccion
const PUERTO =process.env.PORT || 3000;

app.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en el PUERTO ${PUERTO}...`)
});