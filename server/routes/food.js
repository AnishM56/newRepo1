// Anish Mistry
//This page is for routing the different pages of the CRUD operation

var express = require('express');
var router = express.Router();

let Food = require('../models/food');
let FoodController = require('../controllers/food')
/* Get route for the food list */
// Read Operation
router.get('/', FoodController.ShowFoodlist);
/* Get route for Add food page --> Create */
router.get('/add', FoodController.AddFood); 
/* Post route for Add food page --> Create */
router.post('/add', FoodController.ProcessFood);
/* Get route for displaying the Edit food page --> Update */
router.get('/edit/:id', FoodController.EditFood);
/* Post route for processing the Edit food page --> Update */
router.post('/edit/:id', FoodController.ProcessEditFood);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', FoodController.DeleteFood);

 module.exports = router;