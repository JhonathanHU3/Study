const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

let section = document.querySelector(".main");

function insereElementos(data){
    for(let i = 0; i < data.length; i++){
        let {tag, texto} = data[i];
        let novoElemento = document.createElement(tag);
        let novoTexto = document.createTextNode(texto);
        novoElemento.appendChild(novoTexto);
        section.appendChild(novoElemento);
    }
};

insereElementos(elementos);
