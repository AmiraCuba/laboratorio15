const articulo1 = document.querySelector("article");
const clonArticulo1 = articulo1.cloneNode(true);
const main = document.querySelector("main");
main.appendChild(clonArticulo1);