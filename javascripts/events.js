const data = require('./data');
const elementsDom = require('./elementsDom');

const checkboxClicked = (e) => {
  // callback function after you have clicked
  const elementsData = data.getMovieElements();
  elementsData.forEach((element) => {
    if (element.id === e.target.id) {
      data.setMovieElementCost(element.cost);
      data.setMovieElementSelections(element);

      const movieSelections = data.getMovieElementSelections();
      elementsDom(movieSelections);

      const budget = data.getBudget() - data.getMovieElementCost();
      const budgetHolderOutputDiv = document.getElementById('budget-amount');
      budgetHolderOutputDiv.innerHTML = `$${budget}`;
    };
  });
  // console.log('you clicked it');
  // console.log(typeof e.target.id);
};

const eventListenerAdd = () => {
  const checkboxes = document.getElementsByClassName('checkbox-holder');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', checkboxClicked);
  };
};

const budgetSubmitClicked = (e) => {
  e.preventDefault();
  const getbudget = document.getElementById('budget-input').value;
  data.setBudget(getbudget);
  const budget = data.getBudget() - data.getMovieElementCost();
  const budgetHolderOutputDiv = document.getElementById('budget-amount');
  budgetHolderOutputDiv.innerHTML = `$${budget}`;
};

const getBudgetListener = () => {
  const budgetSubmitButton = document.getElementById('budget-submit');
  budgetSubmitButton.addEventListener('click', budgetSubmitClicked);
};

module.exports = {
  eventListenerAdd,
  getBudgetListener,
};
