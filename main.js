// const keys = document.querySelectorAll(".key");
// const display_input = document.querySelector(".display .input");
// const display_output = document.querySelector(".display .output");

// let input = "";

// for (let key of keys) {
//   const value = key.dataset.key;

//   key.addEventListener("click", () => {
//     if (value == "clear") {
//       input = "";
//       display_input.innerHTML = "";
//       display_output.innerHTML = "";
//     } else if (value == "=") {
//       let result = eval(PerpareInput(input));

//       display_output.innerHTML = CleanOutput(result);
//     } else {
//       if (ValidateInput(value)) {
//         input += value;
//         display_input.innerHTML = CleanInput(input);
//       }
//     }
//   });
// }

// function CleanInput(input) {
//   let input_array = input.split("");
//   let input_array_length = input_array.length;

//   for (let i = 0; i < input_array_length; i++) {
//     if (input_array[i] == "*") {
//       input_array[i] = ` <span class="operator">x</span> `;
//     } else if (input_array[i] == "/") {
//       input_array[i] = ` <span class="operator">÷</span> `;
//     } else if (input_array[i] == "+") {
//       input_array[i] = ` <span class="operator">+</span> `;
//     } else if (input_array[i] == "-") {
//       input_array[i] = ` <span class="operator">-</span> `;
//     }
//   }

//   return input_array.join("");
// }

// function CleanOutput(output) {
//   let output_string = output.toString();
//   output_string = output_string.split(".")[0];

//   let output_array = output_string.split("");

//   if (output_array.length > 3) {
//     for (let i = output_array.length - 3; i > 0; i -= 3) {
//       output_array.splice(i, 0, ",");
//     }
//   }

//   return output_array.join("");
// }

// function ValidateInput(value) {
//   let last_input = input.slice(-1);
//   let operators = ["+", "-", "*", "/"];

//   if (value == "." && last_input == ".") {
//     return false;
//   }

//   if (operators.includes(value)) {
//     if (operators.includes(last_input)) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   return true;
// }

// function PerpareInput(input) {
//   let input_array = input.split("");

//   return input_array.join("");
// }

// const keys = document.querySelectorAll(".key");
// const displayInput = document.querySelector(".display .input");
// const displayOutput = document.querySelector(".display .output");

// let input = "";

// for (const key of keys) {
//   const value = key.dataset.key;

//   key.addEventListener("click", () => {
//     if (value === "clear") {
//       input = "";
//       displayInput.textContent = "";
//       displayOutput.textContent = "";
//     } else if (value === "=") {
//       try {
//         const result = eval(input);
//         displayOutput.textContent = formatResult(result);
//       } catch (error) {
//         displayOutput.textContent = "Error";
//       }
//     } else {
//       if (isValidInput(value)) {
//         input += value;
//         displayInput.textContent = input;
//       }
//     }
//   });
// }

// using switch case:

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
