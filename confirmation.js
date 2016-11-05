'use strict';

var leftEl = document.getElementById('left');
var rightEl = document.getElementById('right');

var thisReservation = JSON.parse(localStorage.getItem('thisReservation'));

var resName = localStorage.getItem('yourName');

var resParty = localStorage.getItem('yourParty');

var resDate = localStorage.getItem('resDate');

var thisName = thisReservation.name;
var thisHood = thisReservation.hood;
var thisAddress = thisReservation.address;
var thisOpenTime = thisReservation.openTime;
var thisCloseTime = thisReservation.closeTime;
var thisDaysArray = thisReservation.daysOpen;

var openTime;
var closeTime;

function addOpenSuffix() {
  if (thisOpenTime < 12) {
    openTime = thisOpenTime + 'am';
    return openTime;
  }
  else if (thisOpenTime === 12) {
    openTime = thisOpenTime + 'pm';
    return openTime;
  }
  else if (thisOpenTime > 12) {
    openTime = (thisOpenTime - 12) + 'pm';
    return openTime;
  }
}

function addCloseSuffix() {
  if (thisCloseTime < 12) {
    closeTime = thisCloseTime + 'am';
    return closeTime;
  }
  else if (thisCloseTime === 12) {
    closeTime = thisCloseTime + 'pm';
    return closeTime;
  }
  else if (thisCloseTime > 12) {
    closeTime = (thisCloseTime - 12) + 'pm';
    return closeTime;
  }
}

function printLocation() {

  var breakEl = document.createElement('br');

  var yourNameEl = document.createElement('h4');
  yourNameEl.textContent = 'Your Name: ';
  leftEl.appendChild(yourNameEl);

  var resNameEl = document.createElement('p');
  resNameEl.textContent = resName;
  leftEl.appendChild(resNameEl);

  var yourDateEl = document.createElement('h4');
  yourDateEl.textContent = 'Date of reservation: ';
  leftEl.appendChild(yourDateEl);

  var resDateEl = document.createElement('p');
  resDateEl.textContent = resDate;
  leftEl.appendChild(resDateEl);

  var yourPartyEl = document.createElement('h4');
  yourPartyEl.textContent = 'Number of People: ';
  leftEl.appendChild(yourPartyEl);

  var resPartyEl = document.createElement('p');
  resPartyEl.textContent = resParty;
  leftEl.appendChild(resPartyEl);

  var locationEl = document.createElement('h4');
  locationEl.textContent = 'Location: ';
  rightEl.appendChild(locationEl);

  var locNameEl = document.createElement('p');
  locNameEl.textContent = thisName;
  rightEl.appendChild(locNameEl);

  var locHoodEl = document.createElement('p');
  locHoodEl.textContent = thisHood;
  locNameEl.appendChild(locHoodEl);

  var locAddressEl = document.createElement('p');
  locAddressEl.textContent = thisAddress;
  locHoodEl.appendChild(locAddressEl);

  addOpenSuffix();
  addCloseSuffix();

  var locTime = openTime + ' - ' + closeTime;
  var locTimeEl = document.createElement('p');
  locTimeEl.textContent = 'Serving from ' + locTime;
  locAddressEl.appendChild(locTimeEl);

  var daysString = thisDaysArray.join(', ');
  var thisDaysOpen = daysString.replace('1', 'Monday').replace('2', 'Tuesday').replace('3', 'Wednesday').replace('4', 'Thursday').replace('5', 'Friday').replace('6', 'Saturday').replace('7', 'Sunday');

  var locDaysEl = document.createElement('p');
  locDaysEl.textContent = 'Open: ' + thisDaysOpen;
  locTimeEl.appendChild(locDaysEl);
}

printLocation();
