$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:0,
        autoplay: true,
        loop: true,
        autoHeight:true,
    });
  
});
document.addEventListener('contextmenu', event => event.preventDefault());
  $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
    //var sources = video.getElementsByTagName('source');
if (window.Modernizr && window.Modernizr.on) {
    window.Modernizr.on('videoautoplay', function() {
     for (var j = 0; j < sources.length; j++) {
        var source = sources[j];
        if (source.dataset.src != undefined) {
          var newSource = document.createElement("source");
         newSource.setAttribute("src", source.dataset.src);
          video.appendChild(newSource);
        }
}
  });
}