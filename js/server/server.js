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
// index
router.get('/', (req, res) => {
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

router.get('/about', (req, res) => {
  res.sendFile('html/about.html', routerOptions, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded about')
    }
  })  
})

apiRouter.get('/', (req, res) => {
  res.send(`api page`)
})

// game
router.get('/game', (req, res) => {
  res.sendFile('html/game.html', routerOptions, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded game')
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