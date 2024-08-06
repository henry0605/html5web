//移除行動裝置背景影片
$(function () {
    if ($(window).width() < 821) {
        $('abort video') .remove();
    }

});