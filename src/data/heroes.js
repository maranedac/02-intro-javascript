//hay otra forma de exportar sin necesidad de declarar una constante o variable, 
//esto se hace con con default ej:
//export default = []
//posteriormente para importar, simplemente se hace import elnombrequedesees from './datas/heroes'
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


//formas de exportar, individual o grupal
export const owners = ['DC', 'Marvel'];
// const owners = ['DC', 'Marvel'];

//otras formas de exportar:
export default heroes;
// export {
//     heroes,  //tambien aqui se puede definir por defecto, seria "heroes as default,"
//     owners
// }

