const categories = document.querySelector('#categories')
console.log('Number of categories:', categories.children.length)

for (const item of categories.children) {
    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:', item.lastElementChild.children.length)
}





// const categoriesRef = document.querySelector('#categories');

// console.log("Number of categories:", categoriesRef.children.length);


// for (const item of categoriesRef.children) {
//     const headerTextContent = item.firstElementChild.textContent;
//     console.log('Category:', headerTextContent);

//     const childrenOfSubCategory = item.lastElementChild.children;
//     console.log('Elements:', childrenOfSubCategory.length)
// }




// const nameCategoriesEl1 = document.querySelectorAll('h2')
// console.log('Categories:', nameCategoriesEl1[0].textContent)

// const quantityCategoriesEl1 = document.querySelectorAll('ul')
// console.log('Elements:', quantityCategoriesEl1[1].children.length)

// const nameCategoriesEl2 = document.querySelectorAll('h2')
// console.log('Categories:', nameCategoriesEl2[1].textContent)

// const quantityCategoriesEl2 = document.querySelectorAll('ul')
// console.log('Elements:', quantityCategoriesEl2[2].children.length)

// const nameCategoriesEl3 = document.querySelectorAll('h2')
// console.log('Categories:', nameCategoriesEl3[2].textContent)

// const quantityCategoriesEl3 = document.querySelectorAll('ul')
// console.log('Elements:', quantityCategoriesEl3[3].children.length)