const categoriesOutputDiv = document.getElementById('categories-holder');

const categoryCard = (categories) => {
  let domStrang = '';
  categories.forEach((category) => {
    domStrang += `<div id="${category.id}" class="categories">`;
    domStrang += `<h3>${category.categoryName}</h3>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDomMain = (categories) => {
  categoriesOutputDiv.innerHTML = categoryCard(categories);
};

module.exports = {
  printToDomMain,
};
