const categoriesAmount = document.querySelector('#categories').children.length;

const categoriesHeading = document.querySelectorAll('h2');

const list = [...categoriesHeading].reduce(
  (acc, heading) =>
    acc +
    `Category: ${heading.textContent}\nElements: ${heading.nextElementSibling.children.length}\n\n`,
  `Number of categories: ${categoriesAmount}\n\n`
);

console.log(list);
