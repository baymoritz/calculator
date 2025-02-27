let numberVisibleDisplay
let lastClickedButton
let numberInMemory
let last_operation
let newDisplayNumber

const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")

function changeTextinDisplay(text) {
    display.textContent = text;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        lastClickedButton = button.textContent;
        getNumberVariables(lastClickedButton);
        // actionForButtonType(lastClickedButton);
    }
    )
});

const numberButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function getNumberVariables(button) {
    if (numberButtons.includes(button)) {
        numberVisibleDisplay = Number(lastClickedButton);
        display.textContent += numberVisibleDisplay;

    } else if (operationKeys.includes(button)) {
        numberInMemory = Number(display.textContent)
        console.log(numberInMemory)
        display.textContent = ""
        last_operation = button;

    } else if (button == "=") {
        numberVisibleDisplay = Number(display.textContent)
        display.textContent = operate(numberInMemory, numberVisibleDisplay, last_operation)

    } else if (button == "AC") {
        resetCalc()
    } else if (button == "%") {
        display.textContent = transformPerc(display.textContent)
    } else if (button == "+/-") {
        display.textContent = transformNeg(display.textContent)
    }
}


function resetCalc() {
    display.textContent = ""
    numberVisibleDisplay = ""
    numberInMemory = ""
    last_operation = ""
    lastClickedButton = ""
}

// function getNumberVariables(button) {
//     switch (button) {
//         case ("0"):
//         case ("1"):
//         case ("2"):
//         case ("3"):
//         case ("4"):
//         case ("5"):
//         case ("6"):
//         case ("7"):
//         case ("8"):
//         case ("9"):
//             numberInMemory = display.textContent;
//             numberVisibleDisplay = Number(lastClickedButton);
//             break;
//         case ("."):
//         case ("+/-"):
//             numberInMemory = display.textContent;
//             numberVisibleDisplay = Number(lastClickedButton);
//         case ("AC"):
//             numberInMemory = ""
//             numberVisibleDisplay = ""
//             last_operation = ""
//             changeTextinDisplay("start new");
//             break;
//         case ("/"):
//             last_operation = "/"
//             break;
//         case ("*"):
//             last_operation = "*"
//             break;
//         case ("-"):
//             last_operation = "-"
//             break;
//         case ("+"):
//             last_operation = "+"
//             break;

//     }
// }

// function actionForButtonType(button) {
//     switch (button) {
//         case ("0"):
//         case ("1"):
//         case ("2"):
//         case ("3"):
//         case ("4"):
//         case ("5"):
//         case ("6"):
//         case ("7"):
//         case ("8"):
//         case ("9"):
//             changeTextinDisplay(numberVisibleDisplay);
//             break;
//         case ("."):
//         case ("AC"):
//             break;
//         case ("+/-"):
//             console.log(numberInMemory)
//             newDisplayNumber = transformNeg(Number(numberInMemory))
//             changeTextinDisplay(newDisplayNumber);
//         case ("%"):

//         case ("="):
//             newDisplayNumber = operate(numberInMemory, numberVisibleDisplay, last_operation)
//             changeTextinDisplay(newDisplayNumber);
//             numberVisibleDisplay = newDisplayNumber;
//             break;
//     }
// }

const mathOperations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
};

const operationKeys = Object.keys(mathOperations);

function operate(a, b, operator) {
    return mathOperations[operator] ? mathOperations[operator](a, b) : "Invalid operator";
}

function add(a, b) {
    return result = a + b;
}

function subtract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function divide(a, b) {
    return result = a / b;
}

function transformPerc(a) {
    return result = a / 100;
}

function transformNeg(a) {
    return result = a * -1;
}
