/**
 * Side Nav.
 *
 * @author HTMLStream
 * @version 2.0
 * @requires jQuery
 *
 */
;
(function($) {
  'use strict';

  $.TuCore.components.sideNav = {
    _baseConfig: {
      touchDevicesMode: 'full',

      touchDevicesModeResolution: 991,

      closedClass: 'side-nav-closed',
      hiddenClass: 'side-nav-hidden',
      initializedClass: 'side-nav-initialized',
      minifiedClass: 'side-nav-minified',
      openedSubMenuClass: 'side-nav-opened',
      hasSubMenuClass: 'side-nav-has-menu',
      fullModeClass: 'side-nav-full-mode',
      miniModeClass: 'side-nav-mini-mode',
      transitionOnClass: 'side-nav-transition-on',
      topLevelMenuClass: 'side-nav-menu-top-level',
      secondLevelMenuClass: 'side-nav-menu-second-level',
      thirdLevelMenuClass: 'side-nav-menu-third-level',

      afterOpen: function() {},
      afterClose: function() {}
    },

    pageCollection: $(),

    init: function(selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initSidebar();

      return this.pageCollection;

    },

    initSidebar: function() {
      //Variables
      var $self = this,
        collection = $self.pageCollection,
        config = $self.config;

      //Actions
      this.collection.each(function(i, el) {
        //Variables
        var $this = $(el),
          mode = $this.data('mode'),
          target = $this.data('target'),
          targetWrapper = $this.data('target-wrapper'),

          defaults = {
            openedItem: ''
          },

          flags = {
            isSubMenuCollapsed: false,
            isSidebarClosed: !!$(targetWrapper).hasClass('side-nav-closed'),
            isSidebarHidden: true,
            isSidebarMinified: !!$(targetWrapper).hasClass('side-nav-minified'),
            isMenuHeadingsHide: !!$(targetWrapper).hasClass('side-nav-minified'),
            isTouchDevicesMode: false,
            isMiniMode: false,
            isFullMode: false,
            isTransitionOn: false
          },

          selectors = {
            mainContainer: targetWrapper,
            sidebar: target,
            menuHeadings: $(target).find('.sidebar-heading'),
            topLevelMenuItems: $(target).find('.side-nav-menu-top-level > .side-nav-menu-item'),
            menuInvoker: $(target).find('.side-nav-menu-link')
          };

        $self.pushOpenedItem($this, defaults, selectors);

        if (mode) {
          config.touchDevicesMode = mode;
        }

        switch (config.touchDevicesMode) {
          case 'mini':
            $self.miniMode(flags, selectors);
            break;

          default:
            $self.fullMode(flags, selectors);
            break;
        }


        $self.clickFunc($this, defaults, flags, selectors);


        $self.mouseEnterFunc(defaults, flags, selectors);

        $self.mouseLeaveFunc(defaults, flags, selectors);


        $self.resizeFunc(defaults, flags, selectors);

        //Actions
        collection = collection.add($this);
      });
    },
    
    pushOpenedItem: function(el, defaults, selectors) {
      var $self = this,
        config = $self.config,
        _defaults = defaults,
        _selectors = selectors;

      el.each(function() {
        var $this = $(this);
        _selectors.sidebar = $this.data('target');

        $(_selectors.sidebar).find('[data-target]').each(function() {
          if ($(this).parent(_selectors.topLevelMenuItems).hasClass(config.openedSubMenuClass)) {
            _defaults.openedItem = $(this).data('target');
          }
        });
      });
    },

    clickFunc: function(el, defaults, flags, selectors) {
      var $self = this,
        config = $self.config,
        _flags = flags,
        _defaults = defaults,
        _selectors = selectors;

    },


    mouseEnterFunc: function(defaults, flags, selectors) {
      var $self = this,
        _defaults = defaults,
        _flags = flags,
        _selectors = selectors;

      $(_selectors.sidebar).stop().on('mouseenter', function() {
        if ((_flags.isSidebarClosed === true && _flags.isSidebarMinified === true) || (_flags.isMiniMode === true && _flags.isSidebarClosed === true && _flags.isTouchDevicesMode === true)) {
          $self.openTitles(false, _flags, _selectors);
          $self.openSidebar(_flags, _selectors);

          if (_defaults.openedItem !== '') {
            $(_selectors.sidebar).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
              $self.openSubMenu(false, _defaults, _flags, _selectors);
            });
          }
        }
      });
    },

    mouseLeaveFunc: function(defaults, flags, selectors) {
      var $self = this,
        _defaults = defaults,
        _flags = flags,
        _selectors = selectors;

      $(_selectors.sidebar).stop().on('mouseleave', function() {
        if ((_flags.isSidebarClosed === false && _flags.isSidebarMinified === true) || (_flags.isMiniMode === true && _flags.isSidebarClosed === false && _flags.isTouchDevicesMode === true)) {
          if (_defaults.openedItem !== '') {
            $self.closeTitles(false, _flags, _selectors);
            $self.closeSubMenu(function() {
              $self.closeSidebar(_flags, _selectors);
            }, _defaults, _flags, _selectors);
          } else {
            $self.closeTitles(function() {
              $self.closeSidebar(_flags, _selectors);
            }, _flags, _selectors);
          }
        }
      });
    },


    resizeFunc: function(defaults, flags, selectors) {
      var $self = this,
        config = $self.config,
        _defaults = defaults,
        _flags = flags,
        _selectors = selectors;


      $(window).trigger('resize');
    }
  }
})(jQuery);