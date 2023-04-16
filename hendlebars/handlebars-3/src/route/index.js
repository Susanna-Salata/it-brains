const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
})

router.get('/users', function (req, res) {
  res.render('user-list', {
    layout: 'header',
    title: 'Users page',
    text: 'Click me',
  })
})


module.exports = router
