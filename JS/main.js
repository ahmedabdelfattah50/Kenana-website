$(document).ready(function(){

    // this for insilize the init of wow.js plugn
    new WOW().init(); 

    // ================ this for slider by owl plugin

    const nextIcon_1 = "<img src='./images/right_arrow_green.png'>",
          prevIcon_1 = "<img src='./images/left_arrow_green.png'>",
          nextIcon = "<img src='./images/right_arrow.png'>",
          prevIcon = "<img src='./images/left_arrow.png'>";


    $('.owl-one').owlCarousel({
        loop:true,
        nav:false,
        autoplay:false,
        center: true,
        addClassActive: false,
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:3
            },
            1198:{
                items:5
            }
        }
    })

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        navText: [
            prevIcon_1,
            nextIcon_1
        ],
        responsive:{
            0:{
                items:1
            },
            567:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        center: true,
        addClassActive: false,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    var goUp = $('.go_up'),
        navBar = $('.navbar');

    $(window).scroll(function(){
        
        // navbar change
        if($(this).scrollTop() > 120){
            navBar.addClass('navChange');
            navBar.addClass('fixed-top');
        } else {
            navBar.removeClass('navChange');
            navBar.removeClass('fixed-top');
        }

        // this for icon to go up when scroll
        if($(this).scrollTop() > 100){
            if(goUp.is(":hidden")){
                goUp.fadeIn();
            }
        } else {
            goUp.fadeOut();
        }
    });

    // this for the animation of the icon go up
    goUp.click(function(event){
        event.preventDefault();

        $('html , body').animate({
            scrollTop: 0
        },1000);
    });

    // when click on the menu bar icon
    var navbarMenuBtn = $('#navbarMenuBtn');

    navbarMenuBtn.click(function(){
        $('.navbar').toggleClass('mobileNavbar');
    });
 
});
