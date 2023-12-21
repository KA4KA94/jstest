// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     console.log("Button was clicked");
// });

// console.log(button)



// const button = document.querySelector("button");

// const handleClick = () => {
//     console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);



// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//     console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// ===============================================
// const multiBtn = document.querySelector('button');

// const firstCallback = () => {

//     console.log("First callback!");
//     multiBtn.addEventListener("click", firstCallback);
// };


// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//     console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//     btn.addEventListener("click", handleClick);
//     console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//     btn.removeEventListener("click", handleClick);
//     console.log("click event listener was removed from btn");
// });





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


// function clickHandler() {
//     console.log('click')
// }

// let counterValue = 0;

// const decrementButtonEl = document.querySelector('[data-action="decrement"]');
// const incrementButtonEl = document.querySelector('[data-action="increment"]');

// const span = document.querySelector('#value');

// decrementButtonEl.addEventListener('click', () => {
//     counterValue--;
//     span.textContent = counterValue;
//     console.log(counterValue);
// });

// incrementButtonEl.addEventListener('click', () =>{
//     counterValue++;
//     span.innerHTML = counterValue;
//     console.log(counterValue);
// })






// const decrementButtonEl = document.querySelector('[data-action="decrement"]');
// const incrementButtonEl = document.querySelector('[data-action="increment"]');
// const spanEl = document.querySelector('#value');

// decrementButtonEl.addEventListener('click', handldecrementButtonEl);
// incrementButtonEl.addEventListener('click', handlincrementButtonEl)

// let counterValue = 0;

// function handlincrementButtonEl(event) {
//     counterValue += 1;
//     spanEl.textContent = counterValue;
// }

// function handldecrementButtonEl(event) {
//     counterValue -= 1;
//     spanEl.textContent = counterValue;
// }


let counterValue = 0;

const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');

decrementButtonEl.addEventListener('click', () => {
    counterValue--;
    span.textContent = counterValue;
    
})



function handlerIncrementButtonEl() {
    counterValue++;
    span.textContent = counterValue;
}

incrementButtonEl.addEventListener('click', handlerIncrementButtonEl)