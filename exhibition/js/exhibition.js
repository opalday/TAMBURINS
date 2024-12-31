//exhibition js

///전역변수 정의 /////
var sId = ""; //클릭된 탭메뉴의 아이디값을 담을 변수!
var autocall; //인터벌을 담을 변수

$(function(){

    //flow js
    

    autocall = setInterval(flow, 30);

    //modal js
    $('.gallery li a').click(function(e){

        //기본기능 막기 
        e.preventDefault();

        clearInterval(autocall);

        var aHref = $(this).attr('href');
        console.log(aHref);

        //모달창
        $(aHref).fadeIn(600);


        //모달 슬라이드를 위한 값 구하기 
        //1. 클릭된 a태그의 href값을 변수 sId에 넣기!
        sId = aHref;

        //2. 클릭된 메뉴의 ul li 너비값 구하기 

        

        

    });

    //모달창 닫기 
    $('.modal .s-box .inbox .modal-btn').click(function(){

        $('.modal').fadeOut(600);

        autocall = setInterval(flow, 30);

    });

    
    //슬라이드
    

    /* $(sId + '.s-box .p-btn li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var sId = $(this).parent().attr('id');
        var idx = $(this).parent().find('li').index();
        console.log(sId);

        var aWidth = $(sId + '.s-box .slide-box ul li').width();
        console.log(aWidth);

        $(sId + '.s-box .slide-box ul').animate({
            left: -(aWidth * idx)
        }, 600);

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

    }); */
    

    //var sId = $(this).parent().attr('id');
    //$(sId +'.s-box .slide-box ul li:last').prependTo(sId + '.s-box .slide-box ul');

    //초기설정
    $(sId + '> .s-box .slide-box ul li:last-child').prependTo(sId + '> .s-box .slide-box ul');
    


    $('a.next').click(function(e){

        e.preventDefault();

        

        console.log('아이디' + sId);

        var liW = $(sId + '> .s-box .slide-box ul li').width();
        console.log('li 하나의 크기: ' + liW);

        $(sId + '> .slider ul').css('margin-left', -liW);

        var liQ = $(sId + '> .s-box .slide-box ul').offset().left;
        console.log(liQ);

        console.log(sId);

        $(sId + '> .s-box .slide-box ul').animate({
            marginLeft: '-=' + liW
        }, 800, function () {
            
            //다음(두번째 클릭)을 위한 준비!
            //1) 첫번째 li(슬라이드)를 맨 뒤로 보내기 >> append()
            //2) 슬라이드 순서 변경에 따라 ul의 위치 조절하기 >> margin

            $(sId + '> .s-box .slide-box ul li:first-child').appendTo(sId + '> .s-box .slide-box ul');
            $(sId + '> .s-box .slide-box ul').css('margin-left',-liW);

        });


        if(liQ === -262) {
            $('.s-btn .prev').show();
        } 
        

    });

    

    //이전 버튼을 클릭했을 때!
    $('a.prev').click(function (e) { 

        //a 기본기능 막기!
        e.preventDefault();
        var liW = $(sId + '> .s-box .slide-box ul li').width();
        console.log('li 하나의 크기: ' + liW);

        var liQ = $(sId + '> .s-box .slide-box ul').offset().left;
        console.log('이전버튼' + liQ);

        $(sId + '> .s-box .slide-box ul').animate({
            marginLeft: '+=' + liW
        }, 800, function () {
            
            //다음(두번째 클릭)을 위한 준비!!!
            $(sId + '> .s-box .slide-box ul li:last-child').prependTo(sId + '> .s-box .slide-box ul');
            $(sId + '> .s-box .slide-box ul').css('margin-left',-liW);
        });
    });
    
    
    
    


});

//flow 함수
var moveNum = 0; //이동하는 left값을 담을 변수!

function flow() {
    

    moveNum++;

    var boxWidth2 = $('.gallery li').first().outerWidth(true);

    
    if (moveNum > boxWidth2) {
        
       
        $('.gallery').append($('.gallery li').first()).css({
            left: 0
        });

        moveNum = 0;

    } else {
        //moveNum의 값을 left 값으로 적용!
        $('.gallery').css({
            left: -moveNum
        });
    }

}