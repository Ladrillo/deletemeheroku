require('dotenv').config()

const path = require('path')
const express = require('express')

const server = express()

const PORT = process.env.PORT || 4400

server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api', (req, res) => {
  res.json({ message: 'foo' })
})

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
