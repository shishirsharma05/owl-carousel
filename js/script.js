$(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    
                  },
                  768: {
                    items: 3,
                    
                  },
                  1000: {
                    items: 5,
                    nav: true,
                    loop: false,
                    
                  }
                }
              })
             
});

  $('.owl-carousel .slider2').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:4
            },
        }
    })