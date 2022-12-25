const navEl = document.querySelector('#categories');
const ChildrenNavEl = navEl.children.length;
console.log('Number of categories:', ChildrenNavEl);

const TitleElements = document.querySelectorAll('.item');

TitleElements.forEach(item => {
  const TitleEl = item.firstElementChild.textContent;
  const ItemsLength = item.lastElementChild.children.length;

  console.log('Category:', TitleEl);
  console.log('Elements:', ItemsLength);
});