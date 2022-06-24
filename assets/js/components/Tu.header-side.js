/**
 * HeaderSide Component.
 *
 * @author BarrY
 * @version 1.0
 *  @requires HSScrollBar component (hs.scrollbar.js v1.0.0), jQuery(v2.0.0)
 */
;(function ($) {
  'use strict';

  $.TUHeaderSide = {

    /**
     * Base configuration.
     *
     * @private
     */
    _baseConfig: {
      headerBreakpoint: null,
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      },
      afterOpen: function(){},
      afterClose: function(){}
    },

    /**
     * Contains collection of all initialized items on the page.
     *
     * @private
     */
    _pageCollection: $(),

    /**
     * Initializtion of the component.
     *
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @returns {jQuery}
     */
    init: function(collection, config) {

      var _self = this;

      if(!collection || !collection.length) return $();

      this.$w = $(window);

      config = config && $.isPlainObject(config) ? config : {};

      this._bindGlobalEvents();

      return collection.each(function(i, el){

        var $this = $(el),
            itemConfig = $.extend(true, {}, _self._baseConfig, config, $this.data());

        if( $this.data('TUHeaderSide') ) return;

        $this.data('TUHeaderSide', _self._factoryMethod( $this, itemConfig ) );

        _self._pageCollection = _self._pageCollection.add($this);

      });

    },

    /**
     * Binds necessary global events.
     *
     * @private
     */
    _bindGlobalEvents: function() {

      var _self = this;

      this.$w.on('resize.TUHeaderSide', function(e){

        if(_self.resizeTimeoutId) clearTimeout(_self.resizeTimeoutId);

        _self.resizeTimeoutId = setTimeout(function(){

          _self._pageCollection.each(function(i, el){

            var TUHeaderSide = $(el).data('TUHeaderSide');

            if(!TUHeaderSide.config.headerBreakpoint) return;

            if(_self.$w.width() < TUHeaderSide.config.breakpointsMap[TUHeaderSide.config.headerBreakpoint] && TUHeaderSide.isInit()) {
              TUHeaderSide.destroy();
            }
            else if(_self.$w.width() >= TUHeaderSide.config.breakpointsMap[TUHeaderSide.config.headerBreakpoint] && !TUHeaderSide.isInit()) {
              TUHeaderSide.init();
            }

          });

        }, 10);

      });

      // $(document).on('keyup.TUHeaderSide', function(e){

      //   if(e.keyCode && e.keyCode === 27) {

      //     _self._pageCollection.each(function(i,el){

      //       var TUHeaderSide = $(el).data('TUHeaderSide'),
      //           hamburgers = TUHeaderSide.invoker;

      //       if(!TUHeaderSide) return;
      //       if(hamburgers.length && hamburgers.find('.is-active').length) hamburgers.find('.is-active').removeClass('is-active');
      //       TUHeaderSide.hide();

      //     });

      //   }

      // });

    },

    /**
     * Returns an object which would be describe the Header behavior.
     *
     * @private
     * @returns {TUHeaderSide*}
     */
    _factoryMethod: function(element, config) {

      // static
      if( !config.headerBehavior ) {
        return new (config['headerPosition'] == "left" ? TUHeaderSideStaticLeft : TUHeaderSideStaticRight)(element, config);
      }

      // overlay
      if( config.headerBehavior && config.headerBehavior == 'overlay' ) {
        return new (config['headerPosition'] == "left" ? TUHeaderSideOverlayLeft : TUHeaderSideOverlayRight)(element, config);
      }

      // push
      if( config.headerBehavior && config.headerBehavior == 'push' ) {
        return new (config['headerPosition'] == "left" ? TUHeaderSidePushLeft : TUHeaderSidePushRight)(element, config);
      }

    }

  }

  /**
   * Provides an abstract interface for the side header.
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   */
  function _TUHeaderSideAbstract(element, config) {

    /**
     * Contains link to the current element.
     *
     * @public
     */
    this.element = element;

    /**
     * Contains configuration object.
     *
     * @public
     */
    this.config = config;


    /**
     * Contains link to the window object.
     *
     * @public
     */
    this.$w = $(window);

    /**
     * Contains name of methods which should be implemented in derived class.
     * Each of these methods except 'isInit' must return link to the current object.
     *
     * @private
     */
    this._abstractMethods = ['init', 'destroy', 'show', 'hide', 'isInit'];


    /**
     * Runs initialization of the object.
     *
     * @private
     */
    this._build = function() {

      if( !this.config.headerBreakpoint ) return this.init();

      if( this.config.breakpointsMap[ this.config.headerBreakpoint ] <= this.$w.width() ) {
        return this.init();
      }
      else {
        return this.destroy();
      }
    };


    /**
     * Checks whether derived class implements necessary abstract events.
     *
     * @private
     */
    this._isCorrectDerrivedClass = function() {

      var _self = this;

      this._abstractMethods.forEach(function(method){

        if(!(method in _self) || !$.isFunction(_self[method])) {

          throw new Error("TUHeaderSide: Derived class must implement " + method + " method.");

        }

      });

      this._build();

    };

    setTimeout(this._isCorrectDerrivedClass.bind(this), 10);

  };

  /**
   * TUHeaderSide constructor function.
   *
   * @extends _TUHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function TUHeaderSideStaticLeft( element, config ) {

    _TUHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.tut-header__sections-container');
      }
    });

    this.body = $('body');

  };


  /**
   * Initialization of the TUHeaderSideStaticLeft instance.
   *
   * @public
   * @returns {TUHeaderSideStaticLeft}
   */
  TUHeaderSideStaticLeft.prototype.init = function() {

    this.body.addClass('tut-body--header-side-static-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    return this;

  };

  /**
   * Destroys the TUHeaderSideStaticLeft instance.
   *
   * @public
   * @returns {TUHeaderSideStaticLeft}
   */
  TUHeaderSideStaticLeft.prototype.destroy = function() {

    this.body.removeClass('tut-body--header-side-static-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   *
   * @public
   * @returns {Boolean}
   */
  TUHeaderSideStaticLeft.prototype.isInit = function() {

    return this.body.hasClass('tut-body--header-side-static-left');

  };

  /**
   * Shows the Header.
   *
   * @public
   * @returns {TUHeaderSideStaticLeft}
   */
  TUHeaderSideStaticLeft.prototype.show = function() {
    return this;
  };

  /**
   * Hides the Header.
   *
   * @public
   * @returns {TUHeaderSideStaticLeft}
   */
  TUHeaderSideStaticLeft.prototype.hide = function() {
    return this;
  };

  /**
   * TUHeaderSide constructor function.
   *
   * @extends _TUHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function TUHeaderSideStaticRight( element, config ) {

    _TUHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.tut-header__sections-container');
      }
    });

    this.body = $('body');

  };


  /**
   * Initialization of the TUHeaderSideStaticRight instance.
   *
   * @public
   * @returns {TUHeaderSideStaticRight}
   */
  TUHeaderSideStaticRight.prototype.init = function() {

    this.body.addClass('tut-body--header-side-static-right');

    if( $.TUScrollBar && this.scrollContainer.length ) {
      $.TUScrollBar.init( this.scrollContainer );
    }

    return this;

  };

  /**
   * Destroys the TUHeaderSideStaticRight instance.
   *
   * @public
   * @returns {TUHeaderSideStaticRight}
   */
  TUHeaderSideStaticRight.prototype.destroy = function() {

    this.body.removeClass('tut-body--header-side-static-right');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   *
   * @public
   * @returns {Boolean}
   */
  TUHeaderSideStaticRight.prototype.isInit = function() {

    return this.body.hasClass('tut-body--header-side-static-right');

  };

  /**
   * Shows the Header.
   *
   * @public
   * @returns {TUHeaderSideStaticRight}
   */
  TUHeaderSideStaticRight.prototype.show = function() {
    return this;
  };

  /**
   * Hides the Header.
   *
   * @public
   * @returns {TUHeaderSideStaticRight}
   */
  TUHeaderSideStaticRight.prototype.hide = function() {
    return this;
  };

  /**
   * TUHeaderSide constructor function.
   *
   * @extends _TUHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function TUHeaderSideOverlayLeft( element, config ) {

    _TUHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.tut-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('tut-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the TUHeaderSideOverlayLeft instance.
   *
   * @public
   * @returns {TUHeaderSideOverlayLeft}
   */
  TUHeaderSideOverlayLeft.prototype.init = function() {

    var _self = this;

    this.body.addClass('tut-body--header-side-overlay-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.TUHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'tut-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.TUHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);

    return this;

  };

  /**
   * Destroys the TUHeaderSideOverlayLeft instance.
   *
   * @public
   * @returns {TUHeaderSideOverlayLeft}
   */
  TUHeaderSideOverlayLeft.prototype.destroy = function() {

    this.body.removeClass('tut-body--header-side-overlay-left');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    if(this.invoker.length) {
      this.invoker.off('click.TUHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.TUHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   *
   * @public
   * @returns {Boolean}
   */
  TUHeaderSideOverlayLeft.prototype.isInit = function() {

    return this.body.hasClass('tut-body--header-side-overlay-left');

  };

  /**
   * Shows the Header.
   *
   * @public
   * @returns {TUHeaderSideOverlayLeft}
   */
  TUHeaderSideOverlayLeft.prototype.show = function() {

    this.body.addClass('tut-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   *
   * @public
   * @returns {TUHeaderSideOverlayLeft}
   */
  TUHeaderSideOverlayLeft.prototype.hide = function() {

    // var hamburgers = this.invoker.length ? this.invoker.find('.is-active') : $();
    // if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass('tut-body--header-side-opened');

    return this;
  };

  /**
   * TUHeaderSide constructor function.
   *
   * @extends _TUHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function TUHeaderSidePushLeft( element, config ) {

    _TUHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.tut-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('tut-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    Object.defineProperty(this, 'bodyClasses', {
      get: function() {
        return this.element.data('header-body-classes') ? this.element.data('header-body-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the TUHeaderSidePushLeft instance.
   *
   * @public
   * @returns {TUHeaderSidePushLeft}
   */
  TUHeaderSidePushLeft.prototype.init = function() {

    var _self = this;

    this.body.addClass('tut-body--header-side-push-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.TUHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'tut-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.TUHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);
    this.body.addClass(this.bodyClasses);

    return this;

  };

  /**
   * Destroys the TUHeaderSidePushLeft instance.
   *
   * @public
   * @returns {TUHeaderSidePushLeft}
   */
  TUHeaderSidePushLeft.prototype.destroy = function() {

    this.body.removeClass('tut-body--header-side-push-left');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    this.body.removeClass(this.bodyClasses);
    if(this.invoker.length){
      this.invoker.off('click.TUHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.TUHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   *
   * @public
   * @returns {Boolean}
   */
  TUHeaderSidePushLeft.prototype.isInit = function() {

    return this.body.hasClass('tut-body--header-side-push-left');

  };

  /**
   * Shows the Header.
   *
   * @public
   * @returns {TUHeaderSidePushLeft}
   */
  TUHeaderSidePushLeft.prototype.show = function() {

    this.body.addClass('tut-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   *
   * @public
   * @returns {TUHeaderSidePushLeft}
   */
  TUHeaderSidePushLeft.prototype.hide = function() {

    this.body.removeClass('tut-body--header-side-opened');

    return this;
  };

  /**
   * TUHeaderSide constructor function.
   *
   * @extends _TUHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function TUHeaderSideOverlayRight( element, config ) {

    _TUHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.tut-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('tut-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the TUHeaderSideOverlayRight instance.
   *
   * @public
   * @returns {TUHeaderSideOverlayRight}
   */
  TUHeaderSideOverlayRight.prototype.init = function() {

    var _self = this;

    this.body.addClass('tut-body--header-side-overlay-right');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.TUHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'tut-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.TUHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);

    return this;

  };

  /**
   * Destroys the TUHeaderSideOverlayRight instance.
   *
   * @public
   * @returns {TUHeaderSideOverlayRight}
   */
  TUHeaderSideOverlayRight.prototype.destroy = function() {

    this.body.removeClass('tut-body--header-side-overlay-right');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    if(this.invoker.length) {
      this.invoker.off('click.TUHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.TUHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   *
   * @public
   * @returns {Boolean}
   */
  TUHeaderSideOverlayRight.prototype.isInit = function() {

    return this.body.hasClass('tut-body--header-side-overlay-right');

  };

  /**
   * Shows the Header.
   *
   * @public
   * @returns {TUHeaderSideOverlayRight}
   */
  TUHeaderSideOverlayRight.prototype.show = function() {

    this.body.addClass('tut-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   *
   * @public
   * @returns {TUHeaderSideOverlayRight}
   */
  TUHeaderSideOverlayRight.prototype.hide = function() {

    // var hamburgers = this.invoker.length ? this.invoker.find('.is-active') : $();
    // if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass('tut-body--header-side-opened');

    return this;
  };

  /**
   * TUHeaderSide constructor function.
   *
   * @extends _TUHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function TUHeaderSidePushRight( element, config ) {

    _TUHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.tut-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('tut-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    Object.defineProperty(this, 'bodyClasses', {
      get: function() {
        return this.element.data('header-body-classes') ? this.element.data('header-body-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the TUHeaderSidePushRight instance.
   *
   * @public
   * @returns {TUHeaderSidePushRight}
   */
  TUHeaderSidePushRight.prototype.init = function() {

    var _self = this;

    this.body.addClass('tut-body--header-side-push-right');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.TUHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'tut-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.TUHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);
    this.body.addClass(this.bodyClasses);

    return this;

  };

  /**
   * Destroys the TUHeaderSidePushRight instance.
   *
   * @public
   * @returns {TUHeaderSidePushRight}
   */
  TUHeaderSidePushRight.prototype.destroy = function() {

    this.body.removeClass('tut-body--header-side-push-right');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    this.body.removeClass(this.bodyClasses);
    if(this.invoker.length){
      this.invoker.off('click.TUHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.TUHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   *
   * @public
   * @returns {Boolean}
   */
  TUHeaderSidePushRight.prototype.isInit = function() {

    return this.body.hasClass('tut-body--header-side-push-right');

  };

  /**
   * Shows the Header.
   *
   * @public
   * @returns {TUHeaderSidePushRight}
   */
  TUHeaderSidePushRight.prototype.show = function() {

    this.body.addClass('tut-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   *
   * @public
   * @returns {TUHeaderSidePushRight}
   */
  TUHeaderSidePushRight.prototype.hide = function() {

    // var hamburgers = this.invoker.length ? this.invoker.find('.is-active') : $();
    // if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass('tut-body--header-side-opened');

    return this;
  };

})(jQuery);