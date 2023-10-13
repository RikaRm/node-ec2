module.exports = (controller) => {
    return async (request, response) => {
        const httpRequest = {
            params: request.params || null
            , query: request.query || null
            , body: request.body || null
        }
        const httpResponse = await controller(httpRequest)
        return response.status(httpResponse.status).json(httpResponse.body)
    }
}