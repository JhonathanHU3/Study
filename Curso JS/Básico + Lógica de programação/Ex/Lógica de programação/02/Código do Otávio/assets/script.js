// Capturar evento de submit do form
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        return setResultado('Peso inválido', false);
    };

    if (!altura) {
        return setResultado('Altura inválida', false);
    };

    const imc = getImc(peso, altura);
    const grauImc = getGrauImc(imc);

    const msg = `Seu IMC é ${imc} (${grauImc})`;

    setResultado(msg, true);
});

function getGrauImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
};

function criaP() {
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, eValido) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = " ";

    const p = criaP();

    if (eValido) {
        p.classList.add('valido');
    } else {
        p.classList.add('invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};