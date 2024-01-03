// return
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('Jhonathan', 'Pimenta');
console.log(p1)

// -------------------------------

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

console.log(falaFrase('Olá')('mundo!'));


// ----------------------------
function  multiplica(multiplicador) {
    return (num) => {
        return num * multiplicador;
    };
}

const duplica = multiplica(2);
const triplica = multiplica(3);
const quadriplica = multiplica(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
