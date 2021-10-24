console.log('hello');

//template string, concatenar strings, 
//colocar variables dentro de strings. 
//Para utilizar esto se utiliza las comillas ``

const nombre = 'Michael';
const apellido = 'Araneda';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);