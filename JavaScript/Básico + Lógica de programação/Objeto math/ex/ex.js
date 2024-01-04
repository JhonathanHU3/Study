const num1 = Number(prompt('Digite um número: '));
const titulo = document.getElementById('title');
const texto = document.getElementById('text');

titulo.innerHTML = num1;
texto.innerHTML= `<h3>A raiz quadrado desse número é: ${num1 ** 0.5}</h3>`;
texto.innerHTML += `<h3>Esse número é inteiro : ${Number.isInteger(num1)}</h3>`;
texto.innerHTML += `<h3>Esse número é um NaN: ${Number.isNaN(num1)}</h3>`;
texto.innerHTML += `<h3>Número arrendondado para baixo: ${Math.floor(num1)}</h3>`;
texto.innerHTML += `<h3>Número arrendondado para cima: ${Math.ceil(num1)}</h3>`;
texto.innerHTML += `<h3>Número com apenas duas casas decimais: ${num1.toFixed(2)}</h3>`;

