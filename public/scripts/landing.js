$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        $('.loginSignUp').addClass('hidden');
        $('.drinkAppChoice').removeClass('hidden');
    });

    

})