
const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=P57JjpAyJblb0CFBgFvVlC7rRH9TGugQ&limit=10`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        //retornara un array con objetos dentro los cuales tienen la siguiente data:
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);
    return gifs;
}

export default getGifs;
