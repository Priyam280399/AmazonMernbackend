const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        id:{
            type:String
        },
        url:{
            type:String
        },
         detailUrl:{
        type:String
        },
        title:{
            type:Object
        },
        price:{
            type:Object
        },
        description:{
             type:String
        },
        discount:{
            type:String
        },
        tagline:{
            type:String
        }

});

// const Products = new mongoose.model("products",productSchema);

// module.exports = Products;


// const productSchema = new mongoose.Schema({
//     id:String,
//     url:String,
//     detailUrl:String,
//     title:Object,
//     price:Object,
//     description:String,
//     discount:String,
//     tagline:String
// });

const Products = new mongoose.model("products",productSchema);

module.exports = Products;