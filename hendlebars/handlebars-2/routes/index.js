const express = require('express');
const router = express.Router();
const hbs = require('hbs');

router.get('/', function (req, res, next) {
  res.render('index', {
    users: [
      {
        firstname: 'Susanna',
        lastname: null,
        age: 30,
        isAdmin: true,
        
        comments: [
          {
            id: 4312,
            text: 'Здоровенькі були',
          },
          {
            id: 543221,
            text: 'Привіт Світ',
          },
        ],
      },
      {
        firstname: 'Dima',
        lastname: 'Ivanov',
        age: 20,
        isAdmin: false,
      },
    ],
  }),
}),

router.get('/1', function (req, res, next) {
  res.render('1-var', {
    user: { 
      firstname: 'Susanna',
      lastname: null,
      age:30,
      isAdmin: true,
      },
      role: 'Admin'
  })
})

router.get('/2', function (req, res, next) {
  res.render('2-with', {
    user: {
      name: 'Dima',
    },
    role: 'Admin',
  })
})

module.exports = router;