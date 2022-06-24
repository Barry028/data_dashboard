/**
 * JquerY Datepicker Wrapper.
 *
 * @author BarrY
 * @version 1.1.2
 * @Update 20220115
 * 
 */
;
(function($) {
  'use strict';

  $.TUDatepicker = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      dateFormat: 'yy/mm/dd',
      dayNamesMin: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
      showAnim: 'blind',
      formatYear: null,
      showOn: 'both',
      buttonText: '<i class="tu-calendar" aria-hidden="true"></i>',
      changeYear: true,
      changeMonth: true,
      altFormat: 'yy/mm/dd',
      prevText: '<i class="tu-chevron-left" aria-hidden="true"></i>',
      nextText: '<i class="tu-chevron-right" aria-hidden="true"></i>',
      disabled: true,
    },

    _chBaseConfig: {
      dateFormat: 'yy/mm/dd',
      closeText: '關閉',
      prevText: '上個月',
      nextText: '下個月',
      currentText: '今天',
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      monthNamesShort: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月',
        '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'
      ],
      dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
      weekHeader: '周',
      showAnim: 'blind',
      formatYear: null,
      showOn: 'both',
      yearRange: "c-50:c+50",
      buttonText: '<i class="tu-calendar" aria-hidden="true"></i>',
      changeYear: true,
      changeMonth: true,
      constrainInput: true,
      altFormat: 'yy/mm/dd',
      prevText: '<i class="tu-arrow-left" aria-hidden="true"></i>',
      nextText: '<i class="tu-arrow-right" aria-hidden="true"></i>',
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Datepicker wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */
    originalSetting: {
      _generateMonthYearHeader: $.datepicker._generateMonthYearHeader,
      _formatDate: $.datepicker._formatDate
    },

    chineseSetting: {

      _phoenixGenerateMonthYearHeader: $.datepicker._generateMonthYearHeader,

      _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
        secondary, monthNames, monthNamesShort) {
        var result = $($.datepicker._phoenixGenerateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
          secondary, monthNames, monthNamesShort));
        result.children("select.ui-datepicker-year").children().each(function() {
          $(this).text('民國 ' + ($(this).text() - 1911) + ' 年');
        });
        if (inst.yearshtml) {
          var origyearshtml = inst.yearshtml;
          setTimeout(function() {
            if (origyearshtml === inst.yearshtml) {
              inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
              inst.dpDiv.find('select.ui-datepicker-year').children().each(function() {
                $(this).text('民國 ' + ($(this).text() - 1911) + ' 年');
              });
            }
            origyearshtml = inst.yearshtml = null;
          }, 0);
        }
        return $("<div class='ui-datepicker-title'></div>").append(result.clone()).html();
      },

      _formatDate: function(inst, day, month, year) {
        if (!day) {
          inst.currentDay = inst.selectedDay;
          inst.currentMonth = inst.selectedMonth;
          inst.currentYear = inst.selectedYear;
        }
        var date = (day ? (typeof day == 'object' ? day :
            this._daylightSavingAdjust(new Date(year, month, day))) :
          this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));

        var ndate = (date.getFullYear() - 1911) + "/" +
          (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "/" +
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        return ndate

        function dateValidationCheck(str) {
          var re = new RegExp("^([0-9]{3})[./]{1}([0-9]{1,2})[./]{1}([0-9]{1,2})$");
          var strDataValue;
          var infoValidation = true;
          if ((strDataValue = re.exec(str)) != null) {
            var i;
            i = parseFloat(strDataValue[1]);
            if (i <= 0 || i > 999) { /*年*/
              infoValidation = false;
            }
            i = parseFloat(strDataValue[2]);
            if (i <= 0 || i > 12) { /*月*/
              infoValidation = false;
            }
            i = parseFloat(strDataValue[3]);
            if (i <= 0 || i > 31) { /*日*/
              infoValidation = false;
            }
          } else {
            infoValidation = false;
          }
          if (!infoValidation) {
            alert("請輸入 YYYY/MM/DD 日期格式");
          }
          return infoValidation;
        }
        dateValidationCheck(ndate);
      },

      parseDate: function(format, value, settings) {
        var twV = new String(value);
        var Y, M, D;
        if (twV.length == 9) {
          // 100/12/15
          Y = twV.substring(0, 3) - 0 + 1911;
          M = twV.substring(4, 6) - 0 - 1;
          D = twV.substring(7, 9) - 0;
          return (
            new Date(Y, M, D)
          );
        }
        return (new Date());
      },
    },

    init: function(type, selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      if (type == 'ch') {
        this.config = config && $.isPlainObject(config) ?
          $.extend({}, this._chBaseConfig, config) : this._chBaseConfig;
      }

      if (type == 'en') {
        this.config = config && $.isPlainObject(config) ?
          $.extend({}, this._baseConfig, config) : this._baseConfig;
      }

      this.config.itemSelector = selector;
      this.type = type;

      if (type == 'ch') {
        $.extend($.datepicker, this.chineseSetting);
        this.initDatepicker();
        return this.pageCollection;
      }

      if (type == 'en') {
        $.extend($.datepicker, this.originalSetting);
        this.initDatepicker();
        return this.pageCollection;
      };
    },

    initDatepicker: function() {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      this.collection.each(function(i, el) {
        var $this = $(el),
          to = $this.data('to'),
          type = $this.data('type'),
          minDate = $this.data('min'),
          maxDate = $this.data('max'),
          altId = $this.prev('input[type="hidden"]').attr('class');

        if (type == 'oneRange') {
          var datePicker = $this.datepicker({
            dateFormat: config['dateFormat'],
            defaultDate: '+1w',
            dayNamesMin: config['dayNamesMin'],
            numberOfMonths: 1,
            showOtherMonths: true,
            monthNamesShort: config['monthNamesShort'],
            showOn: config['showOn'],
            showAnim: config['showAnim'],
            yearRange: config['yearRange'],
            buttonText: config['buttonText'],
            changeYear: config['changeYear'],
            changeMonth: config['changeMonth'],
            minDate: minDate,
            maxDate: maxDate,
            prevText: config['prevText'],
            nextText: config['nextText'],
            altField: $this.prev('input'),
            altFormat: config['altFormat'],
            beforeShow: $self.datepickerCustomClass,
          }).on('change', function() {
            var activeDate = datePicker.datepicker("getDate");
            if (minDate == null) {
              minDate = activeDate;
            } else if (activeDate < minDate) {
              minDate = activeDate;
            }
            if (maxDate == null && activeDate > minDate) {
              maxDate = activeDate;
            } else if (activeDate > maxDate) {
              maxDate = activeDate;
            }
            var newDate = $this.val();
            return $self.validateDate(newDate, el);
          }).on('keyup', function() {
            if ($('#ui-datepicker-div').find('tbody:has(tr)').length == 0) {
              // var noData =
              //   '<div class="no-data"><?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
              //   '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="34px" height="34px" viewBox="0 0 128 128" xml:space="preserve">' +
              //   '<style type="text/css">' +
              //   '.circle-preloader-0{fill:#5E81F4;}' +
              //   '</style>' +
              //   '<g>' +
              //   '<path class="circle-preloader-0" d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"/>' +
              //   '<animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="800ms" repeatCount="indefinite"></animateTransform>' +
              //   '</g>' +
              //   '</svg>' +
              //   '</div>';
              //   
              
              if ($('.no-data').length != 0) {
                // return false;
              } else {
                $('#ui-datepicker-div').find('tbody').append(noData);
              }
            }
          })
        } else if (type == 'range') {
          var dateFrom = $this.datepicker({
            dateFormat: config['dateFormat'],
            defaultDate: '+1w',
            dayNamesMin: config['dayNamesMin'],
            numberOfMonths: 1,
            showOtherMonths: true,
            minDate: config['minDate'],
            maxDate: config['maxDate'],
            monthNamesShort: config['monthNamesShort'],
            yearRange: config['yearRange'],
            showOn: config['showOn'],
            showAnim: config['showAnim'],
            yearRange: config['yearRange'],
            buttonText: config['buttonText'],
            changeYear: config['changeYear'],
            changeMonth: config['changeMonth'],
            prevText: config['prevText'],
            nextText: config['nextText'],
            altField: $this.prev('input'),
            altFormat: config['altFormat'],
            beforeShow: $self.datepickerCustomClass,
            onClose: config['onClose'],
          }).on('change', function() {
            dateTo.datepicker('option', 'minDate', $self.getDate(this));
            var newDate = $this.val();
            return $self.validateDate(newDate, el);
          }).on('keyup', function() {
            if ($('#ui-datepicker-div').find('tbody:has(tr)').length == 0) {
              var noData =
                '<div class="no-data"><?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
                '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="34px" height="34px" viewBox="0 0 128 128" xml:space="preserve">' +
                '<style type="text/css">' +
                '.circle-preloader-0{fill:#5E81F4;}' +
                '</style>' +
                '<g>' +
                '<path class="circle-preloader-0" d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"/>' +
                '<animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="800ms" repeatCount="indefinite"></animateTransform>' +
                '</g>' +
                '</svg>' +
                '</div>';
              if ($('.no-data').length != 0) {
                // return false;
              } else {
                $('#ui-datepicker-div').find('tbody').append(noData);
              }
            }
          })
          var dateTo = $('#' + to).datepicker({
            dateFormat: config['dateFormat'],
            defaultDate: '+1w',
            dayNamesMin: config['dayNamesMin'],
            numberOfMonths: 1,
            showOtherMonths: true,
            monthNamesShort: config['monthNamesShort'],
            showOn: config['showOn'],
            showAnim: config['showAnim'],
            maxDate: config['maxDate'],
            yearRange: config['yearRange'],
            buttonText: config['buttonText'],
            changeYear: config['changeYear'],
            changeMonth: config['changeMonth'],
            prevText: config['prevText'],
            nextText: config['nextText'],
            altField: $this.prev('input'),
            altFormat: config['altFormat'],
            beforeShow: $self.datepickerCustomClass
          }).on('keyup', function() {
            if ($('#ui-datepicker-div').find('tbody:has(tr)').length == 0) {
              var noData =
                '<div class="no-data"><?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
                '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="34px" height="34px" viewBox="0 0 128 128" xml:space="preserve">' +
                '<style type="text/css">' +
                '.circle-preloader-0{fill:#5E81F4;}' +
                '</style>' +
                '<g>' +
                '<path class="circle-preloader-0" d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"/>' +
                '<animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="800ms" repeatCount="indefinite"></animateTransform>' +
                '</g>' +
                '</svg>' +
                '</div>';
              if ($('.no-data').length != 0) {
                // return false;
              } else {
                $('#ui-datepicker-div').find('tbody').append(noData);
              }
            }
          })
        } else {
          $this.datepicker({
            dateFormat: config['dateFormat'],
            dayNamesMin: config['dayNamesMin'],
            showOtherMonths: true,
            monthNamesShort: config['monthNamesShort'],
            minDate: minDate,
            maxDate: maxDate,
            prevText: config['prevText'],
            nextText: config['nextText'],
            showOn: config['showOn'],
            showAnim: config['showAnim'],
            yearRange: config['yearRange'],
            buttonText: config['buttonText'],
            changeYear: config['changeYear'],
            changeMonth: config['changeMonth'],
            constrainInput: config['constrainInput'],
            beforeShow: $self.datepickerCustomClass,
            altField: $this.prev('input'),
            altFormat: config['altFormat'],
            onClose: config['onClose'],
            disabled: config['disabled'],
          }).on('change', function() {
            var newDate = $this.val();
            return $self.validateDate(newDate, el);
          }).on('keyup', function() {
            if ($('#ui-datepicker-div').find('tbody:has(tr)').length == 0) {
              var noData = "<div class='no-data'>" +
                           "  <div class='ani-typewriter'>請輸入年月日</div>" +
                           "</div>";
              if ($('.no-data').length != 0) {
                // return false;
              } else {
                $('#ui-datepicker-div').find('tbody').append(noData);
              }
            }
          });
        }
      });
    },

    datepickerCustomClass: function(el, attr) {

      var arrayOfClasses, customClass, i;
      arrayOfClasses = attr.input[0].className.split(' ');
      for (i = 0; arrayOfClasses.length > i; i++) {
        if (arrayOfClasses[i].substring(0, 6) == 't-date') {
          customClass = arrayOfClasses[i];
        }
      }
      $('#ui-datepicker-div').removeClass('t-datepicker-v2 t-datepicker-v1');
      $('#ui-datepicker-div').addClass(customClass);
    },

    getDate: function(element) {
      var $self = this,
        date,
        config = $self.config;

      try {
        date = $.datepicker.parseDate(config['dateFormat'], element.value);
      } catch (error) {
        date = null;
      }
      console.log(element.value)
      return date;
    },

    validateDate: function(str, el) {
      var $self = this,
        date,
        config = $self.config;

      var $this = $(el),
        altId = $this.prev('input[type="hidden"]').attr('id');

      var re = new RegExp("^([0-9]{3})[./]{1}([0-9]{1,2})[./]{1}([0-9]{1,2})$");
      var strDataValue;
      var infoValidation = true;
      if ((strDataValue = re.exec(str)) != null) {
        var i;
        i = parseFloat(strDataValue[1]);
        if (i <= 0 || i > 999) { /*年*/
          infoValidation = false;
        }
        i = parseFloat(strDataValue[2]);
        if (i <= 0 || i > 12) { /*月*/
          infoValidation = false;
        }
        i = parseFloat(strDataValue[3]);
        if (i <= 0 || i > 31) { /*日*/
          infoValidation = false;
        }
      } else {
        infoValidation = false;
      }
      if (!infoValidation) {
        // alert("請輸入 YYY/MM/DD 日期格式");
        memberCenter.toast('請輸入正確的日期格式', 'error', '1000')
        $this.val('');
        $this.prev('input').val('');
      }
      return infoValidation;
    }
  };
})
(jQuery);