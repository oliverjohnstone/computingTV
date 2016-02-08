require('es5-shim/es5-shim')
require('es5-shim/es5-sham')

window.$ = window.jQuery = global.jQuery = global.$ = require('../../assets/js/jquery-1.11.3')

window.Backbone = require('backbone')
require('bootstrap')

require('./bootstrap')(require('./service-locator')())
