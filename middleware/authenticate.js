const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const secretkey = "secret-key";

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.Amazonweb;
        
        if (!token) {
            // If token is not provided, return an error
            return res.status(401).send({ error: "JWT must be provided" });
        }

        const verifyToken = jwt.verify(token,'secretkey'); // Ensure the correct secret key
           console.log(verifyToken);
        // Your authentication logic here
        
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
          console.log(rootUser);

        if(!rootUser){ throw new Error("User Not Found") };

        req.token = token; 
        req.rootUser = rootUser;   
        req.userID = rootUser._id;   

        next();
    } catch (error) {
       
        res.status(401).send("Unauthorized : no token provide");
        console.log(error);
    }
};

module.exports = authenticate;

