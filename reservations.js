var nameEl = document.getElementById('name');
var ageEl = document.getElementById('age');
var genderEl = document.getElementById('genero');
var genderTextEl = document.getElementById('genderText');
var phoneEl = document.getElementById('phone');
var emailEl = document.getElementById('email');
var dateEl = document.getElementById('date');
var partyEl = document.getElementById('party');
var petsEl = document.getElementById('mascotas');
var notesEl = document.getElementById('notes');
var formSubmitEl = document.getElementById('formSubmit');

var thisReservation = JSON.parse(localStorage.getItem('thisReservation'));

var locTitleEl = document.getElementById('locTitle');
var thisName = thisReservation.name;
var thisHood = thisReservation.hood;
var thisAddress = thisReservation.address;
var thisOpenTime = thisReservation.openTime;
var thisCloseTime = thisReservation.closeTime;
var thisDaysArray = thisReservation.daysOpen;

var openTime;
var closeTime;

nameEl.setAttribute('placeholder', 'What\'s your name?');
ageEl.setAttribute('placeholder', 'How old are you?');
genderTextEl.setAttribute('placeholder', 'Gender identity?');
phoneEl.setAttribute('placeholder', 'Where can we reach you?')
emailEl.setAttribute('placeholder', 'Where can we reach you?')
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

  var locNameEl = document.createElement('p');
  locNameEl.textContent = thisName;
  locTitleEl.appendChild(locNameEl);

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


formSubmitEl.addEventListener('click', 'validateForm');

function validateForm() {
  if (nameEl === '') {
    nameEl.setAttribute('placeholder', 'Please enter your name.');
  }
  else if (ageEl === '') {
    ageEl.setAttribute('placeholder', 'Please enter your age.');
  // else if ()

  }
}

// function validateForm() {
//   switch {
//     case (nameEl === ''):
//       nameEl.setAttribute('placeholder', 'Please enter your name.');
//     case (ageEl === ''):
//       ageEl.setAttribute('placeholder', 'Please enter your age.');
//   }
// }


// TODO if everything is good, [action="confirmation.js" method="get"]
