// require('dotenv').config()
const express = require('express')
const app = express()
// process.env.PORT

const routerUser = require('./router/routerUser')
app.use('/user', routerUser)
app.listen(8000, console.log('app runing in http://localhost:' + 8000))