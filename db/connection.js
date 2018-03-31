

//// MODULES, CONFIGURATI//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose')

// set mongoose to use native ES6 Promise library
mongoose.Promise = Promise




//// CONFIGURE ENVIRONMENT DATABASE ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// if production environment
if (process.env.NODE_ENV == "production") {

  mongoose.connect(process.env.MLAB_URL, {useMongoClient: true})
    .then(connection => {
      console.log(`\n\tConnection established to PRODUCTION DB : '${connection.db.databaseName}'\n`)
    })
    .catch(err => console.log(`\n\tConnection failed : ${err}`))

// if other environments
} else {

  const mongoUri = 'mongodb://localhost/review-yum-db'

  mongoose.connect(mongoUri, {useMongoClient: true})
    .then(connection => {
      console.log(`\n\tConnection established to LOCAL DB : '${mongoUri}'\n`)
    })
    .catch(err => console.log(`\n\tConnection failed : ${err}`))
}





//// EXPORT MODULES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

module.exports = mongoose







//// END //////////////////////////////////////////////////////////////////////
