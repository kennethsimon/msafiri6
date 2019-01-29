$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
});
//document.addEventListener('contextmenu', event => event.preventDefault());