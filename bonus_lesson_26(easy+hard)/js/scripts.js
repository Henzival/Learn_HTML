$(document).ready(function () {
    // Валидация формы
        $('#brif-form').validate({
            errorClass: "invalid",
            errorElement: "div",
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                }
            },
            messages: {
                username: {
                    required: "Заполните поле",
                    minlength: jQuery.validator.format("Требуется символов: {0}")
                },
                email: {
                    email: "Введите корректный email",
                    required: "Заполните поле"
                },
                phone: "Заполните поле"
            }
        });
        $(".phone").mask ("8 (999) 999-99-99");
        $('#offer-form').on('submit', function(event){
            event.preventDefault();
            $.ajax({
               url: 'main.php',
               type: 'POST',
               data: $(this).serialize(),
               success:  function(data){
                   $('.success').text(data + ', ваша форма отправлена');
               }
            });
            $("#offer-form")[0].reset();
        });
    // Слайдер
        $(".owl-carousel").owlCarousel({
            nav: true,
            navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
            dots: false,
            margin: 30,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });