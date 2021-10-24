//uso de FETCH API

const apiKey = '3rginb8RuDPaJdFILkFVWDHCm3b6byI0';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp =>{
//     // console.log(resp);
//     resp.json().then(data => {
//         console.log(data);
//     })
// })
//promesas en cadena, el resultado de cada then es pasado al siguiente then
peticion
.then(resp => resp.json())
// .then(data => console.log(data))
//con desestructuracion
// .then(({data}) => {
//     console.log(data.images.original.url)
// }) 
//con desestructuracion de la data:
.then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}) 
.catch(console.warn);