//product js
var pageCount = 0;
var total;
var stat = 0;
$(document).ready(function(){

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


    $('.product-wrap li a').click(function(e){

        //기본기능 막기 
        e.preventDefault();

        var aHref = $(this).attr('href');
        console.log(aHref);

        //모달창
        $(aHref).fadeIn(600);

    });


       //모달창 닫기 
            $('.p-container').click(function(){
                $(this).fadeOut(600);
                $('.p-container').find('p-des-wrap').remove().find('img').remove();
            });

});