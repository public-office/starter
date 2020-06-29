function loadImages() {
  $('img').imagesLoaded({ background: true })
  .progress( function( instance, image ) {
    console.log()
    $(image.element || image.img).addClass('loaded');
  })
}

$(document).ready(function() {
  loadImages()
  setTimeout(function() {
    $('body').addClass('ready');
  }, 1000);
  
})
