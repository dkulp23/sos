'use strict';
var allLocations = [ ];

//Object constructor for locations
var Location = function(obj) {
  this.name = obj.name;
  this.hood = obj.hood;
  this.address = obj.address;
  this.daysOpen = obj.days;
  this.openTime = obj.openTime;
  this.closeTime = obj.closeTime;
  this.restrictions = obj.restrictions;
  allLocations.push(this);
};

function instantiateLocations() {
  for(var i = 0; i < breakfastLocationData.length; i++) {
    new Location(breakfastLocationData[i]);
    new Location(lunchLocationData[i]);
    new Location(dinnerLocationData[i]);
  }
}

instantiateLocations();

function makeAnElementWithText(element, textContent, parent) {
  var childEl = document.createElement(element);
  childEl.textContent = textContent;
  parent.appendChild(childEl);
};

function makeAReservationButton(idName, parent) {
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('id', idName);
  buttonEl.textContent = 'Make a Reservation';
  parent.appendChild(buttonEl);
};

function createRow(idName, rowElement, El, tC1, tC2, tC3, tC4) {
  var tableEl = document.getElementById(idName);
  var rowEl = document.createElement(rowElement);
  makeAnElementWithText(El, tC1, rowEl);
  makeAnElementWithText(El, tC2, rowEl);
  makeAnElementWithText(El, tC3, rowEl);
  makeAnElementWithText(El, tC4, rowEl);
  makeAReservationButton(tC1, rowEl);
  tableEl.appendChild(rowEl);
};

function populateTable() {
  for (var i = 0; i < allLocations.length; i++) {
    createRow('foodLocations', 'tr', 'td', allLocations[i].name, allLocations[i].hood, allLocations[i].address, allLocations[i].restrictions);
  }
};

populateTable();
