$(document).ready(function(){

  var sliderTrack = $('.w-slider__track');
  var slide = $('.w-slider__slide');
  var slideWidth = slide.width();
  var slideCount = slide.length;
  var currentSlide = 1;
  var intervalTime = 3000;
  var animationTime = 1000;
  
  setInterval(function() {
    sliderTrack.animate({'margin-left': '-=' + slideWidth}, animationTime, function () {
      currentSlide++;
      if (currentSlide === slideCount) {
          currentSlide = 1;
        sliderTrack.css('margin-left', 0);
      }
    });
  }, intervalTime);
  
});