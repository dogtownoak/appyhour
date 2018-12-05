$(document).ready(function(){
    console.log("jQuery up and running");


var orders_endpoint = "http://localhost:3000/api/orders/"

var appetizers_endpoint =
"http://localhost:3000/api/appetizers"



//////////// GET ALL ORDERS //////////////////////////////////
$.ajax({
    method: 'GET',
    url: `${appetizers_endpoint}`,
    success: function( response ) {
        console.log( response );
        console.log( response[0]);

        var images = [];
        for(i=0; i < response.length; i++) {
            images.push(`<img src="${response[i].image}">`);
        }
        console.log(images)

        for(i=0; i < images.length ; i++) {
            var imageAppend = images[i];
            $('.appetizer').append(imageAppend);
        }
        
        // $('img').on('click', function(){
        //     $('img').each(function(){
        //     $(this).toggleClass('imgToggle')
        //     });
        //     $(this).toggleClass('imgToggle')
        // });








    },
    error: function() {
        console.log("There was an error getting the data");
    }
});
});