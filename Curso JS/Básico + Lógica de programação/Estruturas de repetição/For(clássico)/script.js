function escreveLinhas(linhas){
    for(let i = 1; i <= linhas; i++) {
        console.log('Linha ', i);
    }
}

escreveLinhas();


function parImpar(numeros){
    for(let i = 0; i <= numeros; i++){
    (i % 2) === 0 ? console.log(`${i} é par`) : console.log(`${i} é ímpar`);
    }
}

parImpar();


function mostraIndice(arrayPersonalizado){
    for(let i = 0; i < arrayPersonalizado.length; i++) {
        console.log(`Índice ${i}: ${arrayPersonalizado[i]}`);
    }
}

mostraIndice(['Abacate', 'Goiabada', 'Marmelada', 'Arroz']);

function mostraIndice2(arrayPersonalizado){
    arrayPersonalizado.forEach(item => {
        console.log(`Índice ${arrayPersonalizado.indexOf(item)}: ${item}`)
    });
}

mostraIndice2(['Abacate', 'Goiabada', 'Marmelada', 'Arroz']);