const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
})

router.get('/product', function (req, res) {
  res.render('product', {
    layout: 'default',
    title: 'Product page',
    text: 'Click me',

    product: {
      name: 'Fish food',
      cost: '72.50',
      img: '/img/fish.png',
      isAvaliable: true,
    },
  })
})

module.exports = router
