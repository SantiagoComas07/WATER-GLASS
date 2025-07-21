import { redirecTo, renderRouter } from "./src/router/router";


window.addEventListener("DOMContentLoaded", renderRouter);

//Here i get all elements with the class nav-link
document.querySelectorAll(".nav-link").forEach(link => {
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
  
  