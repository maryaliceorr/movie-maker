const progressBarChange = () => {
  let progressBarLength = [];
  const checkboxes = document.getElementsByClassName('checkbox-yeah');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      progressBarLength.push(checkboxes[i].classList.value.split(' ')[0]);
    }
  };
  progressBarLength = progressBarLength.filter((x, i, a) => a.indexOf(x) === i);
  const progressBar = document.getElementById('progress');
  progressBar.style.width = `${progressBarLength.length * 25}%`;
  progressBar.innerHTML = `${progressBarLength.length * 25}%`;
};

module.exports = progressBarChange;
