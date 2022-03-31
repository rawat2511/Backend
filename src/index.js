const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Nutrition = require('./models/nutrition.model');
const Cart = require('./models/cart.model');
const db = "mongodb+srv://masai:masaischool@cluster0.g0t1d.mongodb.net/tata1mg?retryWrites=true&w=majority";
const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors())

const connect = async () => {
    try{
        const data = await mongoose.connect(db);
        console.log("DB success")
    }
    catch(err) {
        console.log(err.message);
        console.log("DB Failure");
    }
}

app.listen(PORT, () => {
    console.log("Listening to port 8000...");
    connect();
})

// app.get('/wellbeing_nutrition', async (req, res) => {
//     const data = await Nutrition.find({});
//     console.log(data);
//     res.status(200).json(data);
// } )

app.post('/wellbeing_nutritions', async (req, res) => {
    const data = await Nutrition.create(req.body);
    console.log(data);
    res.status(200).json(data);
})

app.post('/cart', async (req, res) => {
    const data = await Cart.create(req.body);
    console.log(data);
    res.status(200).json(data);
})
app.delete('/cart/:id', async (req, res) => {
    const id = req.params.id;
    const data = await Cart.findByIdAndDelete(id);
    console.log(data);
    res.status(200).json(data);
})

app.get('/wellbeing_nutritions', async (req, res) => {

    const query = req.query;
    const criteria = {};
    
    req.query.discount && (criteria.discount = JSON.parse(query.discount) );

    console.log(criteria);

    console.log(query);

    // const obj = {
    //     $and: [
    //         {
    //             discount: 
    //         },
    //         {
    //             form: 
    //         },
    //         { 
    //             usese: 
    //         }
    //     ]
    // }
    
    // const data = await Nutrition.find({$and: [{discount: {$gt: 0}}, {form: {$in: ["Powder", "Bottle"]} }, {uses:{$in: ["Skin Care"]}}] });
    const data = await Nutrition.find({});
    res.status(200).json(data);
} )

app.get('/cart', async (req, res) => {
    const data = await Cart.find({});
    res.status(200).json(data);
})