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

    data: {
      userlist: [
        {
          id: 5123,
          name: "Ivan",
          isAdmin: true,
          isConfirm: true,
          balance: 100,
        },
        {
          id: 1234,
          name: "Dima",
          isAdmin: false,
          isConfirm: false,
          balance: 0,
        },
        {
          id: 3123,
          name: "Stepan",
          isAdmin: true,
          isConfirm: true,
          balance: null,
        },
      ],
    },
  })
})


module.exports = router
