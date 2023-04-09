// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
	name: {
		firstname:'Susanna',
		lastname: 'Salata',
	},
	position: 'Junior Fullstack JS Developer', 
	salary: '600$',
	address: "Gdansk, Polsnd",
}

var footer = {
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
}
	
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

	  page: {
		title: 'Resume | Summary',
	  },
	  
	  header,
	  
	  main: {
		summary: {
		title: 'Summary',
		text: `Open-minded for new technologies, with 1 years of experience in development. 
				Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. 
				Good team player, every colleague is a friend to me.`,
		},

		experience: {
			job_1: {
				title: 'Experience',
				text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics 
					(tournament position, goals etc), analyzing by simple mathematics models and preparing probability 
					for such events like: money line - first win / draw / second win, totals etc.`,
			},
			
			job_2: {
				title: 'Other experience',
				text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics 
					(tournament position, goals etc), analyzing by simple mathematics models and preparing probability 
					for such events like: money line - first win / draw / second win, totals etc.`,
			},
		},
	  },
    
	  footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skils', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

	  page: {
		title: 'Resume | Skills',
	  },
	  
	  header,
	  
	  main: { 
		  skills: [
			  {
				  name: "HTML & CSS",
				  point: 9,
				  isTop: true
			  },
			  {
				  name: "Handlebars",
				  point: 7,
				  isTop: false
			  },
			  {
				  name: "VS Code",
				  point: 9,
				  isTop: true
			  },
			  {
				  name: "Git & Terminal",
				  point: 5,
			  },
			  {
				  name: "React.js",
				  point: 0,
			  },
			  {
				  name: "PHP",
				  point: null,
			  },
		  ],
	   },
    
	  footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

	  page: {
		title: 'Resume | Education',
	  },
	
	  header,

	  main: { 
		  education: [
			  "KNEU",
			  "IT Brains",
		  ]
	   },
    
	  footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
