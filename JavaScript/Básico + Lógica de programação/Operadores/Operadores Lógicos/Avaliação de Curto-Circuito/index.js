/* 
FALSY: qualquer coisa diferente disso avalia em true
0
'' "" ``
null / undefined
NaN
*/


// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar = 'Jao';
// console.log(vaiExecutar && falaOi());


// const corUsuário = null; // imagine que em um site o usuário não escoleu nehnhuma cor
// const corPadrao = corUsuário || 'vermelho'; // vermelho é a cor padrão do sistema

// console.log(corPadrao);

const corUsuário = 'preto'; // imagine que em um site o usuário não escolheu a cor preta
const corPadrao = corUsuário || 'vermelho'; // vermelho é a cor padrão do sistema

console.log(corPadrao);
