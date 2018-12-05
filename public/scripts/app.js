$(document).ready(function(){
    console.log("jQuery up and running");

    var drinkUrl = `/api/drinks`

    $.ajax({
        method: 'GET',
        url: drinkUrl,
        success: onSuccess,
        error: onError,
    })

    function onSuccess (response) {
        console.log(response);
    }
    function onError (err) {
        console.log(err);
    }







var orders_endpoint = "http://localhost:3000/api/orders/"



//////////// GET ALL ORDERS //////////////////////////////////
$.ajax({
    method: 'GET',
    url: `${orders_endpoint}`,
    success: function( response ) {
        console.log( response );
    },
    error: function() {
        console.log("There was an error getting the data");
    }
});
});

