// Ver1

// const inputEl = document.querySelector('#font-size-control');
// // console.log(inputEl);
// const spanEl = document.querySelector('#text');
// // console.log(spanEl)

// inputEl.addEventListener('input', () => {
//     spanEl.style.fontSize = `${inputEl.valueAsNumber}px`;
//     // console.log(inputEl.valueAsNumber)
// })



// Ver2

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function resizeText(size) {
    spanEl.style.fontSize = `${size}px`;
}

inputEl.addEventListener('input', () => {
    resizeText(inputEl.valueAsNumber);
})


// Ver3(VAL)

// const inputEl = document.querySelector('#font-size-control');
// const spanEl = document.querySelector('#text');

// inputEl.addEventListener('input', handelInputChange);

// spanEl.style.fontSize = "56px";

// function handelInputChange(event) {
//     spanEl.style.fontSize = `${event.currentTarget.value}px`;
// }


