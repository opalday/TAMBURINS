//store common js

var pageCount = 0;
var total;
var stat = 0;

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
        });

    });


   
    
   
   


    


});