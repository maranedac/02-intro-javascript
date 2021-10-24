console.log('hello');

//Desestructuracion de arreglos
//Asignacion desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const personajes = ['Goku', 'vegeta', 'trunks'];

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numero] = retornaArreglo();
console.log(letras, numero);

const useState = (valor) =>{
    return [valor, () => {console.log('hola mundo')}];
}
// const arr = useState('goku');
// arr[1]();

//tarea
// 1. El primer valor de arr, se llamara nombre
// 2. segundo valor se llamara setnombre 

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();