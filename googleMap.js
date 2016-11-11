'use strict';

function mapMarker(event) {
  googleMap();
  var address = event.target.textContent;
  var mapGeo = new google.maps.Geocoder();
  for(var i = 0; i < allLocations.length; i++) {
    if(address === allLocations[i].address) {
      var locName = allLocations[i].name;
      mapGeo.geocode( { 'address': address + ', Seattle, WA'}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
          var infowindow = new google.maps.InfoWindow({
            content: locName + '</br>' + address 
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
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
