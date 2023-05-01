const estatusPedido = () =>{
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
};

const miPedidoDePizaa = new Promise ((resolve,reject) =>{
    setTimeout(() =>{
        if(estatusPedido()){
            resolve('¡Pedido exitoso! Su pizza esta en camino');
        }else {
            reject('Ocurrio un error intente nuevamente');
        }
        }, 3000);
    });

    const manejarPedido = (mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    };

    const rechazarPedido = (mensajeDeError) =>{
        console.log(mensajeDeError);
    }

    miPedidoDePizaa.then(manejarPedido,rechazarPedido);

    /*Otra forma de  manejar las promesas */
    /*Encadenamiento de metodos Method Changing */
    miPedidoDePizaa
        .then((mensajeDeConfirmacion) =>{
            console.log(mensajeDeConfirmacion);
        })
        .then(null, (mensajeDeError) =>{
            console.log(mensajeDeError);
        });

    /*Otra forma de manejar el reject */

    /*
        .catch((mensajeDeError) =>{
            console.log(mensajeDeError);
        });
    */