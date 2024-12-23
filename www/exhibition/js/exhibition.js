//exhibition js
var autocall;
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

    });

    //모달창 닫기 
    $('.modal .des-box .modal-btn').click(function(){

        $('.modal').fadeOut(600);
        $('.modal').hide().find('img, .des-wrap').remove();

        setInterval(flow, 30);

    });


    //슬라이드
    

    $('#cocoon .s-box .p-btn li a').on('click', function (e) {
        
        //클릭된 a태그의 기본기능 막기!
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        var aWidth = $('#cocoon .s-box .slide-box ul li').width();
        console.log(aWidth);

        $('#cocoon .s-box .slide-box ul').animate({
            left: -(aWidth * idx)
        }, 600);

        //클릭된 페이저 디자인 변경하기
        $(this).parent().addClass('active').siblings().removeClass('active');

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