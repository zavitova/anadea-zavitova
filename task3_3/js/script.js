$(function(){
    $("[data-help]").hover(function (e) {
        $data_tooltip = $(this).attr("data-help");
        help = $("#help").text($data_tooltip)
            .css({
                "top" : e.pageY + 5,
                "left" : e.pageX + 5
            });
            setTimeout(function () {
            help.fadeIn(400)},800);

    }).mouseout(function () {
        $("#help").hide()
            .text("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
});