function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector('.change-color').addEventListener('click', onChangeColor);

function onChangeColor() {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  document.querySelector('span.color').textContent = bgColor;
}
