'use strict'

const controllers = require('../controllers')
const schemas = require('../schemas')

const routes = [
  {
    path: '/',
    method: ['GET'],
    options: {
      tags: ['api'],
      notes: 'HealthCheck API',
      description: 'Check if the api is running',
      handler: controllers.user.get
    }
  },
  // other possible routes configuration
  {
    path: '/v1/users',
    method: ['POST'],
    options: {
      tags: ['api'],
      notes: 'some notes here',
      description: 'some nice description here',
      handler: controllers.healthCheck.get,
      validate: {
        failAction: async (request, h, err) => {
          throw err
        },
        payload: schemas.postUserPayload
        // alse could be
        // headers: schemas.user.postUser // headers fields
        // params: schemas.user.postUser // path params
        // query: schemas.user.postUser // querystring params
      }
    }
  },
  {
    path: '/v1/users/{profileid}',
    method: ['PUT'],
    options: {
      tags: ['api'],
      notes: 'some notes here',
      description: 'some nice description here',
      handler: controllers.healthCheck.get,
      validate: {
        failAction: async (request, h, err) => {
          throw err
        },
        payload: schemas.postUserPayload,
        params: schemas.putUserParams
      }
    }
  },
]

module.exports = routes
