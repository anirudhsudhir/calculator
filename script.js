function calculateNumbers(num1, num2, operator) {
    if (operator === 'add') return num1 + num2;
    else if (operator === 'subtract') return num1 - num2;
    else if (operator === 'multiply') return num1 * num2;
    else if (operator === 'divide') return num1 / num2;
}

function readNumber(e) {
    if (num1 === null) num1 = Number(e.target.getAttribute('data-number'));
    else num2 = Number(e.target.getAttribute('data-number'));
}

function computeOperator(e) {
    if (num2 === null)
        operator = e.target.getAttribute('data-operator');
    else {
        answer = calculateNumbers(num1, num2, operator);
        console.log(answer);
        num1 = answer;
        num2 = null;
        operator = e.target.getAttribute('data-operator');
    }
}

function operateNumbers() {
    answer = calculateNumbers(num1, num2, operator);
    console.log(answer);
    num1 = null;
    num2 = null;
}

const digitButtons = document.querySelectorAll('.digits button');
digitButtons.forEach(digitButton => digitButton.addEventListener('click', readNumber));
const operatorButtons = document.querySelectorAll('.operators button');
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', computeOperator));
const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', operateNumbers)
let num1 = null, num2 = null, operator = null, answer = null;