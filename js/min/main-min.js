function resetMenuHighlight(){var t=$(".navigation #sections ul");t.find("li").each(function(){$(this).removeClass("menu-highlight"),$(this).find("a").removeClass("menu-text-highlight-mobile"),$(this).find("a").removeClass("menu-text-highlight")}),$(".navigation").css("background-color","rgba(64,64,64,0.85)")}function resizeContent(){var t=$(window).height();$("#intro").height(t);var i=$(window).width(),o=$("#intro .container"),e=$("#intro #scrl-dwn-btn"),n=$(".job-details"),s=$("#about"),a=$("#work"),h=$("#projects"),l=$("#project-list"),r=$("#about-filter");if(1320>=i){var c=$("#about .container").height();c+=20,s.css("height",c+"px"),r.css("height",c+"px")}else s.css("height","439px"),r.css("height","439px");o.css("position","absolute").css("left",i/2-o.width()/2+"px").css("top",t/2-o.height()/2-20+"px"),e.css("left",i/2-e.width()/2+"px"),n.css("left",i/2-n.width()/2+"px"),a.css("height",n.height()+40+"px"),$("#vello").css("top",$("#pivotal-line").offset().top-$("#work").offset().top+20+"px"),h.css("height",l.height()+100+"px"),$("#project-list").css("margin-top",$("#projects .container .section-header").height()+30+"px"),500>=i?(o.find("p").html("Technology Enthusiast</br>Perfectionist</br>Animal Lover"),o.find("h1").html("timothy</br>tong"),$("#about .section-header").html("A<span>bout.</span>"),$("#work .section-header").html("W<span>ork.</span>")):(720>=i&&a.css("height",n.height()+60+"px"),o.find("p").html("Technology Enthusiast <span class='dot'><i class='fa fa-circle'></i></span> Perfectionist <span class='dot'><i class='fa fa-circle'></i></span> Animal Lover"),o.find("h1").html("timothy tong"),$("#about .section-header").html("A<span>bout me.</span>"),$("#work .section-header").html("W<span>ork experience.</span>"),$("#intro-name").addClass("intro-name-desktop"),400>=t&&o.find("h1").css("margin-top","20px"))}$(document).ready(function(){function t(){i=$(window).width()}var i=$(window).width();resizeContent(),$(window).resize(function(){resizeContent()}),$("#menu-icon").click(function(o){o.preventDefault(),t(),959>=i&&$("#sections").toggleClass("sections-open")}),$("#intro #scrl-dwn-btn").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top-$(".navigation").height()},1e3,"swing")}),$("#sections ul li").click(function(t){t.preventDefault();var i=$("html, body");$(this).is(".about")?i.animate({scrollTop:$("#about").offset().top-$(".navigation").height()},1e3,"swing"):$(this).is(".work")?i.animate({scrollTop:$("#work").offset().top-$(".navigation").height()},1e3,"swing"):$(this).is(".projects")?i.animate({scrollTop:$("#projects").offset().top-$(".navigation").height()},1e3,"swing"):$(this).is(".contact")&&i.animate({scrollTop:$("#contact").offset().top-$(".navigation").height()},1e3,"swing")}),$("#initial-and-name .back-to-top").click(function(t){t.preventDefault();var i=$("html, body");i.animate({scrollTop:0},"slow","swing",function(){})});var o=window.navigator.userAgent,e=o.indexOf("MSIE "),n=o.indexOf("Safari"),s=o.indexOf("Chrome"),a=o.indexOf("Firefox");e>0?(parseInt(o.substring(e+5,o.indexOf(".",e)))<=8&&alert("Friendly advice: Please consider upgrading your browser."),$("svg").hide()):a>0?($(".work span").addClass("firefox-work"),$(".projects, .contact").hover(function(){$(this).find("span").toggleClass("firefox-projects-contact-hover")}),$(".about, .work").hover(function(){$(this).find("span").toggleClass("firefox-about-work-hover")})):(n>0||s>0)&&($(".about span, .work span").addClass("safari-chrome-about-work"),$(".about, .work").hover(function(){$(this).find("span").toggleClass("safari-chrome-about-work-hover")}),$(".projects span").addClass("safari-chrome-projects"),$(".contact span, .work span").addClass("safari-chrome-contact"),$(".projects, .contact").hover(function(){$(this).find("span").toggleClass("safari-chrome-projects-contact-hover")}));var h=!0,l=$(".navigation").outerHeight(),r=0;$(window).scroll(function(){var t=$(window).width(),i=$(this).scrollTop();i>=$("#about").offset().top-l&&h&&($(".navigation").slideDown(),h=!1),i<$("#about").offset().top-l&&!h&&($(".navigation").slideUp(),h=!0),i<$("#about").offset().top-l?(resetMenuHighlight(),r=0):i>=$("#about").offset().top-l&&i<$("#work").offset().top-l&&1!==r?(resetMenuHighlight(),r=1,960>t?$(".about").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".about").find("a").addClass("menu-text-highlight")):i>=$("#work").offset().top-l&&i<$("#pivotal-line").offset().top-l-30&&2!==r?(resetMenuHighlight(),r=2,960>t?$(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".work").find("a").addClass("menu-text-highlight")):i>=$("#pivotal-line").offset().top-l&&i<$("#vello-line").offset().top-l&&3!==r?(resetMenuHighlight(),$(".navigation").css("background-color","rgba(39,186,189,1)"),r=3,960>t?$(".work").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".work").find("a").addClass("menu-text-highlight")):i>=$("#quote").offset().top-l-30&&i<$("#projects").offset().top-l&&0!==r?(resetMenuHighlight(),r=0):i>=$("#projects").offset().top-l&&i<$("#contact").offset().top-l&&4!==r?(resetMenuHighlight(),r=4,960>t?$(".projects").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".projects").find("a").addClass("menu-text-highlight")):i>=$("#contact").offset().top-l&&5!==r&&(resetMenuHighlight(),r=5,960>t?$(".contact").addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$(".contact").find("a").addClass("menu-text-highlight-mobile"))}),$("#menu-icon").bind("touchstart touchend",function(){$(this).toggleClass("menu-icon-highlight-mobile")}),$("#sections ul li a").bind("touchstart touchend",function(){$(this).toggleClass("menu-items-highlight-mobile")}),$("#initial-and-name .back-to-top").bind("touchstart touchend",function(){$(this).toggleClass("back-to-top-highlight-mobile")}),$("#vello-link").bind("touchstart touchend",function(){$(this).toggleClass("vello-link-highlight")}),$("#vello img").hover(function(){$("#vello-link").toggleClass("vello-link-highlight")})});