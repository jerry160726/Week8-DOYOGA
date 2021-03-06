(function () {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(max-width: 992px)');

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function () {

    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {

      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function () {

    mySwiper = new Swiper('.swiper-container', {

      slidesPerView: 1.5,
      spaceBetween: 30,

    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */


// 聽聽他們怎麼說
var swiper = new Swiper(".comSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  grid: {
    rows: 3,
    fill: 'column',
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
    },
  },
});