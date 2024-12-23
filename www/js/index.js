// index.js

var pageCount = 0;
var total;
var stat = 0;

$(document).ready(function () {

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

    //슬라이드
    $('.pager li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        /* $('#gallery').animate({
            marginLeft : -(100*idx) + '%'
        }, 600); */

        //내가 만든 코드! (left 속성, px값 사용하여 이동해 보기)
        var aWidth = $('section.new .new-container > article').width();
        console.log(aWidth);

        $('section.new .new-container').animate({
            left: -(aWidth * idx)
        }, 600);

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('on').siblings().removeClass('on');

    });

    
    
    
    
    
    //fade slide
    var autoCall; //인터벌용 변수
    autoCall = setInterval(fadeSlide, 2000);

    function fadeSlide() {
        //1번 슬라이드
        var firstSlide = $('section.store .store-container .store-img-wrap .st-img-box').first();

        //2번(다음) 슬라이드
        var nextSlide = firstSlide.next();

        nextSlide.hide().addClass('act').fadeIn(800, function () {
            //다음을 위한 준비!
            //1번 슬라이드를 맨뒤로 이동!
            //firstSlide.appendTo('.viewer');
            $('.store-img-wrap').append(firstSlide);

            //첫 번째 슬라이드의 z-index 제거!
            firstSlide.removeClass('act');
        });

    }




    

});

