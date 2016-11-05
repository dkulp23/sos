'use strict';

function newLocationFormSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var hood = event.target.hood.value;
  var address = event.target.address.value;
  var days = [ ];
  var displayDays = [ ];
  var mondayStatus = function() {
    if(document.querySelector('.monday').checked) {
      days.push(1);
      displayDays.push('Monday');
    }
  };
  var tuesdayStatus = function() {
    if(document.querySelector('.tuesday').checked) {
      days.push(2);
      displayDays.push('Tuesday');
    }
  };
  var wednesdayStatus = function() {
    if(document.querySelector('.wednesday').checked) {
      days.push(3);
      displayDays.push('Wednesday');
    }
  };
  var thursdayStatus = function() {
    if(document.querySelector('.thursday').checked) {
      days.push(4);
      displayDays.push('Thursday');
    }
  };
  var fridayStatus = function() {
    if(document.querySelector('.friday').checked) {
      days.push(5);
      displayDays.push('Friday');
    }
  };
  var saturdayStatus = function() {
    if(document.querySelector('.saturday').checked) {
      days.push(6);
      displayDays.push('Saturday');
    }
  };
  var sundayStatus = function() {
    if(document.querySelector('.sunday').checked) {
      days.push(7);
      displayDays.push('Sunday');
    }
  };
  mondayStatus();
  tuesdayStatus();
  wednesdayStatus();
  thursdayStatus();
  fridayStatus();
  saturdayStatus();
  sundayStatus();
  var openTime = parseInt(event.target.openTime.value);
  var closeTime = parseInt(event.target.closeTime.value);
  var restrictions = event.target.restrictions.value;
  var newLocationObject = {
    'name' : name,
    'hood' : hood,
    'address' : address,
    'days' : displayDays.join(', '),
    'openTime' : openTime,
    'closeTime' : closeTime,
    'restrictions' : restrictions,
  };
  localStorage.setItem('newLocation', JSON.stringify(newLocationObject));
  location.href = 'newLocationConfirm.html';
};

form.addEventListener('submit', newLocationFormSubmit);
