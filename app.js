const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const clickedButton = buttons[i].textContent;
    document.getElementById("screen").textContent += clickedButton;
  });
}

const equalsButton = document.getElementById("equals-button")

equalsButton.addEventListener("click", ()=> {
  let screenContent = document.getElementById("screen").textContent
  const screen = document.getElementById("screen");
  screen.textContent = eval(screenContent);
  
})