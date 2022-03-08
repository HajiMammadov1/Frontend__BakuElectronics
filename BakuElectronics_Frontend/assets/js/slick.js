$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev"><img src="./assets/images/promo-arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next"><img src="./assets/images/promo-arrow-next.svg" alt=""></button>',
    customPaging:function(slider, i) {
            return '<button type="button" data-role="none"></button>';
          },
    
        
  });

  $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '<button type="button" data-role="none" class="slick-prev"><img src="./assets/images/promo-arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next"><img src="./assets/images/promo-arrow-next.svg" alt=""></button>'
      });