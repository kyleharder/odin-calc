/* Simple Calculator Script */
/* By Kyle Harder */

let firstNum = 0;
let secondNum = 0;
let mathOp = null;
let displayNum = 0;

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
        return calcDivide(firstNum, secondNum);
    }
}