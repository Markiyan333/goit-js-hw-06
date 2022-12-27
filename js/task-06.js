const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onInputBlur);

function onInputBlur(event, onInputBlurReset) {
  if (event.currentTarget.value.length === Number(inputText.dataset.length)) {
    inputText.classList.remove('invalid');
    inputText.classList.add('valid');
  }
  else if (
    event.currentTarget.value.length !== Number(inputText.dataset.length)) {
    inputText.classList.remove('valid')
    inputText.classList.add('invalid')
    }
}



// addEventListener('blur', (event) => {
// if (event.currentTarget.value.length === inputEl) {
// inputText.classList.remove('invalid');
// inputText.classList.add('valid');
// } else {
// inputText.classList.remove('valid');
// inputText.classList.add('invalid');
// }
// })