console.log('hello');

//Arreglos en JS
// const arreglo = new Array();
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
//no es recomendable utilizar push porque modifica el objeto principal. 
//Cuando se quiera insertar algo, mejor utilizar spread.

let arreglo2 = [...arreglo, 5];

//map: hace una copia del arreglo y permite pasarle una funcion para 
//iterar el contenido del arreglo con alguna accion, ya sea,
// una multiplicacion, suma, o concatenacion de texto
let arreglo3 = arreglo2.map(function (numero){
    return numero *2;
})


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);