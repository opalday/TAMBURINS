//product js
var pageCount = 0;
var total;
var stat = 0;
$(document).ready(function () {

    $('.page').eq(0).find('.product-type').animate({
        top: '70%',
        opacity: 1
    }, 1000);
    $('.page').eq(0).find('li').delay(500).animate({
        opacity: 1
    }, 600);

    //마우스휠 이벤트
    total = $('.page').length;
    console.log('현재 페이지 갯수' + total);

    $(window).on('mousewheel DOMMouseScroll', function () {


        if (stat === 1) return false;
        stat = 1;

        var evt = window.event;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        console.log('마우스휠델타' + delta);

        if (/Firefox/i.test(navigator.userAgent)) {

            delta = -evt.detail;

        }

        if (delta < 0) {

            pageCount++;
            if (pageCount === total) pageCount = total - 1;

            $('header').css({
                'background-color': 'rgba(255,255,255,0.9)',
                'border-bottom': '1px solid #111'
            });
        } else {

            pageCount--;
            if (pageCount === -1) pageCount = 0;

            if (pageCount === 0) {
                $('header').css({
                    'background-color': 'transparent',
                    'border-bottom': 'none'
                });
            }
        }

        var pageTop = $('.page').eq(pageCount).offset().top;

        $('html,body').animate({
            scrollTop: pageTop + 'px'
        }, 800, function () {
            stat = 0;

            //페이지에 해당하는 .off-type
            $('.page').eq(pageCount).find('.product-type').animate({
                top: '70%',
                opacity: 1
            }, 1000);
            $('.page').eq(pageCount).find('li').delay(500).animate({
                opacity: 1
            }, 600);

        });

        menuChg();

        if (pageCount === total - 1) {
            $('.side-pager li').removeClass('on');
        }

    });

    $('.side-pager a').on('click', function (e) {

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
        }, 800, function () {

            //페이지에 해당하는 .product-type
            $('.page').eq(pageCount).find('.product-type').animate({
                top: '70%',
                opacity: 1
            }, 1000);
            $('.page').eq(pageCount).find('li').delay(500).animate({
                opacity: 1
            }, 600);

            $('header').css({
                'background-color': 'rgba(255,255,255,0.9)',
                'border-bottom': '1px solid #111'
            });

            if(pageCount === 0) {
                $('header').css('border-bottom', 'none');
            }


        });

        menuChg();


        $('.product-wrap li a').click(function (e) {

            //기본기능 막기 
            e.preventDefault();

            var aHref = $(this).attr('href');
            console.log(aHref);

            //모달창
            $(aHref).fadeIn(600);

        });


        //모달창 닫기 
        $('.p-container').click(function () {
            $(this).fadeOut(600);
            $('.p-container').find('p-des-wrap').remove().find('img').remove();
        });

    });
});

//메뉴 변경 함수
function menuChg() {
    $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
}