function saudacao(nome) {
    return `Bom dia ${nome}!`;
};

let varr = saudacao('Estevo');
console.log(varr);

//-------------------------------------------------
function soma(x = 1, y = 1) {
    return x + y;
};

console.log(soma());
console.log(soma(3, 5));


//-------------------------------------------------
const raiz = function(n) {
    return n ** 0.5
};

console.log (raiz(9))


//-------------------------------------------------
const raiz2 = n => n ** 0.5

console.log (raiz(16))