/**
 * Dropdown Content component.
 *
 */
;
(function ($) {
  'use strict';

  $.TuCore.components.dropdown = {

    /**
     * Base configuration of the component.
     *
     * @private
     */
    _baseConfig: {
      dropdownEvent: 'click',
      dropdownType: 'simple',
      dropdownDuration: 300,
      dropdownEasing: 'linear',
      dropdownAnimationIn: 'fadeIn',
      dropdownAnimationOut: 'fadeOut',
      dropdownHideOnScroll: true,
      dropdownHideOnBlur: false,
      dropdownDelay: 350,
      dropdownOpenedElement: 'init',
      afterOpen: function (invoker) {
      },
      beforeClose: function (invoker) {
      },
      afterClose: function (invoker) {
      }
    },

    /**
     * Collection of all initialized items on the page.
     *
     * @private
     */
    _pageCollection: $(),

    /**
     * Initialization.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @return {jQuery}
     */
    init: function (collection, config) {

      var self;

      if (!collection || !collection.length) return;

      self = this;

      var fieldsQty;

      collection.each(function (i, el) {

        var $this = $(el), itemConfig;

        if ($this.data('TUDropdown')) return;

        itemConfig = config && $.isPlainObject(config) ?
          $.extend(true, {}, self._baseConfig, config, $this.data()) :
          $.extend(true, {}, self._baseConfig, $this.data());

        switch (itemConfig.dropdownType) {

          case 'css-animation' :

            $this.data('TUDropdown', new DropdownCSSAnimation($this, itemConfig));

            break;

          case 'jquery-slide' :

            $this.data('TUDropdown', new DropdownJSlide($this, itemConfig));

            break;

          default :

            $this.data('TUDropdown', new DropdownSimple($this, itemConfig));

        }

        self._pageCollection = self._pageCollection.add($this);
        self._bindEvents($this, itemConfig.dropdownEvent, itemConfig.dropdownDelay);
        var UnFold = $(el).data('TUDropdown');

        fieldsQty = $(UnFold.target).find('input, textarea').length;

        if ($(UnFold.target).find('[data-dropdown-target]').length) {

          $this.addClass('target-of-invoker-has-dropdowns');

        }

      });

      $(document).on('click touchstart', 'body', function (e) {

        if (e.target.id == self._baseConfig.dropdownOpenedElement) return;

        if ($(e.target).closest('#' + self._baseConfig.dropdownOpenedElement).length) return;

        self._pageCollection.each(function (i, el) {

          var windW = window.innerWidth,
            optIsMobileOnly = Boolean($(el).data('is-mobile-only'));

          if (!optIsMobileOnly) {

            $(el).data('TUDropdown').hide();

          } else if (optIsMobileOnly && windW < 769) {

            $(el).data('TUDropdown').hide();

          }

          $(el).data('TUDropdown').config.beforeClose.call(self.target, self.element);

        });

      });

      $(window).on('scroll.TUDropdown', function () {

        self._pageCollection.each(function (i, el) {

          var UnFold = $(el).data('TUDropdown');

          if (UnFold.getOption('dropdownHideOnScroll') && fieldsQty === 0) {

            UnFold.hide();

          } else if (UnFold.getOption('dropdownHideOnScroll') && !(/iPhone|iPad|iPod/i.test(navigator.userAgent))) {

            UnFold.hide();

          }

        });

      });

      $(window).on('resize.TUDropdown', function () {

        if (self._resizeTimeOutId) clearTimeout(self._resizeTimeOutId);

        self._resizeTimeOutId = setTimeout(function () {

          self._pageCollection.each(function (i, el) {

            var UnFold = $(el).data('TUDropdown');

            UnFold.smartPosition(UnFold.target);

          });

        }, 50);

      });

      $(document).on('keydown.TUDropdown', function (e) {

        if ($('body').hasClass('t-dropdown-opened')) {

          if (e.keyCode && e.keyCode === 38 || e.keyCode && e.keyCode === 40) {

            e.preventDefault();

          }

        }

      });

      return collection;

    },

    /**
     * Binds necessary events.
     *
     * @param {jQuery} $invoker
     * @param {String} eventType
     * @param {Number} delay
     * @private
     */
    _bindEvents: function ($invoker, eventType, delay) {

      var self = this,
        $dropdown = $($invoker.data('dropdown-target'));

      if (eventType === 'hover' && !_isTouch()) {

        $invoker.on('mouseenter.TUDropdown', function () {

          var $invoker = $(this),
            TUDropdown = $invoker.data('TUDropdown');

          if (!TUDropdown) return;

          if (TUDropdown.dropdownTimeOut) clearTimeout(TUDropdown.dropdownTimeOut);
          TUDropdown.show();
          $('body').addClass('t-dropdown-opened');

        })
          .on('mouseleave.TUDropdown', function () {

            var $invoker = $(this),
              TUDropdown = $invoker.data('TUDropdown');

            if (!TUDropdown) return;

            TUDropdown.dropdownTimeOut = setTimeout(function () {

              TUDropdown.hide();
              $('body').removeClass('t-dropdown-opened');

            }, delay);

          });

        if ($dropdown.length) {

          $dropdown.on('mouseenter.TUDropdown', function () {

            var TUDropdown = $invoker.data('TUDropdown');

            if (TUDropdown.dropdownTimeOut) clearTimeout(TUDropdown.dropdownTimeOut);
            TUDropdown.show();

          })
            .on('mouseleave.TUDropdown', function () {

              var TUDropdown = $invoker.data('TUDropdown');

              TUDropdown.dropdownTimeOut = setTimeout(function () {
                TUDropdown.hide();
              }, delay);

            });
        }

      } else {

        $invoker.on('click.TUDropdown', function (e) {

          var $curInvoker = $(this),
            $dropdownNotHasInnerDropdowns = $('[data-dropdown-target].active:not(.target-of-invoker-has-dropdowns)'),
            $dropdownHasInnerDropdown = $('[data-dropdown-target].active.target-of-invoker-has-dropdowns');

          self._baseConfig.dropdownOpenedElement = $curInvoker.data('TUDropdown').target[0].id;

          if (!$curInvoker.data('TUDropdown')) return;

          if (!$curInvoker.hasClass('target-of-invoker-has-dropdowns')) {

            if ($dropdownNotHasInnerDropdowns.length) {

              $dropdownNotHasInnerDropdowns.data('TUDropdown').toggle();

            }

          } else {

            if ($dropdownHasInnerDropdown.length) {

              $dropdownHasInnerDropdown.data('TUDropdown').toggle();

            }

          }

          $curInvoker.data('TUDropdown').toggle();

          e.stopPropagation();

          e.preventDefault();

        });

        if (Boolean($invoker.data('dropdown-target-is-menu'))) {

          var $target = $($invoker.data('dropdown-target')),
            $targetItems = $target.children();

          $targetItems.on('click', function() {

            $invoker.data('TUDropdown').toggle();

          });

        }

      }

    }
  };

  function _isTouch() {
    return 'ontouchstart' in window;
  }

  /**
   * Abstract Dropdown class.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @abstract
   */
  function AbstractDropdown(element, config) {

    if (!element.length) return false;

    this.element = element;
    this.config = config;

    this.target = $(this.element.data('dropdown-target'));

    this.allInvokers = $('[data-dropdown-target="' + this.element.data('dropdown-target') + '"]');

    this.toggle = function () {
      if (!this.target.length) return this;

      if (this.defaultState) {
        this.show();
      } else {
        this.hide();
      }

      return this;
    };

    this.smartPosition = function (target) {

      if (target.data('baseDirection')) {
        target.css(
          target.data('baseDirection').direction,
          target.data('baseDirection').value
        );
      }

      // target.removeClass('t-dropdown--reverse-y');

      var $w = $(window),
        styles = getComputedStyle(target.get(0)),
        direction = Math.abs(parseInt(styles.left, 10)) < 40 ? 'left' : 'right',
        targetOuterGeometry = target.offset();

      // horizontal axis
      if (direction === 'right') {

        if (!target.data('baseDirection')) target.data('baseDirection', {
          direction: 'right',
          value: parseInt(styles.right, 10)
        });

        if (targetOuterGeometry.left < 0) {

          target.css(
            'right',
            (parseInt(target.css('right'), 10) - (targetOuterGeometry.left - 10)) * -1
          );

        }

      } else {

        if (!target.data('baseDirection')) target.data('baseDirection', {
          direction: 'left',
          value: parseInt(styles.left, 10)
        });

        if (targetOuterGeometry.left + target.outerWidth() > $w.width()) {

          target.css(
            'left',
            (parseInt(target.css('left'), 10) - (targetOuterGeometry.left + target.outerWidth() + 10 - $w.width()))
          );

        }

      }

      // vertical axis
      if (targetOuterGeometry.top + target.outerHeight() - $w.scrollTop() > $w.height()) {

        // target.addClass('t-dropdown--reverse-y');

      }

    };

    this.getOption = function (option) {
      return this.config[option] ? this.config[option] : null;
    };

    return true;
  }


  /**
   * DropdownSimple constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function DropdownSimple(element, config) {
    if (!AbstractDropdown.call(this, element, config)) return;

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('t-dropdown--hidden');
      }
    });

    this.target.addClass('t-dropdown--simple');

    this.hide();
  }

  /**
   * Shows Dropdown.
   *
   * @public
   * @return {DropdownSimple}
   */
  DropdownSimple.prototype.show = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('t-dropdown--hidden');
    if (this.allInvokers.length) this.allInvokers.attr('aria-expanded', 'true');
    this.config.afterOpen.call(this.target, this.element);

    return this;
  };

  /**
   * Hides Dropdown.
   *
   * @public
   * @return {DropdownSimple}
   */
  DropdownSimple.prototype.hide = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').removeClass('active');

    this.target.addClass('t-dropdown--hidden');
    if (this.allInvokers.length) this.allInvokers.attr('aria-expanded', 'false');
    this.config.afterClose.call(this.target, this.element);

    return this;
  };

  /**
   * DropdownCSSAnimation constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function DropdownCSSAnimation(element, config) {
    if (!AbstractDropdown.call(this, element, config)) return;

    var self = this;

    this.target
      .addClass('t-dropdown--css-animation t-dropdown--hidden')
      .css('animation-duration', self.config.dropdownDuration + 'ms');

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('t-dropdown--hidden');
      }
    });

    if (this.target.length) {

      this.target.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {

        if (self.target.hasClass(self.config.dropdownAnimationOut)) {

          self.target.removeClass(self.config.dropdownAnimationOut)
            .addClass('t-dropdown--hidden');


          if (self.allInvokers.length) self.allInvokers.attr('aria-expanded', 'false');

          self.config.afterClose.call(self.target, self.element);
        }

        if (self.target.hasClass(self.config.dropdownAnimationIn)) {

          if (self.allInvokers.length) self.allInvokers.attr('aria-expanded', 'true');

          self.config.afterOpen.call(self.target, self.element);
        }

        e.preventDefault();
        e.stopPropagation();
      });

    }
  }

  /**
   * Shows Dropdown.
   *
   * @public
   * @return {DropdownCSSAnimation}
   */
  DropdownCSSAnimation.prototype.show = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('t-dropdown--hidden')
      .removeClass(this.config.dropdownAnimationOut)
      .addClass(this.config.dropdownAnimationIn);

  };

  /**
   * Hides Dropdown.
   *
   * @public
   * @return {DropdownCSSAnimation}
   */
  DropdownCSSAnimation.prototype.hide = function () {

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').removeClass('active');

    this.target.removeClass(this.config.dropdownAnimationIn)
      .addClass(this.config.dropdownAnimationOut);

  };

  /**
   * DropdownSlide constructor.
   *
   * @param {jQuery} element
   * @param {Object} config
   * @constructor
   */
  function DropdownJSlide(element, config) {
    if (!AbstractDropdown.call(this, element, config)) return;

    this.target.addClass('t-dropdown--jquery-slide t-dropdown--hidden').hide();

    Object.defineProperty(this, 'defaultState', {
      get: function () {
        return this.target.hasClass('t-dropdown--hidden');
      }
    });
  }

  /**
   * Shows Dropdown.
   *
   * @public
   * @return {DropdownJSlide}
   */
  DropdownJSlide.prototype.show = function () {

    var self = this;

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').addClass('active');

    this.smartPosition(this.target);

    this.target.removeClass('t-dropdown--hidden').stop().slideDown({
      duration: self.config.dropdownDuration,
      easing: self.config.dropdownEasing,
      complete: function () {
        self.config.afterOpen.call(self.target, self.element);
      }
    });

  };

  /**
   * Hides Dropdown.
   *
   * @public
   * @return {DropdownJSlide}
   */
  DropdownJSlide.prototype.hide = function () {

    var self = this;

    var activeEls = $(this)[0].config.dropdownTarget;

    $('[data-dropdown-target="' + activeEls + '"]').removeClass('active');

    this.target.slideUp({
      duration: self.config.dropdownDuration,
      easing: self.config.dropdownEasing,
      complete: function () {
        self.config.afterClose.call(self.target, self.element);
        self.target.addClass('t-dropdown--hidden');
      }
    });

  }

})(jQuery);
