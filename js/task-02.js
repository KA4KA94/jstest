const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const createList = document.createElement('li');
  createList.classList.add('item');
  ingredientsEl.append(createList);
  createList.textContent += ingredient;
}

console.log(ingredientsEl);



// for (let i = 0; i < ingredients.length; i++) {
//   const createList = document.createElement('li');
//   createList.classList.add('item');
//   ingredientsEl.append(createList);
//   createList.textContent += ingredients[i];
// }

// console.log(ingredientsEl);



// const listItemsArray = [];

// for (const ingredient of ingredients) {
//   const listItem = document.createElement('li');
  
//   listItem.textContent = ingredient;
//   listItem.classList = 'item';
//   listItemsArray.push(listItem);
//   console.log('listItem', listItem);
//   // ingredientsEl.append(listItem); погано! багато звернень в DOM
// }

// ingredientsEl.append(...listItemsArray);





// const listItemsArray = ingredients.map(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   listItem.classList = 'item';
//   return listItem;
// });

// console.log(listItemsArray)

// ingredientsEl.append(...listItemsArray);







// const createList = document.createElement('li');
// // console.log(createList)

// createList.classList.add('item');

// element.append(createList);

// for (let i = 0; i < ingredients.length; i++) {
//   createList.textContent += ingredients[i];
  
// }

// console.log(createList)