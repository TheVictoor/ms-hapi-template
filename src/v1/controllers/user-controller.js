'use strict'

module.exports = (core) => ({
  get: (request, res) => core.user.get({
    payload: {},
    onSuccess: ({ data, statusCode }) => res.response(data).code(statusCode),
    onError: ({ data, statusCode }) => res.response(data).code(statusCode)
  })
})
