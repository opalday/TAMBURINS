//offline js

var autocall;

$(document).ready(function(){

    autocall = setInterval(arFunc, 5);

    $('.s-img-wrap').delay(1000).slideDown(1000);
   

    

    $('.arrow').delay(2500).slideDown(function(){
        autocall;
    });

    // setInterval(arFunc, 5);


    

    
   

});

function arFunc () {
    
    $('.arrow').slideUp(1000);
    $('.arrow').slideDown(1000);
}