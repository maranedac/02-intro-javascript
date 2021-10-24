// import {heroes} from './data/heroes';
//import {heroes} from './data/heroes'; //escribes imp y te autocompleta

//escribiendo la variable exportada directamente, si no te aparece reabre el archivo que exporta la variable
// import heroes, {owners } from "../data/heroes"; 
import heroes from "../data/heroes"; 

//se puede importar la otra variable owners de forma individual, definiendola entre {} ej; import heroes {owners} from blabla.

// const getHeroesById = (id) => {
//     return heroes.find((heroe) => {
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     }) ;
// }

// const getHeroesById = (id) => {
//     return heroes.find((heroe) => heroe.id ===id) ; //funcion flecha callback
// }
export const getHeroesById = (id) => heroes.find((heroe) => heroe.id ===id) ; //funcion flecha callback

console.log(getHeroesById(2));

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)

console.log(getHeroesByOwner('Marvel'));
