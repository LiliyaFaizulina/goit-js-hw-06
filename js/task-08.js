const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: {
      email: { value: email },
      password: { value: password },
    },
  } = event.currentTarget;
  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const userData = { email, password };
    console.log(userData);
    event.currentTarget.reset();
  }
}
