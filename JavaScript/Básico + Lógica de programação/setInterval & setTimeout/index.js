function showHour() {
    const date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval( () => console.log(showHour()), 1000);

setTimeout( () => clearInterval(timer), 3500);

setTimeout( () => console.log('Hello world'), 5000);
