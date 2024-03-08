
// const mongoose = require('mongoose');
const productsdata= require("./constant/productsdata");
const productSchema = require("./models/productsSchema");



const DefaultData = async()=>{
    try {
        // await connectdb();
        
               await productSchema.deleteMany({});
        const storeData = await  productSchema.insertMany(productsdata);
        console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};





module.exports = DefaultData;
// module.exports = DefaultData;