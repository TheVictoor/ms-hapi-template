'use strict'

const coreWrapper = require('../core')
const healthCheckController = require('./health-check-controller')
const config = require('../../config')

const core = coreWrapper({
  config,
})

module.exports = {
  healthCheck: healthCheckController(core)
}
