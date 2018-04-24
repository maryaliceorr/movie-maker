const data = require('./data');
const categories = require('./categories');
const movieElements = require('./movieElements');
const elementsDom = require('./elementsDom');
const mainDom = require ('./mainDom');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  mainDom.printToDomMain(categoriesData);
};

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).movieElements;
  data.setMovieElements(elementsData);
  console.log('elementsData', elementsData);
  elementsDom.printToDomElements(elementsData);
};

const nope = function () {
  console.error('this failed big time');
};

const initializer = () => {
  categories.loadCategories(whenCategoriesLoad, nope);
  movieElements.loadMovieElements(whenElementsLoad, nope);
};

module.exports = {
  initializer,
};
