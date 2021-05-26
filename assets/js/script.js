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
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 }
      })
    ],

    inertia: true
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ]
  })

})
