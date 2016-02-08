module.exports = function initLoginModal () {
  $('.js-login-modal').each(function () {
    initModal($(this))
  })

  function initModal ($el) {
    $el.click(function (e) {
      e.preventDefault()
      $('.js-register-modal').modal()
    })
  }
}
