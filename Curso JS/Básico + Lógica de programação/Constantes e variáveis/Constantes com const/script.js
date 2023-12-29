/*  Não podemos criar constantes com palavras reservadas da linguagem ex: const if = 110
    É recomendado que constantes tenham nomes significativos
    Não podemos começar o nome de uma constante com um número
    Nomes de constantes não podem conter espaços ou traços
    Para escrever palavras compostas utilizamos camelCase 
    const jhonathan ≠ const Jhonathan. LETRAS MAIÚSCULAS FAZEM DIFERENÇA!
*/

const nome = 'Jair';
console.log(nome, 'mora em MG');

const numeroUm = 27;
const numeroDois = 13;
const resultado = numeroUm * numeroDois;
const resultadoDuplicado = resultado * 2;
let  resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado - 300;
console.log(resultado);
console.log(resultadoDuplicado);
console.log('O resultado triplicado - 300 é', resultadoTriplicado);

// String = texto, Number = número

console.log(typeof resultadoTriplicado, typeof nome); // typeof diz o tipo da variável
console.log(nome + numeroUm); // Concatenação
console.log(typeof(nome + numeroUm));
