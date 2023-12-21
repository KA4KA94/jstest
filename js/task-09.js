function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
// console.log("colorEl", colorEl.textContent)
// console.log("bodyEl", bodyEl)
// console.log("buttonEl", buttonEl)

buttonEl.addEventListener('click', (e) => {
  console.log(e)
  // console.log(bodyEl.style.background = 'black');
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;

  //bodyEl.style.backgroundColor = getRandomHexColor();
  //colorEl.textContent = getRandomHexColor();
})








// function getRandomHexColor() {
//   return console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
// }

// getRandomHexColor()