/* global document, window */

(function() {
  'use strict';

  var scrollToNext = function(el, list) {
    if (el.hasClass('disabled')) {
      return;
    }
    el.parent().children('.indicator:first').removeClass('disabled');
    var currentEl = el.parent().find('li:visible');
    var nextEl = $(currentEl).next();
    if (!nextEl.next().is('li')) {
      el.addClass('disabled');
    }
    nextEl.show().animate(800);
    currentEl.hide();
  };

  var scrollToPrevious = function(el, list) {
    if (el.hasClass('disabled')) {
      return;
    }
    el.parent().children('.indicator:last').removeClass('disabled');
    var currentEl = el.parent().find('li:visible');
    var prevEl = $(currentEl).prev();
    if (!prevEl.prev().is('li')) {
      el.addClass('disabled');
    }
    prevEl.show().animate(800);
    currentEl.hide();
  };

  var addIndicatorEvent = function(indicators) {
    // Run the JS when indicators show up
    if (indicators.eq(0).is(':visible')) {
      indicators.each(function(i) {
        if (i % 2 === 1) {
          $(this).parent().find('li:first').nextAll().css('display', 'none');
          $(this).click(function() {
            scrollToNext($(this));
          });
        } else {
          $(this).click(function() {
            scrollToPrevious($(this));
          });
        }
      });
    }
  };

  $(document).ready(function() {
    var indicators = $('.contain .indicator');

    addIndicatorEvent(indicators);

    $(window).resize(function() {
      if ($(window).width() > 420) {
        indicators.each(function(i) {
          if (i % 2 === 1) {
            $(this).parent().find('li').show();
          }
        });
      }
      addIndicatorEvent(indicators);
    });

    $('#viewNDs').click(function() {
      $(this).blur();
      $('html, body').animate({
        scrollTop: $('#nanodegree-cards').offset().top
      }, 0, {axis: 'y'});
    });
  });
})();
