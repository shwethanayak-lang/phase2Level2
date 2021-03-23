let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = " ";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "C") {
      screenValue = " ";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "CE") {
      var number = screenValue;
      var len = number.length - 1;
      var newnumber = number.substring(0, len);
      screen.value = newnumber;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
