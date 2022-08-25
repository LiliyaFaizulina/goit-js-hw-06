let counterValue = 0;

document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', onIncrementBtnClick);

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick(event) {
  counterValue += 1;
  event.currentTarget.previousElementSibling.textContent = counterValue;
}

function onDecrementBtnClick(event) {
  counterValue -= 1;
  event.currentTarget.nextElementSibling.textContent = counterValue;
}
