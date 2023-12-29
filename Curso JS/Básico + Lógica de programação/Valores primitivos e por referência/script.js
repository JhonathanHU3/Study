/* Valores primitivos são valores imutáveis, que quando copiados apontam para difetentes valores na memória.
ex: String, number, boolean, null, undefined, (Symbol)

Valores por referência(mutáveis) quando copiados apontam para o mesmo lugar na memória fazendo com que a copia seja apenas uma referência dos valores originais.
ex: Arrays, Objects, Function
*/

let a = [1,2,3,4]
let b = [...a]
b.push(23,56)
console.log(a, b)
