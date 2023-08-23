function calculateNumbers(num1, num2, operator) {
    if (operator === '+') return num1 + num2;
    else if (operator === '-') return num1 - num2;
    else if (operator === '*') return num1 * num2;
    else if (operator === '/') return num1 / num2;
}

function readNumber(e) {
    let num = e.target.getAttribute('data-number');
    if (operator === '') {
        num1 = num1 + num;
        updateDisplay();
    }
    else {
        num2 = num2 + num;
        updateDisplay();
    }
}

function computeOperator(e) {
    if (num2 === '') {
        operator = e.target.getAttribute('data-operator');
        updateDisplay();
    }
    else {
        answer = calculateNumbers(Number(num1), Number(num2), operator);
        num1 = answer;
        num2 = '';
        operator = e.target.getAttribute('data-operator');
        operatorCount = 0;
        repeatCalculation = 1;
        updateDisplay();
    }
}

function operateNumbers() {
    answer = calculateNumbers(Number(num1), Number(num2), operator);
    repeatCalculation = 0;
    updateDisplay();
    answer = '';
    num1 = '';
    num2 = '';
    operator = '';
    operatorCount = 0;
}

function updateDisplay() {
    if (num1 === '') {
        inputText.textContent = '0';
        return 0;
    }
    else;
    if (num2 === '') inputText.textContent = num1;
    else inputText.textContent = num1 + operator + num2;
    if (operator !== '' && operatorCount === 0) {
        operatorCount++;
        inputText.textContent = inputText.textContent + operator;
    }
    else;
    if (answer !== '' && repeatCalculation === 0) answerText.textContent = answer;
    else answerText.textContent = '';

}

function runCalculator() {
    updateDisplay();
    const digitButtons = document.querySelectorAll('.digits button');
    digitButtons.forEach(digitButton => digitButton.addEventListener('click', readNumber));
    const operatorButtons = document.querySelectorAll('.operators button');
    operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', computeOperator));
    const calculateButton = document.querySelector('#calculate');
    calculateButton.addEventListener('click', operateNumbers);
}

let num1 = '', num2 = '', operator = '', answer = '';
let operatorCount = 0, repeatCalculation = 0;
const inputText = document.querySelector('.display .input');
const answerText = document.querySelector('.display .answer');
runCalculator();