!function() {
  'use strict';

  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();

      scrollToY(document.getElementById(event.target.href.split('#')[1]), {
        easing: function(pos) {
          return -(Math.pow((pos - 1), 2) - 1);
        },
        speed: 1000,
        offset: 100
      });
    }
  });
}();
