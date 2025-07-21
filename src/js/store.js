import { getInfo } from "/src/js/API.js";

export function renderStore() {
  console.log("Pagina store");
  const $name = document.getElementById("nameProduct");
  const $send = document.getElementById("btn-form");

  $send.addEventListener("click", (e) => {
    e.preventDefault();
    getInfo($name.value);
  });
}
