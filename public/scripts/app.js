$(document).ready(function(){
    console.log("jQuery up and running");

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

