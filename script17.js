const cantidadDiv = document.querySelectorAll("div").length;
const p = document.createElement("p");
p.textContent = "Cantidad de divs: " + cantidadDiv;
document.body.appendChild(p);