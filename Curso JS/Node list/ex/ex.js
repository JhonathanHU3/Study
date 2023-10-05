let paragrafos = document.querySelector(".paragrafos");
let listaP = paragrafos.querySelectorAll("p");
let backgroundColor = (getComputedStyle(document.querySelector('body'))).backgroundColor;

for(let p in listaP){
    listaP[p].style.backgroundColor = backgroundColor;
    listaP[p].style.color = 'white';
}