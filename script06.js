let colores = ["red", "yellow", "blue"];
const divs = document.querySelectorAll("div");
let i = 0;
for (const div of divs) {
    div.style.backgroundColor = colores[i];
    i++;
}