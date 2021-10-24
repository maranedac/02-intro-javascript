console.log('hello');

//funciones en JS
//a traves de una constante
// const saludar = function (nombre){
//     return `hola ${nombre}`;
// }

//funciones flechas o lambda
const saludar =  (nombre) =>{
    return `hola ${nombre}`;
}
//si solo retorna un valor se puede simplificar a :
const saludar2 =  (nombre) => `hola ${nombre}`;
const saludar3 =  () => `hola world`;


console.log(saludar('goku'));
console.log(saludar2('vegeta'));
console.log(saludar3());

// const getUser = () =>{
//     return {
//         uid: 'ABC123',
//         username: 'El_papi1502'
//     }
// }
//la funcion anterior se puede simplificar especificando () que indicara que va a retornar un objeto 
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502'
});

console.log(getUser());

//tarea
//1. Transformen a una funcion de felcha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

//resolucion:
const getUserActive = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
console.log('mi fun '+ getUserActive);