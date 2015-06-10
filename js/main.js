var $introSection = $("#intro");
var $aboutSection = $("#about");
var $aboutFilter = $("#about-filter");
var $abtCont = $("#about .container");
var $introCont = $("#intro .container");
var $introScrlBtn = $("#intro #scrl-dwn-btn");
var $jobDets = $(".job-details");
var $workSection = $("#work");
var $projectSec = $("#projects");
var $projCont = $("#projects .container");
//var $projList = $("#project-list");
var $units = $(".projUnit");
var $workHead = $("#work .section-header");
var $introName = $("#intro-name");
var $aboutHead = $("#about .section-header");
var $navigation = $(".navigation");
var $pivotalLine = $("#pivotal-line");
var $quoteSec = $("#quote");
var $contactSec = $("#contact");
var $menuContact = $(".contact");
var $menuAbout = $(".about");
var $menuWork = $(".work");
var $menuProj = $(".projects");
var $abtSecHeader = $(".section-header");
var $wrkSecHeader = $("#work .section-header");
var $projSecHeader = $("#projects .section-header");
var $contactSecHead = $("#contact .section-header");
var $projHoverArea = $(".hover-area");
var $projDes = $(".proj-des");
var $projImg = $(".proj-img");
var $projPopup = $("#project-popup");
function resetMenuHighlight() {
    var menuSections = $(".navigation #sections ul");
    $("#vello-link").css("color", "black");
    $("#pivotal-link #red, #pivotal-link #blue").css("color", "black");
    menuSections.find('li').each(function () {
        $(this).removeClass("menu-highlight");
        $(this).find("a").removeClass("menu-text-highlight-mobile");
        $(this).find("a").removeClass("menu-text-highlight");
    });
    $navigation.css("background-color", "rgba(64,64,64,0.85)");

}
//responsiveness
var resizeContent = function () {
    var height = $(window).height();
    $introSection.height(height);
    var width = $(window).width();
    if (width <= 1320) {
        var abtContHeight = $("#about .container").height();
        abtContHeight += $abtSecHeader.height() + 40;
        $aboutSection.css("height", abtContHeight + "px");
        $aboutFilter.css("height", abtContHeight + "px");
    }
    if (width >= 1491) {
        $abtCont.css("margin-left", ((width / 2) - ($abtCont.width() / 2)) + "px");
    }
    else {
        $abtCont.css("margin-left", "auto");
    }

    //position of #intro .container
    $introCont.css("position", "absolute").css("left", ((width / 2) - ($introCont.width() / 2)) + "px").css("top", ((height / 2) - ($introCont.height() / 2) - 20) + "px");
    $abtSecHeader.css("margin-left", ((width / 2) - ($abtSecHeader.width() / 2)) + "px");
    $wrkSecHeader.css("margin-left", ((width / 2) - ($wrkSecHeader.width() / 2)) + "px");
    $projSecHeader.css("margin-left", ((width / 2) - ($projSecHeader.width() / 2)) + "px");
    $contactSecHead.css("margin-left", ((width / 2) - ($contactSecHead.width() / 2)) + "px"); 
    $introScrlBtn.css("left", ((width / 2) - ($introScrlBtn.width() / 2)) + "px");
    $jobDets.css("left", ((width / 2) - ($jobDets.width() / 2)) + "px");
    $workSection.css("height", $jobDets.height() + $abtSecHeader.height() + 40 + "px");
    $units.css("height", $units.width() + "px");

//    $projectSec.css("height", $projList.height() + 120 + "px");
    $projectSec.css("height", $projCont.height() + $projSecHeader.height() + 70 + 'px');
//    $projList.css("margin-top", $("#projects .container .section-header").height() + 30 + "px");

    if (width <= 500) {
        $introCont.find("p").html("Technology Enthusiast</br>Perfectionist</br>Animal Lover");
        $introCont.find("h1").html("timothy</br>tong");
        $aboutHead.html("A<span>bout.</span>");
        $workHead.html("W<span>ork.</span>");

    } else {
        if (width <= 720) {
            $workSection.css("height", $jobDets.height() + 60 + "px");
        }
        $introCont.find("p").html("Technology Enthusiast <span class='dot'><i class='fa fa-circle'></i></span> Perfectionist <span class='dot'><i class='fa fa-circle'></i></span> Animal Lover");
        $introCont.find("h1").html("timothy tong");
        $aboutHead.html("A<span>bout me.</span>");
        $workHead.html("W<span>ork experience.</span>");
        $introName.addClass("intro-name-desktop");
        
    }
    if (width < 700) {
            $(".note, #messageArea").css("width",width - 150 + "px");
            $(".textInput").css("width",width - 200 + "px");
             
            $("table").css("width", width - 70 + "px");
        }
    $('#vello').css("top", $pivotalLine.offset().top - $workSection.offset().top - 70 + "px");

    $projHoverArea.css("width", $projHoverArea.parent().width() + "px").css("margin-top", $projHoverArea.parent().height() * 0.75 + "px");
    $projDes.css("width", $projDes.parent().width() + "px").css("margin-top", $projDes.parent().height() * 0.5 + "px");
    //Timeline
//    $('.circle-pivotal').css("top", $('.pivotal-labs .company-name').offset().top - $workSection.offset().top + "px").css('left', $('.pivotal-labs .position').offset().left / 2 + 'px');
//    $('.circle-vello').css("top", $('.vello .company-name').offset().top - $workSection.offset().top + "px").css('left', $('.vello .position').offset().left / 2 + 'px');
//    $('#timeline').css("height", $('.pivotal-labs').height() + $('.vello').height() - 50 + 'px').css("top", $('.pivotal-labs .company-name').offset().top + $(".circle").height() / 2 - $workSection.offset().top + "px").css('left', $('.circle').offset().left + 8 + "px");
    $(".hover-area .line-separator").each(function () {
        $(this).css("left", "15%");
    });
    $projImg.each(function () {
        $(this).css("left", "27.5%").css("top", $(this).parent().height() / 2 - $(this).height() * 0.55 + "px");
    });
    
//    Project popup window
    $projPopup.css("width","80%").css("height", height * 0.9+"px").css("margin","auto");
};

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
        $("html, body").animate({scrollTop: $aboutSection.offset().top - $('.navigation').height()}, 1000, 'swing');
    });
    /*
    $('#intro #scrl-dwn-btn').hover(function(){
        $('#social-btns').children().each(function(){
            $(this).trigger('hover');
        });
    },function(){
        $('#social-btns').children().each(function(){
            $(this).off('hover');
        });
    });
    */
    $('#sections ul li').click(function (e) {
        e.preventDefault();
        var body = $("html, body");
        if ($(this).is(".about")) {
            body.animate({scrollTop: $aboutSection.offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
        }
        else if ($(this).is(".work")) {
            body.animate({scrollTop: $workSection.offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
        }
        else if ($(this).is(".projects")) {
            body.animate({scrollTop: $projectSec.offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
        }
        else if ($(this).is(".contact")) {
            body.animate({scrollTop: $('#contact').offset().top - $('.navigation').height()}, 1000, 'swing', function () {
                checkWidth();
                if (width <= 959) {
                    $('#sections').removeClass("sections-open");
                }
            });
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
    if (chrome > 0 || parseInt(browser.substring(msie + 5, browser.indexOf(".", msie))) <= 9) {
        $introSection.addClass("intro-static");
    } else {
        $introSection.parallax({imageSrc: './images/apple-bg.jpg'});
    }
    $('#pivotal-link').hover(function () {
        $("#pivotal-link #blue").toggleClass("blue");
        $("#pivotal-link #red").toggleClass("red");
    });

    // firstRun = false;
    var navHidden = true;
    var navbarHeight = $('.navigation').outerHeight();
    var menuHighlight = 0;

    $(window).scroll(function () {
        var width = $(window).width();
        var curOffset = $(this).scrollTop();
        if (curOffset >= $aboutSection.offset().top - 3 * navbarHeight && navHidden) {
            navHidden = false;
            $navigation.css("margin-top", "0px");
        }
        if (curOffset < $aboutSection.offset().top / 2 && !navHidden) {
            navHidden = true;
            $navigation.css("margin-top", -navbarHeight + "px");
        }
        if (curOffset < $aboutSection.offset().top - 3 * navbarHeight) {
            resetMenuHighlight();
            menuHighlight = 0;
        }
        else if (curOffset < $workSection.offset().top - navbarHeight - 50 && menuHighlight !== 1) {
            menuHighlight = 1;
            resetMenuHighlight();
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
            if (width < 960) {
                $menuAbout.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $menuAbout.find('a').addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $workSection.offset().top - 50 - navbarHeight && curOffset < $pivotalLine.offset().top - navbarHeight - 50 && menuHighlight !== 2) {
            menuHighlight = 2;
            resetMenuHighlight();
            $navigation.css("background-color", "rgba(0,119,192,1)");
            $("#pivotal-link #blue").css("color", "rgb(0,119,192)");
            $("#pivotal-link #red").css("color", "rgb(196,18,48)");
            //$(".circle-pivotal").addClass("circle-pivotal-color");
            //$(".circle-vello").addClass("circle-vello-color");
            if (width < 960) {
                $menuWork.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $menuWork.find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $pivotalLine.offset().top - 50 - navbarHeight && curOffset < $quoteSec.offset().top - navbarHeight - 30 && menuHighlight !== 3) {
            menuHighlight = 3;
            resetMenuHighlight();
            $navigation.css("background-color", "rgba(39,186,189,1)");
            $("#vello-link").css("color", "rgb(39,186,189)");
            //$(".circle-pivotal").addClass("circle-pivotal-color");
            //$(".circle-vello").addClass("circle-vello-color");
            if (width < 960) {
                $menuWork.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $menuWork.find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $quoteSec.offset().top - navbarHeight - 30 && curOffset < $projectSec.offset().top - navbarHeight && menuHighlight !== 0) {
            menuHighlight = 0;
            resetMenuHighlight();
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
            if (width < 960) {
                $menuProj.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $menuProj.find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $projectSec.offset().top - navbarHeight && curOffset < $contactSec.offset().top - navbarHeight && menuHighlight !== 4) {
            menuHighlight = 4;
            resetMenuHighlight();
            $navigation.css("background-color", "rgba(64,64,64,1)");
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
            if (width < 960) {
                $menuProj.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $menuProj.find("a").addClass("menu-text-highlight");
            }
        }
        else if (curOffset >= $contactSec.offset().top - navbarHeight && menuHighlight !== 5) {
            menuHighlight = 5;
            resetMenuHighlight();
            //$(".circle-pivotal").removeClass("circle-pivotal-color");
            //$(".circle-vello").removeClass("circle-vello-color");
            if (width < 960) {
                $menuContact.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile");
            }
            else {
                $menuContact.find("a").addClass("menu-text-highlight");
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
    setTimeout(resizeContent, 300);

    $(".hover-area .line-separator").each(function () {
        $(this).css("left", "15%");
        $(this).css("margin-top", "0px");
    });

    $(".projUnit").hover(function () {
        var hoverArea = $(this).find(".hover-area");
        var description = hoverArea.find(".proj-des");
        $(this).find(".proj-img").addClass("scale");
        hoverArea.animate({
            "margin-top": $(this).height() - hoverArea.height() + "px"
        }, {duration: 300, easing: "swing", queue: false});
        hoverArea.fadeIn(150);

        description.delay(100).animate({
            "margin-top": -5 + "px"
        }, {duration: 300, easing: "swing", queue: false});
        description.fadeIn(150);
    }, function () {
        var hoverArea = $(this).find(".hover-area");
        var description = hoverArea.find(".proj-des");
        $(this).find(".proj-img").removeClass("scale");
        description.animate({
            "margin-top": hoverArea.height() * 0.5 + "px"
        }, {duration: 300, easing: "swing", queue: false});
        description.fadeOut(150);
        hoverArea.delay(100).animate({
            "margin-top": $(this).height() * 0.75 + "px"
        }, {duration: 300, easing: "swing", queue: false});
        hoverArea.fadeOut(150);
    });
    
    /*
    $("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#messageArea").val();

    $("#returnmessage").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name === '' || email === '' || message === '') {
        alert("Please Fill Required Fields");
    } else { 
        // Returns successful data submission message when the entered information is stored in database.
        $.post("../contact_form.php", {
            name1: name,
            email1: email,
            message1: message
        }, function(data) {
            $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data === "Got it. I'll get back to you ASAP.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
*/
    $("#submit").click(function() {
        var email = 'me@timothytong.com';
        var subject = 'Hello from ' + $("label[for='name']");
        var emailBody = $("label[for='message']") + "\n\nReply to: " + $("label[for='email']");
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
    });
});