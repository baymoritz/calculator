let num1
let num2
let operator



function operate(a, b, operator) {
    if (operator = "+") {
        return add(a, b)
    } else if (operator = "-") {
        return substract(a, b)
    } else if (operator = "*") {
        return multiply(a, b)
    } else if (operator = "/") {
        return devide(a, b)
    }
}

function add(a, b) {
    return result = a + b;
}

function substract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function devide(a, b) {
    return result = a / b;
}

function transformPerc(a) {
    return result = a / 100;
}

function transformNeg(a) {
    return result = a * -1;
}

function clear(a) {

}