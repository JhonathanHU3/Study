let varA = 'A';
let varB = 'B';
let varC = 'C';

let var4 = varA;

varA = varB;
varB = varC;
varC = var4;

console.log(varA, varB, varC)