$(document).ready(function() {
  $('.parallax').parallax();


  if (google) {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 8,
      center: new google.maps.LatLng(49.84264, 15.46619),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    showEventsOnMap(events, map);
  }
});
