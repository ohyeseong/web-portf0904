$(function(){

    $(".slider").slick({
        autoplay: true,
        dots:true,
        arrows:true,
        // fade:true
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    })

    $(".menu-toggle-btn").click(function(){
        $(this).toggleClass("on");
        $(".m_nav").slideToggle();
    })

    $("a").click(function(event){
        event.preventDefault()
    })

})//jquery