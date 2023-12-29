const cliente = {
    nome: 'Izabella',
    sobrenome: 'Barbosa',
    idade: 17,
    endereco: {
        rua: 'São José do rio adentro',
        numero: 164
    }
};

const { nome: nomeCliente = 'Não informado', sobrenome} = cliente
const {endereco: {rua, numero}, ...restante} = cliente
console.log(nomeCliente, sobrenome, rua, numero, restante)