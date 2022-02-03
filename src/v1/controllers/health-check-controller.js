'use strict'

module.exports = (core) => ({
  get: (request, res) => core.healthCheck.get({
    payload: {
      ...request.params
    },
    header: request.header,
    onSuccess: ({ data, statusCode }) => res.response(data).code(statusCode),
    onError: ({ data, statusCode }) => res.response(data).code(statusCode)
  })
})
