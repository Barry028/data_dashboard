/**
 * Line chart wrapper.
 *
 * @author BarrY
 * @version 1.0
 * @Update 20220118
 * @requires chartist-js
 */
;
(function($) {
  'use strict';

  $.TuCore.charts.donutChart = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Line chart wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function(selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCharts();

      return this.pageCollection;
    },

    initCharts: function() {

      var $self = this,
        collection = $self.pageCollection;


      this.collection.each(function(i, el) {

        var optFillColors = JSON.parse(el.getAttribute('data-fill-colors'));

        $(el).attr('id', 'donutCharts' + i);

        $('<style id="donutChartsStyle' + i + '"></style>').insertAfter($(el));

        var donutChartStyles = '',
          optSeries = JSON.parse(el.getAttribute('data-series')),
          optLabels = JSON.parse(el.getAttribute('data-labels')),
          optBorderWidth = $(el).data('border-width'),
          optStartAngle = $(el).data('start-angle'),
          optShowLabels = $(el).data('show-labels') ? $(el).data('show-labels') : false,
          optLabelCurrency = $(el).data('label-currency'),

          // Tooltips
          optIsShowTooltips = Boolean($(el).data('is-show-tooltips')),
          optTooltipBadgeMarkup = $(el).data('tooltip-badge-markup'),
          optIsReverseData = Boolean($(el).data('is-tooltip-reverse-data')),
          optTooltipCustomClass = $(el).data('tooltip-custom-class'),
          optTooltipCurrency = $(el).data('tooltip-currency'),
          optSliceMargin = $(el).data('slice-margin') ? $(el).data('slice-margin') : 0,

          data = {
            series: optSeries ? optSeries : false,
            labels: optLabels ? optLabels : false
          },

          options = {
            donut: true,
            donutSolid: true,
            showLabel: optShowLabels,
            chartPadding: 0,
            labelOffset: 20,
            labelDirection: 'implode', // implode explode
            donutWidth: optBorderWidth + optSliceMargin,
            startAngle: optStartAngle + optSliceMargin,
            labelInterpolationFnc: function(value) {
              return value + ' ' + optLabelCurrency;
            },
            plugins: []
          };

        if (optIsShowTooltips) {
          options.plugins[0] = Chartist.plugins.tooltip({
            currency: optTooltipCurrency,
            tooltipFnc: function(meta, value) {

              var total = $.TuCore.helpers.Math.sum(data.series);
              var value = Math.round((value / total) * 100) + '%';

              if (meta !== "undefined" && value !== "undefined") {
                if (optIsReverseData) {
                  if (this.currency) {
                    if (optTooltipBadgeMarkup) {
                      if (optIsTooltipCurrencyReverse) {
                        return optTooltipBadgeMarkup + '<span class="chartist-tooltip-value">' + (value + this.currency) + '</span>' +
                          '<span class="chartist-tooltip-meta">' + meta + '</span>';
                      } else {
                        return optTooltipBadgeMarkup + '<span class="chartist-tooltip-value">' + (this.currency + value) + '</span>' +
                          '<span class="chartist-tooltip-meta">' + meta + '</span>';
                      }
                    } else {
                      if (optIsTooltipCurrencyReverse) {
                        return '<span class="chartist-tooltip-value">' + (value + this.currency) + '</span>' +
                          '<span class="chartist-tooltip-meta">' + meta + '</span>';
                      } else {
                        return '<span class="chartist-tooltip-value">' + (this.currency + value) + '</span>' +
                          '<span class="chartist-tooltip-meta">' + meta + '</span>';
                      }
                    }
                  } else {
                    if (optTooltipBadgeMarkup) {
                      return optTooltipBadgeMarkup + '<span class="chartist-tooltip-value">' + value + '</span>' +
                        '<span class="chartist-tooltip-meta">' + meta + '</span>';
                    } else {
                      return '<span class="chartist-tooltip-value">' + value + '</span>' +
                        '<span class="chartist-tooltip-meta">' + meta + '</span>';
                    }
                  }
                } else {
                  if (this.currency) {
                    if (optTooltipBadgeMarkup) {
                      if (optIsTooltipCurrencyReverse) {
                        return optTooltipBadgeMarkup + '<span class="chartist-tooltip-meta">' + meta + '</span>' +
                          '<span class="chartist-tooltip-value">' + (value + this.currency) + '</span>';
                      } else {
                        return optTooltipBadgeMarkup + '<span class="chartist-tooltip-meta">' + meta + '</span>' +
                          '<span class="chartist-tooltip-value">' + (this.currency + value) + '</span>';
                      }
                    } else {
                      if (optIsTooltipCurrencyReverse) {
                        return '<span class="chartist-tooltip-meta">' + meta + '</span>' +
                          '<span class="chartist-tooltip-value">' + (value + this.currency) + '</span>';
                      } else {
                        return '<span class="chartist-tooltip-meta">' + meta + '</span>' +
                          '<span class="chartist-tooltip-value">' + (this.currency + value) + '</span>';
                      }
                    }
                  } else {
                    if (optTooltipBadgeMarkup) {
                      return optTooltipBadgeMarkup + '<span class="chartist-tooltip-meta">' + meta + '</span>' +
                        '<span class="chartist-tooltip-value">' + value + '</span>';
                    } else {
                      return '<span class="chartist-tooltip-meta">' + meta + '</span>' +
                        '<span class="chartist-tooltip-value">' + value + '</span>';
                    }
                  }
                }
              } else if (optSeries) {
                if (this.currency) {
                  if (optTooltipBadgeMarkup) {
                    if (optIsTooltipCurrencyReverse) {
                      return optTooltipBadgeMarkup + '<span class="chartist-tooltip-value">' + (value + this.currency) + '</span>';
                    } else {
                      return optTooltipBadgeMarkup + '<span class="chartist-tooltip-value">' + (this.currency + value) + '</span>';
                    }
                  } else {
                    return '<span class="chartist-tooltip-value">' + (this.currency + value) + '</span>';
                  }
                } else {
                  if (optTooltipBadgeMarkup) {
                    return optTooltipBadgeMarkup + '<span class="chartist-tooltip-value">' + value + '</span>';
                  } else {
                    return '<span class="chartist-tooltip-value">' + value + '</span>';
                  }
                }
              } else {
                return false;
              }
            },
            class: optTooltipCustomClass
          });
        };

        var chart = new Chartist.Pie(el, data, options),
          isOnceCreatedTrue = 1;

        chart.on('created', function() {

          if (isOnceCreatedTrue == 1) {

            $(el).find('.ct-series').each(function(i2) {
              donutChartStyles += '#donutCharts' + i + ' .ct-series:nth-child(' + (i2 + 1) + ') .ct-slice-donut-solid {fill: ' + optFillColors[i2] + '}';
            });

            donutChartStyles += '#donutCharts' + i + ' .ct-series .ct-slice-donut-solid {stroke: #ffffff; stroke-width: ' + optSliceMargin + '}';


            $('#donutChartsStyle' + i).text(donutChartStyles);
          }

          isOnceCreatedTrue++;
        });

        chart.update();

        //Actions
        collection = collection.add($(el));
      });
    }
  };
})(jQuery);