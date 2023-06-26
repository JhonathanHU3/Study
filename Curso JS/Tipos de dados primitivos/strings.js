console.log("Um texto \"qualquer\""); // a barra invertida escapa o caracter seguinte 
console.log("Um texto \\qualquer"); // para exibir uma barra invertida deve-se colocar duas barras invertidas

//            0123456
let indice = "Faz o L L L";
console.log(indice[4]) //faz aparecer na tela o elemento que esta na posição 4
console.log(indice.indexOf('L')); //Faz aparecer na tela a posição que está o elemento F
console.log(indice.replace(/L/g, '22')) // Replace substitui algum elemento na tela pelo oq vc desejar, o g faz ele substituir todos os 22
console.log(indice.slice(1, 5)) // Slice seleciona só um pedaço da string que vc desejar
console.log(indice.toUpperCase()) // Deixa tudo maiúsculo