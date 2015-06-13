$(document).ready(function($){

	$('.team').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 2
	});
    $('.members').asPieProgress({
        namespace: 'pie_progress',
        speed: 100,
        min: 0,
        max: 50,
        goal: 50,
        easing: 'linear'
    });
    $('.projects').asPieProgress({
        namespace: 'pie_progress',
        speed: 100,
        min: 0,
        max: 100,
        goal: 100,
        easing: 'linear'
    });
    $('.contributions').asPieProgress({
        namespace: 'pie_progress',
        speed: 100,
        min: 0,
        max: 200,
        goal: 200,
        easing: 'linear'
    });
    $('.pie_progress').asPieProgress('start');
    // Example with grater loading time - loads longer
});

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


function showBio(bio)
{
	$('.bio').hide().html("<img src='"+bio.find('img').attr('src')+"' alt=''><h1>"+bio.find('h1').text()+"</h1><h2>"+bio.find('h2').text()+"</h2><h3>Skills: "+bio.attr('expertise')+"</h3><p>Bio<br>"+bio.attr('bio')+"</p>").fadeIn(5000);
}


$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 	$('.item').click(function(e){
 		showBio($(this));
 	})
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});