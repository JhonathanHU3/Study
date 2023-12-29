// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacao = 999;
const nivelUsuario = pontuacao >= 1000 ?    'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Black';
console.log(nivelUsuario, corPadrao);