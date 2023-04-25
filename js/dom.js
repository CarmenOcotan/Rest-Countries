//Manupulando el DOM

//Traer elemtento del DOM 
const $ = (selector) => document.querySelector(selector);

const paises = $('#paises')

const nPais = tag => document.createElement(tag);

//Creamos el elemnto

const newCard = (obj) => {
    const div = nPais('div');
    div.className = 'cardP card col border rounded-4 bg-body-tertiary nun';
    div.id = obj.name.common;
    div.innerHTML = `<div type="button" data-bs-toggle="offcanvas" id="prueva" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling ">
          <div class="img imgCard" >
            <img class="w-100 h-100 img-fluid" src="${obj.flags.svg}" alt="${obj.name.common}">
          </div>
          <div class="p-3">
            <h3 class="nu">${obj.name.common}</h3>
            <p class="d-flex flex-column gap-2">
              <span>Population: ${obj.population.toLocaleString("en-US")}</span>
              <span>Region: ${obj.region}</span>
              <span>Capital: ${obj.capital}</span>
              
            </p> 
          </div>
          </div>`
    return div;
}
//Mostraremos los paises en cada card

const mostrarPaises = (arr) => {

    paises.innerHTML = '';
  
    arr.forEach( element => {

      // Creamos el card con la informacion del elemento
      const card = newCard(element);
    
      // Agregamos el card al elemento products
    paises.appendChild(card);
    })
  }

//Agrego las regiones
const regiones =(region1) => {
  const listaRegiones = $('#Regiones');
  region1.forEach(elem =>{
    const li = nPais('li');
    li.className =`text-nowraps regi `
    li.innerHTML = `<a class="dropdown-item" href="#">${elem}</a>`

    listaRegiones.appendChild(li)
  })
  
};

//Agregando las cards por separado
const cardIndividual = $('#infoPais');

const nElemento = (obj) => {
  const div = nPais('div')
  let [nombreNativo] = Object.keys(obj.name.nativeName);
  let currencies=Object.keys(obj.currencies);
    currencies=currencies[0]
  div.className = ' row mt-4 prueva nun';
  div.innerHTML =  `
  <div class="col-sm-12 col-md-6 p-0">
    <img class="w-100 h-100 img-fluid" src="${obj.flags.svg}" alt="${obj.name.common}">
  </div>
  <div class=" row col-12 col-md-6 p-0 m-0 ">
      <div class="col-12 col-md-6 mt-2">
        <h3 class="nu">${obj.name.common}</h3>
        <div class="d-flex flex-column">
          <span>Native Name: ${obj.name.nativeName[nombreNativo].official}</span>
          <span>Population: ${obj.population.toLocaleString("en-US")}</span>
          <span>Region: ${obj.region}</span>
          <span>Sub Region: ${obj.subregion}</span>
          <span>Capital: ${obj.capital}</span>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 d-flex flex-column">
        <span>Top Level Domain: ${obj.tld}</span>
        <span>Currencies: ${obj.currencies[currencies].name}</span>
        <span>Lenguagues: ${Object.keys(obj.languages)}</span>
      </div>
      <div class=" text-wrap gap-2">
        <span type="button" class="">Borders Countries: </span>
      </div>
  </div>`
  
  return div
  
}
const mInfoPais = (arr, datos) => {

  cardIndividual.innerHTML = '';
  
  arr.forEach( element => {
      // Creamos el card con la informacion del elemento
    const card = nElemento(element);
    
      // Agregamos el card al elemento products
    cardIndividual.appendChild(card);

  })
}


export default {
    newCard,
    $,
    mostrarPaises,
    regiones,
    mInfoPais
}