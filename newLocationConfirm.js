'use strict';

function $(selector) {
  return document.querySelector(selector);
};

function completeTheForm() {
  var newLocation = JSON.parse(localStorage.getItem('newLocation'));
  var nameEl = $('#name');
  nameEl.textContent = newLocation.name;
  var hoodEl = $('#hood');
  hoodEl.textContent = newLocation.hood;
}

completeTheForm();
