const display = document.querySelector(".display");

function addToDisplay(char) {
  display.value += char;
}
function clearDisplay() {
  display.value="";

}

function operation(){
  display.value = eval(display.value)
  Math.round(display.value)
}