


$(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
        $('#header').addClass('scroll-header');
    }
    else {
        $('#header').removeClass('scroll-header');
    }
});


var btn = $('#pop-btn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        btn.addClass('btn-show');
    } else {
        btn.removeClass('btn-show');
    }
});

btn.on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '200');
});



$(document).ready(function () {


    var countDownDate = new Date("nov 05, 2023 18:48:20").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".days").innerHTML = days;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("clock").innerHTML = "Happy New Year!";
        }
    }, 1000);

    // $("")
    $(".header-search-btn").click(function () {
        $(".search-pop-up").addClass("pop-up-bar");
    });

    $(".pop-up-close").click(function () {
        $(".search-pop-up").removeClass("pop-up-bar");
    });

    $(".search-pop-up").click(function () {
        $(".search-pop-up").removeClass("pop-up-bar");
    });

    $(".search-pop-up input, button, .input-main").on("click", function (event) {
        event.stopPropagation();
    });

    $(".open-contact").click(function () {
        $(".contact-form").addClass("add-contact");

    });

    $(".contact-btn-close").click(function () {
        $(".contact-form").removeClass("add-contact");
    });

    $(".contact-form").click(function () {
        $(".contact-form").removeClass("add-contact");

    });

    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        input = $(this).parent().parent().find("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $('.banner-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     }

        // ]
    });



    $('.main-shop-item.two').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });


    $('.main-category').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }


        ]
    });


    $('.customer-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        readURL(this);
    });

    $(".women").click(function () {
        $(".main-shop-item").addClass("flex-r-reverse");
        $(".main-shop-item").removeClass("flex-r");
    });

    $(".men").click(function () {
        $(".main-shop-item").addClass("flex-r");
        $(".main-shop-item").removeClass("flex-r-reverse");
    });

    $(function () {
        $('.buy ul li').click(function () {
            $(this).siblings().removeClass('size-on-click');
            $(this).addClass('size-on-click');
        });
    });

    $(function () {
        $('.color span').click(function () {
            $(this).siblings().removeClass('color-pick');
            $(this).addClass('color-pick');
        });
    });

    $(function () {
        $('.product-menu ul li button').click(function () {
            $(this).parent().siblings().children().removeClass('active');
            $(this).addClass('active');
        });
    });

    $(".button-slider .prev").click(function () {
        $(".customer-slider").slick("slickPrev");
    });

    $(".button-slider .next").click(function () {
        $(".customer-slider").slick("slickNext");
    });

    $('.company-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }

        ]
    });

    $(".moblie-button").click(function () {
        $(".navbar").toggleClass("show-menu");
    });

    // $(".header-main .navbar nav ul li span").click(function () {
    //     $(".header-main .navbar nav ul li").removeClass("big");
    //     $(".header-main .navbar nav ul li span").parent().addClass("big");
    // });

    $(function () {
        $('.header-main .navbar nav ul li').click(function () {
            $(this).siblings().removeClass('big');
            $(this).addClass('big');
        });
    });

    
    $(function () {
        $('.header-main .navbar nav ul li span').click(function () {
            $(this).addClass('big');
        });
    });
});


/*  Page Loading */
document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == "interactive") {
        document.getElementById("mainbody").style.visibility = "hidden";
    } else if (state == "complete") {
        setTimeout(function () {
            document.getElementById("interactive");
            document.getElementById("loader-main").style.visibility = "hidden";
            document.getElementById("mainbody").style.visibility = "visible";
        }, 500);
    }
};

