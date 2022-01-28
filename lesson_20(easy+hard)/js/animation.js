$(window).scroll(function() {
    var cards = $('#cards');
    $(cards).each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).innerHeight()) {
            $(this).addClass("cards-active")
        }
    });
});