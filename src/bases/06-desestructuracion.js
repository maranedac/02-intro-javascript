console.log('hello');

//Desestructuracion
//Asignacion desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman'
}
const persona2 = {
    nombre: 'Mike',
    edad: 28,
    clave: 'ironman'
}

//no importa el orden de la desestructuracion
const {edad, clave, nombre} = persona; 

//para acceder a un objeto lo normal seria:
console.log(persona.nombre);
//con desestructuracion es:
console.log(nombre); //aqui llamamos a la var definida en la linea 14
// si tuviese otra variable definida como nombre entonces seria:
const {nombre:nombre2} = persona;
console.log(nombre2); 

const retornaPersona = (usuario) => {
    const {edad, clave, nombre} = usuario;
    console.log(edad, clave, nombre);
}
retornaPersona(persona);
//algo muy utilizado es la desestructuracion en los argumentos ej:
//asi como tambien se asignar valores por defecto
const useContext = ({edad, clave, nombre, rango ='soldado'}) => {
    console.log(nombre, rango);
    //otro uso, desde un objeto
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123,
            lng: -12.232
        }
    }
}

// const avenger = useContext(persona);
// const {nombreClave, anios, latlng} = useContext(persona);
//una forma de acceder a los valores de los objetos dentro de los objetos es:
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

//const {nombreClave, anios, latlng} = useContext(persona);
//otra forma de desestructurar objetos anidados, es definiendo latlng y posteriormente:
// const {lat, lng} = latlng;

console.log(nombreClave, anios);
// console.log(latlng);
console.log(lat, lng);

