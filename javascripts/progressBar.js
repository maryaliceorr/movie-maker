const data = require('./data');

const progressBarChange = () => {
  const progressBar = document.getElementById('progress');
  const categoryOne = 'Actors';
  const categoryTwo = 'Animals';
  const categoryThree = 'Locations';
  const categoryFour = 'SpecialFX';
  const categoriesChosen = data.getMovieElements;

  for (let i = 0; i < categoriesChosen.length; i++) {
    if (categoriesChosen[i].categoryId.checked === categoryOne || categoryTwo || categoryThree || categoryFour) {
      progressBar.classList.add('per25');
    } else if (categoriesChosen[i].categoryId.checked === categoryOne && categoryTwo || categoryOne && categoryThree || categoryOne && categoryFour || categoryTwo && categoryThree || categoryTwo && categoryFour || categoryThree && categoryFour) {
      progressBar.classList.remove('per25');
      progressBar.classList.add('per50');
    } else if (categoriesChosen[i].categoryId.checked === categoryOne && categoryTwo && categoryThree || categoryTwo && categoryThree && categoryFour || categoryOne && categoryThree && categoryFour || categoryOne && categoryTwo && categoryFour) {
      progressBar.classList.remove('per25', 'per50');
      progressBar.classList.add('per75');
    } else if (categoriesChosen[i].categoryId.checked === categoryOne && categoryTwo && categoryThree && categoryFour) {
      progressBar.classList.remove('per25', 'per50', 'per75');
      progressBar.classList.add('per100');
    }
  };
};

module.exports = progressBarChange;
