

//// MODULES, CONFIGURATI//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose')

// set mongoose to use native ES6 Promise library
mongoose.Promise = Promise




//// CONNECT TO ENVIRONMENT DATABASE ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// if production environment
if (process.env.NODE_ENV == "production") {

  mongoose.connect(process.env.MLAB_URL)
    .catch(err => console.log(`\n\tConnection failed : ${err}`))
    .then(connection => {
      console.log(`\n\tConnection established to PRODUCTION database.`)
      // console.log(`\n\tConnection established to PRODUCTION DB : '${process.env.MLAB_URL}'\n`)
    })

// if other environments
} else {

  const mongoUri = 'mongodb://localhost/review-yum-db'

  mongoose.connect(mongoUri)
    .catch(err => console.log(`\n\tConnection failed : ${err}`))
    .then(connection => {
      console.log(`\n\tConnection established to LOCAL database : '${mongoUri}'\n`)
    })

}





//// EXPORT MODULES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

module.exports = mongoose







//// END //////////////////////////////////////////////////////////////////////
