const EventEmitter = require ('events');
// En este caso es una clase por eso se hizo el cambio de nombre
const emisorProductos = new EventEmitter();
//se crea un objeto de tipo EventEmitter
//Event Handler
emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Se realizo una compra $${total}`);
    console.log(`Numero de productos $${numProductos}`);
});

emisorProductos.emit('compra', 500 ,5);