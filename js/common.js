//common.js

//nav js
$(window).scroll(function(){
    var wTop = $(this).scrollTop();
    console.log('스크롤탑' + wTop);

    /*$('nav.m-gnb').css({
        top: wTop

    });*/

    if (wTop > 10) {
        $('header').css({
        'background-color': 'rgba(255,255,255,0.9)',
        'border-bottom': '1px solid #111'
        
    });

    } else {
        $('header').css({
        'background-color': 'transparent',
        'border-bottom': 'none'
        });
    }
    
    /* if (wTop === 0) {
        
    } */

});


$(document).ready(function(){

    // $('.tab-menu a').click(function(e){

    //     e.preventDefault();

    //     var aHref = $('.tab-menu li a').attr('href');

    //     $(this).parent().addClass('tab-btn').siblings().removeClass('tab-btn');

    
    //     $(aHref).addClass('on').siblings().removeClass('on');

    // });
    //header js
    

    


    $('header .menu-btn').click(function(){

        $('nav.m-gnb').slideToggle(600);


    });




  /*   //tab js
    $('.tab-menu a').click(function(e){

        e.preventDefault();

        
        $(this).parent().addClass('tab-btn').siblings().removeClass('tab-btn');

        
        var idx = $(this).parent().index();
        console.log(idx);

        $('').eq(idx).addClass('on').siblings().removeClass('on');

    }); */

   
    


});


