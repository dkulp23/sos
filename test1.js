var allLocations = [];

var Location = function(obj) {
  this.name = obj.name;
  this.hood = obj.hood;
  this.address = obj.address;
  this.daysOpen = obj.days;
  this.openTime = obj.openTime;
  this.closeTime = obj.closeTime;
  this.restrictions = obj.restrictions;
  allLocations.push(this);
};
function instantiateLocations() {
  for(var i = 0; i < breakfastLocationData.length; i++) {
    new Location(breakfastLocationData[i]);
  }
}
instantiateLocations();
