//store js

var autocall;

$(document).ready(function(){

    autocall = setInterval(arFunc, 5);

    $('.s-img-wrap ul li:first').delay(1000).fadeIn(1000);

    $('.s-img-wrap ul li:nth-child(2)').delay(1500).fadeIn(1000);

    $('.s-img-wrap ul li:nth-child(3').delay(2000).fadeIn(1000);
    
    $('.s-img-wrap ul li:nth-child(4)').delay(2500).fadeIn(1000);
    
    $('.s-img-wrap ul li:last').delay(3000).fadeIn(1000);

    $('.arrow').delay(3500).slideUp(autocall);

    // setInterval(arFunc, 5);


    $('.s-img-wrap ul li').hover(function(){

        $(this).find('.con-hover').slideToggle();

    });

    //sinsa 버튼슬라이드
    $('.sinsa .sinsa-con .s-pager > li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log('인덱스갯수' + idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        $('.sinsa-s').animate({
            marginLeft : -(100*idx) + '%'
        }, 600);

        //내가 만든 코드! (left 속성, px값 사용하여 이동해 보기)
        /* var aWidth = $('.sinsa .con-wrap .sinsa-s li').width();
        console.log(aWidth);

        $('.sinsa .con-wrap .sinsa-s').animate({
            left: -(aWidth * idx)
        }, 600); */

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    //dosan 버튼슬라이드
    $('.dosan .dosan-con .s-pager > li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log('인덱스갯수' + idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        $('.dosan-s').animate({
            marginLeft : -(100*idx) + '%'
        }, 600);

        //내가 만든 코드! (left 속성, px값 사용하여 이동해 보기)
        /* var aWidth = $('.sinsa .con-wrap .sinsa-s li').width();
        console.log(aWidth);

        $('.sinsa .con-wrap .sinsa-s').animate({
            left: -(aWidth * idx)
        }, 600); */

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    //삼청 버튼슬라이드
    $('.samchung .samchung-con .s-pager > li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log('인덱스갯수' + idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        $('.samchung-s').animate({
            marginLeft : -(100*idx) + '%'
        }, 600);

        //내가 만든 코드! (left 속성, px값 사용하여 이동해 보기)
        /* var aWidth = $('.sinsa .con-wrap .sinsa-s li').width();
        console.log(aWidth);

        $('.sinsa .con-wrap .sinsa-s').animate({
            left: -(aWidth * idx)
        }, 600); */

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

     //성수 버튼슬라이드
     $('.seongsu .seongsu-con .s-pager > li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log('인덱스갯수' + idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        $('.seongsu-s').animate({
            marginLeft : -(100*idx) + '%'
        }, 600);

        //내가 만든 코드! (left 속성, px값 사용하여 이동해 보기)
        /* var aWidth = $('.sinsa .con-wrap .sinsa-s li').width();
        console.log(aWidth);

        $('.sinsa .con-wrap .sinsa-s').animate({
            left: -(aWidth * idx)
        }, 600); */

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

     //한남 버튼슬라이드
     $('.hannam .hannam-con .s-pager > li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log('인덱스갯수' + idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        $('.hannam-s').animate({
            marginLeft : -(100*idx) + '%'
        }, 600);

        //내가 만든 코드! (left 속성, px값 사용하여 이동해 보기)
        /* var aWidth = $('.sinsa .con-wrap .sinsa-s li').width();
        console.log(aWidth);

        $('.sinsa .con-wrap .sinsa-s').animate({
            left: -(aWidth * idx)
        }, 600); */

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

    });
    


});

function arFunc () {
    
    $('.arrow').slideUp(1000);
    $('.arrow').slideDown(1000);
}