 function initMap() {
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 5,
         center: { lat: -9.1191427, lng: -77.0349046 },
         mapTypeControl: false,
         zoomControl: false,
         streetViewControl: false
     });

     function searchFor() {
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(functionSuccess, functionFault);
         }
     }
     document.getElementById("foundMe").addEventListener("click", searchFor);
     var latitudes, longitudes;

     var functionSuccess = function(position) {
         latitudes = position.coords.latitude;
         longitudes = position.coords.longitude;

         var image = 'assets/img/bici3.png';
         var mylocation = new google.maps.Marker({
             position: { lat: latitudes, lng: longitudes },
             animation: google.maps.Animation.DROP,
             map: map,
             icon: image
         });
         map.setZoom(17);
         map.setCenter({ lat: latitudes, lng: longitudes });
     }

     var functionFault = function(fault) {
         alert("We have a problem finding your location");
     }
 }