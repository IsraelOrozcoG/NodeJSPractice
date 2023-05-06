const express = require('express');

const routerProgramacion = express.Router();

app.get('/api/cursos/programacion',(req,res) =>{
    res.send(infoCursos.programacion);
});

/* Dos parametros URL */
app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso =>curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));

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
    /*http://localhost:3000/api/cursos/programacion/python?ordenar=vistas */
    if(req.query.ordenar === 'vistas'){
       return res.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)));
    }
        res.send(JSON.stringify(resultados));
    
    /*
    console.log(req.query.ordenar);
    res.send(JSON.stringify(resultados));*/
});
