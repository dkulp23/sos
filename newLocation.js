'use strict';

function newLocationFormSubmit(event) {
  var name = event.target.name.value;
  var hood = event.target.hood.value;
  var address = event.target.address.value;
  var days = parseInt(event.target.days.value);
  var openTime = parseInt(event.target.openTime.value);
  var closeTime = parseInt(event.target.closeTime.value);
  var restrictions = event.target.restrictions.value;
  var newLocationObject = {
    'name' : name,
    'hood' : hood,
    'address' : address,
    'days' : days,
    'openTime' : openTime,
    'closeTime' : closeTime,
    'restrictions' : restrictions,
  };
  localStorage.setItem('newLocation', JSON.stringify(newLocationObject));
};

form.addEventListener('submit', newLocationFormSubmit);
