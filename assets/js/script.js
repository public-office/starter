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

  $('.tag').on('click', function(event) {
    event.preventDefault();
    $(this).find('span').toggleClass('active');
    dofilter();
  })

  function dofilter() {
    var active = $('span.active').map(function() {
      return $(this).attr('data-filter')
    }).toArray()

    if(active.length) {
      $('[data-tags]').each(function() {
        var tags = $(this).attr('data-tags').split(' ').filter(function(t){ return t })
        console.log(matches)
        var matches = tags.filter(function(t) { return active.includes(t) })
        if(matches.length === active.length) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }
      })
    } else {
      $('[data-tags]').addClass('active')
    }
  }

  // sentences in header
  var delay = 2000
  var current = 0
  var $phrases = $('.result')
  setInterval(function() {
    current = (current + 1) % $phrases.length
    $phrases.hide().eq(current).show()
  }, delay)

  interact('.item')
    .draggable({
      onmove: window.dragMoveListener
    })
    .resizable({
      preserveAspectRatio: true,
      edges: { left: true, right: true, bottom: true, top: true }
    })
    .on('resizemove', function (event) {
      var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0),
          y = (parseFloat(target.getAttribute('data-y')) || 0);

      // update the element's style
      target.style.width  = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      // translate when resizing from top or left edges
      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
      target.textContent = event.rect.width + '×' + event.rect.height;
    });

  function dragMoveListener (event) {
      var target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

})
