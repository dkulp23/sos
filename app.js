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
    new Location(lunchLocationData[i]);
    new Location(dinnerLocationData[i]);
  }
}

instantiateLocations();

var map;

function googleMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.6050, lng: -122.3344},
    zoom: 13
  });
};
// start filtering meal type locations IF CLICKED. saving for now just in case
// var breakfast = document.getElementById("breakfast");
// var lunch = document.getElementById("lunch");
// var dinner = document.getElementById("dinner");
//display all Breakfast locations when clicked
// function clickBreakfast(event) {
//   for(var i = 0; i < breakfastLocationData.length; i++) {
//     alert(breakfastLocationData[i].name);
//   }
// }
// breakfast.addEventListener("click", clickBreakfast);
// ^ end filtering click event for meal types ^

//helper function to create table elements
function makeAnElementWithText(element, textContent, parent) {
  var childEl = document.createElement(element);
  childEl.textContent = textContent;
  parent.appendChild(childEl);
};

function setClassOfAddressCells(element, textContent, parent) {
  var childEl = document.createElement(element);
  childEl.setAttribute('class', 'address');
  childEl.textContent = textContent;
  parent.appendChild(childEl);
};

//helper function to create reservation button
function makeAReservationButton(idName, parent) {
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('id', idName);
  buttonEl.textContent = 'Make a Reservation';
  parent.appendChild(buttonEl);
  //get something that will refer to data.js for the hours as we did for .names
  //display hour property for current time for user
  var hour = new Date().getHours();//assigns curent time HR
  hour;
  for (i = 0; i <= allLocations.length; i++){
    if(hour >= allLocations[i].openTime && hour <= allLocations[i].closeTime){ //range of time open to close
      buttonEl.style.backgroundColor = 'transparent'; //clear if place is open
    }else{
      buttonEl.style.backgroundColor = 'red'; //red if place is closed
    }
  }

};

//helper function to create table rows
function createRow(idName, rowElement, El, tC1, tC2, tC3, tC4) {
  var tableEl = document.getElementById(idName);
  var rowEl = document.createElement(rowElement);
  makeAnElementWithText(El, tC1, rowEl);
  makeAnElementWithText(El, tC2, rowEl);
  setClassOfAddressCells(El, tC3, rowEl);
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
  var thisLocation;
  for (var i = 0; i < allLocations.length; i++) {
    if (reservationClick === allLocations[i].name) {
      allLocations[i].reservations += 1;
      reservedLocation.push(allLocations[i]);
      thisLocation = allLocations[i];
    }
  };
  localStorage.setItem('reservation', JSON.stringify(reservedLocation));
  localStorage.setItem('allLocations', JSON.stringify(allLocations));
  localStorage.setItem('thisReservation', '');
  localStorage.setItem('thisReservation', JSON.stringify(thisLocation));
  window.location.assign('reservations.html');
};

function addEventListeners() {
  for (var i = 0; i < allLocations.length; i++) {
    document.getElementById(allLocations[i].name).addEventListener('click', reservationForm);
  }
};

addEventListeners();

function newLocationButtonClick() {
  window.location.assign('newLocation.html');
};

document.getElementById('newLocation').addEventListener('click', newLocationButtonClick);
