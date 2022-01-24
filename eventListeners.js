document
  .querySelector(".container")
  .addEventListener("click", calculator.showOnScreen);
document
  .querySelector(".get-result")
  .addEventListener("click", calculator.result);

document.querySelector("#clean").addEventListener("click", calculator.clean);
document
  .querySelector("#back-space")
  .addEventListener("click", calculator.backSpace);

document
  .querySelector("#switch-to-minus")
  .addEventListener("click", calculator.switchToMinus);

document
  .querySelector("#get-percentage")
  .addEventListener("click", calculator.getPercentage);

document
  .querySelector(".square-root")
  .addEventListener("click", calculator.getSquareRoot);