    // In the following example, markers appear when the user clicks on the map.
      // The markers are stored in an array.
      // The user can then click an option to hide, show or delete the markers.
    var map;
    var markers = [];

    function initMap() {
        var haightAshbury = {lat: 37.566645, lng: 126.978371};

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: haightAshbury,
        });
          
        //    버튼
        var locations = [];
        $("#store_btn div").click(function(){
            deleteMarkers()
            $("#store_btn div").animate({right:"-50px"}, 100);
            $(this).animate({right:"0px"}, 100, function location(){
                locations = [];
                if ($(this).index() === 0) {
                    var locations  = [
                        ['classic_4', 37.664846, 127.043596],
                        ['classic_3', 37.451964, 126.900737],
                        ['classic_2', 37.509588, 126.887553],
                        ['classic_1', 37.639825, 127.068618],
                    ];
                } else if ($(this).index() === 1){
                    var locations  = [
                        ['w_6', 37.559955, 126.840502],
                        ['w_5', 37.535214, 127.095767],
                        ['w_4', 37.509271, 127.007485],
                        ['w_3', 37.498131, 127.026428],
                        ['w_2', 37.482090, 126.881627],
                        ['w_1', 37.477736, 127.124954],
                    ];
                } else if ($(this).index() === 2){
                    var locations = [
                        ['a_lab_1', 37.556232, 126.934529]
                    ];
                } else if ($(this).index() === 3){
                    var locations = [
                        ['queens_1', 37.511158, 127.098135]
                    ]; 
                }
                
                for (i = 0; i < locations.length; i++) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map
                    });
                    markers.push(marker);
                }
            });
        });
    }
      // Sets the map on all markers in the array.
    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }
    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setMapOnAll(null);
    }
      // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }