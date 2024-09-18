let firstNumber, op, secondNumber;
let buttons = document.querySelectorAll("button");
let input = document.querySelector(".input-box");
let equals = document.querySelector(".equals");
let newFirstNumber;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == equals.textContent) {
      operate(newFirstNumber, op, secondNumber);
    } else {
      input.value += button.textContent;
      secondNumber = input.value;

      switch (button.textContent) {
        case "+":
          op = "+";
          firstNumber = input.value;
          newFirstNumber = firstNumber.replace("+", "");
          input.value = "";
          break;
        case "-":
          op = "-";
          firstNumber = input.value;
          newFirstNumber = firstNumber.replace("-", "");
          input.value = "";
          break;
        case "*":
          op = "*";
          firstNumber = input.value;
          newFirstNumber = firstNumber.replace("*", "");
          input.value = "";
          break;
        case "/":
          op = "/";
          firstNumber = input.value;
          newFirstNumber = firstNumber.replace("/", "");
          input.value = "";
          break;
        case "C":
          input.value = "";
          break;
      }
    }
  });
});

function operate(firstNumber, op, secondNumber) {
  if (op == undefined) {
    console.log("Invalid");
  }

  let result = 0;

  switch (op) {
    case "+":
      result = parseInt(firstNumber) + parseInt(secondNumber);
      input.value = result;
      firstNumber = result; //lets you chain operations with result
      break;
    case "-":
      result = parseInt(firstNumber) - parseInt(secondNumber);
      input.value = result;
      firstNumber = result;
      break;
    case "*":
      result = parseInt(firstNumber) * parseInt(secondNumber);
      input.value = result;
      firstNumber = result;
      break;
    case "/":
      if (secondNumber == "0") {
        input.value = "Divide by 0 error";
        throw new Error("Divide by 0 error");
      }
      result = parseInt(firstNumber) / parseInt(secondNumber);
      input.value = result;
      firstNumber = result;
      break;
  }
}
