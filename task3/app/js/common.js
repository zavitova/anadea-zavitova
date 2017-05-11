$(function() {

    $(function () {
        var tabContainers = $('div.tabs > div'); // получаем массив контейнеров
        tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
        // далее обрабатывается клик по вкладке
        $('div.tabs ul.tabNavigation a').click(function () {
            tabContainers.hide(); // прячем все табы
            tabContainers.filter(this.hash).show(); // показываем содержимое текущего
            $('div.tabs ul.tabNavigation a').removeClass('selected'); // у всех убираем класс 'selected'
            $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
            return false;
        }).filter(':first').click();
    });
	
	$(document).ready(function() {
    var body = $('body'),
        userIcon = $('.user-avatar').find('a'),
        userName = $('.name-show');


    userIcon.on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if($('.item').hasClass('popup-opened')) {
            $('.item').removeClass('popup-opened');
            $('.popup-container').fadeOut(300);
        }
        $(this).closest('.item').addClass('popup-opened');
        $(this).parent().siblings('.popup-container').fadeIn(300);
    });
    userName.on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if($('.item').hasClass('popup-opened')) {
            $('.item').removeClass('popup-opened');
            $('.popup-container').fadeOut(300);
        }
        $(this).closest('.item').addClass('popup-opened');
        $(this).closest('.text').siblings('.item-user')
        .find('.popup-container').fadeIn(300);
    })
    body.on('click', function(event) {
        event.stopPropagation();
        if(event.target.closest('.popup-container')) {
            return;
        }
        else {
            $('.popup-container').fadeOut(300);
            $('.item').removeClass('popup-opened');
        }
    })
})


});