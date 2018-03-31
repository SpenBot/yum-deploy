
//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const express = require('express')
const router = express.Router()

const RestaurantsModel = require("../models/Restaurant")



//// ROUTE CONTROLLER FUNCTIONS ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


// INDEX
router.get("/", (req, res) => {
  RestaurantsModel.find({})
    .catch(err => console.log(`\n\tError - retreiving data failed: ${err}\n`))
    .then(restaurants => {
      res.render("index", { restaurants })
    })
})


// NEW
router.get("/new", (req, res) => {
  res.render("restaurantsViews/new")
})


// SEARCH
router.get("/search", (req, res) => {

  let typeAll = []
  let zipcodeAll = []
  let cityAll = []
  let typeArray = []
  let zipcodeArray = []
  let cityArray = []

  function removeDuplicatesUsingSet(arr){
      let unique_array = Array.from(new Set(arr))
      return unique_array
      console.log(unique_array)
  }

  RestaurantsModel.find({})
    .then(restaurants => {
      restaurants.forEach(rest => typeAll.push(rest.type))
      restaurants.forEach(rest => zipcodeAll.push(rest.address.zipcode))
      restaurants.forEach(rest => cityAll.push(rest.address.city))
      typeArray = removeDuplicatesUsingSet(typeAll)
      zipcodeArray = removeDuplicatesUsingSet(zipcodeAll)
      cityArray = removeDuplicatesUsingSet(cityAll)
    })

    .then( () => {

      if (!req.query.qk) {
            res.render("restaurantsViews/search", {
              typeArray, zipcodeArray, cityArray
            })
      }
      else if (req.query.qk == "type") {
        let searchTitle = req.query.qv.toUpperCase()
        RestaurantsModel.find({ type: `${req.query.qv}` })
        .then(restaurants => {
          res.render("restaurantsViews/search", {
            restaurants, searchTitle, typeArray, zipcodeArray, cityArray
          })
        })
      }
      else if(req.query.qk == "city") {
        let searchTitle = req.query.qv.toUpperCase()
        RestaurantsModel.find({ "address.city": `${req.query.qv}` })
        .then(restaurants => {
          res.render("restaurantsViews/search", {
            restaurants, searchTitle, typeArray, zipcodeArray, cityArray
          })
        })
      }
      else if(req.query.qk == "zipcode") {
        let searchTitle = req.query.qv.toUpperCase()
        RestaurantsModel.find({ "address.zipcode": `${req.query.qv}` })
        .then(restaurants => {
          res.render("restaurantsViews/search", {
            restaurants, searchTitle, typeArray, zipcodeArray, cityArray
          })
        })
      }
      else if(req.query.qk == "delivery") {
        let searchTitle = req.query.qk.toUpperCase()
        RestaurantsModel.find({ "delivery": `${req.query.qv}` })
        .then(restaurants => {
          res.render("restaurantsViews/search", {
            restaurants, searchTitle, typeArray, zipcodeArray, cityArray
          })
        })
      }

  })


})


// SHOW
router.get("/:id", (req, res) => {
  RestaurantsModel.findOne({ _id: req.params.id })
    .catch(err => console.log(err))
    .then(restaurant => {
      res.render("restaurantsViews/show", restaurant)
    })
})


// CREATE
router.post("/", (req, res) => {

  req.body.complete = false

  RestaurantsModel.create(req.body.restaurant)
    .catch(err => console.log(err))
    .then(restaurant => {
      res.redirect(`/${restaurant.id}`)
    })
})


// EDIT
router.get('/edit/:id', (req, res) => {
  RestaurantsModel.findOne({_id: req.params.id})
    .catch(err => console.log(err))
    .then(restaurant => {
      res.render("restaurantsViews/edit", restaurant)
    })
})


// UPDATE
router.put('/:id', (req, res) => {
  RestaurantsModel.findOneAndUpdate({_id: req.params.id}, req.body.restaurant, { new: true })
    .catch(err => console.log(err))
    .then(restaurant => {
      res.redirect(`/${restaurant.id}`)
    })
})


// DELETE
router.delete("/:id", (req, res) => {
  RestaurantsModel.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect("/")
    })
})









//// EXPORT MODULES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

module.exports = router













//// END //////////////////////////////////////////////////////////////////////
