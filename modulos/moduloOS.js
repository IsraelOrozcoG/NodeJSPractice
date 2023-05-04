//Se necesita inicializar el modulo ya que no esta de forma global
const os = require('os');

//
console.log(os.type());

//informacion sobre el directorio principal
console.log(os.homedir());


//informacion del ordenador sobre el tiempo usado
console.log(os.uptime());

//informacion del usuario
console.log(os.userInfo());