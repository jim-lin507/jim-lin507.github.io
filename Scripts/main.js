$(document).ready(function () {

    //Smooth scrolling
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                    });
                }
            }
        });
    //Menu button
    $(".navbar-toggle").click(function () {
        $(".icon-bar").eq(0).toggleClass("icon-bar-top");
        $(".icon-bar").eq(1).toggleClass("icon-bar-middle");
        $(".icon-bar").eq(2).toggleClass("icon-bar-bottom");
    });
    $(".nav a").click(function () {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
        $(".icon-bar").eq(0).toggleClass("icon-bar-top");
        $(".icon-bar").eq(1).toggleClass("icon-bar-middle");
        $(".icon-bar").eq(2).toggleClass("icon-bar-bottom");
    });


    //Type text
    var typed = new Typed('.type-text span', {
        strings: ["Hi, I am Jim Lin", "I am a Software Developer"],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true,
        // cursorChar:"+"
    });

    //Portfolio
    $(".portfolio-content").isotope({
        itemSelector: ".item",
        layoutMode: "fitRows"
    });
    $(".portfolio-menu ul li a").click(function () {
        $(".portfolio-menu ul li a").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".portfolio-content").isotope({
            filter: selector
        });
    });

    //When elements show on screen, add animation
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
    // var fullNameTop = $(".font-name").offset().top;
    // var introTop = $(".font-intro").offset().top;
    // var titleTop = $(".font-title").offset().top;
    var portraitTop = $(".img-portrait").offset().top;
    var introductionTop = $(".introduction").offset().top;
    var progressbarTop=  $('[data-toggle="tooltip"]').offset().top;
    var graduationCapTop = $(".graduation-cap").offset().top;
    var briefcaseTop = $(".briefcase").offset().top;
    var wTop = $(window).height();//Window height
    window.onresize = function()
    {
        var wTop = $(window).height();//Resize window, window height changes
    }
    $(window).scroll(function()
    {
        var dTop = $(document).scrollTop();
        // if(dTop+wTop > fullNameTop)
        // {
        //     $(".font-name").addClass("animated  bounceIn")
        // }
        // if(dTop+wTop > introTop)
        // {
        //     $(".font-intro").addClass("animated  flash")
        // }
        // if(dTop+wTop > titleTop)
        // {
        //     $(".font-title").addClass("animated  shake")
        // }
        if(dTop+wTop > introductionTop)
        {
            $(".introduction").addClass("animated  fadeInRight");
        }
        if(dTop+wTop > portraitTop)
        {
            $(".img-portrait").addClass("animated  fadeInLeft");
        }
        if(dTop+wTop > graduationCapTop)
        {
            $(".graduation-cap").addClass("animated  bounceIn");
        }
        if(dTop+wTop > briefcaseTop)
        {
            $(".briefcase").addClass("animated  bounceIn");
        }
        if(dTop+wTop > progressbarTop)
        {
            $(".progress-bar").each(function () {
                each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width + '%');
            });
        }
    });
    //Scroll down navbar background color changes
    $(window).scroll(function () {
        if (window.scrollY > 20) {
            $(" .navbar-fixed-top").css("background-color", "#333");
            $(" .navbar-fixed-top").css("opacity", "0.8");
        }
        else {
            if ($(window).width() > 767) {
                $(" .navbar-fixed-top").css("background-color", "transparent");
                $(" .navbar-fixed-top").css("opacity", "1");
            }
        }
    });

});