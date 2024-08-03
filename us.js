document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map');

    $.getJSON('https://raw.githubusercontent.com/farrukh2002/weather/main/us.geojson').then(function(geoJSON) {
        var osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            boundary: geoJSON,
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, UK shape <a href="https://github.com/johan/world.geo.json">johan/word.geo.json</a>'
          });
          map.addLayer(osm);
          var ukLayer = L.geoJSON(geoJSON);
          map.fitBounds(ukLayer.getBounds());
});
});