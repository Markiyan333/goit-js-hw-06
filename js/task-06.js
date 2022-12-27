const inputText = document.querySelector('#validation-input')

inputText.addEventListener('blur', event => {
	inputText.classList.remove('valid','invalid')
	if (event.target.value.length === Number(inputText.dataset.length)) {
		inputText.classList.add('valid')
	} else(
		inputText.classList.add('invalid'))
	
})


// const inputText = document.querySelector('#validation-input')
// inputText.addEventListener('blur', onInputBlur);

// con

// function onInputBlur(event, onInputBlurReset) {
//   if (event.currentTarget.value.length === Number(inputText.dataset.length)) {
//     inputText.classList.remove('invalid');
//     inputText.classList.add('valid');
//   }
//   else if (
//     event.currentTarget.value.length !== Number(inputText.dataset.length)) {
//     inputText.classList.remove('valid')
//     inputText.classList.add('invalid')
//     }
// }


