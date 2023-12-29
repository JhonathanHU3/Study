let num1 = 12;
let num2 = 10.12914141241412;

// console.log(num1.toString() + num2); toString converte um número para string
// console.log(num1.toString(2)); caso adicionado um 2 no toString ele converte ele para número binario
// console.log(num2.toFixed(2)); toFixed define quantas casas decimais o seu número vai ter
// console.log(Number.isInteger(num2)); verifica se o número é inteiro e retorna um valor boolean
// console.log(Number.isNaN(num1 * "Jair")); isNaN confere se o valor recebido é um Not a Number

let num3 = 0.7;
let num4 = 0.1;
let num5 = num3 + num4; // o JS tem uma certa imprecisão com números decimais
console.log(num5);
// Para resolver isso podemos usar parseInteger, parseFloat ou Number
num5 = parseFloat(num5.toFixed(2));
console.log(num5); 



