/**
 * TuCore
 *
 * @author BarrY
 * @version 1.2.2
 * @Update 2022/03/22
 */
;
(function($) {

  'use strict';

  $.TuCore = {

    init: function() {

      var sideMenuBar = $('#SideBar');

      $(document).ready(function() {

        if ($('#slider').length) {
          var init = function() {

            var slider = new rSlider({
              target: '#slider',
              values: [110.01, 110.02, 110.03, 110.04, 110.05, 110.06, 110.07, 110.08, 110.09, 110.10, 110.11, 110.12, 111.01, 111.02, 111.03, 111.04, 111.05, ],
              range: true,
              set: [111.01, 111.05],
              onChange: function(vals) {
                console.log(vals);
              }
            });
          };
          window.onload = init;
        }

        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();


        if ($('[data-toggle="action"]').length) {
          $.TuCore.charts.Toggle.init('[data-toggle="action"]');
        }

        // Set Background
        if ($('[data-bg-img-src]').length) {
          $.TuCore.helpers.bgImage($('[data-bg-img-src]'));
        };

        // chartist
        if ($('.js-area-chart').length)
          $.TuCore.charts.areaChart.init('.js-area-chart');

        if ($('.js-donut-chart').length)
          $.TuCore.charts.donutChart.init('.js-donut-chart');

        if ($('.js-bar-chart').length)
          $.TuCore.charts.barChart.init('.js-bar-chart');

        if ($('.js-pie-chart').length)
          $.TuCore.charts.pieChart.init('.js-pie-chart');

        // circles
        if ($('.js-pie').length)
          $.TuCore.charts.circles.init('.js-pie');

        if ($('.js-vr-progress-bar').length)
          $.TuCore.charts.progressideMenuBar.init('.js-vr-progress-bar');

        if ($('.js-counter').length) {
          $.TuCore.components.counter.init('.js-counter');
        };

        if ($('.js-go-to').length) {
          $.TuCore.components.GoToTop.init('.js-go-to')
        }
        // Side Bar Scroll
        if ($('.js-scrollbar').length) {
          $.TUScrollBar.init($('.js-scrollbar'));
        };

        if ($('.js-x-scrollbar').length) {
          $.TUScrollBar.init($('.js-x-scrollbar'), {
            axis: "x",
            advanced: {
              autoExpandHorizontalScroll: true,
              updateOnBrowserResize: true
            }
          })
        };
        $.TuCore.sideMenu.init('#SideBar');
      });

      $(window).on('load', function() {

        $.TuCore.helpers.detectIE();
        $.TuCore.components.clock.init('#current_time');

        if ($('#lottie_load').length) {
          var animation = bodymovin.loadAnimation({
            container: document.getElementById('lottie_load'),
            renderer: 'canvas',
            loop: false,
            autoplay: true,
            // path: "https://assets10.lottiefiles.com/packages/lf20_aawlikdj.json"
            path: 'https://assets4.lottiefiles.com/packages/lf20_j7eupod8.json'
          });
          animation.onComplete = function() {
            $('#loader').fadeOut();
          }
        }
        
        if (window.localStorage.getItem("fontSizeClass") != '') {
          document.getElementsByTagName('html')[0].classList.add(fontSizeClass);
        }
      });
    },

    sideMenu: {
      init: function(selector) {

        this.collection = selector && $(selector).length ? $(selector) : $();
        if (!$(selector).length) return;

        var sideMenuBar = this.collection,
          wd = $(window),
          wdW = wd.width();
        var sideMenuBar_width = sideMenuBar.width();
        var mcnt = $('#MainContent');

        this.sideFixed();

        window.addEventListener('scroll', this.sideFixed);

        if (wdW <= 992) {
          sideMenuBar.addClass('min_size');
          $('.side-main-list-item[data-sub="true"]').removeClass('open');
        } else {
          sideMenuBar.removeClass('min_size');
          $('.side-main-list-item.active').addClass('open')
        }

        $.TuCore.helpers.resize(wd, function() {
          var nwW = wd.innerWidth();
          if (nwW <= 992) {
            sideMenuBar.addClass('min_size');
            $('.side-main-list-item[data-sub="true"]').removeClass('open');
          } else {
            sideMenuBar.removeClass('min_size');
            $('.side-main-list-item.active').addClass('open')
          }
          // $.TuCore.helpers.doResize();
        });

        (function sideMenuClick() {

          // Sub Menu Click
          $('.side-main-list-item[data-sub="true"]').on("click", function(event) {
            var _this = $(this);
            if (sideMenuBar.hasClass('min_size') || sideMenuBar.hasClass('click_min_size') || sideMenuBar.hasClass('side-bar-menu-with-icon')) {
              if (_this.hasClass('open')) {
                _this.removeClass("open");
                event.stopPropagation();
              } else {
                _this.siblings().removeClass("open");
                _this.addClass("open");
              }
            } else {
              if (_this.hasClass('open')) {
                _this.removeClass("open");
                event.stopPropagation();
              } else {
                _this.addClass("open");
              }
            }
          });

          $('.side-sub-menu-item[data-sub="true"]').on("click", function(event) {
            var _this = $(this);
            _this.toggleClass("open");
            event.stopPropagation();
          });
          // Menu Burger Click
          $('#BurGerMenu').on('click', function() {
            if (sideMenuBar.hasClass('click_min_size') || sideMenuBar.hasClass('min_size')) {
              sideMenuBar.removeClass('click_min_size min_size');
            } else {
              sideMenuBar.addClass('click_min_size min_size');
            }
          });
        })();
      },

      sideMenuMaps: function() {
        var sideBar = $('#SideBar');
        //  尋找麵包屑以及取功能的文字
        var breadcrumb = $('#pageBreadcrumb').find('li');
        var li_1 = breadcrumb.eq(1).text().trim();
        var li_2 = breadcrumb.eq(2).text().trim();
        //  Side 選單
        var l1_item = sideBar.find('[data-nav1^="' + li_1 + '"]');
        var sub_menu = l1_item.parent('li.backend-sidebar-item').next('ul.sub-menu');
        if (breadcrumb.length > 1) {
          l1_item.parent('li.backend-sidebar-item').addClass('active open');
          sub_menu.find('[data-nav2^="' + li_2 + '"]').parent().addClass('active');
        } else {
          $('ul.backend-sidebar-menu > li:first').addClass('active open');
        }
      },

      sideFixed: function() {
        var sideBar = $('#SideBar');
        var HeaderHeight = $('#Header').height();
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= HeaderHeight) {
          sideBar.addClass('side-bar-menu-fixed');
        } else {
          sideBar.removeClass('side-bar-menu-fixed');
        }
        $.TuCore.helpers.doResize();
      }
    },

    helpers: {

      resize: function(element, callback) {
        var delay = 300;
        var controlTime = 0;

        $(window, element).resize(function() {
          var nowTime = new Date().getTime();
          if (controlTime) {
            setTimeout(function() {
              if (nowTime - controlTime > delay) {
                if (typeof callback == 'function') {
                  controlTime = callback();
                }
              }
            }, delay);
          } else {
            setTimeout(function() {
              if (typeof callback == 'function') {
                controlTime = callback();
              }
            }, delay);
            controlTime++;
          }
        })
      },

      doResize: function() {
        setTimeout(function() {
          if (document.createEvent) {
            var event = document.createEvent("HTMLEvents");
            event.initEvent("resize", true, true);
            window.dispatchEvent(event);
          } else if (document.createEventObject) {
            window.fireEvent("onresize");
          }
        }, 500);
      },

      Math: {
        /*
         * Sum 
         * $.TuCore.helpers.sum(arr);
         */
        sum: function(arr) {
          var sum = 0;
          for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
          };
          return sum;
        },
        /*
         * countPercentage 
         * $.TuCore.helpers.countPercentage(arr);
         */
        countPercentage: function(countArray) {
          var num = eval(countArray.join('+'));
          var resultArray = [];
          for (var i = 0; i < countArray.length; i++) {
            var val = Math.floor((countArray[i] / num) * 100) + "%";
            resultArray.push(val);
          }
          return resultArray;
        },
      },
      // 背景替代圖片 RWD
      bgImage: function(collection) {
        if (!collection || !collection.length) return;
        return collection.each(function(i, el) {
          var $el = $(el),
            bgImageSrc = $el.data('bg-img-src');

          if (bgImageSrc) $el.css('background-image', 'url(' + bgImageSrc + ')');
        });
      },
      /*
       * 吐司彈跳訊息 
       * $.TuCore.helpers.toast(' 提示訊息 ', 'type' ,'1500');
       */
      toast: function(txt, type, duration) {
        var duration = isNaN(duration) ? 3000 : duration;
        var toast = document.createElement("div");
        toast.id = "toast";
        var toast_id = document.getElementById("toast");

        if (toast_id) toast_id.remove();

        var successIcon =
          '<path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z" opacity=".4"/>' +
          '<path d="M11 16a1 1 0 0 1-1-1l-3-2a1 1 0 0 1 1-2l3 3 5-5a1 1 0 0 1 1 1l-6 5a1 1 0 0 1 0 1Z"/>';
        var errorIcon =
          '<path d="M15 2H9a3 3 0 0 0-2 1L3 7a3 3 0 0 0-1 2v6a3 3 0 0 0 1 2l4 4a3 3 0 0 0 2 1h6a3 3 0 0 0 2-1l4-4a3 3 0 0 0 1-2V9a3 3 0 0 0-1-2l-4-4a3 3 0 0 0-2-1Z" opacity=".4"/>' +
          '<path d="m13 12 3-3a1 1 0 0 0-1-1l-3 3-3-3a1 1 0 0 0-1 1l3 3-3 3a1 1 0 0 0 0 1 1 1 0 0 0 1 0l3-3 3 3a1 1 0 0 0 1 0 1 1 0 0 0 0-1Z"/>';
        var infoIcon =
          '<path d="M2 13V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5h-1a1 1 0 0 0-1 0l-2 2a1 1 0 0 1-2 0l-2-2H7a5 5 0 0 1-5-5Z" opacity=".4"/>' +
          '<path d="M15 11a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm-4 0a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm-4 0a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Z"/>';
        var warnIcon =
          '<path d="M11 2a2 2 0 0 1 2 0l2 2a2 2 0 0 0 1 0h2a2 2 0 0 1 2 2v2a2 2 0 0 0 0 1l2 2a2 2 0 0 1 0 2l-2 2a2 2 0 0 0 0 1v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-1 0l-2 2a2 2 0 0 1-2 0l-2-2a2 2 0 0 0-1 0H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-1l-2-2a2 2 0 0 1 0-2l2-2a2 2 0 0 0 0-1V6a2 2 0 0 1 2-2h2a2 2 0 0 0 1 0Z" opacity=".4"/>' +
          '<path d="M11 16a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm0-3V8a1 1 0 0 1 1-1 1 1 0 0 1 1 1v5a1 1 0 0 1-1 1 1 1 0 0 1-1-1Z"/>'
        var helpIcon =
          '<path d="M17 18h-4l-4 3a1 1 0 0 1-2 0v-3a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5Z" opacity=".4"/>' +
          '<path d="M11 14a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm0-3a2 2 0 0 1 1-2h1a1 1 0 0 0-1-1 1 1 0 0 0-1 1 1 1 0 0 1-1 0 2 2 0 0 1 2-3 2 2 0 0 1 2 3 2 2 0 0 1-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1-1-1Z"/>';
        var load =
          '<path d="M20 5a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 27a12 12 0 1 1 0-24 12 12 0 0 1 0 24z" opacity=".24"/>' +
          '<path d="m26 10 2-3-8-2v3l6 2z">' +
          '  <animateTransform attributeName="transform" attributeType="xml" dur="0.8s" from="0 20 20" repeatCount="indefinite" to="360 20 20" type="rotate"/>' +
          '</path>';
        var text = '<font>' + txt + '</font>';

        document.body.appendChild(toast);

        switch (type) {
          case 'success':
            toast.className = 'tu-toast float-toast toast--' + type + ' fadeIn';
            toast.innerHTML = '<svg viewBox="0 0 24 24"><g fill="currentColor">' + successIcon + '</g></svg>' + text;
            break;

          case 'error':
            toast.className = 'tu-toast float-toast toast--' + type + ' fadeIn';
            toast.innerHTML = '<svg viewBox="0 0 24 24"><g fill="currentColor">' + errorIcon + '</g></svg>' + text;
            break;

          case 'info':
            toast.className = 'tu-toast float-toast toast--' + type + ' fadeIn';
            toast.innerHTML = '<svg viewBox="0 0 24 24"><g fill="currentColor">' + infoIcon + '</g></svg>' + text;
            break;

          case 'warning':
            toast.className = 'tu-toast float-toast toast--' + type + ' fadeIn';
            toast.innerHTML = '<svg viewBox="0 0 24 24"><g fill="currentColor">' + warnIcon + '</g></svg>' + text;
            break;

          case 'help':
            toast.className = 'tu-toast float-toast toast--' + type + ' fadeIn';
            toast.innerHTML = '<svg viewBox="0 0 24 24"><g fill="currentColor">' + helpIcon + '</g></svg>' + text;
            break;

          case 'default':
            toast.className = 'tu-toast float-toast toast--' + type + ' fadeIn';
            toast.innerHTML = '<svg xml:space="preserve" viewBox="0 0 40 40"><g fill="currentColor">' + load + '</g></svg>' + text;
            break;
        };

        setTimeout(function() {
          toast.classList.remove("fadeIn");
          toast.classList.add("fadeOut", "t-invisible");
        }, duration);
      },

      // 網頁字體放大 -- 變更 Html FontSize(Rem)
      cFontSize: function(collection, size) {
        if (!collection || !collection.length) return;
        var html = document.getElementsByTagName('html');
        var elem = html[0];
        // var defaultFontSize = window.getComputedStyle(elem, null).getPropertyValue('font-size');
        var upClasses = ["js-font-scale-up-1st", "js-font-scale-up-2nd", "js-font-scale-up-3rd", "js-font-scale-up-4th"];
        var downClasses = ["js-font-scale-down-1st", "js-font-scale-down-2nd", "js-font-scale-down-3rd", "js-font-scale-down-4th"];

        var upClassesLen = upClasses.length - 1 - 2;
        var downClassesLen = upClasses.length - 1 - 2;

        var elemClasses = elem.classList;
        var elClassNames = elemClasses.toString();

        function checkContains(target, str, separator) {
          return separator ?
            (separator + target + separator).indexOf(separator + str + separator) > -1 : //需要判断分隔符
            target.indexOf(str) > -1; //不需判断分隔符
        }


        // var dddd = document.getElementById("fontBtns").onclick = setCookie;


        switch (size) {
          case 'up':
            for (var i = 0; i < upClassesLen; i++) {
              if (!checkContains(elClassNames, 'js-font-scale')) {
                elem.classList.add(upClasses[0]);
                $.TuCore.helpers.toast('字體放大成功！', 'success', 1500);

                document.getElementById('fontSizeClass').value = upClasses[0];

                return;
              } else if (elem.classList.contains(upClasses[i])) {
                elem.classList.remove(upClasses[i]);
                i++;
                elem.classList.add(upClasses[i]);
                $.TuCore.helpers.toast('字體放大成功！', 'success', 1500);

                document.getElementById('fontSizeClass').value = upClasses[i];

                return;
              } else if (elem.classList.contains(upClasses[i + 1])) {
                $.TuCore.helpers.toast('字體已經放到最大！', 'warning', 1500);

                document.getElementById('fontSizeClass').value = upClasses[i + 1];

                return;
              } else if (elem.classList.contains(downClasses[i])) {
                elem.classList.remove(downClasses[i]);
                $.TuCore.helpers.toast('已恢復預設大小！', 'success', 1500);

                document.getElementById('fontSizeClass').value = '';
                return;
              } else if (elem.classList.contains(downClasses[i + 1])) {
                i++;
                elem.classList.remove(downClasses[i]);
                i--;
                elem.classList.add(downClasses[i]);
                $.TuCore.helpers.toast('字體放大成功！', 'success', 1500);

                document.getElementById('fontSizeClass').value = downClasses[i];
                return;
              }
            }
            break;
          case 'down':
            for (var i = 0; i < downClassesLen; i++) {
              if (!checkContains(elClassNames, 'js-font-scale')) {
                elem.classList.add(downClasses[0]);
                $.TuCore.helpers.toast('字體縮小成功！', 'success', 1500);

                document.getElementById('fontSizeClass').value = downClasses[0];

                return;
              } else if (elem.classList.contains(downClasses[i])) {
                elem.classList.remove(downClasses[i]);
                i++;
                elem.classList.add(downClasses[i]);
                $.TuCore.helpers.toast('字體縮小成功！', 'success', 1500);

                document.getElementById('fontSizeClass').value = downClasses[i];

                return;
              } else if (elem.classList.contains(downClasses[i + 1])) {
                $.TuCore.helpers.toast('字體已經縮到最小！', 'warning', 1500);

                document.getElementById('fontSizeClass').value = downClasses[i + 1];

                return;
              } else if (elem.classList.contains(upClasses[i])) {
                elem.classList.remove(upClasses[i]);
                $.TuCore.helpers.toast('已恢復預設大小！', 'success', 1500);

                document.getElementById('fontSizeClass').value = '';

                return;
              } else if (elem.classList.contains(upClasses[i + 1])) {
                i++;
                elem.classList.remove(upClasses[i]);
                i--;
                elem.classList.add(upClasses[i]);
                $.TuCore.helpers.toast('字體放大成功！', 'success', 1500);

                document.getElementById('fontSizeClass').value = upClasses[i];

                return;
              }
              return;
            }
            break;
          case 'default':
            if (!checkContains(elClassNames, 'js-font-scale')) {
              $.TuCore.helpers.toast('目前已是預設大小！', 'warning', 1500);
              document.getElementById('fontSizeClass').value = '';
              return;
            } else {
              elem.classList.remove(
                upClasses[0], upClasses[1], upClasses[2], upClasses[3],
                downClasses[0], downClasses[1], downClasses[2], downClasses[3]
              );
              $.TuCore.helpers.toast('已恢復預設大小！', 'success', 1500);
              document.getElementById('fontSizeClass').value = '';
            }
            break;
        };



        return this.collection;
      },

      // 判斷 瀏覽器 是否為 IE 以及其版本 
      detectIE: function() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0) {
          // IE 10
          var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
          document.querySelector('body').className += 'ie ie' + ieV + ' ';

          if (ieV < 9) {
            // IE 9 以下建議使用者升級瀏覽器
            confirm("您的 IE 版本過低，點選【確定】升級，如不升級您將不能正常瀏覽網頁！")
            location.href = "https://support.microsoft.com/zh-tw/help/17621/internet-explorer-downloads";
          }

        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
          // IE 11
          var rv = ua.indexOf('rv:');
          var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
          document.querySelector('body').className += 'ie ie' + ieV + ' ';
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
          // IE 12
          var edgeV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
          document.querySelector('body').className += 'edge edge' + edgeV + ' ';
        }
        return false;
      },
    },

    components: {
      // 取得日期以及時間
      clock: {
        init: function(selector) {
          this.collection = selector && $(selector).length ? $(selector) : $();
          if (!$(selector).length) return;

          this.updateClock();

          return this.pageCollection;
        },
        updateClock: function() {
          var $self = this,
            collection = $self.pageCollection;
          this.collection.each(function(i, el) {
            var $this = $(el),
              _this = $this[i];

            setInterval(function() {
              Number.prototype.pad = function(n) {
                for (var r = this.toString(); r.length < n; r = 0 + r);
                return r;
              };
              var now = new Date();
              var milli = now.getMilliseconds(),
                sec = now.getSeconds(),
                min = now.getMinutes(),
                hou = now.getHours(),
                mo = now.getMonth(),
                date = now.getDate(),
                day = now.getDay(),
                yr = now.getFullYear();
              var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
              var months_ch = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

              var tags = ["mon", "mon_ch", "date", "day", "year", "hour", "min", "sec"],
                corr = [months[mo], months_ch[mo], date, days[day], yr, hou.pad(2), min.pad(2), sec.pad(2)];

              for (var i = 0; i < tags.length; i++) {

                document.getElementById(tags[i]).textContent = corr[i];
              }
            }, 1000);

            setTimeout(function() {
              _this.className += "current-time fadeIn animated";
            }, 1000);
            return this.collection;
          });
        },
      },
      // 圖片預先載入
      lazyLoad: function(collection) {
        if (!collection || !collection.length) return;
        var images = document.querySelectorAll('.js-img-lazy');
        var loadImage = function(img) {
          var src = img.getAttribute('data-src');
          var bgImg = /(^|\s)js-img-lazy-bg(\s|$)/;
          if (bgImg.test(img.className)) {
            img.style.backgroundImage = "url('" + src + "')";
          } else {
            img.src = src;
          }
          img.classList.remove('js-img-lazy');
        };
        var options = {
          root: null,
          rootMargin: '0px',
          threshold: [0]
        };
        var callback = function(entries, observer) {
          entries.forEach(function(entry) {
            if (!entry.isIntersecting)
              return;
            loadImage(entry.target);
            observer.unobserve(entry.target);
          });
        };
        var observer = new IntersectionObserver(callback, options);
        images.forEach(function(el) {
          observer.observe(el);
        });
      },

      scrollBar: function(collection) {
        if (!collection || !collection.length) return;

        return collection.each(function(i, el) {
          var _this = $(this);
          var _document = $(document);
          var $el = $(el);
          var sroll = $el.data('scroll');

          if (sroll) {
            /// 滾動兼容性 ///
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            var isUc = u.indexOf('UCBrowser') > -1;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

            if (isAndroid && isUc) {
              _this.on('touchstart', function() {
                _document.on('touchmove', function(e) {
                  e.preventDefault();
                });
                _document.on('touchend', function() {
                  _document.unbind();
                });
              });
            }
            

            _this.find('li').on('click', function() {
              var _thisW = _this.width();
              var thisWidth = $(this).width();
              var moveLeft = this.offsetLeft;
                // console.log(thisWidth);
                // console.log(moveLeft);
              if (_thisW < moveLeft + thisWidth) {
                 _this[i].scrollTo({
                  left: moveLeft,
                  behavior: "smooth"
                });
              } else {
                 _this[i].scrollTo({
                  left: 0,
                  behavior: "smooth"
                });
              }
            });

            var listener = (function() {
              /// 鼠標拖曳行為 ///
              var slider = _this[i];
              var isDown = false;
              var startX = '';
              var scrollLeft = '';

              slider.addEventListener('mousedown', function(e) {
                // 按下就將 flag 設為 true
                isDown = true;
                slider.classList.add('nav-grab');
                // 設立起始點
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
              });

              slider.addEventListener('mousemove', function(e) {
                // 滑鼠有被按下才會繼續執行
                if (!isDown)
                  return;
                // 阻止預設拖曳會選取的行為
                e.preventDefault();
                // 計算
                var x = e.pageX - slider.offsetLeft;
                var walk = (x - startX) * 3;
                slider.scrollLeft = scrollLeft - walk;
              });

              slider.addEventListener('mouseleave', function() {
                isDown = false;
                slider.classList.remove('nav-grab');
              });

              slider.addEventListener('mouseup', function() {
                isDown = false;
                slider.classList.remove('nav-grab');
              });
              slider.addEventListener("wheel", function(e) {
                slider.scrollLeft += e.deltaX;
                slider.scrollLeft += e.deltaY;
                e.preventDefault();
              });
            })();
          }
        });

      },
    },

    charts: {},

    settings: {},
  };

  $(function() {


    // window.paceOptions = {
    //   ajax: false,
    //   document: false,
    //   eventLag: false,
    //   elements: {
    //     selectors: ['.dashboard-card', '#lottie_load'],
    //   },
    //   restartOnRequestAfter: false,
    //   restartOnPushState: false
    // };

    $.TuCore.init();

    $.TuCore.components.lazyLoad($('.js-img-lazy'));
    $.TuCore.components.scrollBar($('[data-scroll="md-x"]'));
  });

})(jQuery);


if (window.localStorage) {
  var fontSizeClass = window.localStorage.getItem("fontSizeClass");
  if (!fontSizeClass) {
    document.getElementById("fontSizeClass").value = fontSizeClass;
  }
}

function saveToStorage() {
  // localStorage 
  var fontSizeClass = document.getElementById("fontSizeClass").value;
  window.localStorage.setItem("fontSizeClass", fontSizeClass);
}


// function showName(){
//     let nameDom = document.querySelector('.showName')
//     nameDom.innerHTML = localStorage.getItem('userName')
// } 
var fontBtnList = document.getElementById('fontBtns').addEventListener('click', {
  handleEvent: function(event) {
    var target = event.target;
    event.stopImmediatePropagation();
    event.preventDefault();

    switch (target.id) {
      case "scale_down":
        $.TuCore.helpers.cFontSize('#scale_down', 'down');
        // Cookies.set("dark", "on", {expires: 365 });
        saveToStorage();
        break;
      case "scale_default":
        $.TuCore.helpers.cFontSize('#scale_default', 'default');
        saveToStorage();
        break;
      case "scale_up":
        $.TuCore.helpers.cFontSize('#scale_up', 'up');
        saveToStorage();
        break;
    }
  }
}, false);



window.addEventListener("load", function() {
  var eventsHandler = {
    haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
    init: function(options) {
      var instance = options.instance,
        initialScale = 1,
        pannedX = 0,
        pannedY = 0

      this.hammer = Hammer(options.svgElement, {
        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
      })
      // 多點觸控時兩手指距離越來越近
      this.hammer.get('pinch').set({
        enable: true
      })
      this.hammer.on('doubletap', function(ev) {
        instance.zoomIn()
      })
      // 拖動開始 / 過程
      this.hammer.on('panstart panmove', function(ev) {
        if (ev.type === 'panstart') {
          pannedX = 0
          pannedY = 0
        }
        instance.panBy({
          x: ev.deltaX - pannedX,
          y: ev.deltaY - pannedY
        })
        pannedX = ev.deltaX
        pannedY = ev.deltaY
      })
      // 多點觸控開始 / 過程
      this.hammer.on('pinchstart pinchmove', function(ev) {
        if (ev.type === 'pinchstart') {
          initialScale = instance.getZoom()
          instance.zoomAtPoint(initialScale * ev.scale, {
            x: ev.center.x,
            y: ev.center.y
          })
        }

        instance.zoomAtPoint(initialScale * ev.scale, {
          x: ev.center.x,
          y: ev.center.y
        })
      })
      options.svgElement.addEventListener('touchmove', function(e) {
        e.preventDefault();
      });
    },
    destroy: function() {
      this.hammer.destroy()
    }
  };
  var svg_options = {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 0.6,
    maxZoom: 10,
    zoomScaleSensitivity: 0.1,
    center: true,
    customEventsHandler: eventsHandler
  }
  // if ($('#taiwan_cost').length)
  //   var costZoom = window.zoomTaiwan_cost = svgPanZoom('#taiwan_cost', svg_options);
  // if ($('#taiwan_course').length)
  //   var courseZoom = window.zoomTaiwan_course = svgPanZoom('#taiwan_course', svg_options);
  // if ($('#taiwan_course1').length)
  //   var courseZoom1 = window.zoomTaiwan_course = svgPanZoom('#taiwan_course1', svg_options);
  

  // $.TuCore.helpers.resize($(window), function() {
  //   if ($('#taiwan_course').length) {
  //     courseZoom.resize();
  //     courseZoom.fit();
  //     courseZoom.center();
  //   }
  //   if ($('#taiwan_course1').length) {
  //     courseZoom1.resize();
  //     courseZoom1.fit();
  //     courseZoom1.center();
  //   }

  //   if ($('#taiwan_cost').length) {
  //     costZoom.resize();
  //     costZoom.fit();
  //     costZoom.center();
  //   }
  // });
});


if ($('#taiwan_course').length) {

  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：146 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taipei').tooltip({
    title: '<h6>台北市</h6>' +
      '<p>課程數量：117 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Keelung').tooltip({
    title: '<h6>基隆市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Yilan').tooltip({
    title: '<h6>宜蘭縣</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Hualien').tooltip({
    title: '<h6>花蓮縣</h6>' +
      '<p>課程數量：77 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taoyuan').tooltip({
    title: '<h6>桃園市</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#HsinchuCounty').tooltip({
    title: '<h6>新竹縣</h6>' +
      '<p>課程數量：52 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#HsinchuCity').tooltip({
    title: '<h6>新竹市</h6>' +
      '<p>課程數量：40 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Miaoli').tooltip({
    title: '<h6>苗栗縣</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taichung').tooltip({
    title: '<h6>台中市</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Nantou').tooltip({
    title: '<h6>南投縣</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#Changhua').tooltip({
    title: '<h6>彰化縣</h6>' +
      '<p>課程數量：24 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Yunlin').tooltip({
    title: '<h6>雲林縣</h6>' +
      '<p>課程數量：66 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCounty').tooltip({
    title: '<h6>嘉義縣</h6>' +
      '<p>課程數量：39 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCity').tooltip({
    title: '<h6>嘉義市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Tainan').tooltip({
    title: '<h6>台南市</h6>' +
      '<p>課程數量：6 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Kaohsiung').tooltip({
    title: '<h6>高雄市</h6>' +
      '<p>課程數量：49 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Pingtung').tooltip({
    title: '<h6>屏東縣</h6>' +
      '<p>課程數量：72 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taitung').tooltip({
    title: '<h6>台東縣</h6>' +
      '<p>課程數量：28 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
}
if ($('#taiwan_course1').length) {

  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：146 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taipei').tooltip({
    title: '<h6>台北市</h6>' +
      '<p>課程數量：117 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#NewTaipei').tooltip({
    title: '<h6>新北市</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Keelung').tooltip({
    title: '<h6>基隆市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Yilan').tooltip({
    title: '<h6>宜蘭縣</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Hualien').tooltip({
    title: '<h6>花蓮縣</h6>' +
      '<p>課程數量：77 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#Taoyuan').tooltip({
    title: '<h6>桃園市</h6>' +
      '<p>課程數量：18 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
  $('#HsinchuCounty').tooltip({
    title: '<h6>新竹縣</h6>' +
      '<p>課程數量：52 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#HsinchuCity').tooltip({
    title: '<h6>新竹市</h6>' +
      '<p>課程數量：40 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Miaoli').tooltip({
    title: '<h6>苗栗縣</h6>' +
      '<p>課程數量：91 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taichung').tooltip({
    title: '<h6>台中市</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Nantou').tooltip({
    title: '<h6>南投縣</h6>' +
      '<p>課程數量：58 筆</p>',
    html: true,
    placement: 'top',
    container: 'body'
  });
  $('#Changhua').tooltip({
    title: '<h6>彰化縣</h6>' +
      '<p>課程數量：24 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Yunlin').tooltip({
    title: '<h6>雲林縣</h6>' +
      '<p>課程數量：66 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCounty').tooltip({
    title: '<h6>嘉義縣</h6>' +
      '<p>課程數量：39 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#ChiayiCity').tooltip({
    title: '<h6>嘉義市</h6>' +
      '<p>課程數量：96 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Tainan').tooltip({
    title: '<h6>台南市</h6>' +
      '<p>課程數量：6 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Kaohsiung').tooltip({
    title: '<h6>高雄市</h6>' +
      '<p>課程數量：49 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Pingtung').tooltip({
    title: '<h6>屏東縣</h6>' +
      '<p>課程數量：72 筆</p>',
    html: true,
    placement: 'left',
    container: 'body'
  });
  $('#Taitung').tooltip({
    title: '<h6>台東縣</h6>' +
      '<p>課程數量：28 筆</p>',
    html: true,
    placement: 'right',
    container: 'body'
  });
}



