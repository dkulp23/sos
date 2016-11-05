'use strict';

var nameEl = document.getElementById('name');
var ageEl = document.getElementById('age');
var genderEl = document.getElementsByName('gender');
var genderTextEl = document.getElementById('genderText');
var phoneEl = document.getElementById('phone');
var emailEl = document.getElementById('email');
var dateEl = document.getElementById('fecha');
var partyEl = document.getElementById('party');
var petsEl = document.getElementById('mascotas');
var notesEl = document.getElementById('notes');
var formSubmitEl = document.getElementById('formSubmit');
var locColEl = document.getElementById('locCol');


var thisReservation = JSON.parse(localStorage.getItem('thisReservation'));

var thisName = thisReservation.name;
var thisHood = thisReservation.hood;
var thisAddress = thisReservation.address;
var thisOpenTime = thisReservation.openTime;
var thisCloseTime = thisReservation.closeTime;
var thisDaysArray = thisReservation.daysOpen;

var openTime;
var closeTime;

var resArray = [];
localStorage.setItem('yourResz', JSON.stringify(resArray));

nameEl.setAttribute('placeholder', 'What\'s your name?');
ageEl.setAttribute('placeholder', 'How old are you?');
genderTextEl.setAttribute('placeholder', 'Gender identity?');
phoneEl.setAttribute('placeholder', 'Where can we reach you?');
emailEl.setAttribute('placeholder', 'Where can we reach you?');
partyEl.setAttribute('placeholder', 'Including yourself!');

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

  var locTitleEl = document.createElement('h3');
  locTitleEl.textContent = 'This is the location you are making a reservation for:';
  locColEl.appendChild(locTitleEl);

  var locNameEl = document.createElement('p');
  locNameEl.textContent = thisName;
  locColEl.appendChild(locNameEl);

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

function submitInfo() {
  localStorage.setItem('yourName', nameEl.value);
  localStorage.setItem('yourParty', partyEl.value);
  localStorage.setItem('resDate', dateEl.value);

  var localRes = JSON.parse(localStorage.getItem('yourResz'));
  localRes.push(thisReservation);
  localStorage.setItem('yourResz', JSON.stringify(localRes));
  localStorage.setItem('yourReservations', JSON.stringify(resArray));
}
