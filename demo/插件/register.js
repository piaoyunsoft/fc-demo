/*
  Register 注册弹出层
  fc
  2016年1月21日
*/

'use strict';

(function (factory){
  if(typeof define === 'function' && define.amd){
    // AMD(Register as an anonymous module)
    define(['jquery'], factory);
  }else if(typeof exports === 'object'){
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  }else{
    //Browser globals
    factory(jQuery);
  }
}(function($){
  var Register = function(element, options){
    this.options = options;
    this.element$ = $(element);

    this.bindEvent();
  };

  Register.VERSION = '1.0.0';
  Register.DEFAULTS = {
    show: true
  };

  Register.prototype.show = function(){
    var event1 = $.Event('show.mg.register'); // 注册弹出层显示前发起事件通知

    this.element$.trigger(event1);

    $('html,body').addClass('full-page');

    this.element$.removeClass('hide');

    var event2 = $.Event('shown.mg.register'); // 注册弹出层显示后发起事件通知

    this.element$.trigger(event2);
  }

  Register.prototype.hide = function(){
    var event1 = $.Event('hide.mg.register'); // 注册弹出层关闭前发起事件通知

    this.element$.trigger(event1);

    $('html,body').removeClass('full-page');
    this.element$.addClass('hide');

    var event2 = $.Event('hidden.mg.register'); // 注册弹出层关闭后发起事件通知

    this.element$.trigger(event2);
  }

  Register.prototype.bindEvent = function(){
    var self = this;

    // 点击遮罩层隐藏
    this.element$.delegate('.J_Mask', 'click', function(){
      self.hide();
      $('.inp').find('input').val('');
      read.removeClass('icon-select').addClass('icon-selected').val('selected');
    });

    // 同意协议
    var read = $('#J_Read');
    read.val('selected');
    read.off().on('click', function(){
      var current = $(this);
      if (current.hasClass('icon-select')) {
        current.removeClass('icon-select').addClass('icon-selected').val('selected');
      }else if(current.hasClass('icon-selected')){
        current.removeClass('icon-selected').addClass('icon-select').val('');
      }
    });
  }

  function Plugin(option){
    return this.each(function(){
      var this$ = $(this);
      var data = this$.data('mg.register');
      var options = $.extend({}, Register.DEFAULTS, this$.data(), typeof option == 'object' && option);
      if (!data) this$.data('mg.register', (data = new Register(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    });
  }

  $.fn.register = Plugin;
  $.fn.register.Constructor = Register;
}));
