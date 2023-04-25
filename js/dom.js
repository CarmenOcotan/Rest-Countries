//Manupulando el DOM

//Traer elemtento del DOM 
const $ = (selector) => document.querySelector(selector);

const paises = $('#paises')

const nPais = tag => document.createElement(tag);

//Creamos el elemnto

const newCard = (obj) => {
    const div = nPais('div');

    div.className = 'cardP card col border rounded-4 bg-body-tertiary';
    div.innerHTML = `<div type="button" data-bs-toggle="offcanvas" id="prueva" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling ">
          <div class="img imgCard" >
            <img class="w-100 h-100" src="${obj.flags.svg}" alt="${obj.name.common}">
          </div>
          <div class="p-3">
            <h3 class="">${obj.name.common}</h3>
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
    li.className =`text-nowraps regi`
    li.innerHTML = `<a class="dropdown-item" href="#">${elem}</a>`

    listaRegiones.appendChild(li)
  })
  
};

//Agregando las cards por separado
const cardIndividual = $('#infoPais');

const nElemento = (obj) => {
  const div = nPais('div')
  let [moneda] = Object.keys(obj.currencies);
  console.log(moneda.length)
  let [nombreNativo] = Object.keys(obj.name.nativeName);
/*   let border = Object.keys(obj.borders) */
  div.className = 'card';
  div.innerHTML =  `
  <div class="col-sm-12 col-lg-3 p-0">
    <img class="w-100 h-100" src="${obj.flags.svg}" alt="${obj.name.common}">
  </div>
  <div class="col col-lg-3 border w-100">
    <div class="row gap-3">
      <div class="col-sm-12  d-flex flex-column">
        <h3>${obj.name.common}</h3>
        <div class="d-flex flex-column">
          <span>Native Name: ${obj.name.nativeName[nombreNativo].official}</span>
          <span>Population: ${obj.population.toLocaleString("en-US")}</span>
          <span>Region: ${obj.region}</span>
          <span>Sub Region: ${obj.subregion}</span>
          <span>Capital: ${obj.capital}</span>
        </div>
      </div>
      <div class="col-sm-12 d-flex flex-column">
        <span>Top Level Domain: ${obj.tld}</span>
        <span>Currencies: ${obj.currencies[moneda].name} </span>
        <span>Lenguagues: ${Object.keys(obj.languages)}</span>
      </div>
      <div class="col d-flex flex-wrap gap-2">
        <h4>Border Countries: </h4>
        <span type="button" class=""> border</span>
      </div>
    </div>
  </div>`
  return div
  
}

const mInfoPais = (arr) => {

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