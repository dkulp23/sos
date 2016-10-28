'use strict';
var allLocations = [ ];

var Location = function(name, hood, address, phone, days, times, restrictions) {
  this.name = name;
  this.hood = hood;
  this.address = address;
  this.phone = phone;
  this.daysOpen = days;
  this.timesOpen = times;
  this.restrictions = restrictions;

}
