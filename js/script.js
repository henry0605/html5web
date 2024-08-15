//移除行動裝置背景影片
$(function () {   /* document ready 一個js檔只要執行一次就可以 */
    //移除行動裝置的背景影片
    if ($(window).width() < 821) {
        $('abort video').remove();
    }

    // 交替漢堡按鈕
    $('.hamburger').click(function () {
        //.hamburger 交替切換 .is-active
        $(this).toggleClass('is-active');
        //.navigation 交替切換 .show 
        $('.navigation').toggleClass('show');
    });

    //滑動至指定位置
    $('.menu a').click(function () {
        let btn = $(this).attr('href'); //返回取得屬性與值
        let pos = $(btn).offset(); //抓取相對的座標位置
        $('html,body').animate({ scrollTop: pos.top }, 500);
    });

    //滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });

    //至頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('fast',1);
        }else{
            $('#gotop').stop().fadeOut('fast');
        }

    });

});

//jQuery Smoove
$('.smoove').smoove({
    offset:'20%'
});

