// "arguments" que sustenta todos os argumentos enviados(só para funções usando function())
function funcao() {
    let total = 0;
    for (let i of arguments) {
        total += i;
    }
    console.log(total);
}
funcao(10, 8);

// Caso argumentos não sejam enviados ao chamar a função, os valores irão ser undefined
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);

// Definindo um valor padrão para um parâmetro caso ele não seja enviado ou seja undefined
function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao3(3, undefined);

// Atribuição via desestruturação em objetos e arrays como parâmetros
function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao4({ nome: 'Jhonathan', sobrenome: 'Pimenta', idade: 17 });

//
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}
conta('-', 1, 10, 20, 30);
