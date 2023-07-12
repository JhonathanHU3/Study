const form = document.querySelector('.form')
const avaliacao = document.querySelector('.avaliacao')


function myFunction(e) {
    e.preventDefault();
    const inputPeso = document.querySelector('.peso');
    const inputAltura = document.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    avaliacao.style.padding = '7px'

    if (!peso) {
        avaliacao.style.background = 'red';
        return avaliacao.innerHTML = `<p>Peso inválido<p>`;
    } else if (!altura) {
        avaliacao.style.background = 'red';
        return avaliacao.innerHTML = `<p>Altura inválida<p>`;
    } else {
        avaliacao.style.background = 'rgb(0, 255, 170)';
        const imc = peso / (altura ** 2);
        let resultado;
        if (imc < 18.5) {
            resultado = 'Abaixo do peso';
        } else if (imc < 25) {
            resultado = "Peso normal";
        } else if (imc < 30) {
            resultado = 'Sobrepeso';
        } else if (imc < 35) {
            resultado = 'Obesidade grau 1';
        } else if (imc < 40) {
            resultado = 'Obesidade grau 2';
        } else if (imc > 40) {
            resultado = 'Obesidade grau 3';
        };

        avaliacao.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)} (${resultado})<p>`;

    }
 
}
form.addEventListener('submit', myFunction);