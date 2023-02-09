// product.model.js
const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    category: { type: String, required: true },
    country: { type: String, required: true },
    company: { type: String, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String },
    capacity: { type: Number, required: true },    
    image: { type: String },
    netweight: { type: Number, required: true },
    grossWeight: { type: Number, required: true },
    palletSize:{ type: Number, required: true },
    bl:[{
        code: { type: String, required: true },
        qty: {type: String, required: true},
        date:{type: Date ,required:true},
        warehouse:{type:String,required:true}
    }]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
