let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = " ";

for (item of buttons) {
  // add event handler
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    // clear function for "C" button
    if (buttonText == "C") {
      screenValue = " ";
      screen.value = screenValue;
    }
    // function of '=' sign
    else if (buttonText == "=") {
      screen.value = eval(screenValue);
    }
    // work of 'CE'
    else if (buttonText == "CE") {
      var number = screenValue;
      var len = number.length - 1;
      var newnumber = number.substring(0, len);
      screen.value = newnumber;
    }
    //Code for any buttons other than above
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
