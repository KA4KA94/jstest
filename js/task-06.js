// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//     textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//     textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//     textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//     textInput.value = "";
// });



const inputEl = document.querySelector('#validation-input');
const validationLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length > validationLength) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }

    console.log(inputEl.value.length)
})
















// const inputEl = document.querySelector('#validation-input');
// inputEl.addEventListener('blur', handelBlurEvent);

// function handelBlurEvent(event) {
//     const inputStringLength = event.currentTarget.value.length;
//     const requireInputLength = inputEl.getAttribute('data-length');

//     if (inputStringLength < requireInputLength) {
//         inputEl.classList.add('invalid');

//     } else if (inputStringLength >= requireInputLength) {
//         inputEl.classList.remove('invalid')
//         inputEl.classList.add('valid')
//     }
// }