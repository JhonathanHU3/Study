// Closure é basicamente a capacidade de uma função reconhecer o que há no seu escopo léxico e poder utilizar dentro da mesma, 
// as variáveis que estão atribuídas dentro do escopo léxico;
function returnFunction() {
    // Escopo léxico da função anônima abaixo
    const nome = 'Jhonathan';
    return function() {
        return nome;
    }
}
console.log(returnFunction()()); 
