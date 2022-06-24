/**
 * Modal markup helper-wrapper.
 *
 * @author Barry
 * @version 1.0.0
 *
 */
;
(function($) {

  $.TuCore.components.modal = {

    _baseConfig: {
      size: 'modal-lg',
      center: true,
      animation: 'fade',
      drag: true,
      scrollable: false,
      // fade slideRight slideLeft slideBottom zoomIn zoomOut flip
      backdrop: 'true',
      // static true false
      title: 'Modal Title',
      closeButton: true,
      header: true,
      bodyClass: '',
      footerClass: '',
      body: '',
      button: false,
      buttons: [{
        text: '取消',
        class: 'btn',
        handler: function(modal) {
          modal.modal('hide');
          modal.on('hidden.bs.modal', function() {});
        }
      }, {
        text: '確定',
        class: 'btn btn--primary',
        submit: false,
        handler: function(modal) {}
      }, ],
      autoFocus: true,
      created: function() {},
      appended: function() {},
      onFormSubmit: function() {},
      modal: {},
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Masked input wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function(selector, config, i) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initModal();

      return this.pageCollection;

    },


    initModal: function() {
      var self = this,
        config = self.config,
        collection = self.pageCollection;

      this.collection.each(function(i, el) {
        var $this = $(el);
        var i = Date.now().toString();

        var id = 'tu-modal-' + i,
          trigger_class = 'trigger--' + id,
          trigger_button = $('.' + trigger_class);

        $this.addClass(trigger_class);

        var body = config.body;

        if (typeof body == 'object') {
          if (body.length) {
            let part = body;
            body = body.removeAttr('id').clone().removeClass('modal-part');
            part.remove();
          } else {
            body = '<div class="text-danger">Modal part element not found!</div>';
          }
        }

        var modal_template =
          '<div class="modal ' + (config.animation ? config.animation : config['animation']) + (config.center ? ' modal-centered' : '') +
          '"    tabindex="-1" role="dialog" ' +
          '     id="' + id + '" ' +
          '     data-backdrop=' + (config.backdrop ? config.backdrop : config['backdrop']) + '>  ' +
          '     <div class="modal-dialog ' + config.size + ' ' + ((config.scrollable == true ? 'modal-dialog-scrollable' : '')) + '" role="document">  ' +
          '       <div class="modal-content">  ' +
          ((config.header == true) ?
            '         <div class="modal-header ' + ((config.drag == true ? 'modal-header-drag' : '')) + '">  ' +
            '           <h5 class="modal-title">' + config.title + '</h5>  ' +
            ((config.closeButton == true) ?
              '             <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">  ' +
              '             </button>' : '') +
            '           </div>  ' : '') +
          '           <div class="modal-body">  ' +
          '           </div>  ' +
          (config.button == true ?
            '           <div class="modal-footer">  ' +
            '         </div>  ' : '') +
          '      </div>  ' +
          '   </div>  ' +
          '</div>  ';

        var modal_template = $(modal_template);

        if (config.drag == true) {
          var element = modal_template[0];
          dragElement(element);

          function dragElement(elmnt) {
            var pos1 = 0,
              pos2 = 0,
              pos3 = 0,
              pos4 = 0;
            if (elmnt.querySelector('.modal-header')) {
              elmnt.querySelector('.modal-header').onmousedown = dragMouseDown;
            } else {
              elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
              e = e || window.event;
              e.preventDefault();
              pos3 = e.clientX;
              pos4 = e.clientY;
              document.onmouseup = closeDragElement;
              document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
              e = e || window.event;
              e.preventDefault();
              pos1 = pos3 - e.clientX;
              pos2 = pos4 - e.clientY;
              pos3 = e.clientX;
              pos4 = e.clientY;
              elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
              elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
              // stop moving when mouse button is released:
              document.onmouseup = null;
              document.onmousemove = null;
            }
          }
        }
        // Start creating buttons from 'buttons' option
        var this_button;
        config.buttons.forEach(function(item) {

          var id = "id" in item ? item.id : '';

          this_button = '<button type="' +
            ("submit" in item && item.submit == true ? 'submit' : 'button') + '" ' +
            ' class="' + item.class + '" id="' + id + '">' + item.text + '' +
            '</button>';
          this_button = $(this_button).off('click').on("click", function() {
            item.handler.call(this, modal_template);
          });
          $(modal_template).find('.modal-footer').append(this_button);
        });

        $(modal_template).find('.modal-body').append(body);

        if (config.bodyClass)
          $(modal_template).find('.modal-body').addClass(config.bodyClass);

        if (config.footerClass)
          $(modal_template).find('.modal-footer').addClass(config.footerClass);

        config.created.call(this, modal_template, config);

        // modal form and submit form button
        var modal_form = $(modal_template).find('.modal-body form'),
          form_submit_btn = modal_template.find('button[type=submit]');

        // append generated modal to the body
        $('body').append(modal_template);

        // execute 'appended' callback
        config.appended.call(this, $('#' + id), modal_form, config);

        // if modal contains form elements
        if (modal_form.length) {
          // if `autoFocus` option is true
          if (config.autoFocus) {
            // when modal is shown
            $(modal_template).on('shown.bs.modal', function() {
              // if type of `autoFocus` option is `boolean`
              if (typeof config.autoFocus == 'boolean')
                modal_form.find('input:eq(0)').focus(); // the first input element will be focused
              // if type of `autoFocus` option is `string` and `autoFocus` option is an HTML element
              else if (typeof config.autoFocus == 'string' && modal_form.find(config.autoFocus).length)
                modal_form.find(config.autoFocus).focus(); // find elements and focus on that
            });
          }

          // form object
          let form_object = {
            startProgress: function() {
              modal_template.addClass('modal-progress');
            },
            stopProgress: function() {
              modal_template.removeClass('modal-progress');
            }
          };

          // if form is not contains button element
          if (!modal_form.find('button').length) $(modal_form).append('<button class="d-none" id="' + id + '-submit"></button>');

          // add click event
          form_submit_btn.click(function() {
            modal_form.submit();
          });

          // add submit event
          modal_form.submit(function(e) {
            // start form progress
            form_object.startProgress();

            // execute `onFormSubmit` callback
            config.onFormSubmit.call(this, modal_template, e, form_object);
          });
        }

        $(document).on("click", '.' + trigger_class, function() {
          $('#' + id).modal(config.modal);
          return false;
        });
        i++;

        return this.collection;
      });

    }

  }
})(jQuery);