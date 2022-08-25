document
  .querySelector('#font-size-control')
  .addEventListener(
    'input',
    event => (document.querySelector('#text').style.fontSize = `${event.currentTarget.value}px`)
  );
