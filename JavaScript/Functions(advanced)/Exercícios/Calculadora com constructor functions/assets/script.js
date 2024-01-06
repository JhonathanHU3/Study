function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.buttonClick();
        this.enterClick();
    };

    this.enterClick = () => {
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.solve()
            }
        })
        return
    }

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.deleteLastValue = () => {
        this.display.value = (this.display.value).slice(0, - 1);
    };

    this.solve = () => {
        let calculation = this.display.value;

        try {
            calculation = eval(calculation);

            if(!calculation){
                alert('Invalid calculation!');
                return;
            }

            this.display.value = calculation;
        } catch(err) {
            alert('Invalid calculation!');
            return;
        }
    };

    this.buttonClick = () => {
        document.addEventListener('click', (event) => {
            const element = event.target;
            if(element.classList.contains('btn-num')) {
                this.displayText(element.innerText);
            }

            if(element.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            
            if(element.classList.contains('btn-del')) {
                this.deleteLastValue();
            }

            if(element.classList.contains('btn-eq')) {
                this.solve();
            }
        })
    };

    this.displayText = (text) => {
        this.display.value += text;
    };
}

const calculator = new Calculator();
calculator.start();
