// Pár ou ímpar?
let numeros = [0,1,2,3,4,5];

numeros.forEach((numero) => {
    (numero % 2) == 0 ? console.log(`${numero} é par`) : console.log(`${numero} é ímpar`);
});

// Mostrar nomes 
let nomes = ['Ian', 'Henrique', 'Jhonathan'];
nomes.unshift('Victor');

nomes.forEach((nome) => console.log(nome));