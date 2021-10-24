//Async - AWAIT
//los async siempre deben ir con un try catch para capturar errores
const getImagen = async() => {
    try{
        const apiKey = '3rginb8RuDPaJdFILkFVWDHCm3b6byI0';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json(); //se desestructura la respuesta del json
        const {url} = data.images.original;    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(error){
        console.error(error);
    }
    
    
}

getImagen();

// console.log(data);
//     const url = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;

// getImagen
// .then(({data}) => {
//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img);
// }) 
// .catch(console.warn);