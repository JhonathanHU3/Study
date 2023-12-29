// Exercício: escrever uma função que recebe dois números e retorna o maior deles

function returnMax(num1, num2) {
    return Math.max(num1, num2);
}

function returnMax2(num1, num2) {
    return (num1 > num2) ? num1 : num2
}

const returnMax3 = (num1, num2) => Math.max(num1, num2);

console.log(returnMax3(23, 44));