// functions for the 4 main operators -> add, subtract, multiply and divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// function that takes in 2 number values (a & b), as well as the operator value
function operate(a, operator, b) {
  if (operator === "+") {
    result = add(a, b);
  } else if (operator === "-") {
    result = subtract(a, b);
  } else if (operator === "x") {
    result = multiply(a, b);
  } else if (operator === "÷") {
    result = divide(a, b);
  } else {
    result = "error";
  }
}

// declaring the clear button, num buttons, screen and operator buttons
const clearBtn = document.getElementById("clearButton");
const numBtn = document.getElementsByClassName("num");
const screen = document.getElementById("screen");
const operatorBtn = document.getElementsByClassName("operator");

// event listener for the clear button -> currently it console logs a message
clearBtn.addEventListener("click", () => {
  // clears the array
  numBtnValues = [];

  // updates the screen display to show 00
  screen.textContent = "00";

  // console logs the empty array
  console.log(numBtnValues);
});

// assigning empty values to store the operator value and the displayValue (the number selected)
let operator = "";
let numBtnValues = [];
let a = numBtnValues[1];
let b = numBtnValues[0];

// event listener for number buttons -> stores the value as displayValue, updates the screen and console logs the value
for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", function () {
    // get the text content of the clicked button, assign it to displayValue
    displayValue = numBtn[i].textContent;

    // update the screen display
    screen.textContent = displayValue;

    // store the value in an array
    numBtnValues.push(displayValue);

    // Check if the array has more than 3 values, if it has more than 2 values remove the oldest value
    if (numBtnValues.length > 3) {
      numBtnValues.shift();
    }

    // if the array has 3 values it defines [a, operator, b]. changes a and b to ints and runs the operate function. it consoles the result and resets the array []
    if (numBtnValues.length === 3) {
      console.log(numBtnValues);
      let [a, operator, b] = numBtnValues;
      a = parseInt(a);
      b = parseInt(b);

      // run the operate function
      operate(a, operator, b);
      screen.textContent = result;
      console.log(result);
      numBtnValues = [];
    }

    // console log the array
    console.log(numBtnValues);
  });
}

// event listener for operator buttons -> stores the value as operator, console logs the value
for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", function () {
    // get the value of the clicked button and assign it to operator
    operator = operatorBtn[i].textContent;

    //add the operator value to the array
    numBtnValues.push(operator);

    if (numBtnValues.length > 3) {
      numBtnValues.shift();
    }

    // console log numBtnValue array
    console.log(numBtnValues);
  });
}
