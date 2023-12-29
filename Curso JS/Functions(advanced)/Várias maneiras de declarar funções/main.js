// Declaração de função (Function hoisting)
sayHi();
function sayHi() {
    console.log('Hi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const iAmData = function() {
    console.log('I am a data');
}
iAmData();

function functionExecute(func) {
    func();
}
functionExecute(sayHi);

// Arrow function
const arrow = () => {
    console.log('I am a arrow function!');
}
arrow()

// in a object
const obj = {
    speak() {
        console.log('I am speaking...');
    }
}
obj.speak();
