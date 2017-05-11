$(document).ready(function() {
    $('select').niceSelect();
    $('.container-main').masonry({
        itemSelector: '.item',
        gutter: 10
    });
    $('.item').hover(function(){
        $(this).css('width','218px');
        $(this).css('border-bottom','2px solid #d6d6d6');
        $(this).css('border-right','2px solid #d6d6d6');
        $(this).find(".item-auto").css('background-color','#fef5ca');
        $(this).find(".item-bottom").css('background-color','#f5ecc3');
    },function(){
        $(this).css('width','214px');
        $(this).css('border-bottom','none');
        $(this).css('border-right','none');
        $(this).find(".item-auto").css('background-color','#fff');
        $(this).find(".item-bottom").css('background-color','#f7f7f7');
    });
    $('.big-item').hover(function(){
        $(this).css('width','448px');
    },function(){
        $(this).css('width','442px');
    })


});
