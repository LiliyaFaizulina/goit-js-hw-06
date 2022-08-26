function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector('button[data-create]').addEventListener('click', onCreateBtnClick);
document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);

function onCreateBtnClick() {
  const amount = Number(document.querySelector('input').value);

  amount ? createBoxes(amount) : alert('Choose count!');
}

function createBoxes(amount) {
  let side = 30;
  const markup = [];

  for (let i = 0; i < amount; i += 1) {
    const bgColor = getRandomHexColor();
    markup.push(
      `<div style = "width: ${side}px; height: ${side}px; background-color: ${bgColor}"></div>`
    );
    side += 10;
  }

  document.querySelector('#boxes').insertAdjacentHTML('afterbegin', markup.join(''));
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}
