const http = require ('http');
//creamos un servidor la parte de req es la solicitud http y res es la repsuesta http
const servidor = http.createServer((req,res)=>{
    //Procesar la solicitud
//    console.log('Solicitud Nueva');

    res.end('Hola, mundo ');//envia la respuesta al cliente
});

const puerto = 3000;

//Depues creamos un puerto para que la aplicacion
//o proceso especifico se ejecute en ese puerto



servidor.listen(puerto, ()=> {
    console.log(`El servidor esta escuchando en http://localhost:${puerto} ...`);
});