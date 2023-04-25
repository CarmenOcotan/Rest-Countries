import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData();
console.log(datos)
const region2 = data.regi(datos)

dom.regiones(region2)

console.log(region2)

//Estamos creando el elemento newCard que biene desde el dom
datos.forEach(element => {
    const cardPais = dom.newCard(element);

    //Insertando los cards
    paises.appendChild(cardPais)
});

//vamos filtrar los paises por el imput- la info la traemos del data
const search = dom.$('#buscar');

search.addEventListener('keyup', () => {
  
  let filtro = search.value;
  const filtered = filtro === '' ? datos : data.nombrePais(datos, filtro); 
 
  dom.mostrarPaises(filtered);
  console.log(filtro)
})
dom.mostrarPaises(datos);

//Agregue una funcion para limpiar la info que intertamos en el input
const limpiar = dom.$('#limpiar');

limpiar.addEventListener('click', () => {
  search.value = '';
  dom.mostrarPaises(datos);
});

//Filtro por region

//llamamos los paises por region 
const regionPais = [...dom.$('#Regiones').children]
regionPais.forEach(countries => {

  countries.addEventListener('click', () => {
    let filtro = countries.textContent;
    const filtered = filtro === '' ? datos : data.filtrar(datos, filtro);
    console.log(filtered);
    dom.mostrarPaises(filtered)}
  )
  
})

const paisMostrar = document.querySelectorAll('.card');
console.log(paisMostrar)
paisMostrar.forEach(CadaUno =>{
// console.log(paisMostrar)
  CadaUno.addEventListener('click', () => {
  let filtro = CadaUno.id;
  console.log(CadaUno);

  const filtered = filtro === '' ? datos : data.paisxnombre(datos, filtro);
    dom.mInfoPais(filtered)
    console.log('hola')
  })
})

//Dark mode

const html = document.querySelector("html");

const Dark = document.querySelector('#switch');

Dark.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light";
})

//Dark mode offCanvas

const html2 = document.querySelector("html");

const Dark2 = document.querySelector('#switch2');

Dark2.addEventListener("click", () => {
  html2.dataset.bsTheme = html2.dataset.bsTheme == "light" ? "dark" : "light";
})
