const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const morgan = require('morgan')

// const register = require('./controllers/register')
// const signin = require('./controllers/signin')
// const profile = require('./controllers/profile')
// const image = require('./controllers/image')
// const auth = require('./controllers/authorization')

const port = 3000
const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log('app is running on port: ', port)
})
