$(document).ready(function() {
  $('.parallax').parallax();


  map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 8,
    center: new google.maps.LatLng(49.84264, 15.46619),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

    events.forEach(function(event) {
      padding = 10;
      div = $('<div/>')[0];

      width = 210;
      height = 10;
      index = 0;

      table = $('<div/>').addClass('card')
        .css('position', 'relative')
        .css('left', (index * 10) + 'px')
        .css('top', -(index * 10) + 'px')
        .appendTo(div);
      tr = $('<tr/>').appendTo(table);
      groupStyle = 'gdg';
      $('<td/>').addClass('date ' + groupStyle).html('9' + '.').appendTo(tr);
      $('<td/>').addClass('name').html(event.name).appendTo(tr);

      width += padding;
      height += 45;
      index++;

      div.style.width = width + 'px';

      latLng = new google.maps.LatLng(
        event.coordinates.lat, event.coordinates.lng);

      marker = new MarkerWithLabel({
        icon: ' ',
        position: latLng,
        map: map,
        labelContent: div,
        labelAnchor: new google.maps.Point(width * 0.25, height * 0.25),
      });

      google.maps.event.addListener(
        marker, 'click', function(e) {
          win = window.open('event/' + event.urlId, '_blank');
          win.focus();
});
    });
});
