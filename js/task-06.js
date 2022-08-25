const inputRef = document.querySelector('#validation-input');
const validLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (!(event.currentTarget.value.length === validLength)) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  } else {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  }
}
