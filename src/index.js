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

const url = "https://platzi-avo.vercel.app/api/avo";

window
    .fetch(url)
    .then(response => response.json())
    .then((responseJson) => {
        const allItems = []
        responseJson.data.forEach(item => {
            const imagen = document.createElement("img");
            const title = document.createElement("h2");
            const price = document.createElement("div");

            const container = document.createElement("div")
            container.append(imagen, title, price);

            allItems.push(container)
        });

        document.body.append(...allItems);
    })
    .catch(err => console.log(`Ha ocurrido un error de tipo: ${err}`));
