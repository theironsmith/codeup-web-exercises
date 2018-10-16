// Instantiate a map and platform object:
var platform = new H.service.Platform({
    'app_id': '',
    'app_code': ''
});
// Retrieve the target element for the map:
var targetElement = document.getElementById('mapContainer');

// Get default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var icon = new H.map.Icon('img/deadpool-clipart-8-bit.png');
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
        zoom: 17,
        center: { lat: 29.428541, lng: -98.491544 }
    });

// Create the parameters for the geocoding request:
var geocodingParams = {
    searchText: 'Kimura, 152 E Pecan St #102, San Antonio, TX 78205'
};

// Define a callback function to process the geocoding response:
var onResult = function(result) {
    var locations = result.Response.View[0].Result,
        position,
        marker;
    // Add a marker for each location found
    for (i = 0;  i < locations.length; i++) {
        position = {
            lat: locations[i].Location.DisplayPosition.Latitude,
            lng: locations[i].Location.DisplayPosition.Longitude
        };
        marker = new H.map.Marker(position);
        map.addObject(marker);
    }
};

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
geocoder.geocode(geocodingParams, onResult, function(e) {
    alert(e);

    //Info Bubble

    function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        // add custom data to the marker
        marker.setData(html);
        group.addObject(marker);
    }

    /**
     * Creates a new marker and adds it to a group
     * @param {H.map.Group} group       The group holding the new marker
     * @param {H.geo.Point} coordinate  The location of the marker
     * @param {String} html             Data associated with the marker
     */
    function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        // add custom data to the marker
        marker.setData(html);
        group.addObject(marker);
    }

    /**
     * Add two markers showing the position of Liverpool and Manchester City football clubs.
     * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
     * @param  {H.Map} map      A HERE Map instance within the application
     */
    function addInfoBubble(map) {
        var group = new H.map.Group();

        map.addObject(group);

        // add 'tap' event listener, that opens info bubble, to the group
        group.addEventListener('tap', function (evt) {
            // event target is the marker itself, group is a parent event target
            // for all objects that it contains
            var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
                // read custom data
                content: evt.target.getData()
            });
            // show info bubble
            ui.addBubble(bubble);
        }, false);

        addMarkerToGroup(group, {lat:29.428541, lng:-98.491544},
            '<div><a href=\'http://www.kimurasa.com\' >San Antonio</a>' +
            '</div><div >Downtown San Antonio, TX<br>Capacity: 48,000</div>');
    }
});