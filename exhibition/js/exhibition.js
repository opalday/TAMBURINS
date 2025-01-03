//exhibition js

///전역변수 정의 /////
var liW;
var autocall; //인터벌을 담을 변수

$(function () {

    //flow js


    autocall = setInterval(flow, 30);


    //modal js

    var aHref = ''; //클릭한 갤러리 a태그의 href값

    $('.gallery li a').click(function (e) {

        //기본기능 막기 
        e.preventDefault();

        clearInterval(autocall);

        aHref = $(this).attr('href');



        //모달창
        $('.g-container').fadeIn(600);
        $(aHref).fadeIn(600, function () {

            var liW = $(this).find('li').width();
            console.log('li Width : ' + liW);




            //슬라이드
            //슬라이드 초기 설정
            $(aHref + '> .inbox .slide > li:last-child').prependTo(aHref + '> .inbox .slide');
            $('.slide').css({
                marginLeft: -630
            });
            //다음버튼
            $(aHref + '> .inbox .s-btn .next').click(function (e) {

                e.preventDefault();

                $(aHref).find('.slide').animate({
                    marginLeft: '-=' + liW
                }, 800, function () {

                    //다음(두번째 클릭)을 위한 준비!
                    //1) 첫번째 li(슬라이드)를 맨 뒤로 보내기 >> append()
                    //2) 슬라이드 순서 변경에 따라 ul의 위치 조절하기 >> margin

                    $(aHref + '> .inbox .slide li:first-child').appendTo(aHref + '> .inbox .slide');
                    $(aHref + '> .inbox .slide').css('margin-left', -liW);

                });

            });

            //이전버튼
            $(aHref + '> .inbox .s-btn .prev').click(function (e) {

                e.preventDefault();

                $(aHref).find('.slide').animate({
                    marginLeft: '+=' + liW
                }, 800, function () {

                    //다음(두번째 클릭)을 위한 준비!!!
                    $(aHref + '> .inbox .slide li:last-child').prependTo(aHref + '> .inbox .slide');
                    $(aHref + '> .inbox .slide').css('margin-left', -liW);


                });



            });


        });




    });

    //모달창 닫기 
    $('.s-box .inbox .modal-btn').click(function () {


        $(aHref).fadeOut(600);
        $('.g-container').fadeOut(600);


        autocall = setInterval(flow, 30);

        location.reload();

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