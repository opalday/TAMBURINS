//store js

var autocall;

$(document).ready(function(){

    autocall = setInterval(arFunc, 5);

    $('.s-img-wrap ul li:first').delay(1000).fadeIn(1000);

    $('.s-img-wrap ul li:nth-child(2)').delay(1500).fadeIn(1000);

    $('.s-img-wrap ul li:nth-child(3').delay(2000).fadeIn(1000);
    
    $('.s-img-wrap ul li:nth-child(4)').delay(2500).fadeIn(1000);
    
    $('.s-img-wrap ul li:last').delay(3000).fadeIn(1000);

    $('.arrow').delay(3500).slideDown(function(){
        autocall;
    });

    // setInterval(arFunc, 5);


});

function arFunc () {
    
    $('.arrow').slideUp(1000);
    $('.arrow').slideDown(1000);
}