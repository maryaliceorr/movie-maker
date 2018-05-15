const data = require('./data');
const categories = require('./categories');
const movieElements = require('./movieElements');
const mainDom = require('./mainDom');
const events = require('./events');
const progressBar = require('./progressBar');

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  movieElements.loadMovieElements(whenElementsLoad, nope);
};

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).movieElements;
  data.setMovieElements(elementsData);
  mainDom.printToDomMain();
  events.eventListenerAdd();
  events.getBudgetListener();
  progressBar();
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
