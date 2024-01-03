// Basically the lexicon scope is what protects a function and makes it use the neighborhood data and never use the variables assigned by other functions(let & const)
const nome = 'Jhonathan';

function sayName() {
    console.log(nome);
}

function useSayName() {
    const nome = 'Jhonathan2';
    sayName();
}
useSayName();
