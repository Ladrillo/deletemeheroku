require('dotenv').config()

const path = require('path')
const express = require('express')

const server = express()

const PORT = express.env.PORT || 4400

server.use(express.static(path.join(__dirname, 'build')))

server.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})

server.get('/api', (req, res) => {
  res.json({ message: 'foo' })
})

const express = require('express');
const path = require('path');
const app = express();
