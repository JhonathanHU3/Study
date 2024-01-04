const nome = 'Jhonathan';
const sobrenome = 'Pimenta';
const idade = 17 ;
const peso = 70 ;
const alturaEmMetros = 1.80;
let imc = 70 / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos e pesa', peso, 'Kg.');
console.log(`tem ${alturaEmMetros} metros de altura e o seu IMC é de ${imc}`); // <-- Template strings
console.log(nome, sobrenome, 'nasceu em', anoNascimento + '.');
