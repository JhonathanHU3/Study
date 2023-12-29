// Escreva uma função que recebe um número e retorna o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 5 e 3 = FizzBuzz
// Número não é divisível por 3 e 5 = retorna o número
// Checar se realmente é um númeroUse a função com números de 0 a 100.

function fizzBuzz(num) {
    if (isNaN(num)) return num;

        let fizzOrBuzz = ""
        if (num % 3 === 0) fizzOrBuzz += "Fizz" 
        if (num % 5 === 0) fizzOrBuzz += "Buzz"

    return fizzOrBuzz || num;
}


let i = 0;
do {
    let valor = fizzBuzz(i);
    console.log(i, valor);
    i++;
} while (i <= 100);