'use strict';

function mapMarker(event) {
  googleMap();
  var address = event.target.textContent;
  var mapGeo = new google.maps.Geocoder();
  for(var i = 0; i < allLocations.length; i++) {
    if(address === allLocations[i].address) {
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
  }
};

function showAddressMarker() {
  var addressForMarker = document.querySelectorAll('.address');
  for (var i = 0; i < addressForMarker.length; i++) {
    addressForMarker[i].addEventListener('click', mapMarker);
  }
};

showAddressMarker();
