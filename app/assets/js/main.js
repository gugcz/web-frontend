$(document).ready(function() {
  $('.parallax').parallax();


  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 8,
    center: new google.maps.LatLng(49.84264, 15.46619),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

    events.forEach(function(event) {
      new MarkerWithLabel({
        position: new google.maps.LatLng(
          event.coordinates.lat, event.coordinates.lng),
        labelClass: 'card',
        labelContent: '<p>'+ event.name +'</p>',
        map: map,
      });
    });
});
