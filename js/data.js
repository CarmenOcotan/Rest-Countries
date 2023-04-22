// Interactuando con la API

const getData = async () => {
    const URL = 'https://restcountries.com/v3.1/all';
    // Obytener los datos del archivo 'stays.json'
    const data = fetch(URL)
      .then(response => response.json())
      .then( json => json)
  
    return data;
  
  }

//Mandamos a traer los datos por pais
const nombrePais = (arr, filtro) => {
  
    let filtered = arr.filter( elem => {
      return elem.name.common.toLowerCase().includes(filtro.toLowerCase())
    })
    return filtered
}


export default {
    getData,
    nombrePais,
}
  

