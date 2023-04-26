//console.log(process);
// Muestra el ambiente de ejecucion del usuario
//console.log(process.env);

//nos ayuda a pasar argumentos en forma de arreglo desde terminal
//usanfo en terminal node app.js 6 7
//[node, app.js,6,7]
// 0, 1, 2, 3
console.log(process.argv);
//en terminal
//PAth de node en el proyecto
//Path del archivo ejecutado
//Primer numero 6
//segundo numero 7

//para tener un numero finito de argumentos
for(let i = 2; i<process.argv.length;i++){
console.log(process.argv[i])
}
//con proces se puede saber cuanta memoria se esta utilizando
 console.log(process.memoryUsage());