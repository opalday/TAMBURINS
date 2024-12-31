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
        

    });

    //모달창 닫기 
    $('.modal .s-box .inbox .modal-btn').click(function(){

        $('.modal').fadeOut(600);

        autocall = setInterval(flow, 30);

    });


    var liW = $('.slide li').width();
    console.log(liW);
    
    //슬라이드
    
    //초기설정
    $('#cocoon .s-box .slide-box ul li:last-child').prependTo('#cocoon .s-box .slide-box ul');

    $('#cocoon .s-box .slide-box ul').css('margin-left', -630);
    


    $('#cocoon .s-btn .next').click(function(e){


        $('#cocoon .slide-box ul').css('margin-left', '-630');

        $('#cocoon .s-box .slide-box ul').animate({
            marginLeft: '-=' + 630
        }, 800, function () {
            
            //다음(두번째 클릭)을 위한 준비!
            //1) 첫번째 li(슬라이드)를 맨 뒤로 보내기 >> append()
            //2) 슬라이드 순서 변경에 따라 ul의 위치 조절하기 >> margin

            $('#cocoon .s-box .slide-box ul li:first-child').appendTo('#cocoon .s-box .slide-box ul');
            $('#cocoon .s-box .slide-box ul').css('margin-left',-630);

        });
        

    });

    //이전 버튼을 클릭했을 때!
    $('#cocoon a.prev').click(function (e) { 

        //a 기본기능 막기!
        e.preventDefault();

        $('#cocoon .s-box .slide-box ul').animate({
            marginLeft: '+=' + 630
        }, 800, function () {
            
            //다음(두번째 클릭)을 위한 준비!!!
            $('#cocoon .s-box .slide-box ul li:last-child').prependTo('#cocoon .s-box .slide-box ul');
            $('#cocoon .s-box .slide-box ul').css('margin-left',-630);
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