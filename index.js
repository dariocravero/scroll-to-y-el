// Inspired by http://stackoverflow.com/a/26808520
'use strict';

/**
* Vertically scroll to an Element
*
* @param {Element || String} target
* @param {Object} options
*
*  options = {
*    speed: 2000, // time in pixels per second
*    easing: function(v) { return v; } // easing equation function
*  }
*/
function scrollToY(target, options) {
  // Defaults
  options = options || {};
  var easing = options.easing || function(v) { return v; };
  var speed = options.speed || 2000;

  // Get the right target
  target = typeof target === 'string' ? document.querySelector(target) : target;

  var currentTime = 0;
  var scrollY = window.scrollY;
  var scrollTargetY = target.offsetTop || 0;

  var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

  function tick() {
    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easing(p);

    if (p < 1) {
      requestAnimationFrame(tick);
    }

    window.scrollTo(0, p < 1 ? scrollY + ((scrollTargetY - scrollY) * t) : scrollTargetY);
  }

  tick();
}

if (typeof module !== 'undefined') {
  module.exports = scrollToY;
}
