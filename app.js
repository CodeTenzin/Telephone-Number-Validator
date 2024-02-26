const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const checkBtnHandler = () => {
  if (input.value === "") {
    alert("Please provide a phone number.");
  }

  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  if (regex.test(input.value)) {
    resultDiv.innerHTML += `Valid US number: ${input.value}<br />`;
  } else {
    resultDiv.innerHTML += `Invalid US number: ${input.value}<br />`;
  }
};

const clearBtnHandler = () => {
  resultDiv.textContent = "";
  input.value = "";
};

checkBtn.addEventListener("click", checkBtnHandler);
clearBtn.addEventListener("click", clearBtnHandler);
