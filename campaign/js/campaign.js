//campaign js

$(document).ready(function(){

    $('.tab-menu li a').click(function(e){

        e.preventDefault();

        var aIdx = $(this).parent().index();

        //선택된 탭메뉴 디자인 변경
        $(this).parent().addClass('tab-btn').siblings().removeClass('tab-btn');

        //내용변경
        $('article').eq(aIdx).addClass('on').siblings().removeClass('on');

    });




});