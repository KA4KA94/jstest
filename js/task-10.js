function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#controls');
// // console.log(divEl);

const inputEl = document.querySelector('input[type = number]');
// console.log(inputEl.valueAsNumber);

const buttonCreateEl = document.querySelector('[data-create]');
// // console.log(buttonCreateEl);

const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl)

const buttonDestroyEl = document.querySelector('[data-destroy]');
// console.log(buttonDestroyEl);


buttonCreateEl.addEventListener('click', () => {
  createBoxes(inputEl.valueAsNumber);
});

buttonDestroyEl.addEventListener('click', () => {
  inputEl.valueAsNumber = '';
  boxesEl.innerHTML = '';
  boxSize = 30;
})

function createBox(size) {
  const newBox = document.createElement('div');
  newBox.style.height = `${size}px`;
  newBox.style.width = `${size}px`;
  newBox.style.background = getRandomHexColor();
  boxesEl.append(newBox);

  // console.log(newBox);  
}

let boxSize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    createBox(boxSize);
    boxSize += 10;
  }
}