var Paged = require('paged')

module.exports = function initSlider (serviceLocator) {
  $('.js-slider').each(function () {
    slider($(this))
  })

  function slider ($el) {
    var $prevBtn = $el.find('.js-nav-left')
      , $nextBtn = $el.find('.js-nav-right')
      , $pages = $el.find('.slider-item')
      , $copyItems = $el.find('.js-copy')
      , paged = new Paged($el, $pages)
      , currentPage = 0

    $copyItems.hide()
    $copyItems.eq(currentPage).show()

    paged.init()

    $prevBtn.click(function () {
      if (--currentPage === -1) currentPage = $pages.length - 1
      $copyItems.hide()
      $copyItems.eq(currentPage).show()
      paged.goTo(currentPage)
    })

    $nextBtn.click(function () {
      if (++currentPage === $pages.length) currentPage = 0
      $copyItems.hide()
      $copyItems.eq(currentPage).show()
      paged.goTo(currentPage)
    })
  }
}
