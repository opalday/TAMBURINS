//campaign js

$(document).ready(function(){

   $('.cam-tit').animate({
        opacity: 1
   }, 1000);

   $('.cam-des').delay(1000).animate({
    opacity: 1,
    top: 0
}, 600 );
    

    // $('.cam-box').click(function(){

    //     $(this).animate({
    //         width: '39%'
    //     }, 500).siblings().animate({
    //         width: '6.777%'
    //     }, 200);

    // });

    $('.cam-box a').click(function(e){

        e.preventDefault();

        

      /*   $(this).parent().animate({
            width: '39%'
        }, 500).siblings().animate({
            width: '6.777%'
        }); */

        $(this).parent().addClass('on').siblings().removeClass('on');
    });

  
});