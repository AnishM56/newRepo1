// Anish Mistry
//This page is for routing the different pages of the CRUD operation

var express = require('express');
var router = express.Router();

let Food = require('../models/food');
let FoodController = require('../controllers/food')
/* Get operation route for the food list */

// This is the read Operation
router.get('/', FoodController.ShowFoodlist);

/* Get operation route for Add food page */
router.get('/add', FoodController.AddFood); 

/* Post opertioan route for Add food page*/
router.post('/add', FoodController.ProcessFood);

/* Get operation route for displaying the Edit food page */
router.get('/edit/:id', FoodController.EditFood);

/* Post operation route for processing the Edit food page */
router.post('/edit/:id', FoodController.ProcessEditFood);

/* Get operation to perform Delete action */
router.get('/delete/:id', FoodController.DeleteFood);

 module.exports = router;