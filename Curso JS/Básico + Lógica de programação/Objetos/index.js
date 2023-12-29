// const pessoa1 = {
//     nome: 'Jhonathan',
//     sobrenome: 'Pimenta',
//     idade: 16
// };

// function criaPessoas(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// };

// const pessoa1 =  criaPessoas('Jhonathan', 'Pimenta', 17);
// const pessoa2 =  criaPessoas('Luiz', 'Cardoso', 29);
// const pessoa3 =  criaPessoas('João', 'Amorim', 17);
// const pessoa4 =  criaPessoas('Maria', 'da Silva', 23);

// console.log(pessoa1.nome, pessoa2.nome);

const pessoa1 = {
    nome: 'Jair',
    sobrenome: 'Bolsonaro',
    idade: 69,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está inelegível até 2030!`);
    }
}

pessoa1.fala();