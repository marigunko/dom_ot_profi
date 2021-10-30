//Slider


$('.technologies__sl').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});


$(function(){
    $('.management__sl').slick();
});


$('.team__sl').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
                
            }
          }
    ]
});


$('.certificates__sl').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.reviews__sl').slick({
	dots: false,
	arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true
});


$(function(){
    $('.project__sl').slick();
});


$('.house__sl').slick({
	dots: true,
	arrows: true,
    
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
            }
        }
    ]
})


$('.about-project__sl').slick({
    slidesToShow: 5,
    arrows: false,
    infinite: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});


$('.nav-tabs .sl__item').click(function() {
    $('.nav-tabs .sl__item').removeClass('active');
});


$('.tab-1__sl--mobile').slick({
    dots: true, 
});


$('.tab-1__sl--desktop').slick({
});


$('.tab-2__sl').slick({
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true, 
            }
        },
    ]
});


$('.card__sl').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }
    ]
});


$('.history__sl').slick({
	arrows: true,
    
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
            }
        }
    ]
})

$('.slider-for-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slider-nav-1',
});

$('.slider-nav-1').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for-1',
    focusOnSelect: true
});