let firstNumber, op, secondNumber;
let buttons = document.querySelectorAll("button");
let input = document.querySelector(".input-box");
let equals = document.querySelector(".equals");
let newFirstNum;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == equals.textContent) {
      operate(newFirstNum, op, secondNumber);
    } else {
      input.value += button.textContent;
      secondNumber = input.value;

      switch (button.textContent) {
        case "+":
          newFirstNum = setOp("+");
          break;
        case "-":
          newFirstNum = setOp("-");
          break;
        case "*":
          newFirstNum = setOp("*");
          break;
        case "/":
          newFirstNum = setOp("/");
          break;
        case "C":
          input.value = "";
          break;
      }
    }
  });
});

function setOp(operator) {
  op = operator;
  firstNumber = input.value;
  firstNumberWithoutOperator = firstNumber.replace(operator, "");
  input.value = "";

  return firstNumberWithoutOperator;
}

function operate(firstNumber, op, secondNumber) {
  if (op == undefined) {
    console.log("Invalid");
  }

  let result = 0;

  switch (op) {
    case "+":
      result = parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case "-":
      result = parseInt(firstNumber) - parseInt(secondNumber);
      break;
    case "*":
      result = parseInt(firstNumber) * parseInt(secondNumber);
      break;
    case "/":
      if (secondNumber == "0") {
        input.value = "Divide by 0 error";
        throw new Error("Divide by 0 error");
      }
      result = parseInt(firstNumber) / parseInt(secondNumber);
      break;
  }
  input.value = result;
  firstNumber = result; //to chain operations
  secondNumber = "";
}
