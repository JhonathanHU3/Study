function makeCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.buttonClick();
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteLastValue() {
            this.display.value = (this.display.value).slice(0, - 1);
        },

        solve() {
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
        },

        buttonClick() {
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
        },

        displayText(text) {
            this.display.value += text;
        }
    }
}

const calculator = makeCalculator();
calculator.start();
