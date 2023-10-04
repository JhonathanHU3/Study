let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a,b,c);



const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, resto)

const [um, , tres, , , seis] = numeros;
console.log(um, tres ,seis)


const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[quatro]] = numbers;
console.log(numbers[1][0]);
console.log(quatro)
