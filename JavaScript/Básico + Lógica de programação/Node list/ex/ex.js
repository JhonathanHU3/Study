let paragrafos = document.querySelector(".paragrafos");
let listaP = paragrafos.querySelectorAll("p");
let bg = (getComputedStyle(document.querySelector('body'))).backgroundColor;

for(let p in listaP){
    listaP[p].style.backgroundColor = bg;
    listaP[p].style.color = 'white';
}