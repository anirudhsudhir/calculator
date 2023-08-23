function calculateNumbers(num1, num2, operator) {
    if (operator === 'add') return num1 + num2;
    else if (operator === 'subtract') return num1 - num2;
    else if (operator === 'multiply') return num1 * num2;
    else if (operator === 'divide') return num1 / num2;
}

function readNumber(e) {
    let num = e.target.getAttribute('data-number');
    if (operator === '') num1 = num1 + num;
    else num2 = num2 + num;
}

function computeOperator(e) {
    if (num2 === '')
        operator = e.target.getAttribute('data-operator');
    else {
        answer = calculateNumbers(Number(num1), Number(num2), operator);
        console.log(answer);
        num1 = answer;
        num2 = '';
        operator = e.target.getAttribute('data-operator');
    }
}

function operateNumbers() {
    answer = calculateNumbers(Number(num1), Number(num2), operator);
    console.log(answer);
    num1 = '';
    num2 = '';
    operator = '';
}

function runCalculator() {
    const digitButtons = document.querySelectorAll('.digits button');
    digitButtons.forEach(digitButton => digitButton.addEventListener('click', readNumber));
    const operatorButtons = document.querySelectorAll('.operators button');
    operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', computeOperator));
    const calculateButton = document.querySelector('#calculate');
    calculateButton.addEventListener('click', operateNumbers);
}

let num1 = '', num2 = '', operator = '', answer = '';
const inputText = document.querySelector('.display .input');
runCalculator();