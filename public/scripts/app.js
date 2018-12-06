$(document).ready(function(){
    console.log("jQuery up and running");
  
////GET ALL DRINKS AND APPEND TO PAGE////
    var drinkUrl = `/api/drinks`

    $.ajax({
        method: 'GET',
        url: drinkUrl,
        success: onSuccess,
        error: onError,
    });

    function onError (err) {
        console.log(err);
    }

    function onSuccess (drinks) {
        console.log(drinks);
        $('.drinkList').empty();
        drinks.forEach(drink => {
            let card1 = `
            <div class="drinkCard">
            <img src="${drink.image}" >
                <div class="textContainer">
                    <p>${drink.brand}, ${drink.style}</p>
                    <p>${drink.business}</p>
                    <p>${drink.businessAddress}</p>
                </div>
            <div class="descriptionPopUp">
                <p>${drink.brand}, ${drink.style}</p>
                <p>${drink.description}</p>
                <button type="button" class="orderItem" data-id= ${drink._id}>Reserve</button>
            </div>
            </div>
            `

            $('.drinkList').append(card1);
        });
        }
    });

////CREATE DRINK ORDER//////
$('.drinkList').one('click', '.orderItem', function(e){
    e.preventDefault();

var ordersUrl = '/api/orders'
var drinkId = $(this).data()
//console.log(drinkId)
var today = new Date()
var tomorrow = new Date((new Date()).valueOf() + 1000*3600*24)

var newOrder = {
        dateValid: tomorrow,
        dateOrdered: today,
        orderNumber: Math.floor(1000 + Math.random() * 9000),
        user: "5c0829fec4a17ff9bb463549",
        appetizer: drinkId.id,
    };


$.ajax({
    method: 'POST',
    url: ordersUrl,
    data: newOrder,
    success: onSuccess,
    error: onError,
});

    function onError ( err ) {
        console.log( err );
    }
    function onSuccess (order) {
        console.log(`Order Created:`, order)
        $('#orderNumber').text(order.orderNumber)
        $('.orderContainer').append(`<a id="cancel" data-id=${order._id} href="#"> Changed Your Mind?</a>`)
    //    $('#cancel').attr("data-id=123")
    //    `<button type="button" data-id=${order._id}> Changed Your Mind?</button>`
}
});

//////////// GET ALL APPETIZERS AND APPEND TO PAGE ///////////////////////////////
    var appetizersUrl =
    `/api/appetizers`

    $.ajax({
        method: 'GET',
        url: appetizersUrl,
        success: onSuccess,
        error: onError,
    });

        function onError ( err ) {
            console.log( err );
        } 
        function onSuccess (appetizers) {
            console.log(appetizers);
            $('.appetizerList').empty();
            appetizers.forEach(appetizer => {
                var card1 =
                `<div class="appCard" >
                <img src="${appetizer.image}">
                    <div class="textContainer">
                        <p>${appetizer.type}, Type: ${appetizer.style}</p>
                        <p>${appetizer.business}</p>
                        <p>${appetizer.businessAddress}</p>
                    </div>
                    <div class="descriptionPopUp">
                        <p>${appetizer.type}, Type: ${appetizer.style}</p>
                        <p>${appetizer.description}</p>
                        <button class="orderItem" type="button" data-id= ${appetizer._id}>Reserve</button>
                    </div>
                </div>`
                $('.appetizerList').append(card1);
            })
        }
    
///////////// CREATE APPETIZER ORDER /////////////////////////

    $('.appetizerList').one('click', '.orderItem', function(e){
        e.preventDefault();
        console.log(e)
        // e.prop('tagName')


    var ordersUrl = '/api/orders'
    var appId = $(this).data()
    console.log(appId)
    var today = new Date()
    var tomorrow = new Date((new Date()).valueOf() + 1000*3600*24)

    var newOrder = {
            dateValid: tomorrow,
            dateOrdered: today,
            orderNumber: Math.floor(1000 + Math.random() * 9000),
            user: "5c0829fec4a17ff9bb463549",
            appetizer: appId.id,
        };


    $.ajax({
        method: 'POST',
        url: ordersUrl,
        data: newOrder,
        success: onSuccess,
        error: onError,
    });

        function onError ( err ) {
            console.log( err );
        }
        function onSuccess (order) {
            console.log(`Order Created:`, order)
            $('#orderNumber').text(order.orderNumber)
            $('.orderContainer').append(`<a id="cancel" data-id=${order._id} href="#"> Changed Your Mind?</a>`)
        //    $('#cancel').attr("data-id=123")
        //    `<button type="button" data-id=${order._id}> Changed Your Mind?</button>`
    }
    });

    ////////////////////ORDER FUNCTIONS ///////////////////////////

    


    ///////////////////CANCEL ORDER ///////////////////////////////
    $('.order').one('click', '.cancelOrder', function(e){
        e.preventDefault();
        //console.log(e)

        orderId = $('#cancel').data().id
        //console.log(orderId)
        var ordersUrl = `/api/orders/${orderId}`

        $.ajax({
            method: 'DELETE',
            url: ordersUrl,
            data: orderId,
            success: onSuccess,
            error: onError,

        });
            function onError ( err ) {
                console.log( err );
            }
            function onSuccess (order) {
            console.log(`Order Deleted:`, order)
            }
    });