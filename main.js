const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".display .input");
const displayOutput = document.querySelector(".display .output");

let input = "";

for (const key of keys) {
  const value = key.dataset.key;

  key.addEventListener("click", () => {
    switch (value) {
      case "clear":
        input = "";
        displayInput.textContent = "";
        displayOutput.textContent = "";
        break;
      case "=":
        try {
          const result = eval(input);
          displayOutput.textContent = formatResult(result);
        } catch (error) {
          displayOutput.textContent = "Error";
        }
        break;
      default:
        if (isValidInput(value)) {
          input += value;
          displayInput.textContent = input;
        }
        break;
    }
  });
}

// ..................................

function formatResult(result) {
  const output = result.toString();
  const decimalIndex = output.indexOf(".");
  if (decimalIndex !== -1) {
    return output.substring(0, decimalIndex + 3);
  }
  return output;
}

function isValidInput(value) {
  const lastInput = input.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(value) && operators.includes(lastInput)) {
    return false;
  }

  return true;
}
