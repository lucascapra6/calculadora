const display = document.querySelector("#display");
const parcialResult = document.querySelector("#parcialResult");


let powerOnPercentageBtn = false;
let getFirstInputValue = 0;
class Calculator {
  showOnScreen(event) {
    const click = event.target;
    if (click.className != "number" && click.className != "operator") return;
    if(powerOnPercentageBtn && click.className !="number" ) return alert('You are calculating percentage, please select only numbers')
    display.innerHTML += click.value;
    if (
      display.textContent == "+" ||
      display.textContent == "-" ||
      display.textContent == "*" ||
      display.textContent == "/"
    ) {
      return (display.innerHTML = "");
    }
  }
  result() {
    //used to calculate the percentage
    if (powerOnPercentageBtn != false) {
      calculator.getPercentage();
      powerOnPercentageBtn = false;
    }
    //used to calculate a comun operation
    if (display.textContent != "")
      return (display.innerHTML = eval(display.innerHTML));
  }
  getPercentage() {
    if (display.textContent == "") return;
    if(display.textContent < '0') return alert('Please, insert only positive numbers')
    if (!powerOnPercentageBtn) {
      getFirstInputValue = display.textContent;
      powerOnPercentageBtn = true;
      display.textContent = "";
    } else {
      const calcPercent =
        Number(getFirstInputValue / 100) * Number(display.textContent);
      return (display.textContent = calcPercent);
    }
  }
  getSquareRoot(event) {
    const click = event.target;
    if (display.textContent == "") return;
    if(display.textContent < '0') return alert('Its not possible to calculate a squareroot of a negative number!') 
    if (click.className == "square-root")
      return (display.textContent = Math.sqrt(Number(display.textContent)));
  }
  clean() {
    display.textContent = "";
    getFirstInputValue = 0;
    powerOnPercentageBtn = false;
  }

  backSpace() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
  }
  switchToMinus() {
    const toNegativeNumber = `-${display.textContent.substring(0,2)}
    ${display.textContent.substring(2)}`;
    const transformToPositive = display.textContent.replace("-", "+");
    const transformToNegative = display.textContent.replace("+", "-");
    if (display.textContent[0] == "-")
      return (display.textContent = transformToPositive);
    if (display.textContent[0] == "+")
      return (display.textContent = transformToNegative);
    display.textContent = toNegativeNumber;
  }
}
const calculator = new Calculator();

