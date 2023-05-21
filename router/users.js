const express = require('express')
const router = express.Router()
const users = [{name: 'Daniel', age: 23}, {name: 'Mela'}
]
router.get('/', (req, res) => {
  res.render('form', { firstName: 'Daniel' })
})

router.post('/', (req, res) => {
  users.push({ firstName: req.body.firstName })
  res.redirect(`/users/${users.length - 1}`)
})

router.get('/user', (req, res) => {
  res.send('User')
})

router.route('/:id').get((req, res) => {
  console.log(req.user)
  res.send(`Get user with id: ${req.params.id}`)
}).put((req, res) => {
  res.send(`Created user`)
}).delete((req, res) => {
  res.send(`Deleted user with id: ${req.params.id}`)
})

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router