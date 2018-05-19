let categories = [];
let movieElements = [];
let cost = 0;
const movieSelectionsArray = [];
let budget = 0;

const getCategories = () => {
  return categories;
};

const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getMovieElements = () => {
  return movieElements;
};

const setMovieElements = (movieElementsArray) => {
  movieElements = movieElementsArray;
};

const getMovieElementCost = () => {
  return cost;
};

const setMovieElementCost = (movieCost) => {
  cost += movieCost * 1;
};

const setMovieElementSelections = (movieSelection) => {
  movieSelectionsArray.push(movieSelection);
};

const removeMovieElementsSelections = (movieSelection) => {
  const stuffToRemove = movieSelectionsArray.map((x) => {
    return x.id;
  }).indexOf(movieSelection.id);
  movieSelectionsArray.splice(stuffToRemove, 1);
};

const getMovieElementSelections = () => {
  return movieSelectionsArray;
};

const setBudget = (budgetInput) => {
  budget = budgetInput;
};

const getBudget = () => {
  return budget;
};

module.exports = {
  getCategories,
  setCategories,
  setMovieElements,
  getMovieElements,
  setMovieElementCost,
  getMovieElementCost,
  setMovieElementSelections,
  getMovieElementSelections,
  getBudget,
  setBudget,
  removeMovieElementsSelections,
};
