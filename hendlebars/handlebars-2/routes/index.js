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
  });
});

router.get('/1', function (req, res, next) {
  res.render('1-var', {
    user: {
      firstname: 'Susanna',
      lastname: 'Salata',
      age: 30,
      isAdmin: true,
    },
    role: 'Admin',
  });
});

router.get('/2', function (req, res, next) {
  res.render('2-with', {
    user: {
      id: 123456,
      name: 'Dima',
    },
    role: 'Admin',
    createDate: '15.04.2023',
    
    post: {
      id: 987,
      title: 'My first post in my blog',
      text: 'Hello, Kyrylo!'
    },
  });
});

router.get('/3', function (req, res, next) {
  res.render('3-each', {
    users: [
      {
        id: 123456,
        firstname: 'Taras',
        lastname: 'Tarasov',
        age: 10,
        isAdmin: true,

        comments: [
          {
            id: 4321,
            text: 'Hello, Taras',
          },
        ],
      },

      {
        id: 123456,
        firstname: 'Ivan',
        lastname: 'Ivanov',
        age: 20,
        isAdmin: false,

        comments: [
          {
            id: 1234,
            text: 'Hello, Ivan',
          },
        ],
      },
    ],
  });
});

router.get('/i', function (req, res, next) {
  res.render('index', {
    users: ['Kyrylo', 'Danylo', 'Ivan'],
  });
});

module.exports = router;