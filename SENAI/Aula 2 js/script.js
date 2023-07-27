function myFunction(){
    let div = document.querySelector('#div');
    let nome = forms.nome.value;
    let email = forms.email.value;
    let idade = Number(forms.idade.value);
    if ((!isNaN(nome)) || (!idade) || (email === "")) {
        return div.innerHTML = `<p>Dados inválidos</p>`
    }

    let voto = consultaVoto(idade);

    div.innerHTML = `<p>Eleitor ${nome} de ${idade} anos, seu voto é ${voto}.</p>`
};

function consultaVoto(idade) {
    let tipos = ['Obrigatório', 'Facultativo', 'Vetado']
    if ((idade >= 18) && (idade <= 70 )) return tipos[0]
    if ((idade >= 16) || (idade > 70 )) return tipos[1]
    if (idade < 16) return tipos[2]
}