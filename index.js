require('dotenv').config()

const express = require('express')

const server = express()

const PORT = express.env.PORT || 4400

server.use(express.static(__dirname + '/client/build'))

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
