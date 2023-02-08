
let navber= document.querySelector("nav");
 let top_up= document.querySelector(".top_up");

 window.addEventListener("scroll", function(){
   let scroll_valu=window.scrollY;
   if (scroll_valu > 120) {
     navber.classList.add("nav_sticky");
      top_up.classList.add("top_up_show");
  
   } else {
     navber.classList.remove("nav_sticky");
     top_up.classList.remove("top_up_show");
   }
 })

var mixer = mixitup('.filter-area');


new VenoBox();

// counter up
$('.counter').counterUp({
  delay: 1,
  time: 10000
});




// slick slider

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:'<span> <i class="fas fa-chevron-left prev"></i> </span>',
    nextArrow:'<span> <i class="fas fa-chevron-right next"></i> </span>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

 

