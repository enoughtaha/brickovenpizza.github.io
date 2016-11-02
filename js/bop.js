function scrollTo(div) {
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 1000);
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView("#testimonial-button") == false) {
        $('#navbar-brick').removeClass('hidden-nav').addClass('shown-nav');
    } else {
        $('#navbar-brick').removeClass('shown-nav').addClass('hidden-nav');
    }
});
