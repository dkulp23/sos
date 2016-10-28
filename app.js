'use strict';
var allLocations = [ ];

//Object constructor for locations
var Location = function(obj) {
  this.name = name;
  this.hood = hood;
  this.address = address;
  this.daysOpen = days;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.restrictions = restrictions;
  allLocations.push(this);
};
