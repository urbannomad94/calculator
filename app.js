//Grabbing elements from HTML
const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("btn"));
const operatorButtons = Array.from(document.getElementsByClassName("operator-btn"));
const numberButtons = Array.from(document.getElementsByClassName("num-button"));

//Button values populate display
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case "(-)": 
                display.innerText += "-";
                break;
            case "AC": 
                display.innerText = "";
                break;
            case "⌫": 
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }   
                break;
            case "=":
                    let answer = 


                    display.innerText = answer;
                    break;
            default: 
                display.innerText += e.target.innerText;
        }
    })
})

//Operator functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = function (a, b) {
    if (b = 0) {
        alert("Can't divide by 0");
        display.innerText = "";
    }
    else {
        return a / b;
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
}