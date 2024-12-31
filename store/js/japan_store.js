//japan_store js
var autocall;

$(document).ready(function(){

    autocall = setInterval(arFunc, 5);

    $('.s-img-wrap ul li:first-child').delay(1000).animate({
        opacity: 1
    },1000, function(){
        $('.s-img-wrap ul li:last-child').animate({
            opacity: 1
        },1000);
    } );

    $('.s-img-wrap ul li').hover(function(){
        

        $(this).find('.con-hover').slideToggle();

    });

    

    $('.arrow').delay(2500).slideUp(function(){
        autocall;
    });

    // setInterval(arFunc, 5);

    //aoyama 버튼슬라이드
    $('.aoyama .aoyama-con .s-pager > li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log('인덱스갯수' + idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        $('.aoyama-s').animate({
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

    //osaka 버튼슬라이드
    $('.osaka .osaka-con .s-pager > li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log('인덱스갯수' + idx);

        //구해진 인덱스값을 left 이동 시, 곱해지는 값으로 사용!
        $('.osaka-s').animate({
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