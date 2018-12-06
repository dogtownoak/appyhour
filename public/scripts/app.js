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
        $('.drink-container').empty();
        drinks.forEach(drink => {
            let card1 = `
            <div class="drinkContainer">
            <img src="${drink.image}" >
            <div class="drink-text">
            <p>${drink.brand}, ${drink.style}</p>
            <p>${drink.business}</p>
            <p>${drink.businessAddress}</p>
            </div>
            <div class="description-pop">
            <p>${drink.brand}, ${drink.style}</p>
            <p>${drink.description}</p>
            <button type="button" class="orderItem">Reserve</button>
            </div>
            </div>
            `

            $('.drink-container').append(card1);
        });

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
                <img class="appImg" src="${appetizer.image}">
                    <div class="textContainer">
                        <div class="textWrapper">
                            <p>${appetizer.type}</p>
                            <p>${appetizer.business}</p>
                            <p>${appetizer.businessAddress}</p>
                        </div>
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
    
///////////// CREATE ORDER /////////////////////////

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
        console.log(e)

        orderId = $('#cancel').data().id
        console.log(orderId)
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






    // $('.appetizerList').on('click', '.appCard' , function(){

    //     var ordersUrl = '/api/orders'
    //     var appId = $(this).data()
    //     var today = new Date()
    //     var tomorrow = today.getDate()+1
    
    //     var newOrder = {
    //             dateValid: tomorrow,
    //             dateOrdered: today,
    //             orderNumber: Math.floor(1000 + Math.random() * 9000),
    //             user: "5c0829fec4a17ff9bb463549",
    //             appetizer: appId.id,
    //         };
    
    
    //     $.ajax({
    //         method: 'POST',
    //         url: ordersUrl,
    //         data: newOrder,
    //         success: onSuccess,
    //         error: onError,
    //     });
    
    //         function onError ( err ) {
    //             console.log( err );
    //         }
    //         function onSuccess (order) {
    //            console.log(`Order Created:`, order)
    //         }
    
    //     });





    //     create: (req, res) => {
    //         var newOrder = new db.Order({
    //             dateValid: req.body.dateValid,
    //             dateOrdered: req.body.dateOrdered,
    //             orderNumber: req.body.orderNumber
    //         });
        
    //         db.User.findOne({_id: req.body.user}, (err, user) => {
    //             newOrder.user = user;
    //         })
    
    //         db.Appetizer.findOne({_id: req.body.appetizer}, (err, appetizer) => {
    //             newOrder.appetizer = appetizer;
    //         })
    
    //         db.Drink.findOne({_id: req.body.drink}, (err, drink) => {
    //             newOrder.drink = drink;
    //         })
    
    //         newOrder.save((err, order) => {
    //             if (err) {
    //                 return console.log(err);
    //             } 
    //             res.json(order);
    //         })
    //     },






//var orders_endpoint = "/api/orders"
// var orders_endpoint = "http://localhost:3000/api/orders/"



// //////////// GET ALL ORDERS //////////////////////////////////
// $.ajax({
//     method: 'GET',
//     url: `${orders_endpoint}`,
//     success: function( response ) {
//         console.log( response );
//     },
//     error: function() {
//         console.log("There was an error getting the data");
//     }
// });
// });

//////////// GET ALL APPETIZERS AND APPEND TO PAGE ///////////////////////////////

