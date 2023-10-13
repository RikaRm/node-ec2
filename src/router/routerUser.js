const express = require('express')
const router = express.Router()
const adapter = require('./adapter')

const anon = (httpRequest) => {
    return {
        status: 200,
        body: { name: 'ricardo' }
    }
}

router.post('/register', adapter(anon))

module.exports = router