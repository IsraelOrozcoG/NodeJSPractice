const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log('===>req (solicitud)');
    //console.log(req);
    //muestra la url
    console.log(req.url);
    //muestra el tipo de metodo usado
    console.log(req.method);
    //muestra las cabeceras de http
    console.log(req.headers);

    console.log('==> res (respuesta)');
    //console.log(res);
    console.log(res.statusCode);
    //res.statusCode = 404;
    console.log(res.statusCode);
    //para configurar un elemento de la cabecera y el formato
    //en el cual se envian las respuestas y solicitudes es en formato json
    res.setHeader('content-type', 'application/json');
    //para ver los elementos de la cabecera
    console.log(res.getHeaders());
    res.end('Hola mundo');
});

const puerto = 3000;

servidor.listen(puerto, () =>{
    console.log(`El servidor se esta escuchando en el puerto ${puerto} . . .`);
});