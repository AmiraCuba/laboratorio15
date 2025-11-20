const contenedor = document.querySelector("div");
const parrafos = Array.from(document.querySelectorAll("p"));
parrafos.sort((a, b) => a.textContent > b.textContent ? 1 : -1);
parrafos.forEach(p => contenedor.appendChild(p));