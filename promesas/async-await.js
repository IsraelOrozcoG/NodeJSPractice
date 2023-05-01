function ordenarProducto(producto) {
    return new Promise ((resolve,reject) =>{
        console.log(`Ordenando: ${producto}`);
        setTimeout(() =>{
            if(producto === 'taza') {
                resolve('Ordenando una Taza ...');
            }else{
                reject('Este producto no esta disponible actualmente.');
            }
        }, 2000);
    })
}

function procesarPedido (respuesta){
    /*No necesariamente reuqiere de los 2 parametro resolve y reject tambien si es solo 1 no 
    necesita estar rodeado de () */
    return new Promise(resolve =>{
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{
            resolve('Gracias por tu compra. Disfruta de tu producto');
        },2000)
    });
}
/* Encadenar promesas */
ordenarProducto('taza')
    .then(respuesta =>{
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
     .then(respuestaProcesada =>{
        console.log(respuestaProcesada);
     })

     .catch(error =>{
        console.log(error)
     });

     //Equivalencia a async await

     async function realizarPedido(producto){
        try{
            /*Usamos await antes de los procesos asincronos para 
            que los procesos se vuelvan sincronos esperar la respuesta */
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
        }catch(error){
            console.log(error);
        }
     }

    realizarPedido('taza');