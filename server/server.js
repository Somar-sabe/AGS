const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./product.model");
const app = express();
const port = process.env.PORT || 5002;
const uri = "mongodb+srv://somar_96:0934491127sS@cluster0.zh1ifjm.mongodb.net/interviewsystem?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use(cors({ origin: "https://agta.onrender.com" }));
app.use(express.json());

app.post("/", (req, res) => { 
    const requiredFields = ['category', 'country', 'company', 'brand','description', 'capacity', 'image'];
    for (let i = 0; i < requiredFields.length; i++) {
      if (!(requiredFields[i] in req.body)) {
        return res.status(400).send(`Missing field: ${requiredFields[i]}`);
      }
    }  
    const product = new Product({
        category: req.body.category,
        country: req.body.country,
        company: req.body.company,
        brand: req.body.brand,
        code: req.body.code,
        description: req.body.description,
        capacity: req.body.capacity,
        image: req.body.image,
        price: req.body.price,
        netWeight: req.body.netWeight,
        grossWeight: req.body.grossWeight,
        palatSize: req.body.palatSize,
        bl: req.body.bl
        
    });
    
    product
        .save()
        .then(result => {
            res.status(201).json({
            message: "Product created successfully",
            product: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
            error: err
            });
        });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
