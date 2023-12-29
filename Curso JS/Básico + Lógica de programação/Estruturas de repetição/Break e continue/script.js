const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) { // continue serve para pular a iteração para a próxima
    if (numero === 2 || numero === 5) {
        console.log("Pulei um número")
        continue;
    }

    if (numero === 7) { // break faz com que a execução do loop seja encerrada e não passe para a próxima iteração
        console.log("Parei no 7")
        break
    }

    console.log(numero);
}

let i = 0;

do {
    let numero = numeros[i]
    if (numero === 2 || numero === 5) {
        console.log("Pulei um número")
        i++
        continue;
    }

    if (numero === 7) { // break faz com que a execução do loop seja encerrada e não passe para o proximo elemento
        console.log("Parei no 7")
        i++
        break
    }

    console.log(numero);
    i++
} while (i < numeros.length)