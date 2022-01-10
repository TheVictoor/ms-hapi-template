'use strict'

const featureWrapper = ({
  config
}) => {
  const get = async ({
    payload,
    headers,
    onSuccess,
    onError
  }) => {
    try {
      return onSuccess({
        data: {
          message: `app ${config.app.name} running at ${config.app.port}`
        },
        statusCode: 200
      })
    } catch (error) {
      return onError({
        // could be used Boom library 
        statusCode: error.statusCode || 500,
        data: {
          code: 'internal-server-error',
          message: error.message
        }
      })
    }
  }

  return {
    get
  }
}

module.exports = featureWrapper
