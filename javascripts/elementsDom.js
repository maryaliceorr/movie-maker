const elementsOutputDiv = document.getElementById('elements-holder');

const elementList = (elements) => {
  let domStrang = '';
  elements.forEach((element) => {
    domStrang += `<div class="elements form-check">`;
    domStrang += `<input class="form-check-input" type="checkbox" id="defaultCheck1">`;
    domStrang += `<label class="form-check-label" for="defaultCheck1">${element.name}</label>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDomElements = (elements) => {
  elementsOutputDiv.innerHTML = elementList(elements);
};

module.exports = {
  printToDomElements,
};
