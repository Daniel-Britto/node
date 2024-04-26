const express = require('express')
const cors = require('cors')

const app = express()

// config JSON response
app.use(express.json())

//solve CORS
app.use(cors({ credentials: true, origin: 'http://locahost:3000' }))

// Public folder for image
app.use(express.static('public'))

// Routes
const UserRoutes = require('./routes/UserRoutes')

app.use('/users', UserRoutes)


app.listen(5000)