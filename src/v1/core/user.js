
const userWrapper = ({
    config,
}) => {

    const get = ({
        payload,
        onSuccess,
        onError
    }) => {
        return onSuccess({
            data: { ok: true },
            statusCode: 200
        })
    }

    return {
        get
    }
}

module.exports = userWrapper
