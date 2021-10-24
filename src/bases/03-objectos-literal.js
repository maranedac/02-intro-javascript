console.log('hello');

//objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip: 123456,
        lat: 13.123,
        lng: 34.1234
    }
};

//fomras de imprimir un objeto
console.log(persona);
console.log({persona:persona}); //esta forma es para identificar el objeto al cual deseas acceder
console.table(persona); //de esta forma se ve como una tabla, mas ordenado

//operador spread ... 
//nos permite poder hacer una copia de un objeto
const persona2 = {...persona};
console.log(persona2);