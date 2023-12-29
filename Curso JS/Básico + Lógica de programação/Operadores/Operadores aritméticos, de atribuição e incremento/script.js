/*  Aritméticos
    + Adição / Concatenação
    - / * Subtração, Divisão e Multiplicação em sequência
    ** Potenciação
    % Resto da divisão
*/

const num1 = 5;
const num2 = 2;
console.log(num1 ** num2); // Potenciação: 5 elevado a 2 = 25

const num3 = 17;
const num4 = 4;
console.log(num1 % num2); // O resto da divisão 17 / 4 é 1

let contador = 1;
contador++;
contador++;
contador++;
contador++;
console.log(contador); // incremento de +1 a variável

console.log(contador++);
console.log(++contador); // quando a atribuição é pós fixada o código é primeiro exibido e depois é realizada a conta

let contador2 = 10;
contador2--;
contador2--;
contador2--;
contador2--;
console.log(contador2); // operador de decremnento, que também pode ser pré-fixado ou pós-fixado

const passo = 2;
let contador3 = 0;


// Operadores de atribuição
contador3 = contador3 + passo;
contador3 = contador3 + passo;
contador3 += passo;
contador3 += passo;
contador3 += passo;
console.log(contador3);

contador3 *= 2;
console.log(contador3); // Multiplicação
contador3 **= 2;
console.log(contador3); // Potenciação


const num5 = parseFloat('7.9'); // usa-se parseFloat para tranformar uma string em um número de ponto flutuante
const num6 = parseInt('10'); // já parseInt para transformar uma string em número inteiro
const num7 = Number('10.1') // e a Number pode ser utilizada em qualquer tipo de número
console.log(num5 + num6 + num7); 

