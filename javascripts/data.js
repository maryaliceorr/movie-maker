let categories = [];
let movieElements = [];

const getCategories = () => {
  return categories;
};

const getMovieElements = () => {
  return movieElements;
};

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const setMovieElements = (movieElementsArray) => {
  movieElements = movieElementsArray;

};

module.exports = {
  getCategories,
  setCategories,
  setMovieElements,
  getMovieElements,
};
