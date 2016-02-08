module.exports = function createServiceLocator() {
  var self = {}

  self.register = function register (name, service) {
    if (!name) {
      throw new Error('You must provide a valid name for this service.')
    }

    if (self[name] !== undefined) {
      throw new Error('Service \'' + name + '\' already registered')
    }

    if (!service) {
      throw new Error('You must provide a valid service for \'' + name + '\'')
    }

    self[name] = service
  }

  return self
}
