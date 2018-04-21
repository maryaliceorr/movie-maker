const loadMovieElements = (loadfunction, errorfunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadfunction);
  myRequest.addEventListener('error', errorfunction);
  myRequest.open('GET', '../db/movie-elements.json');
  myRequest.send();
};

module.exports = {
  loadMovieElements,
};
