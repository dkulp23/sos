'use strict';

function newLocationFormSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var hood = event.target.hood.value;
  var address = event.target.address.value;
  var mondayStatus = function() {
    if(document.querySelector('.monday').checked) {
      return 1;
    }
  };
  var tuesdayStatus = function() {
    if(document.querySelector('.tuesday').checked) {
      return 2;
    }
  };
  var wednesdayStatus = function() {
    if(document.querySelector('.wednesday').checked) {
      return 3;
    }
  };
  var thursdayStatus = function() {
    if(document.querySelector('.thursday').checked) {
      return 4;
    }
  };
  var fridayStatus = function() {
    if(document.querySelector('.friday').checked) {
      return 5;
    }
  };
  var saturdayStatus = function() {
    if(document.querySelector('.saturday').checked) {
      return 6;
    }
  };
  var sundayStatus = function() {
    if(document.querySelector('.sunday').checked) {
      return 7;
    }
  };
  var openTime = parseInt(event.target.openTime.value);
  var closeTime = parseInt(event.target.closeTime.value);
  var restrictions = event.target.restrictions.value;
  var newLocationObject = {
    'name' : name,
    'hood' : hood,
    'address' : address,
    'days' : [
      mondayStatus(),
      tuesdayStatus(),
      wednesdayStatus(),
      thursdayStatus(),
      fridayStatus(),
      saturdayStatus(),
      sundayStatus()
    ],
    'openTime' : openTime,
    'closeTime' : closeTime,
    'restrictions' : restrictions,
  };
  localStorage.setItem('newLocation', JSON.stringify(newLocationObject));
  location.href = 'newLocationConfirm.html';
};

form.addEventListener('submit', newLocationFormSubmit);
