const data = require('./data');
const elementsDom = require('./elementsDom');
const progressBarChange = require('./progressBar');

const movieStatementHolder = document.getElementById('movie-statement');

const budgetSubmitClicked = (e) => {
  e.preventDefault();
  const getbudget = document.getElementById('budget-input').value;
  data.setBudget(getbudget);
  const budget = data.getBudget() - data.getMovieElementCost();
  const budgetHolderOutputDiv = document.getElementById('budget-amount');
  budgetHolderOutputDiv.innerHTML = `$${budget}`;
  budgetHolderOutputDiv.classList.add('green');
};

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

      if (budget < 0) {
        // && progressBar === '100%')
        budgetHolderOutputDiv.classList.remove('green');
        budgetHolderOutputDiv.classList.add('red');
        movieStatementHolder.classList.add('red');
        movieStatementHolder.innerHTML = 'You cannot make this movie yet.';
      } else {
        budgetHolderOutputDiv.classList.add('green');
        movieStatementHolder.innerHTML = 'Congrats, you can make this movie!';
        movieStatementHolder.classList.add('green');
      }
    };
  });
  // console.log('you clicked it');
  // console.log(typeof e.target.id);
  progressBarChange();
};

const eventListenerAdd = () => {
  const checkboxes = document.getElementsByClassName('checkbox-holder');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', checkboxClicked);
  };
};

const getBudgetListener = () => {
  const budgetSubmitButton = document.getElementById('budget-submit');
  budgetSubmitButton.addEventListener('click', budgetSubmitClicked);
};

module.exports = {
  eventListenerAdd,
  getBudgetListener,
};
