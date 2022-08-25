function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector('button[data-create]').addEventListener('click', onCreateBtnClick);
document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);

function onCreateBtnClick() {
  const amount = Number(document.querySelector('input').value);

  amount ? createBoxes(amount) : alert('Change amount!');
}

function createBoxes(amount) {
  let width = 20;
  let height = 20;
  const markup = [];

  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;
    const bgColor = getRandomHexColor();
    markup.push(
      `<div style = "width: ${width}px; height: ${width}px; background-color: ${bgColor}"></div>`
    );
  }

  document.querySelector('#boxes').insertAdjacentHTML('afterbegin', markup.join(''));
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}
