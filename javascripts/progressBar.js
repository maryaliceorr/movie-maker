const progressBarChange = (choices) => {
  const progressBar = document.getElementById('progress');
  const chosenCategories = [... new Set(choices.map(item => item.categoryId)),];
  if (chosenCategories.length === 1) {
    progressBar.classList.add('per25');
  } else if (chosenCategories.length === 2) {
    progressBar.classList.remove('per25');
    progressBar.classList.add('per50');
  } else if (chosenCategories.length === 3) {
    progressBar.classList.remove('per25', 'per50');
    progressBar.classList.add('per75');
  } else if (chosenCategories.length >= 4) {
    progressBar.classList.remove('per25', 'per50', 'per75');
    progressBar.classList.add('per100');
  };
};

module.exports = progressBarChange;
