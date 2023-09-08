function calculateNumbers(num1, num2, operator) {
    let calculatedAnswer = 0;
    if (operator === "+") calculatedAnswer = num1 + num2;
    else if (operator === "-") calculatedAnswer = num1 - num2;
    else if (operator === "*") calculatedAnswer = num1 * num2;
    else if (operator === "/") {
        if (num2 === 0) {
            error = true;
            return "Invalid Operation";
        }
        calculatedAnswer = num1 / num2;
    }
    calculatedAnswer = Number(calculatedAnswer.toFixed(2));
    let stringAnswer = calculatedAnswer.toString();
    if (stringAnswer.indexOf('.') !== -1) {
        let answerLength = stringAnswer.length;
        if (stringAnswer.substring(answerLength - 2) === '00') return calculatedAnswer.toFixed(0);
        if (stringAnswer.charAt(answerLength - 1) === '0') return calculatedAnswer.toFixed(1);
    }
    return calculatedAnswer;
}

function readNumber(e) {
    let num = e.target.getAttribute("data-number");
    if (operator === "") {
        num1 = num1 + num;
        updateDisplay();
    } else {
        num2 = num2 + num;
        updateDisplay();
    }
}

function computeOperator(e) {
    if (num1 === "") return 0;
    else;
    if (operator !== "" && num2 == "") return 0;
    else;
    if (num2 === "") {
        operator = e.target.getAttribute("data-operator");
        decimalpointButton.disabled = false;
        updateDisplay();
    } else {
        answer = calculateNumbers(Number(num1), Number(num2), operator);
        num1 = answer;
        num2 = "";
        operator = e.target.getAttribute("data-operator");
        operatorCount = 0;
        equalsCalculation = 0;
        decimalpointButton.disabled = false;
        updateDisplay();
    }
}

function operateNumbers() {
    answer = calculateNumbers(Number(num1), Number(num2), operator);
    equalsCalculation = 1;
    updateDisplay();
    answer = "";
    num1 = "";
    num2 = "";
    operator = "";
    operatorCount = 0;
    decimalpointButton.disabled = false;
}

function decimalPoint() {
    if (operator !== "") {
        num2 += '.';
        decimalpointButton.disabled = true;
    }
    else {
        num1 += ".";
        decimalpointButton.disabled = true;
    }
    updateDisplay();
}

function backspaceOperation() {
    if (num1 === "") return 0;
    if (operator === "") {
        num1 = num1.substring(0, num1.length - 1);
        if (num1.charAt(num1.length - 1) === '.')
            decimalpointButton.disabled = false;
        updateDisplay();
    }
    if (operator !== "") {
        if (num2 === "") {
            operator = "";
            operatorCount = 0;
            updateDisplay();

        } else {
            num2 = num2.substring(0, num2.length - 1);
            if (num1.charAt(num1.length - 1) === '.')
                decimalpointButton.disabled = false;
            if (num2 === '') operatorCount = 0;
            updateDisplay();
        }
    }
}

function clearScreen() {
    answer = "";
    num1 = "";
    num2 = "";
    operator = "";
    operatorCount = 0;
    equalsCalculation = 0;
    if (num1.charAt(num1.length - 1) === '.')
        decimalpointButton.disabled = false;
    if (error === false)
        updateDisplay();
}

function updateDisplay() {
    if (error === true) {
        clearScreen();
        answerText.textContent = "Invalid Operation!"
        error = false;
        return 0;
    }
    if (num1 === "") {
        inputText.textContent = "0";
        return 0;
    } else;
    if (num2 === "") inputText.textContent = num1;
    else inputText.textContent = num1 + operator + num2;
    if (operator !== "" && operatorCount === 0) {
        operatorCount++;
        inputText.textContent = inputText.textContent + operator;
    } else;
    if (answer !== "" && equalsCalculation === 1) answerText.textContent = answer;
    else answerText.textContent = "";
}

function runCalculator() {
    updateDisplay();
    const digitButtons = document.querySelectorAll(".digit-button");
    digitButtons.forEach((digitButton) =>
        digitButton.addEventListener("click", readNumber)
    );
    const operatorButtons = document.querySelectorAll(".operator-button");
    operatorButtons.forEach((operatorButton) =>
        operatorButton.addEventListener("click", computeOperator)
    );
    decimalpointButton.addEventListener('click', decimalPoint)
    const calculateButton = document.querySelector("#calculate");
    calculateButton.addEventListener("click", operateNumbers);
    const backspaceButton = document.querySelector("#backspace");
    backspaceButton.addEventListener("click", backspaceOperation);
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearScreen);
}

let num1 = "",
    num2 = "",
    operator = "",
    answer = "";
let operatorCount = 0,
    equalsCalculation = 1;
let error = false;
const inputText = document.querySelector(".display .input");
const answerText = document.querySelector(".display .answer");
const decimalpointButton = document.querySelector('#decimalpoint');
runCalculator();
