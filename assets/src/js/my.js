//Slider


$('.technologies__sl').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$(function(){
    $('.management__sl--img').slick({
        arrows: true,
        fade: true,
        asNavFor: '.management__sl--desc'
    });
    $(".management__sl--desc").on('afterChange', function(event, slick, currentSlide){
        $("#management__sl--number").text(currentSlide + 1);
    });
    $('.management__sl--desc').slick({
        asNavFor: '.management__sl--img',
        arrows: false,
        focusOnSelect: true
    });
});


$(function(){
    $('.team__sl').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".team__sl").on('afterChange', function(event, slick, currentSlide){
        $("#team__sl--number").text(currentSlide + 1);
    });
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

$('.tab-1__sl').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
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



$("#carouselIndicators1, #carouselIndicators2, #carouselIndicators3, #carouselIndicators4").carousel({
    interval : false
});



//Fix tab-pane height
var maxHeight = 0;

$(".carousel-inner1").each(function(){
  if ( $(this).height() > maxHeight ) {
    maxHeight = $(this).height();
  }
});
 
$(".carousel-inner1").height(maxHeight);

$(window).resize(function(){ 
});


var maxHeight = 0;

$(".carousel-inner2").each(function(){
    if ( $(this).height() > maxHeight ) {
      maxHeight = $(this).height();
    }
  });
   
  $(".carousel-inner2").height(maxHeight);
  
  $(window).resize(function(){ 
});



jQuery(function(){
    jQuery(".search__btn--open").click(function () {
      jQuery(".search__form").toggle("slow");
    });
});
