const lista = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
li1.textContent = "Elemento 1"
li2.textContent = "Elemento 2"
li3.textContent = "Elemento 3"
li4.textContent = "Elemento 4"
li5.textContent = "Elemento 5"
const section = document.querySelector("section");
lista.appendChild(li1);
lista.appendChild(li2);
lista.appendChild(li3);
lista.appendChild(li4);
lista.appendChild(li5);
section.appendChild(lista);