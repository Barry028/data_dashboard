"use strict";

// Polyfills

// Element.matches() polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i = matches.length;
    while (--i >= 0 && matches.item(i) !== this) {}
    return i > -1;
  };
}
if (!Element.prototype.closest) {
  /**
   * Element.closest() polyfill
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
   */
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;
      var ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (ancestor.matches(s)) return ancestor;
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);
      return null;
    };
  }
}
/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Element.prototype.remove) {
  (function(elem) {
    for (var i = 0; i < elem.length; i++) {
      if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;
      window[elem[i]].prototype.remove = function() {
        this.parentNode.removeChild(this);
      };
    }
  })(['Element', 'CharacterData', 'DocumentType']);
}

//
//  requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//
(function() {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function(arr) {
  arr.forEach(function(item) {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function(argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function(arr) {
  arr.forEach(function(item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function(argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// getAttributeNames
if (!Element.prototype.getAttributeNames) {
  Element.prototype.getAttributeNames = function() {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}
// classList
if ('classList' in document.documentElement) {
  Object.defineProperty(Element.prototype, 'classList', {
    get: function() {
      var self = this,
        classes = self.className.split(" ")

      classes.add = function() {
        var before;
        for (var i in arguments) {
          before = true;
          for (var j = 0; j < classes.length; j++)
            if (classes[j] == arguments[i]) {
              before = false
              break
            }
          if (before)
            self.className += (self.className ? " " : "") + arguments[i]
        }
      }
      classes.remove = function() {
        self.className = ""
        for (var i in arguments)
          for (var j = 0; j < classes.length; j++)
            if (classes[j] != arguments[i])
              self.className += (self.className ? " " : "") + classes[j]
      }
      classes.toggle = function(x) {
        var before;
        if (x) {
          self.className = ""
          before = false;
          for (var j = 0; j < classes.length; j++)
            if (classes[j] != x) {
              self.className += (self.className ? " " : "") + classes[j]
              before = false
            } else before = true
          if (!before)
            self.className += (self.className ? " " : "") + x
        } else throw new TypeError("Failed to execute 'toggle': 1 argument required")
        return !before;
      }
      return classes;
    },
    enumerable: false
  })

  if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
      get: function() {
        var self = this;

        function update(fn) {
          return function(value) {
            var classes = self.className.split(/\s+/g),
              index = classes.indexOf(value);

            fn(classes, index, value);
            self.className = classes.join(" ");
          }
        }

        return {
          add: update(function(classes, index, value) {
            if (!~index) classes.push(value);
          }),

          remove: update(function(classes, index) {
            if (~index) classes.splice(index, 1);
          }),

          toggle: update(function(classes, index, value) {
            if (~index)
              classes.splice(index, 1);
            else
              classes.push(value);
          }),

          contains: function(value) {
            return !!~self.className.split(/\s+/g).indexOf(value);
          },

          item: function(i) {
            return self.className.split(/\s+/g)[i] || null;
          }
        };
      }
    });
  }
  // (function(window) {
  //   function classReg(className) {
  //     return new RegExp("(^|\\\\s+)" + className + "(\\\\s+|$)");
  //   }

  //   var hasClass, addClass, removeClass;
  //   if ('classList' in document.documentElement) {
  //     hasClass = function(elem, c) {
  //       return elem.classList.contains(c);
  //     };
  //     addClass = function(elem, c) {
  //       elem.classList.add(c);
  //     };
  //     removeClass = function(elem, c) {
  //       elem.classList.remove(c);
  //     };
  //   } else {
  //     hasClass = function(elem, c) {
  //       return classReg(c).test(elem.className);
  //     };
  //     addClass = function(elem, c) {
  //       if (!hasClass(elem, c)) {
  //         elem.className = elem.className + ' ' + c;
  //       }
  //     };
  //     removeClass = function(elem, c) {
  //       elem.className = elem.className.replace(classReg(c), ' ');
  //     };
  //   }

  //   function toggleClass(elem, c) {
  //     var fn = hasClass(elem, c) ? removeClass : addClass;
  //     fn(elem, c);
  //   }

  //   // 提供函式名稱縮寫
  //   var classie = {
  //     // full names
  //     hasClass: hasClass,
  //     addClass: addClass,
  //     removeClass: removeClass,
  //     toggleClass: toggleClass,
  //     // short names
  //     has: hasClass,
  //     add: addClass,
  //     remove: removeClass,
  //     toggle: toggleClass
  //   };
  //   if (typeof define === 'function' && define.amd) {
  //     // AMD
  //     define(classie);
  //   } else if (typeof exports === 'object') {
  //     // CommonJS
  //     module.exports = classie;
  //   } else {
  //     // browser global
  //     window.classie = classie;
  //   }

  // })(window);
}