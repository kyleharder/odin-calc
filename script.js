/* Simple Calculator Script */
/* By Kyle Harder */

let firstNum = 0;
let secondNum = 0;
let tempNum = 0;
let mathOp = null;
let displayNum = 0;
let numString = null;
const displaybox = document.querySelector(".displayBox");

function calcAdd (numOne, numTwo) {
    return numOne + numTwo;
}

function calcSubtract (numOne, numTwo) {
    return numOne - numTwo;
}

function calcMultiply (numOne, numTwo) {
    return numOne * numTwo;
}

function calcDivide (numOne, numTwo) {
    return numOne / numTwo;
}

function operate (firstNum, mathOp, secondNum) {
    if (mathOp === "+") {
        return calcAdd(firstNum, secondNum);
    }
    else if (mathOp === "-") {
        return calcSubtract(firstNum, secondNum);
    }
    else if (mathOp === "*") {
        return calcMultiply(firstNum, secondNum);
    }
    else if (mathOp === "/") {
        if (secondNum != 0) {
            return calcDivide(firstNum, secondNum);
        }
        else {
            return "div0err";
        }
    }
}

const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const equalButton = document.querySelector(".equalButton");
const topButtons = document.querySelectorAll(".topButton");
const expoButtons = document.querySelectorAll(".expoButton");
const memButtons = document.querySelectorAll(".memButton");
const clearButton = document.querySelector(".clearButton");

numButtons.forEach(numButton => {
    numButton.addEventListener("click", (e) => {
        if (mathOp === null) {
            numString = "" + firstNum + e.target.innerText;
            firstNum = Number(numString);
            numString = null;
            displaybox.textContent = firstNum;
        }
        else {
            numString = "" + secondNum + e.target.innerText;
            secondNum = Number(numString);
            numString = null;
            displaybox.textContent = firstNum + " " + mathOp + " " + secondNum;
        }
    })
})

opButtons.forEach(opButton => {
    opButton.addEventListener("click", (e) => {
        if (mathOp === null) {
            mathOp = e.target.innerText;
            displaybox.textContent = firstNum + " " + mathOp;
        }
        else {
            tempNum = operate(firstNum, mathOp, secondNum);
            if (tempNum != "div0err") {
                displaybox.textContent = tempNum;
                secondNum = 0;
                firstNum = tempNum;
                mathOp = e.target.innerText;
                displaybox.textContent = firstNum + " " + mathOp;
            }
            else {
                displaybox.textContent = "Divide by zero error";
            }
        }
    })
})

equalButton.addEventListener("click", () => {
    tempNum = operate(firstNum, mathOp, secondNum);
    if (tempNum != "div0err") {
        displaybox.textContent = tempNum;
    }
    else {
        displaybox.textContent = "Sigh... You cannot divide by zero";
    }
})

topButtons.forEach(topButton => {
    topButton.addEventListener("click", (e) => {
        alert("Feature not implimented");
    })
})

expoButtons.forEach(expoButton => {
    expoButton.addEventListener("click", (e) => {
        alert("Feature not implimented");
    })
})

memButtons.forEach(memButton => {
    memButton.addEventListener("click", (e) => {
        alert("Feature not implimented");
    })
})

clearButton.addEventListener("click", (e) => {
    firstNum = 0;
    secondNum = 0;
    tempNum = 0;
    mathOp = null;
    displayNum = 0;
    numString = null;
    displaybox.textContent = "0.";
})