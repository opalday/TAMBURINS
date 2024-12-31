//offline js

var pageCount = 0;
var total;
var stat = 0;

var autocall;


$(document).ready(function () {

    $('.s-title').fadeIn(1000);

    //마우스휠 이벤트
    total = $('.page').length;
    console.log('현재 페이지 갯수' + total);

    $(window).on('mousewheel DOMMouseScroll', function(){


        if(stat === 1) return false;
        stat = 1;

        var evt = window.event;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        console.log('마우스휠델타' + delta);

        if (/Firefox/i.test(navigator.userAgent)) {

            delta = -evt.detail;

        }

        if (delta < 0) {

            pageCount++;
            if (pageCount === total) pageCount =  total -1;
        } else {

            pageCount--;
            if (pageCount === -1) pageCount = 0;
        }

        var pageTop = $('.page').eq(pageCount).offset().top;

        $('html,body').animate({
            scrollTop: pageTop + 'px'

        }, 800, function(){
            stat = 0;

            //페이지에 해당하는 .off-type
            $('.page').eq(pageCount).find('.off-type').animate({
                top: 0,
                opacity: 1
            }, 500, function(){
                $('.page').eq(pageCount).find('li').animate({
                    opacity: 1
                }, 600)
            });

        });



    });


   
    
    autocall = setInterval(arFunc, 5);

    $('.s-img-wrap').delay(1000).animate({
        opacity: 1,
        top: 0
    }, 600);
   

    $('.arrow').delay(2500).slideUp(function(){
        autocall;
    });

    // setInterval(arFunc, 5);

    
    


    
   

});

function arFunc () {
    
    $('.arrow').slideUp(1000);
    $('.arrow').slideDown(1000);
}