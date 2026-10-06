// let result = document.getElementById("result");
// let clear =document.getElementById("clear");
// let number = document.querySelectorAll(".number");
// let operators =document.querySelectorAll(".operator");
// let equal = document.getElementById("equal");


// let firstNumber = "";
// let secondNumber = "";
// let operatos = "";

let result = document.getElementById("result");

let firstNumber = "";
let operator = "";


// function numberClick(number) {

//     if (result.innerHTML == "Result") {
//         result.innerHTML = "";
//     }

//     // Maximum 10 characters
//     if (result.innerHTML.length < 10) {
//         result.innerHTML += number;
//     }
// }

function numberClick(number) {
    if (result.innerHTML == "Result") {
        result.innerHTML = "";
    }
    if (result.innerHTML.length >= 12) {
        return;
    }

    result.innerHTML = result.innerHTML + number;
}


function operatorClick(op) {

    firstNumber = Number(result.innerHTML);

    operator = op;

    result.innerHTML = "";
}


function calculate() {

    let secondNumber = Number(result.innerHTML);

    if (operator == "+") {
        result.innerHTML = firstNumber + secondNumber;
    }

    else if (operator == "-") {
        result.innerHTML = firstNumber - secondNumber;
    }

    else if (operator == "*") {
        result.innerHTML = firstNumber * secondNumber;
    }

    else if (operator == "/") {
        result.innerHTML = firstNumber / secondNumber;
    }
}


// Clear calculator
function clearResult() {

    result.innerHTML = "Result";

    firstNumber = "";

    operator = "";
}


// Keyboard
document.addEventListener("keydown", function(event) {

    // 0 to 9
    if (event.key >= "0" && event.key <= "9") {

        numberClick(event.key);
    }

    // Decimal
    else if (event.key == ".") {

        numberClick(".");
    }

    // +
    else if (event.key == "+") {

        operatorClick("+");
    }

    // -
    else if (event.key == "-") {

        operatorClick("-");
    }

    // *
    else if (event.key == "*") {

        operatorClick("*");
    }

    // /
    else if (event.key == "/") {

        operatorClick("/");
    }

    // Enter = Calculate
    else if (event.key == "Enter") {

        event.preventDefault();

        calculate();
    }

    // Escape = Clear
    else if (event.key == "Escape") {

        clearResult();
    }

    // Backspace = Delete last character
    else if (event.key == "Backspace") {

        if (result.innerHTML != "Result") {

            result.innerHTML = result.innerHTML.slice(0, -1);
        }
    }

});