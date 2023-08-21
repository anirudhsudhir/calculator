function operateNumbers(num1, num2, operator) {
    if (operator === 'add') return num1 + num2;
    else if (operator === 'subtract') return num1 - num2;
    else if (operator === 'multiply') return num1 * num2;
    else if (operator === 'divide') return num1 / num2;
}

function readNumber(e) {
    if (num1 === null) { num1 = e.target.getAttribute('data-key') }
    else {
        num2 = e.target.getAttribute('data-key');
        answer = operateNumbers(num1, num2, operator);
        console.log(answer);
        num1 = answer;
    }
}

const digitButtons = document.querySelectorAll('.digits button');
digitButtons.forEach(digitButton => digitButton.addEventListener('click', readNumber));
const operatorButtons = document.querySelectorAll('.operators button');
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', e => {
    operator = e.target.getAttribute('data-key');
}));
let num1 = null, num2 = null, operator = null, answer = null;