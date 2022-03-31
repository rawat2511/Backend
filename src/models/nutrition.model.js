const mongoose = require('mongoose');

const NutritionSchema = new mongoose.Schema({
    name: String,
    quantity: String,
    image: String,
    mrp: Number,
    discount: Number,
    sp: Number,
    form: String,
    uses: [{type: String}]
})

const Nutrition = mongoose.model("wellbeing_nutrition", NutritionSchema);

module.exports = Nutrition;