const express = require('express');

const app = express();
/* ./ nos indica que no es un modulo principal como por ejemplo express */
const {infoCursos} = require('./cursos.js');

//Routing
//Metodo  Camino y segundo argumento una funcion flecha
app.get('/',(req,res) =>{
    res.send('Mi primer servidor. Cursos :D')
});

app.get('/api/cursos',(req,res) =>{
    res.send(infoCursos);
});

app.get('/api/cursos/programacion',(req,res) =>{
    res.send(infoCursos.programacion);
});
/*Parametros URL para poder manejar rutas de mejor forma 
en vez de escribir app.get(/api/cursos/programacion/python o javascript) 
usamos /api/cursos/programacion/:lenguaje */
app.get('/api/cursos/programacion/:lenguaje',(req,res) =>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }
    res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/matematicas/:tema',(req,res) =>{
    const tema = req.params.tema;
    const  resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`)
    }
    res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso =>curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));

});

app.get('/api/cursos/matematicas',(req,res)=>{
    res.send(infoCursos.matematicas);
});
// process.env.PORT se usa regularmente cuando la asignacion es en produccion
const PUERTO =process.env.PORT || 3000;

app.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en el PUERTO ${PUERTO}...`)
});