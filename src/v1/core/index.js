'use strict'

const healthCheckWrapper = require('./health-check')
const userWrapper = require('./user')

module.exports = (dependencies) => ({
  healthCheck: healthCheckWrapper(dependencies),
  user: userWrapper(dependencies)
})
