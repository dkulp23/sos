'use strict';

var nameEl = document.getElementById('Name');
var ageEl = document.getElementById('Age');
var genderEl = document.getElementById('Gender');
var genderTextEl = document.getElementById('genderText');
var phoneEl = document.getElementById('Phone');
var emailEl = document.getElementById('Email');
var dateEl = document.getElementById('Date');
var partyEl = document.getElementById('Party');
var petsEl = document.getElementById('Pets');
var notesEl = document.getElementById('Notes');
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
localStorage.setItem('yourResz', resArray);

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

  window.location.assign('confirmation.html');

  // var localRes = JSON.parse(localStorage.getItem('yourResz'));
  // console.log(localRes);
  // localRes.push(thisReservation);
  // console.log(localRes);
  // localStorage.setItem('yourResz', JSON.stringify(localRes));

}

formSubmitEl.addEventListener('click', submitInfo);
