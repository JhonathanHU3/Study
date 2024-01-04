// Factory function
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome;
        },

        // Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando') {
            return `${this.nome} de peso ${this.peso} está ${assunto}`;
        },

        peso,
        altura,
        // Getter
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        }
    }
}
const pessoa1 = criaPessoa('Jhonathan', 'Pimenta', 70, 1.8);
console.log(pessoa1.imc)
pessoa1.nomeCompleto = 'Jhonn Silva Oliveira'
console.log(pessoa1.fala('falando sobre Lord Of Rings'));
console.log(pessoa1.nomeCompleto)
