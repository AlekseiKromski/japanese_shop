let show_1 = false; 
let show_2 = true;
const logo = $('#logo');
let logo_layout = `<h1>Japanese Shop</h1>`;

$(window).on('scroll', () => {
    if(show_2){
        if($(window).scrollTop() > 150){
            $(".header").css({animation: "hideHeader 0.5s"});
            $(".header").on('animationend', () => {
                $(".header").css({height: "150px"});
                logo.html(`<img src="img/logo_6.png" style="height:150px">`)

                $(".header").css({animation: "showHeader 0.5s"});
                $(".header").on('animationend', () => {
                    $(".header").css({animation: "none"});
                    show_1 = true;
                    show_2 = false;
                })
            })
        }
    }
    if(show_1){
        if($(window).scrollTop() < 150){
            $(".header").css({animation: "hideHeader 0.5s"});
            $(".header").on('animationend', () => {
                logo.html(logo_layout)
                $(".header").css({height: "100px"});
                $(".header").css({animation: "showHeader 0.5s"});
                $(".header").on('animationend', () => {
                    $(".header").css({animation: "none"});
                    show_2 = true;
                    show_1 = false;
                    
                })
                
            })
            
        }
    }
})
$(document).ready(() => {

    $('.slick-slider').slick({
        "setting-name": 'setting-value',
        arrows: true,
        nextArrow: $("#next"),
        prevArrow: $("#prev")
    })
})