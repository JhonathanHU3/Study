const nome = 'Jhonathan'; // string

const numero = 14 ; // number

let aluno; // undefined = não aponta pra local nunhuma na memória

const alunoSobrenome = null; // nulo = não aponta pra local nunhuma na memória, usado para definir propositalmente um valor como nulo.

const aprovado = true; // boolean = true, false (lógico)

console.log(typeof aprovado);

let a = 3;
const b = a + 1;
console.log(a, b);

a = 5;
console.log(a, b); // Quando trabalhamos com a atribuição de valores primitivos o valor de um é de fato copiado para o outro, não sendo uma referência do outro valor.