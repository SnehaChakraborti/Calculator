let input = "";

function appendInput(value) {
  input += value;
  updateResult();
}

function clearInput() {
  input = "";
  updateResult();
}

function deleteLastChar() {
  input = input.slice(0, -1);
  updateResult();
}

function calculate() {
  try {
    const result = eval(input);
    input = result.toString();
    updateResult();
  } catch (error) {
    input = "Error";
    updateResult();
  }
}

function updateResult() {
  document.getElementById("result").value = input;
}
