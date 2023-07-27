function myFunction(){
    let div = document.querySelector('#div');
    let nome = forms.nome.value;
    let curso = forms.curso.value;
    let nota = Number(forms.nota.value);
    if ((!isNaN(nome)) || (!nota) || (!isNaN(curso))) {
        return div.innerHTML = `<p>Dados inválidos</p>`
    }

    let voto = consultaNota(nota);

    div.innerHTML = `<p>Eleitor ${nome} de ${idade} anos, seu voto é ${voto}.</p>`
};

function consultaNota(nota) {
    let tipos = ['Aprovado', 'Recuperação', 'Reprovado']
    if (nota >= 60) return tipos[0];
    if (nota > 39) return tipos[1];
    if (nota < 40) return tipos[2];
}