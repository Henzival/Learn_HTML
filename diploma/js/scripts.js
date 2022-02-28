$(document).ready(function () {
    // Валидация формы
        $('#hero-form').validate({
            errorClass: "invalid",
            errorElement: "div",
            rules: {
                email: {
                    required: true,
                    email: true
                }
            }
        });
        $('#brif-form').validate({
            errorClass: "invalid",
            errorElement: "div",
            rules: {
                email: {
                    email: true,
                    required: true
                }
            }
        });
    // Слайдер
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: ["<img src='img/prev.svg'>", "<img src='img/next.svg'>"],
        dots: true,
        loop: true,
        items: 1
    });
});