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
        return(jair = {            
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value})
        
    } 
    console.log(jair);

    form.addEventListener('submit', recebeEventoForm);
}
myFunction()







// form.onsubmit = function(evento) {
// evento.preventDefault();
// };