//japan_store js
var autocall;

$(document).ready(function(){

    autocall = setInterval(arFunc, 5);

    $('.s-img-wrap ul li:first-child').delay(1000).animate({
        opacity: 1
    },1000, function(){
        $('.s-img-wrap ul li:last-child').animate({
            opacity: 1
        },1000);
    } );

    

    $('.arrow').delay(2500).slideDown(function(){
        autocall;
    });

    // setInterval(arFunc, 5);
   

});

function arFunc () {
    
    $('.arrow').slideUp(1000);
    $('.arrow').slideDown(1000);
}