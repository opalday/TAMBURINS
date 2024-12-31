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

        menuChg();

        if(pageCount === total - 1){
            $('.side-pager li').removeClass('on');
        }

    });

    $('.side-pager a').on('click', function(e){

        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        pageCount = idx;
        console.log('변경된 pageCount번호: ' + pageCount);

        //스크롤 이동거리 구하기(1) - pageCount 또는 idx 사용
    

        //스크롤 이동거리 구하기(2) - 클릭된 a의 href값 활용하기

        var pid = $(this).attr('href');
        console.log('클릭된 a의 href 값 :' + pid);

        var pageTop = $(pid).offset().top;

        //이동
        $('html,body').animate({
            scrollTop: pageTop
        }, 800);

        menuChg();

    });


});

//메뉴 변경 함수
function menuChg() {
    $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
}
