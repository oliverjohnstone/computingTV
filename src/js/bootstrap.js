module.exports = function bootstrap (serviceLocator) {
  var router = new window.Backbone.Router()

  var components =
    [ require('./components/login-modal/init')
    , require('./components/slider/init')
    ]

  serviceLocator.register('router', router)

  components.forEach(function (initComponent) {
    initComponent(serviceLocator)
  })

  Backbone.history.start()
}
