// For in -> lê os índices ou chaves do objeto

const pessoa = {nome: 'Jhonn', sobrenome: 'Pimenta', idade: 17}

for (let key in pessoa){
    console.log(key, pessoa[key])
    console.log(pessoa['nome'])
}


// const frutas = ['Pera', 'Maçã', 'Uva'];

//  for(let i in frutas) {
//    console.log(frutas[i])
//  }
