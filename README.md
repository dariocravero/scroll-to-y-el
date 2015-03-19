# scrollToY

Vertically scroll to an `Element` using `requestAnimationFrame`.

Inspired by http://stackoverflow.com/a/26808520.

## Usage

```javascript
// In node
var scrollToY = require('scroll-to-y');
// In the browser just include the source file

scrollToY('someElementId'), {
  easing: function(pos) {
    return -(Math.pow((pos - 1), 2) - 1);
  },
  speed: 1000,
  offset: 100
});
```

## Easing functions

- https://github.com/danro/easing-js/blob/master/easing.js
- http://upshots.org/actionscript/jsas-understanding-easing

MIT. (c) 2015 Darío Javier Cravero <dario@uxtemple.com>
