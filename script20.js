const unaSection = document.querySelector("section");
const h2Nuevo = document.createElement("h2");
h2Nuevo.textContent = "Título nuevo";
unaSection.appendChild(h2Nuevo);
const pNuevo = document.createElement("p");
pNuevo.textContent = "Descripción generada";
unaSection.appendChild(pNuevo);
const ul2 = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    ul2.appendChild(li);
}
unaSection.appendChild(ul2);
const h2Original = unaSection.querySelector("h2");
if (h2Original && h2Original !== h2Nuevo) {
    h2Original.remove();
}