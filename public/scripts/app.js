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
    `http://localhost:3000/api/appetizers`

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
            $('.appContainer').empty();
            appetizers.forEach(appetizer => {
                var card1 =
                `<div class="appContainer>
                <img src="${appetizer.image}">
                    <div class="textContainer">
                        <p>${appetizer.type}, Type: ${appetizer.style}</p>
                        <p>${appetizer.business}</p>
                        <p>${appetizer.businessAddress}</p>
                    </div>
                    <div class="descriptionPopUp">
                        <p>${appetizer.type}, Type: ${appetizer.style}</p>
                        <p>${appetizer.description}</p>
                        <button class="orderItem" type="button">Reserve</button>
                    </div>
                </div>`

                $('.appContainer').append(card1);
            })
        }
    });

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

