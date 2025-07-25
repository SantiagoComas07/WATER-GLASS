import { deleteProduct, getData, getOneProduct, postData, showCard } from "./src/js/API";
import { redirecTo, renderRouter } from "./src/router/router";

//Logic

window.addEventListener("DOMContentLoaded", async () => {
  await renderRouter();

  //HTML elements

  const $divContent = document.getElementById("content");

  const dato = await getData();
  showCard(dato, $divContent);
  const $btnSend = document.getElementById("btn-form");

  $btnSend.addEventListener("click", async (event) => {
    event.preventDefault();

    const $nameProduct = document.getElementById("nameProduct");
    const $capacityProduct = document.getElementById("capacityProduct");
    const $costProduct = document.getElementById("costProduct");

    // Solo post
    const sendProduct = {
      name: $nameProduct.value,
      capacity: $capacityProduct.value,
      cost: $costProduct.value,
    };

    console.log($nameProduct.value);

    await postData($nameProduct, $capacityProduct, $costProduct, sendProduct);
  });

//Here i have the logic to delete a product
const deleteButtons = document.querySelectorAll(".btn-delete");
// I use forEach for apply events to all buttons 
deleteButtons.forEach(btn => {
  //Here i have the event and i use a async arrow function to give time to the fucntion to advance 
  btn.addEventListener("click", async (event) => {
    const id = event.target.getAttribute("data-id");
    console.log(id)
    await deleteProduct(id);
    
  });
});

const editButtons = document.querySelectorAll(".btn-edit");

editButtons.forEach(btn =>{

  btn.addEventListener("click", async (event) => {
    // I use the information recolected of the  HTML elements
    const $nameProduct = document.getElementById("nameProduct");
    const $capacityProduct = document.getElementById("capacityProduct");
    const $costProduct = document.getElementById("costProduct");
    const id = event.target.getAttribute("data-edit-id");
    console.log(id);
    //Solo edit  
    const answer = await getOneProduct(id);

      if(!answer.ok){

        console.error("Hay un error con el javascript");

      }
     $nameProduct.value = answer.name;
     $capacityProduct.value = answer.capacity;
     $costProduct .value = answer.cost;

     $btnSend.addEventListener("click", async(event) => {
      event.preventDefault();  

     const editProduct = {
      id:id,
      name: $nameProduct.value,
      capacity: $capacityProduct.value,
      cost: $costProduct.value,
    };
    await updateProduct(id, editProduct);
    });


  });

})

});




//Here i get all elements with the class nav-link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Here i avoid that the page reload
    e.preventDefault();
    //Here i get the value of the atribute href
    const path = link.getAttribute("href");
    //Here i tell it, Hey the path changed, i need that you tell to renderRouter
    //to load the view.
    redirecTo(path);
  });
});
