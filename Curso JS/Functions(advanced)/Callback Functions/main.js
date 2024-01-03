function randomNumbers(min = 500, max= 3000) {
    return Math.floor(Math.random() * (max - min) + min);
}

function func1(callback) {
    setTimeout(() => {
        console.log('func1')
        if(callback) callback();
    }, randomNumbers());
}

function func2(callback) {
    setTimeout(() => {
        console.log('func2')
        if(callback) callback();
    }, randomNumbers());
}

function func3(callback) {
    setTimeout(() => {
        console.log('func3')
        if(callback) callback();
    }, randomNumbers());
}

// COISA FEIA!!
// func1(() => {
//     func2(() => {
//         func3(() => {
//             console.log('Hello world!');
//         })
//     })
// })

func1(func1Callback);

function func1Callback() {
    func2(func2Callback);
}

function func2Callback() {
    func3(func3Callback);
}

function func3Callback() {
    console.log('Hello world!');
}
