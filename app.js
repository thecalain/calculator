const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const clickedButton = buttons[i].textContent;
    document.getElementById("screen").textContent += clickedButton;
  });
}

const equalsButton = document.getElementById("equals-button");
const screen = document.getElementById("screen");

equalsButton.addEventListener("click", () => {
  let screenContent = document.getElementById("screen").textContent;
  
  screen.textContent = eval(screenContent);
});


const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  screen.textContent = ""
})
