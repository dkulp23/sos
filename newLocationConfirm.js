'use strict';

function $(selector) {
  return document.querySelector(selector);
};

function completeTheForm() {
  var newLocation = JSON.parse(localStorage.getItem('newLocation'));
  $('#name').textContent = 'Location: ' + newLocation.name;
  $('#hood').textContent = 'Neighborhood: ' + newLocation.hood;
  $('#address').textContent = 'Street address: ' + newLocation.address;
  $('#days').textContent = 'Open days: ' + newLocation.days;
  $('#openTime').textContent = 'Opens at: ' + newLocation.openTime;
  $('#closeTime').textContent = 'Closes at: ' + newLocation.closeTime;
  $('#restrictions').textContent = 'Requirements for service: ' + newLocation.restrictions;
}

completeTheForm();
