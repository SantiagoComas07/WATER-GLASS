// ELEMENTS OF THE DOM

const nameProduct = document.getElementById("nameProduct");
const capacityProduct = document.getElementById("capacityProduct");
const costProduct = document.getElementById("costProduct");
const btnForm = document.getElementById("btn-form");
const $divContent = document.getElementById("content");
// Endpoint
const endPoint = "http://localhost:3000";

// Funcion get

export async function getInfo(nameReference) {
  let product;
  try {
    const response = await fetch(`${endPoint}/products`);
    const data = await response.json();
    for (let element of data) {
      if (nameReference == element.name) {
        product = element;
        return;
      }
    }
    content = `
    <p>name: ${nameProduct} </p>
    `;
    $divContent.innerHTML=content;  

  } catch (error) {
    console.log("error: ", error);
  }




}
