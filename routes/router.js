const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const { json } = require("body-parser");
// get the products data
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        res.status(201).json(productsdata);
    } catch (error) {
        console.log('error' + error.message);
    }
});

// get individual data
router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individualdata = await Products.findOne({ id: id });
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log('error' + error.message);
    }
});

// register data
router.post("/Sign-up", async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "Fill all the data" });
        console.log("Not available data");
    }
    try {
        const preuser = await USER.findOne({ email: email });
        if (preuser) {
            res.status(422).json({ error: "This user is already present" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and cpassword not match" });
        } else {
            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });

            const storedata = await finalUser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//login user api

router.post("/Sign-in", async(req,res)=>{
    const {email,password } = req.body;
    if(!email || !password){
        res.status(400).json({error:"fill the all data"})
    };
    try {
        const userlogin = await USER.findOne({email:email});
        console.log(userlogin + "user value");
        if(userlogin){
            const isMatch = await bcrypt.compare(password,userlogin.password);
            
            console.log(isMatch, "password match");
            //token generate
            const token = await userlogin.generatAuthtoken();
            console.log(token);
            //  this.tokens = this.tokens.concat({token:token});
            //  await token.save();
            
             res.cookie("Amazonweb" , token,{
                expires:new Date(Date.now() + 900000),
                 httpOnly:true
             })
             if(!isMatch){
                res.status(400).json({error:"invalid details"})
             }else{
                res.status(201).json(userlogin);
             }
        }
    } catch (error) {
        res.status(400).json({error:"invalid details"})
    }
});
//adding the data in cart
router.post("/addcart/:id",authenticate,async(req,res)=>{
    try {
        const {id} = req.params;
        const cart = await Products.findOne({id:id});
         console.log(cart + "cart value")

         const UserContact = await USER.findOne({_id:req.userID});
          console.log(UserContact);
          if(UserContact){
             const cartData = await UserContact.addcartdata(cart);
              await UserContact.save();
               console.log(cartData);
                res.status(201).json(UserContact);
          }else{
            res.status(401).json({error:"invalid user"});
          }
    } catch (error) {
        res.status(401).json({error:"invalid user"});
    }
});
// get cart details
router.get("/cartdetails", authenticate,async(req,res)=>{
    try {
        const buyuser = await USER.findOne({_id:req.userID});
          res.status(201).json(buyuser);
    } catch (error) {
        console.log("error"+ error)
    }
})

// get valid user
router.get("/validuser", authenticate,async(req,res)=>{
    try {
        const validuserone = await USER.findOne({_id:req.userID});
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error"+ error)
    }
})
// remove iteam from the cart
router.get("/remove/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((curval) => {
            return curval.id != id
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("iteam remove");

    } catch (error) {
        console.log(error + "jwt provide then remove");
        res.status(400).json(error);
    }
});
// for user logout

router.get("/logout", authenticate,(req,res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem)=>{
              return curelem.token !== req.token
        });

        res.clearCookie("Amazonweb",{path:"/"});
         req.rootUser.save();
         res.status(201).json(req.rootUser.tokens);
         console.log("user logout");
    } catch (error) {
        // res.status(201).json(req.rootUser.tokens);
        console.log("error for user logout");
    }
})
module.exports = router;
