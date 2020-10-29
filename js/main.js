let show_1 = false; 
let show_2 = true;
const logo = $('#logo');
let logo_layout = `<h1>Japanese Shop</h1>`;

$(window).on('scroll', () => {
    if(show_2){
        if($(window).scrollTop() > 20){
            setTimeout(() => {
                $(".header").css({position: "fixed"});
                $(".header").css({height: "150px"});
                logo.html(`<img src="img/logo_6.png" style="height:150px">`)

                $(".header").css({animation: "showHeader 0.5s"});
                $(".header").on('animationend', () => {
                    $(".header").css({position: "fixed"});
                    $(".header").css({height: "150px"});
                    $(".header").css({animation: "none"});
                    $(".header").css({top: "0"});
                    logo.html(`<img src="img/logo_6.png" style="height:150px">`)
                    show_2 = false;
                    show_1 = true;
                })
            }, 500)
        }
    }
    if(show_1){
        if($(window).scrollTop() < 20){
            $(".header").css({animation: "hideHeader 0.5s"});
            $(".header").on('animationend', () => {
                logo.html(logo_layout)
                $(".header").css({height: "100px"});
                $(".header").css({animation: "showHeader 0.5s"});
                $(".header").on('animationend', () => {
                    $(".header").css({animation: "none"});
                    $(".header").css({position: "relative"});
                    show_2 = true;
                    show_1 = false;
                })
                
            })
            
        }
    }
})