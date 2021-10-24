//promesas - promises
//una vez que finaliza todo lo sincrono, va a ejecutar el resutlado de las promesas
//la promesa recibe dos parametros, resulto o rechazado, estas variables da igual su nombre
import {getHeroesById} from "./bases/08-imports-exports";

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
        
//         const heroe = getHeroesById(2);
//         console.log(heroe);
//         resolve(heroe);
//         //aqui podemos definir ambos casos, resolve y reject.
//         //reject('no se pudo encontar el heroe');
//     }, 2000)
// });

// //promises tiene 3 metodos, catch, finally, then
// //then es cuando culmina correctamente
// //catch cuando hay un error.
// //finally es lo ultimo que se ejecuta, independiente si resulta bien o mal.
// promesa.then(()=>{
//     console.log('then de la promesa');
// })
// .catch(err => console.warn(err)); //aqui se enviaria a imrpimir el reject definido

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroesById(id);
            // resolve(p1);
            if(p1 === undefined){
                reject('Heroe no encontrado');
            }else{
                resolve(p1);
            }
            //otra solucion, si heroe existe, resuelve.
            // if(p1){
            //     resolve(p1);
            // }else{
            //     reject('Heroe no encontrado');
            // }
        }, 2000)

    });
    // return promesa; se puede retornar asi tb
}

getHeroeByIdAsync(10)
// .then(heroe => console.log('Heroe', heroe)) forma larga.
.then(console.log)
// .catch(err => console.warn(err));
.catch(console.warn);