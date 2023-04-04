// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    title:'Susanna Salata | Resume',

    name: {
      firstname:'Susanna',
      lastname: 'Salata',
    },

    position: 'Junior Fullstack JS Developer',

    social: {
      email: {
        text: 'susanna.kiev@gmail.com',
        href: 'mailto:susanna.kiev@gmail.com',
      },
      phone: {
        text: '+380934930101',
        href: 'tel:+380934930101',
      },
      facebook: {
        text: 'Facebook',
        href: 'https://www.facebook.com/susanna.kiev',
      },
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
