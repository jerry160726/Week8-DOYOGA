"use strict";

(function () {
  'use strict'; // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout

  var breakpoint = window.matchMedia('(max-width: 992px)'); // keep track of swiper instances to destroy later

  var mySwiper; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

      return; // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  }; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////


  var enableSwiper = function enableSwiper() {
    mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1.5,
      spaceBetween: 30
    });
  }; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // keep an eye on viewport size changes


  breakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
})();
/* IIFE end */
//# sourceMappingURL=all.js.map
