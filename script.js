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

const numButton = document.querySelector(".numButton");
const opButton = document.querySelector(".opButton");
const equalButton = document.querySelector(".equalButton");

numButton.addEventListener("click", () => {
     const buttonValue = this.value;
    if (mathOp === null) {
        numString = "" + firstNum + this.value;
        firstNum = Number(numString);
        numString = null;
        displaybox.textContent = firstNum;
    }
    else {
        numString = "" + secondNum + this.value;
        secondNum = Number(numString);
        numString = null;
        displaybox.textContent = firstNum + " " + mathOp + " " + secondNum;
    }
})

opButton.addEventListener("click", () => {
    if (mathOp === null) {
        mathOp = this.value;
        displaybox.textContent = firstNum + " " + mathOp;
    }
    else {
        tempNum = operate(firstNum, mathOp, secondNum);
        if (tempNum != "div0err") {
            displaybox.textContent = tempNum;
            secondNum = 0;
            firstNum = tempNum;
            mathOp = this.value;
            displaybox.textContent = firstNum + " " + mathOp;
        }
        else {
            displaybox.textContent = "Divide by zero error";
        }
    }
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