const http = require ('http');

const server = http.createServer((req,res)=>{
    res.end('Estoy intentando usar  NodeJS sin reiniciar con Nodemon');
});

const PUERTO = 3000;

server.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});