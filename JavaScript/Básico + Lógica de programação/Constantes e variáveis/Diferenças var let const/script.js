// Let tem escopo de bloco
{//...bloco
    let nome = 'Jhonn';
}
// console.log(nome); vai gerar erro

// Var só tem escopo de função

function fala () {
    var nome = 'Jhonn';
    console.log(nome);
}

fala();
// console.log(nome); vai gerar erro

console.log(sobrenome);//quando utilizada o var a declaração de variárveis depois de alguma função retorna undefined
var sobrenome;