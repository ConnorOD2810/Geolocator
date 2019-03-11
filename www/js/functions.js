

function geolocation() {
    var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
        },
        watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    //this functions runs if geolocation is returned
    function onSuccess(position) {
        var lat = position.coords.latitude,
            lng = position.coords.longitude,
            userID,
            getlat,
            getlng;

        //tell user their lng and lat
        console.log("lat: " + lat + " long: " + lng);

        $.ajax({
            type: "POST",
            url: 'http://127.0.0.1/insert.php',
            data: { latitude: lat, longitude: lng },
            success: function (response) {
                console.log("Location Data Sent!");
                console.log(response);
            },
            error: function () {
                console.log('Error');
            }
        });
    }

    //if cant get location give error
    function onError(error) {
        console.log("message: " + error.message);
    }
}
