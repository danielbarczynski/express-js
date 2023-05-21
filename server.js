const express = require('express')
const app = express()
const usersRouter = require('./router/users')

app.set('view engine', 'ejs')
app.listen(3000)
app.get('/', (req, res) => {
  res.render('index', { text: 'bye'})
})
app.use('/users', usersRouter)