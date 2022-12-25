const inputText = document.querySelector('#validation-input');
const inputEl = Number(inputText.dataset.length);

inputText.addEventListener('blur', (event) => {
if (event.currentTarget.value.length === inputEl) {
    inputText.classList.remove('invalid');
    inputText.classList.add('valid');
    } else {
      inputText.classList.remove('valid');
      inputText.classList.add('invalid');
    }
})