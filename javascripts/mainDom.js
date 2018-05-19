const data = require('./data');

const categoriesOutputDiv = document.getElementById('categories-holder');

let categories = [];
let movieElements = [];

const categoryCard = (categoryItems, elementItems) => {
  let domStrang = '';
  console.log('hi');
  categoryItems.forEach((categoryItem) => {
    domStrang += `<div class="panel">`;
    domStrang +=  `<div class="panel-heading">`;
    domStrang +=    `<div id="${categoryItem.id}" class="categories">`;
    domStrang +=      `<h3 class="panel-title">${categoryItem.categoryName}</h3>`;
    domStrang +=      `<div class="row">`;
    elementItems.forEach((elementItem) => {
      if (categoryItem.id === elementItem.categoryId) {
        domStrang +=    `<div class="checkbox-holder panel-body col-sm-4">`;
        domStrang +=      `<div class="elements form-check">`;
        domStrang +=      `<input id="${elementItem.id}" class="${elementItem.categoryId} checkbox-yeah form-check-input lg" type="checkbox" id="defaultCheck1">`;
        domStrang +=      `<label class="form-check-label" for="defaultCheck1">${elementItem.name}</label>`;
        domStrang +=      `</div>`;
        domStrang +=    `</div>`;
      };
    });
    domStrang +=      `</div>`;
    domStrang +=    `</div>`;
    domStrang +=  `</div>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDomMain = () => {
  categories = data.getCategories();
  movieElements = data.getMovieElements();
  categoriesOutputDiv.innerHTML = categoryCard(categories, movieElements);
};

module.exports = {
  printToDomMain,
};
