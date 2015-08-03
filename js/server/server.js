// GLOBALS
const express = require('express')

const app = express()

const router = express.Router()
const apiRouter = express.Router()

const port = process.env.PORT || 80

const devHost = 'http://localhost'
const prodHost = 'http://45.55.93.141'

let host = prodHost

let routerOptions = { root: __dirname }


// MIDDLEWARE
router.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})


// ROUTES
router.get('/', (req, res) => {
  res.send(`<h1>Spaceman's Office</h1><h3>Sitemap</h3><h5><a href="${host}:${port}/about">About</a></h5>`)
})

router.get('/about', (req, res) => {
   res.send(`<h1>About</h1><h5>This website will house some organizational tools and projects</h5><h5><a href="${host}:${port}/">Home</a></h5>`)  
})

apiRouter.get('/', (req, res) => {
  res.send(`api page`)
})

// index
router.get('/index', (req, res) => {
  res.sendFile('html/index.html', routerOptions, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded index')
    }
  })
})

router.get('/js/utils/three.js', (req, res) => {
  res.sendFile('js/utils/three.js', routerOptions, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded threejs')
    }
  })
})

router.get('/js/build/game.build.js', (req, res) => {
  res.sendFile('js/build/game.build.js', routerOptions, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded game')
    }
  })
})


// USER ROUTER
app.use('/', router)
app.use('/api', apiRouter)


// START THE SERVER
app.listen(port)
console.log(`listening on port ${port}`)