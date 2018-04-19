const loadCategories = (loadfunction, errorfunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadfunction);
  myRequest.addEventListener('error', errorfunction);
  myRequest.open('GET', '../db/categories.json');
  myRequest.send();
};

module.exports = {
  loadCategories,
};
