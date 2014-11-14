function resetMenuHighlight() {
    var menuSections = $(".navigation #sections ul");
    menuSections.find('li').each(function () {
        $(this).removeClass("menu-highlight");
        $(this).find("a").removeClass("menu-text-highlight-mobile");
        $(this).find("a").removeClass("menu-text-highlight");
    });
    $(".navigation").css("background-color", "rgba(64,64,64,0.85)");

}
//responsiveness
function resizeContent() {
    // var browser = window.navigator.userAgent;
//            var msie = browser.indexOf("MSIE ");
//            var safari = browser.indexOf("Safari");
//            var chrome = browser.indexOf("Chrome");
    // var firefox = browser.indexOf("Firefox");
    var height = $(window).height();
    $("#intro").height(height);
    var width = $(window).width();
    var introContainer = $("#intro .container");
    var introScrlBtn = $("#intro #scrl-dwn-btn");
    var jobDetPanel = $(".job-details");
    var abtSec = $("#about");
    var workSec = $("#work");
    var projectSec = $("#projects");
    var projectCont = $("#project-list");

    var abtFilter = $("#about-filter");
    if (width <= 1320) {
        var abtContHeight = $("#about .container").height();
        abtContHeight += 20;
        abtSec.css("height", abtContHeight + "px");
        abtFilter.css("height", abtContHeight + "px");
    } else {
        abtSec.css("height", "439px");
        abtFilter.css("height", "439px");
    }

    //position of #intro .container
    introContainer.css("position", "absolute").css("left", ((width / 2) - (introContainer.width() / 2)) + "px").css("top", ((height / 2) - (introContainer.height() / 2) - 20) + "px");
    introScrlBtn.css("left", ((width / 2) - (introScrlBtn.width() / 2)) + "px");
    jobDetPanel.css("left", ((width / 2) - (jobDetPanel.width() / 2)) + "px");
    workSec.css("height", jobDetPanel.height() + 40 + "px");
    $('#vello').css("top", $("#pivotal-line").offset().top - $('#work').offset().top + 20 + "px");
    projectSec.css("height", projectCont.height() + 100 + "px");
    $("#project-list").css("margin-top", $("#projects .container .section-header").height() + 30 + "px");

    if (width <= 500) {
        introContainer.find("p").html("Technology Enthusiast</br>Perfectionist</br>Animal Lover");
        introContainer.find("h1").html("timothy</br>tong");
        $("#about .section-header").html("A<span>bout.</span>");
        $("#work .section-header").html("W<span>ork.</span>");

    } else {
        if (width <= 720) {
            workSec.css("height", jobDetPanel.height() + 60 + "px");
        }
        introContainer.find("p").html("Technology Enthusiast <span class='dot'><i class='fa fa-circle'></i></span> Perfectionist <span class='dot'><i class='fa fa-circle'></i></span> Animal Lover");
        introContainer.find("h1").html("timothy tong");
        $("#about .section-header").html("A<span>bout me.</span>");
        $("#work .section-header").html("W<span>ork experience.</span>");
        $("#intro-name").addClass("intro-name-desktop");
        if (height <= 400) {
            introContainer.find("h1").css("margin-top", "20px");
        }
    }


}
$(document).ready(function () {
    var width = $(window).width();
    resizeContent();
    $(window).resize(function () {
        resizeContent();
    });
    function checkWidth() {
        width = $(window).width();
    }
    $('#menu-icon').click(function (e) {
        e.preventDefault();
        checkWidth();
        if (width <= 959) {
            $('#sections').toggleClass("sections-open");
        }
    });
    $('#intro #scrl-dwn-btn').click(function () {
        $("html, body").animate({scrollTop: $('#about').offset().top - $('.navigation').height()}, 1000, 'swing');
    });
    $('#sections ul li').click(function (e) {
        e.preventDefault();
        var body = $("html, body");
        if ($(this).is(".about")) {
            body.animate({scrollTop: $('#about').offset().top - $('.navigation').height()}, 1000, 'swing');
        }
        else if ($(this).is(".work")) {
            body.animate({scrollTop: $('#work').offset().top - $('.navigation').height()}, 1000, 'swing');
        }
        else if ($(this).is(".projects")) {
            body.animate({scrollTop: $('#projects').offset().top - $('.navigation').height()}, 1000, 'swing');
        }
        else if ($(this).is(".contact")) {
            body.animate({scrollTop: $('#contact').offset().top - $('.navigation').height()}, 1000, 'swing');
        }
    });
    $('#initial-and-name .back-to-top').click(function (e) {
        e.preventDefault();
        var body = $("html, body");
        body.animate({scrollTop: 0}, 'slow', 'swing', function () {
        });
    });

    var browser = window.navigator.userAgent;
    var msie = browser.indexOf("MSIE ");
    var safari = browser.indexOf("Safari");
    var chrome = browser.indexOf("Chrome");
    var firefox = browser.indexOf("Firefox");
    if (msie > 0) {
        if (parseInt(browser.substring(msie + 5, browser.indexOf(".", msie))) <= 8) {
            alert("Friendly advice: Please consider upgrading your browser.");
        }//IE VERSION
        $('svg').hide();
    }
    else if (firefox > 0) {
        $(".work span").addClass("firefox-work");
        $(".projects, .contact").hover(function () {
            $(this).find("span").toggleClass("firefox-projects-contact-hover");
        });
        $(".about, .work").hover(function () {
            $(this).find("span").toggleClass("firefox-about-work-hover");
        });
    }
    else if (safari > 0 || chrome > 0) {
        $(".about span, .work span").addClass("safari-chrome-about-work");
        $(".about, .work").hover(function () {
            $(this).find("span").toggleClass("safari-chrome-about-work-hover");
        });
        $(".projects span").addClass("safari-chrome-projects");
        $(".contact span, .work span").addClass("safari-chrome-contact");
        $(".projects, .contact").hover(function () {
            $(this).find("span").toggleClass("safari-chrome-projects-contact-hover");
        });
    }

    // firstRun = false;
    var navHidden = true;
    var navbarHeight = $('.navigation').outerHeight();
    var menuHighlight = 0;

    $(window).scroll(function () {
        var width = $(window).width();
        var curOffset = $(this).scrollTop();
        if (curOffset >= $("#about").offset().top - navbarHeight && navHidden) {
            $(".navigation").slideDown();
            navHidden = false;
        }
        if (curOffset < $("#about").offset().top - navbarHeight && !navHidden) {
            $(".navigation").slideUp();
            navHidden = true;
        }
        if (curOffset < $("#about").offset().top - navbarHeight) {
            resetMenuHighlight();
            menuHighlight = 0;
        }
        else if (curOffset >= $("#about").offset().top - navbarHeight && curOffset < $("#work").offset().top - navbarHeight && menuHighlight !== 1) {
            resetMenuHighlight();
            menuHighlight = 1;
            if (width < 960) {
                $(".about").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".about").find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#work").offset().top - navbarHeight && curOffset < $("#pivotal-line").offset().top - navbarHeight - 30 && menuHighlight !== 2) {
            resetMenuHighlight();
            menuHighlight = 2;
            if (width < 960) {
                $(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".work").find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#pivotal-line").offset().top - navbarHeight && curOffset < $("#vello-line").offset().top - navbarHeight && menuHighlight !== 3) {
            resetMenuHighlight();
            $(".navigation").css("background-color", "rgba(39,186,189,1)");
            menuHighlight = 3;
            if (width < 960) {
                $(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".work").find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#quote").offset().top - navbarHeight - 30 && curOffset < $("#projects").offset().top - navbarHeight && menuHighlight !== 0) {
            resetMenuHighlight();
            menuHighlight = 0;
        }
        else if (curOffset >= $("#projects").offset().top - navbarHeight && curOffset < $("#contact").offset().top - navbarHeight && menuHighlight !== 4) {
            resetMenuHighlight();
            menuHighlight = 4;
            if (width < 960) {
                $(".projects").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".projects").find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $("#contact").offset().top - navbarHeight && menuHighlight !== 5) {
            resetMenuHighlight();
            menuHighlight = 5;
            if (width < 960) {
                $(".contact").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $(".contact").find("a").addClass("menu-text-highlight-mobile");
            }
        }
    });
    $('#menu-icon').bind('touchstart touchend', function () {
        $(this).toggleClass('menu-icon-highlight-mobile');
    });
    $("#sections ul li a").bind('touchstart touchend', function () {
        $(this).toggleClass('menu-items-highlight-mobile');
    });
    $("#initial-and-name .back-to-top").bind('touchstart touchend', function () {
        $(this).toggleClass('back-to-top-highlight-mobile');
    });
    $("#vello-link").bind('touchstart touchend', function () {
        $(this).toggleClass('vello-link-highlight');
    });

    $("#vello img").hover(function () {
        $("#vello-link").toggleClass("vello-link-highlight");
    });
});
        