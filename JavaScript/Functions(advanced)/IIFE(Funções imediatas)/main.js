// IIFE -> Immediately invoked function expression
// It's a function that will be executed immediately when invoked, being used to escape the global scope.
const nome = 'Jair';

(() => {
    const nome = 'Jhonathan';
    console.log(nome);
})();

console.log(nome);
