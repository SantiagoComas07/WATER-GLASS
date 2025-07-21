import { notFound } from "../js/404";
import { renderHome } from "../js/home";
import { renderStore } from "../js/store";
import { renderWelcome } from "../js/welcome";



const routes ={
"/": {
    path: "src/views/welcome.html",
    setup: renderWelcome,
},
"/home": {
    path: "src/views/home.html",
    setup: renderHome,
},
"/store": {
    path: "src/views/store.html",
    setup: renderStore,
},
"/notFound": {
    path: "src/views/404.html",
    setup: notFound,
}
}


export async function renderRouter(){

    const app = document.getElementById("app");
    const path = window.location.pathname;
    const route = routes[path] || routes["/notFound"]

    try{
        const response = await fetch(route.path);
        const content = await response.text();

        if(!response.ok){
           throw new Error("Error en la peticion"); 
        }

        app.innerHTML="";
        app.innerHTML=content;

        if(route.setup){
            route.setup();
        }

    }catch(error){
        console.log("Hubo un error: ", error)
    }

}


export function redirecTo(path){
    window.history.pushState({},"",`${path}`);
    return renderRouter();
}

window.addEventListener("popstate", renderRouter);