 //ejecuta codigo luego de un numero especifico de milisegundos
 //1 s =1000 milisegundos
 //setTimeout(funcion,retraso,argumento);

 function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
 }
//higher-Order Programming pasar una funcion a otra funcion
 setTimeout(mostrarTema, 5000,'Node.js');

 function sumar (a,b){
    console.log(a+b);
 }

 setTimeout(sumar, 2000, 5 ,6);

 //primero se ejecuta la funcion sumar ya que el tiempo es menor


 //SetImmediate
 //Se usa para ejecutar codigo asincrono
 //en el proximo evento de node lo mas pronto posible

 //setImmediate(funcion,argumento1,argumento2);
 //La funcion se ejecuta despues del codigo sincrono
console.log('Antes de setImmediate()');

 setImmediate(mostrarTema, 'Node.js');

 console.log('Despues de setImmediate()');


 //Setinterval ()
 //Para ejecutar código un número infinito de veces con un retraso e
 //especifico de milisegundos
//para detener el programa dentro de terminal usa ctrl +c
 //setInterval(funcion,intervalo,arg,arg2);
 setInterval(sumar,1500,10,20);
 //setInterval(mostrarTema,2000,'Node.js');