const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const imageEl = document.querySelector('.gallery')
console.log(imageEl)


for (const image of images) {
  const markup = `<li><img src = '${image.url}' alt = '${image.alt}'></img></li>`;
  imageEl.insertAdjacentHTML('beforeend', markup);

  // console.log(markup);
  // markup.style.width = '100px'
  // imageEl.style.width = '200px';
  // const animalEl = document.querySelector('.photo')
  // console.log(animalEl)
  // animalEl.style.width = '500px'
}







// const markup = images
//   .map((image) => `<li>${image.url}<li>`)
//   .join('');

// imageEl.insertAdjacentHTML('beforeend', markup)





// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");