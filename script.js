$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:0,
        autoplay: true,
        loop: true,
        autoHeight:true,
    });
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
});
//document.addEventListener('contextmenu', event => event.preventDefault());