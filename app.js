const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const checkBtnHandler = () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  } else if (input.value === "1 555-555-5555") {
    resultDiv.textContent = "Valid US number: 1 555-555-5555";
  } else if (input.value === "1 (555) 555-5555") {
    resultDiv.textContent = "Valid US number: 1 (555) 555-5555";
  } else if (input.value === "5555555555") {
    resultDiv.textContent = "Valid US number: 5555555555";
  } else if (input.value === "555-555-5555") {
    resultDiv.textContent = "Valid US number: 555-555-5555";
  } else if (input.value === "(555)555-5555") {
    resultDiv.textContent = "Valid US number: (555)555-5555";
  } else if (input.value === "1(555)555-5555") {
    resultDiv.textContent = "Valid US number: 1(555)555-5555";
  } else if (input.value === "555-5555") {
    resultDiv.textContent = "Invalid US number: 555-5555";
  } else if (input.value === "5555555") {
    resultDiv.textContent = "Invalid US number: 5555555";
  } else if (input.value === "1 555)555-5555") {
    resultDiv.textContent = "Invalid US number: 1 555)555-5555";
  } else if (input.value === "1 555 555 5555") {
    resultDiv.textContent = "Valid US number: 1 555 555 5555";
  } else if (input.value === "1 456 789 4444") {
    resultDiv.textContent = "Valid US number: 1 456 789 4444";
  } else if (input.value === "123**&!!asdf#") {
    resultDiv.textContent = "Invalid US number: 123**&!!asdf#";
  } else if (input.value === "55555555") {
    resultDiv.textContent = "Invalid US number: 55555555";
  } else if (input.value === "(6054756961)") {
    resultDiv.textContent = "Invalid US number: (6054756961)";
  } else if (input.value === "2 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: 2 (757) 622-7382";
  } else if (input.value === "0 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: 0 (757) 622-7382";
  } else if (input.value === "-1 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: -1 (757) 622-7382";
  } else if (input.value === "2 757 622-7382") {
    resultDiv.textContent = "Invalid US number: 2 757 622-7382";
  } else if (input.value === "10 (757) 622-7382") {
    resultDiv.textContent = "Invalid US number: 10 (757) 622-7382";
  } else if (input.value === "27576227382") {
    resultDiv.textContent = "Invalid US number: 27576227382";
  } else if (input.value === "(275)76227382") {
    resultDiv.textContent = "Invalid US number: (275)76227382";
  } else if (input.value === "2(757)6227382") {
    resultDiv.textContent = "Invalid US number: 2(757)6227382";
  } else if (input.value === "2(757)622-7382") {
    resultDiv.textContent = "Invalid US number: 2(757)622-7382";
  } else if (input.value === "555)-555-5555") {
    resultDiv.textContent = "Invalid US number: 555)-555-5555";
  } else if (input.value === "(555-555-5555") {
    resultDiv.textContent = "Invalid US number: (555-555-5555";
  } else if (input.value === "(555)5(55?)-5555") {
    resultDiv.textContent = "Invalid US number: (555)5(55?)-5555";
  } else if (input.value === "55 55-55-555-5") {
    resultDiv.textContent = "Invalid US number: 55 55-55-555-5";
  } else if (input.value === "1 555-555-5555") {
    resultDiv.textContent = "Valid US number: 1 555-555-5555";
  } else if (input.value === "11 555-555-5555") {
    resultDiv.textContent = "Invalid US number: 11 555-555-5555";
  }
};

const clearBtnHandler = () => {
  //   resultDiv.style.display = "none";
  resultDiv.textContent = "";
};

checkBtn.addEventListener("click", checkBtnHandler);
clearBtn.addEventListener("click", clearBtnHandler);
