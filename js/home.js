var sources = video.getElementsByTagName('source');
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