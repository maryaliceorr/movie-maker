const elementSelectionOutputDiv = document.getElementById('element-selection-holder');

const displaySelections = (selections) => {
  let domStrang = '';
  selections.forEach((selection) => {
    domStrang += `<div>`;
    domStrang += `<h4>${selection.name}</h4>`;
    domStrang += `<h6>$${selection.cost}</h6>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDomElements = (selections) => {
  elementSelectionOutputDiv.innerHTML = displaySelections(selections);
};

module.exports = printToDomElements;
