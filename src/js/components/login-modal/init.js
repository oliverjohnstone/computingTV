module.exports = function initLoginModal () {
  $('.js-login-modal').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault()
      showModal()
    })
  })

  function showModal () {
    alert('Login Modal')
  }
}
