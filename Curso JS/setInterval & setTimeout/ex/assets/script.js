function timer() {
    const initButton = document.querySelector('#init')
    const pauseButton = document.querySelector('#pause')
    const resetButton = document.querySelector('#reset')
    const clock = document.querySelector('#clock')

    initButton.addEventListener('click', initTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);

    let timer;
    let timerValue = 0;

    function initTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            clock.innerHTML = millisecondsToTime(timerValue += 100);
        }, 100);
        clock.style.color = 'black';
    }

    function pauseTimer() {
        clearInterval(timer);
        clock.style.color = 'red';
    }

    function resetTimer() {
        timerValue = 0;
        clock.innerHTML = millisecondsToTime(timerValue);
        clearInterval(timer);
        clock.style.color = 'black';
    }

    function millisecondsToTime(milliseconds) {
        const date = new Date(milliseconds);


        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
}
timer();
