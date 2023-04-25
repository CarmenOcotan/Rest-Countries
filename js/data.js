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

//Traemos los datos de las regiones
const regi = (data) => {
  let unico = data.map(elem => elem.region);
  unico = new  Set(unico);
  unico =[...unico];
  return unico
}

const filtrar = (arr, filtro) => {
  let filtered = arr.filter( elem => elem.region === filtro)
  
  return filtered
};

const paisxnombre =(arr, filtro) => {
  let unoSolo = arr.filter(elem => elem.name.common == filtro)
  
  return unoSolo

}

export default {
    getData,
    nombrePais,
    regi,
    filtrar,
    paisxnombre
}
  

