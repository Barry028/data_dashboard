/**
 * Range datepicker wrapper.
 *
 * @author BarrY
 * @version 1.0.1
 * @requires flatpickr v4.6.9    
 */
;(function ($) {
  'use strict';

  $.TUdRatepicker = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      mode: "range",
      allowInput: true,
      altInputClass: '',
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Range datepicker wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initRangeDatepicker();

      return this.pageCollection;

    },

    initRangeDatepicker: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          optWrapper = $this.data('rp-wrapper'),
          optIsInline = Boolean($this.data('rp-is-inline')),
          optType = $this.data('rp-type'),
          optDateFormat = $this.data('rp-date-format'),
          optDefaultDate = JSON.parse(el.getAttribute('data-rp-default-date')),
          altDateFormat = $this.data('rp-alt-date-format');

        $this.flatpickr({
          inline: optIsInline, // boolean
          mode: optType ? optType : 'single', // 'single', 'multiple', 'range'
          dateFormat: optDateFormat ? optDateFormat : 'T/m/d',
          appendTo: $(optWrapper)[0],
          allowInput: true,
          altInputClass: '',
          altInput: true,
          altFormat: altDateFormat ? altDateFormat : 'T/m/d',
          defaultDate: optDefaultDate,
          locale: {
            rangeSeparator: ' - '
          }
        });

        // $this.css({
        //   width: $this.val().length * 7.5
        // });

        collection = collection.add($this);
      });
    }
  };
})(jQuery);