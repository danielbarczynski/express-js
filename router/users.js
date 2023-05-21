const express = require('express')
const router = express.Router()
const users = [{name: 'Daniel', age: 23}, {name: 'Mela'}
]
router.get('/', (req, res) => {
  res.send('Users')
})

router.get('/user', (req, res) => {
  res.send('User')
})

router.route('/:id').get((req, res) => {
  console.log(req.user)
  res.send(`Get user with id: ${req.params.id}`)
}).post((req, res) => {
  res.send(`Post user with id: ${req.params.id}`)
}).delete((req, res) => {
  res.send(`Delete user with id: ${req.params.id}`)
})

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router