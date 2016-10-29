'use strict';

function codeAddress() {
  var mapGeo = new google.maps.Geocoder();
  for(var i = 0; i < allLocations.length; i++) {
    var address = allLocations[0].address;
    mapGeo.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        // map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
};

codeAddress();
