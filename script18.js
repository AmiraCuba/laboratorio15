const ul = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = "Hola, soy un span en una lista";
    li.appendChild(span);
    ul.appendChild(li);
}
document.body.appendChild(ul);