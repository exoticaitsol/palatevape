
$(document).ready(function () {
  $(".slider_testimonial_sec").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $(".slide_controls_1 .slide-prev"),
    nextArrow: $(".slide_controls_1 .slide-next"),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
  });
  $(".slider_testimonial_sec").slick({
    dots: true,
    infinite: false,
    arrow:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $(".slide_controls_2 .left"),
    nextArrow: $(".slide_controls_2 .right"),
    
  });

});
