const contenedor = document.getElementById("contenedor");
for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Párrafo " + i;
    contenedor.appendChild(p);
}
const segundoP = contenedor.querySelectorAll("p")[1];
segundoP.remove();