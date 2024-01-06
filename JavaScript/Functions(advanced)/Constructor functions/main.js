// função construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    const ID = 999229;

    const validaID = (id) => 
    (id === 999229) ? true : false;

    this.usuarioValido = validaID(ID);

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falar = () => {
        console.log(`${this.nome} está dizendo oi!`);
    }
}

const p1 =  new Pessoa('Jhonathan', 'Pimenta')

p1.falar();
console.log(p1.usuarioValido)
