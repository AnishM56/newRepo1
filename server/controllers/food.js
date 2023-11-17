// Anish Mistry 100705626

var express = require('express');
var router = express.Router();

let food = require('../models/food');
const food = require('../models/food');

module.exports.ShowFoodlist = async (req,res,next)=>{ 
    try{
       const FoodList = await food.find();
       res.render('food/foodList', {
          title: 'Food List', 
          FoodList: FoodList
       });
    }catch(err){
       console.error(err);
       res.render('food/foodList', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddFood = async (req,res,next)=>{
    try{
        res.render('food/foodList',
        {
            title:'Add Food'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('food/foodList',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessFood = async (req,res,next)=>{
    try{
        let newFood = food({
            "Food":req.body.Food,
            "Restaurant": req.body.Restaurant,
            "Price": req.body.Price,
            "Calories": req.body.Calories
        });
        food.create(newFood).then(() =>{
            res.redirect('/foodlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('food/foodList',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditFood = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const foodToEdit = await food.findById(id);
    res.render('food/edit',
    {
        title:'Edit Food',
        Food:foodToEdit
    })
}
catch(error){
    console.error(err);
    res.render('food/foodList',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditFood = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedFood = food({
            "_id":id,
            "Food":req.body.Food,
            "Restaurant": req.body.Restaurant,
            "Price": req.body.Price,
            "Calories": req.body.Calories
        });
        food.findByIdAndUpdate(id,updatedFood).then(()=>{
            res.redirect('/foodlist')
        });
    }
    catch(error){
        console.error(err);
        res.render('food/foodList',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteFood = (req,res,next)=>{
    try{
        let id = req.params.id;
        food.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/foodlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('food/foodList',
        {
            error: 'Error on the server'
        });
    }
}