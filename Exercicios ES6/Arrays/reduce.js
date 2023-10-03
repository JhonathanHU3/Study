// Equilibrio de parênteses
const arrEx1 = ['((()))','(()))','()(()','(((())(('];

let arrayboolean = arrEx1.reduce((arrayboolean ,parentese) => {
        let soma = 0;
        if(parentese === '(') {soma++};
        if(parentese === ')') {soma--};
        console.log(parentese)
        console.log(soma)
        if(soma !== 0) {parentese = false} else {parentese = true};
        console.log(parentese)
        arrayboolean.push(parentese);
        return arrayboolean;
    },[])

console.log(arrayboolean);