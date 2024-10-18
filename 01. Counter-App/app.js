document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('display');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset')
    let counter = 0;

    function updateDisplay() {
        counterDisplay.textContent = counter;
    }

    incrementButton.addEventListener('click', () => {
        counter++;
        updateDisplay();
    })

    decrementButton.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            updateDisplay();
        }
    })

    resetButton.addEventListener('click', () => {
        counter = 0;
        updateDisplay();
    })
})