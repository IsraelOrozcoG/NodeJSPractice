const http = require ('http');
const cursos = require ('./cursos');

const servidor =http.createServer((req,res)=>{
     const {method} =req;

     switch(method){
        
            case 'GET':
                return manejarSolicitudGET(req,res);
            case 'POST':
                return manejarSolicitudPOST(req,res);
            default:
                res.statusCode = 501;
                console.log(`El metodo no puede ser manejado por el servidor : ${method}`);
        }
     
});

function manejarSolicitudGET (req,res){
    const path =req.url;

    console.log(res.statusCode); //200 OK
    /* Es algo comun comenzar los paths con la palabra api
    /api/cursos */
    if(path === '/'){
        res.statusCode = 200;
        res.writeHead(200,{'Content-Type':'application/json'})
        return res.end('Servidor creado con Node.js');
    }else if(path === '/cursos'){
        res.statusCode =200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path ==='/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode =404;
    return res.end('Recurso solicitado no existe');
}

function manejarSolicitudPOST(req,res){
    const path = req.url;

    if(path === '/cursos/programacion'){
        res.statusCode = 200;

        let cuerpo = '';
        req.on('data',contenido =>{
            cuerpo += contenido.toString();
        });

        req.on('end', () =>{
            console.log(cuerpo);
            console.log(typeof cuerpo);
            //Convertir un objeto de JS
            cuerpo = JSON.parse(cuerpo);

            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion')
        });
        return res.end ('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, ( )=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
})