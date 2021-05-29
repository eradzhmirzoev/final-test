$(document).ready(function() {
    $('.burger__menu').click(function(event) {
        $('.burger__menu, .header__menu, .head').toggleClass('active');
    });
});

var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 400){
        $(".header__menu").css({"background": "white"})
    }
    if(400 > scrolled){
        $(".header__menu").css({"background": "transparent"})         
    }

}
