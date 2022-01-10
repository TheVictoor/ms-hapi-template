'use strict'

const coreWrapper = require('../core')
const healthCheckController = require('./health-check-controller')
const config = require('../../config')

// inject the dependencies inside the core
// this make the tests easier to write
// cause you can override depencies that make use of IO process
const core = coreWrapper({
  config,
})

module.exports = {
  healthCheck: healthCheckController(core)
}
