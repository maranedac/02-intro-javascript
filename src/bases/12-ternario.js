//operadores ternarios

const activo = true;

// let mensaje = (activo) ? 'Activo' : 'Inactivo';
// let mensaje = (activo === true) ? 'Activo' : 'Inactivo';
// let mensaje = (!activo) ? 'Activo' : 'Inactivo'; //si hacemos la negacion, responde inactivo 

//forma corta de hacer un if:
// const mensaje = (activo === true) && 'Activo'; 
const mensaje = !activo && 'Activo'; //Si el activo es igual a true responde activo, si se hace la negacion (!) como aca, respondera false.

console.log(mensaje);

