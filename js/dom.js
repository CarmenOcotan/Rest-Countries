//Manupulando el DOM

//Traer elemtento del DOM 
const $ = (selector) => document.querySelector(selector);

const paises = $('#paises')

const nPais = tag => document.createElement(tag);

//Creamos el elemnto

const newCard = (obj) => {
    const div = nPais('div');

    div.className = 'cardP card col border rounded-4 bg-body-tertiary';
    div.innerHTML = `
          <div class="img imgCard" type="button" data-bs-toggle="offcanvas" id="${obj}" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling ">
            <img class="w-100 h-100" src="${obj.flags.svg}" alt="${obj.name.common}">
          </div>
          <div class="p-3">
            <h3 class="">${obj.name.common}</h3>
            <p class="d-flex flex-column gap-2">
              <span>Population: ${obj.population.toLocaleString("en-US")}</span>
              <span>Region: ${obj.region}</span>
              <span>Capital: ${obj.capital}</span>
            </p> 
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


export default {
    newCard,
    $,
    mostrarPaises,
    regiones
}