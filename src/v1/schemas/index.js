const joi = require('@hapi/joi')

module.exports = {
    postUserPayload: joi.object({
        userName: joi.string().required(),
    }),
    putUserParams: joi.object({
        profileid: joi.string().required()
    }),
}
