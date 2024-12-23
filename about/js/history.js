//history js

$(window).scroll(function(){


    var sTop = $(this).scrollTop();
    console.log(sTop);

    var wHeight = $(this).height();
    console.log('화면높잇값'+wHeight);

    

    var gap = Math.ceil(wHeight * 0.9);
    console.log('기준간격' + gap);


    var box3pos = $('.h-con-box').parent().eq(3).offset().top - gap;
    console.log('다음 박스 등장 기준값 : '+ box3pos);

    if (sTop > box3pos) { 
        $('.year-box').eq(3).find('.h-con-box').fadeIn(1000);
    }

    
    var box4pos = $('.h-con-box').parent().eq(4).offset().top - gap;
    if (sTop > box4pos) {
        $('.year-box').eq(4).find('.h-con-box').fadeIn(1000);
            
    }

    var box5pos = $('.h-con-box').parent().eq(5).offset().top - gap;
    if (sTop > box5pos) {
        $('.year-box').eq(5).find('.h-con-box').fadeIn(1000);
    }

    var box6pos = $('.h-con-box').parent().eq(6).offset().top - gap;
    console.log('마지막 박스 기준간격' + box6pos);

    if (sTop > box6pos) {
        $('.year-box').eq(6).find('.h-con-box').fadeIn(1000);
    }

});

$(document).ready(function(){

    $('.h-con-box').slice(0,3).fadeIn(1000)

    


});