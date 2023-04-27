let infoCurso = {
    "titulo":"Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas":[
        "JavaScript",
        "Node.js"
    ],
    "esPublico":true
};

//Cadena de caracteres en formato JSON
//Objeto -> Cadena de Caracteres
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

console.log(infoCursoJSON.titulo);

//Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);