module.exports = function initSlider (serviceLocator) {
  $('.js-slider').each(function () {
    slider($(this))
  })

  function slider ($el) {
    var $prevBtn = $el.find('.js-nav-left')
      , $nextBtn = $el.find('.js-nav-right')

    $prevBtn.click(alert.bind(null, 'Prev'))
    $nextBtn.click(alert.bind(null, 'Next'))
  }
}
