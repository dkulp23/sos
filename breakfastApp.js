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
  this.reservations = obj.reservations || 0;
  allLocations.push(this);
};

function instantiateLocations() {
  for(var i = 0; i < breakfastLocationData.length; i++) {
    new Location(breakfastLocationData[i]);
  }
}

instantiateLocations();

//helper function to create table elements
function makeAnElementWithText(element, textContent, parent) {
  var childEl = document.createElement(element);
  childEl.textContent = textContent;
  parent.appendChild(childEl);
};

//helper function to create reservation button
function makeAReservationButton(idName, parent) {
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('id', idName);
  buttonEl.textContent = 'Make a Reservation';
  parent.appendChild(buttonEl);
};

//helper function to create table rows
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

//loop to create table with object instances in allLocations array
function populateTable() {
  for (var i = 0; i < allLocations.length; i++) {
    createRow('foodLocations', 'tr', 'td', allLocations[i].name, allLocations[i].hood, allLocations[i].address, allLocations[i].restrictions);
  }
};

populateTable();

function reservationForm(event) {
  var reservationClick = event.target.id;
  var reservedLocation = [];
  for (var i = 0; i < allLocations.length; i++) {
    if (reservationClick === allLocations[i].name) {
      allLocations[i].reservations += 1;
      reservedLocation.push(allLocations[i]);
    }
  };
  localStorage.setItem('reservation', JSON.stringify(reservedLocation));
  localStorage.setItem('allLocations', JSON.stringify(allLocations));
  // window.location.assign('reservations.html');
};

function addEventListeners() {
  for (var i = 0; i < allLocations.length; i++) {
    document.getElementById(allLocations[i].name).addEventListener('click', reservationForm);
  }
};

addEventListeners();
