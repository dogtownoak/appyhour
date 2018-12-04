$(document).ready(function(){
    console.log("jQuery up and running");


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