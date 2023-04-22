import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData();

console.log(datos)
//Estamos creando el elemento newCard que biene desde el dom
datos.forEach(element => {
    const cardPais = dom.newCard(element);

    //Insertando los cards
    paises.appendChild(cardPais)
});

//vamos filtrar los paises por el imput
const search = dom.$('#buscar');

search.addEventListener('keyup', () => {
  let filtro = search.value;

  const filtered = filtro === '' ? datos : data.nombrePais(datos, filtro); 

  dom.mostrarPaises(filtered);
  console.log(filtro)
})

dom.mostrarPaises(datos);
console.log(search)






//Dark mode

const html = document.querySelector("html");

const Dark = document.querySelector('#switch');

Dark.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light";
})
