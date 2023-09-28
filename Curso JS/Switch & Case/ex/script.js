const h1 = document.querySelector('h1');
const data = new Date();

h1.innerHTML = formataData(data);

function formataData(data) {
    const diaSemana = data.getDay();
    const diaMes = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
    const mesTexto = getMes(mes);
    hora = getZero(hora);
    minuto = getZero(minuto);

    return `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano} ${hora}:${minuto}`
}

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            return ' '
    }
}

function getMes(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'março';
            return mesTexto;
        case 3:
            mesTexto = 'abril';
            return mesTexto;
        case 4:
            mesTexto = 'maio';
            return mesTexto;
        case 5:
            mesTexto = 'junho';
            return mesTexto;
        case 6:
            mesTexto = 'julho';
            return mesTexto;
        case 7:
            mesTexto = 'agosto';
            return mesTexto;
        case 8:
            mesTexto = 'setembro';
            return mesTexto;
        case 9:
            mesTexto = 'outubro';
            return mesTexto;
        case 10:
            mesTexto = 'novembro';
            return mesTexto;
        case 11:
            mesTexto = 'dezembro';
            return mesTexto;
        default:
            return ' '
    }
}

function getZero(num) {
    num < 10 ? num = `0${num}` : num;
    return num;
}