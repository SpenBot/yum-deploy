

//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// require and configure Express
const express = require('express')
const app = express()

// require Middleware
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// configure HBS
app.set("view engine", "hbs")

// configure static assets
app.use(express.static(__dirname + '/public'))

// configure Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// set app Port to either the Environment port, or local 400
app.set('port', process.env.PORT || 4000)

// // configure Express server port
app.listen(app.get('port'), () => {
  console.log(`\n\tServer listening on port ${serverPort}.\n`)
})




//// ROUTES ///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// require and configure Controllers
const restaurantsController = require('./controllers/restaurantsController')

// configure controllers for all routes
app.use('/', restaurantsController)






//// END //////////////////////////////////////////////////////////////////////
