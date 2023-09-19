$(document).ready(function() {
    // Mobile Menu
    $('.main-nav').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1210"
    });
    // Magnific Popup
    $('.hero-right').magnificPopup({
        delegate: 'a',
        type: 'iframe'
        // other options
      });
    // Review Section Slider
      $('.single-review').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // Latest News Section Slider
    $('.latest-news-area').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        dotsEach: 4,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1.3
            },
            1000:{
                items:2
            },
            1200:{
                items:2.3
            }

        }
    })
    // Image Slider Section Slider
    $('.img-sliders').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        dotsEach: 4,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});

// Scroll To Top Button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    console.log(pos);
    let calcHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    console.log(scrollValue);
    if (pos > 100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#3946C7 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue; 
// Scroll To Top Button End
