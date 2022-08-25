const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listMarkup = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');
  return itemRef;
});

document.querySelector('ul#ingredients').append(...listMarkup);
