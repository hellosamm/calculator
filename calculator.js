// functions for the 4 main operators -> add, subtract, multiply and divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// function that takes in 2 number values (displayValue), as well as the operator value
function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

// declaring the clear button, num buttons, screen and operator buttons
const clearBtn = document.getElementById("clearButton");
const numBtn = document.getElementsByClassName("num");
const screen = document.getElementById("screen");
const operatorBtn = document.getElementsByClassName("operator");

// event listener for the clear button -> currently it console logs a message
clearBtn.addEventListener("click", function () {
  console.log("clear the math");
});

// assigning empty values to store the operator value and the displayValue (the number selected)
let operator = "";
let displayValue = "";

// event listener for number buttons -> stores the value as displayValue, updates the screen and console logs the value
for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", function () {
    displayValue = numBtn[i].textContent;
    screen.textContent = numBtn[i].textContent;
    console.log(displayValue);
  });
}

// event listener for operator buttons -> stores the value as operator, console logs the value
for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", function () {
    operator = operatorBtn[i].textContent;
    console.log(operator);
  });
}
