<?php
include "conn.php";

if (isset($_REQUEST)) {
    $lat = $_POST['latitude'];
    $long = $_POST['longitude'];

    $result = mysqli_query($con, "INSERT INTO longandlat (`Long`, `Lat`) VALUES ('$long', '$lat')");

    if ($result) {
        echo "Your location has been stored.";
    } else {
        echo "Error";
    }
}
