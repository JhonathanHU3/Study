function myFunction() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({            
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value})
            console.log(pessoas);
        
            resultado.innerHTML += `<p>Seu nome é ${nome.value} ${sobrenome.value}, você pesa ${peso.value} Kg, e tem ${altura.value} Mts de altura, seu IMC é ${(peso.value/(altura.value ** 2)).toFixed(2)}`;
        
    } 
    

    form.addEventListener('submit', recebeEventoForm);
}
myFunction()







// form.onsubmit = function(evento) {
// evento.preventDefault();
// };