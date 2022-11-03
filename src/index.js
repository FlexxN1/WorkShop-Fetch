/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//---------------------------------------------------------------
//Reto hecho usando async/await y agregando un capturador de errores
/*const url = "https://platzi-avo.vercel.app/api/avo";
//web api
async function fetchData() {
  try {
      const response = await fetch(url),
      data = await response.json(),
      allItems = [];
    
      data.data.forEach((item) => {
        // create image
        const image = document.createElement("img");
        // create title
        const title = document.createElement("h2");
        // create price
        const price = document.createElement("div");
    
        const container = document.createElement("div");
        container.append(image, title, price);
    
        allItems.push(container);
      });
    
      document.body.append(...allItems)
  } catch(error){
    console.log(`Ha ocurrido un error de tipo: ${error}`)
  }
}

fetchData();*/


//-------------------------------------------
//con promesas



const urlBase = "https://platzi-avo.vercel.app";
const appNode = document.getElementById("app");


// internacionalizacion/Intl
 // 1.- Format fechas
 // 2.- Format monedas

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD"
  }).format(price)

  return newPrice;
}

window
    .fetch(`${urlBase}/api/avo`)
    .then(response => response.json())
    .then((responseJson) => {

        //almacenamos todo el proceso en memoria de JS para no renderizar el dom por cada iteracion
        const allItems = []
        responseJson.data.forEach(item => {
            // Crear imagen
            const imagen = document.createElement("img");
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            imagen.src = `${urlBase}${item.image}`;
            
            // Crear título
            const title = document.createElement("h2");
            title.className = "text-lg"
            title.textContent = item.name;

            // Crear precio
            const price = document.createElement("div");
            price.className = "text-gray-600"
            price.textContent = formatPrice(item.price);

            // Creamos un contenedor el título y el precio
            const priceAndTitle = document.createElement("div")
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

            // Metemos todo dentro de una tarjeta contenedora
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(imagen, priceAndTitle);


            // Metemos todo dentro del contenedor principal
            const contenedor = document.createElement("div");
            contenedor.appendChild(card);

            //ahora lo guardamos en la memoria de JS
            allItems.push(contenedor)
        });

        //ahora ya una vez terminado el proceso, ya podemos inyectar el resultado de los elementos al body
        appNode.append(...allItems);
    })
    .catch(err => console.log(`Ha ocurrido un error de tipo: ${err}`));
