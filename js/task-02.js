const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');
console.log(navEl);


const elements = ingredients.map(ingredient => {
  const liEl = document.createElement ("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;

  return liEl;
});

navEl.append(...elements);