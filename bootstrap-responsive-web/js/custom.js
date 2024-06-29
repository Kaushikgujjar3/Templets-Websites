$(document).ready(function(){
    $("#slider-1").owlCarousel(
      {
        items:2,
        margin:20,
        dots:false,
        nav: true,
        loop:true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed:3000,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:2,
              nav:true,
          }
      }
        
        
      }
    );
    $("#slider-2").owlCarousel(
      {
        items:3,
        // nav: true,
        dots:false,
        margin:30,
        loop:true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed:3000,
        responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:2,
              nav:false,
          }
      }
        
      }
    );
    $("#slider-3").owlCarousel(
      {
        items:5,
        loop:true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed:3000,
        responsive:{
          0:{
              items:3,
              nav:false
          },
          600:{
              items:4,
              nav:false
          },
          1000:{
              items:5,
              nav:false,
          }
      }
        
        
      }
    );
  });