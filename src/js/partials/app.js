// ********** Inits

// Slick horizontal gallery
$('.content-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  swipe: false,
  speed: 500,
});

// Slick vertical section slider
$('.container-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  vertical: true,
  arrows: false,
  swipe: true,
  verticalSwiping: true,
  infinite: false,
  speed: 500,
});


// ********** Customs

// Auto height for .full-height blocks
function fullHeight(){
  var contHeight = $('.container').height();
  $('.full-height').css('height', contHeight);
};
function vertSliderNavDotsCenter(){
  // Vertical center slick-slider dots
  var bodyHeight = $('body').height();
  var slickDotsHeight = $('.vertical-slider-nav-dots').height();
  $('.vertical-slider-nav-dots').css('top', bodyHeight/2-slickDotsHeight/2);
};


// Vertical-slider-nav-dots
var dotsNav = $('.vertical-slider-nav-dots');
$('.container-slider .container-slide').each( function ( IDX ) {
  var dotsNavItem = $('<div/>', {class: 'dot', 'data-index' : IDX });
  dotsNav.append ( dotsNavItem );
  dotsNavItem.on('click', function(){
    var dotIndex = $(this).data('index');
    $('.container-slider').slick('slickGoTo', dotIndex );
  });
});
$($('.dot').get(0)).addClass('active');
$('.container-slider').on('afterChange', function(event, slick, currentSlide){
  $('.vertical-slider-nav-dots .dot').removeClass('active');
  $($('.dot').get(currentSlide)).addClass('active');
});
$('.content-slider').on('afterChange', function(event, slick, currentSlide){
  return false;
});


// Autoplay for all videos
$( document ).ready(function() {
  $('video').get(0).play();
});


// Auto height usage
fullHeight();
vertSliderNavDotsCenter();
$( window ).resize(function() {
  fullHeight();
  vertSliderNavDotsCenter();
});