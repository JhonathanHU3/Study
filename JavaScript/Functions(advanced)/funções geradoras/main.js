function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

// const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());
// for(let valor of g1) {
//     console.log(valor);
// }

function* contador() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

// const g2 = contador();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

// const g4 =  geradora4();
// console.log(g4.next().value)
// console.log(g4.next().value)
// console.log(g4.next().value)
// console.log(g4.next().value)
// console.log(g4.next().value)
// console.log(g4.next().value)
// console.log(g4.next().value)
// console.log(g4.next())

function* geradora5() {
    yield () => {
        console.log('Vim do yield 1');
    }

    return () => {
        console.log('Vim do return');
    }

    yield () => {
        console.log('Vim do yield 2');
    }
}

const g5 = geradora5();
g5.next().value();
g5.next().value();
