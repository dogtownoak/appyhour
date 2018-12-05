$(document).ready(function(){
    console.log("jQuery up and running");


var orders_endpoint = "/api/orders"

var appetizersUrl =
`http://localhost:3000/api/appetizers`



//////////// GET ALL APPETIZERS AND APPEND TO PAGE ///////////////////////////////
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