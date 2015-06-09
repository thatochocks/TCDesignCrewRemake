$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.menu').addClass("sticky");
        $('.menu li a').addClass("stickylinks");
        $('.logo-top').addClass("stickylogo");
    }
    else{
        $('.menu').removeClass("sticky");
        $('.menu li a').removeClass("stickylinks");
        $('.logo-top').removeClass("stickylogo");
    }
});