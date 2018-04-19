const data = require('./data');
const categories = require('./categories');
const mainDom = require ('./mainDom');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  mainDom.printToDomMain(categoriesData);
};

const nope = function () {
  console.error('this failed big time');
};

const initializer = () => {
  categories.loadCategories(whenCategoriesLoad, nope);
};

module.exports = {
  initializer,
};
