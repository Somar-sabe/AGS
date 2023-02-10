const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    category: { type: String },
    country: { type: String },
    company: { type: String },
    brand: { type: String  },
    name: { type: String  },
    price: { type: Number },
    capacity: { type: Number  },    
    image: { type: String },
    netweight: { type: Number  },
    grossWeight: { type: Number },
    palletSize:{ type: Number },
    bl:[{
        code: { type: String  },
        qty: {type: Number},
        date:{type: Date },
        warehouse:{type:String}
    }]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
