//Grabbing elements from the DOM
const operatorButtons = document.querySelectorAll(".operator-btn");
const numberButtons = document.querySelectorAll(".num-btn");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const equalsButton = document.querySelector(".equals");
const display = document.querySelector(".display");

let operator = "";

//Pushing number buttons populates the display
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.innerText += e.target.innerText;
    })
})

//Operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.innerText += e.target.innerText;
    })
})

//Clear button
clearButton.addEventListener('click', (e) => {
    display.innerText = "";
})

//Backspace button
backspaceButton.addEventListener('click', (e) => {
    display.innerText = display.innerText.slice(0,-1);
})

//Equals button
equalsButton.addEventListener('click', (e) => {
    display.innerText = eval(display.innerText);
    })

//Operator functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = function (a, b) {
    if (b = 0) {
        alert("Can't divide by 0");
        currentOperand.innerText = "";
        previousOperand.innerText = "";
    }
    else {
        return a / b;
    }
}

//Calls appropriate operator and performs functions
const operate = (operator, a, b) => {
    switch (operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

//Allowing user to use keypad to input numbers
document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0') {
        display.innerText += e.key;
    }
    else {
        alert("Not a valid key.");
    }
})