

//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const RestaurantModel = require("../models/Restaurant.js");
const seedData = require("./seeds.json");


//// CLEAR COLLECTION + INSERT SEED JSON //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

RestaurantModel.remove({})
  .catch(err => console.log(`\n\tError - removing Restaurant collection failed: ${err}\n`))
  .then(() => {
    return RestaurantModel.collection.insert(seedData)
  })
  .then(() => {
    process.exit();
  })
