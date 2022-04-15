const input = document.querySelector("input");

function calculate(number) {
  input.value = input.value + number;
}

function result() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    alert("enter a valid number");
  }
}

function clears() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}
