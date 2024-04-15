
const User = require('../models/User');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jwt = require('jsonwebtoken');


exports.signup = async(req, resp) => {
    try{
        
        let {username, email, location, password} = req.body;

        if(!username || !email || !password || !location) {
            return resp.status(404).json({
                success:false,
                message:"The input data is missing"
            })
        }

        if(!emailValidator.validate(email)) {
            return resp.status(404).json({
                success:false,
                message:"The email is not valid"
            })
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            console.log("user already exists : ", existingUser);

            return resp.status(404).json({
                success:false,
                message:"user is already exists"
            })
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err) {
            return resp.status(404).json({
                success:false,
                message:"Error occured while hashing password"
            })
        }

        const user = await User.create({username, email, password:hashedPassword, location});
        console.log("user is : ", user);

        return resp.status(200).json({
            success:true,
            message:"The user is created successfully",
            user : user
        })
    }
    catch(error) {
        console.log("Error occured while sign up");
        console.log("Error is : ", error.message);

        return resp.status(500).json({
            success:false,
            message:"Something went wrong while sign up",
            error: error.message
        })
    }
}


exports.login = async(req, resp) => {
    try{
        const {email, password} = req.body;

        if(!emailValidator.validate(email)) {
            return resp.status(404).json({
                success:false,
                message:"The email is Invalid"
            })
        }

        if(!email || !password) {
            return resp.status(404).json({
                success:false,
                message:"Please enter all input fields"
            })
        }

        const user = await User.findOne({email:email});
        if(!user) {
            return resp.status(404).json({
                success:false,
                message:"The user does not exists"
            })
        }

        try{
            await bcrypt.compare(password, user.password);
        }
        catch(error) {
            console.log("Password is wrong");

            return resp.status(404).json({
                success:false,
                message:"The entered password is wrong"
            })
        }

        //creating body/payload for jwtToken
        let payload = {
            id:user._id,
            email:user.email,            
        }

        //creating jwtToken 
        let jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:'2h'
        });

        const options = {
            expires: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly:true,
            withCredentials: true
        }

        //passing response with jwtToken
        return resp.cookie("token", jwtToken, options).status(200).json({
            success:true,
            message:"The user is logged in successfully",
            user: user,
            jwtToken:jwtToken
        })

    }
    catch(error) {
        console.log('Error while log in : ', error.message);

        return resp.status(500).json({
            success:false,
            message:"Something went wrong while logging up",
            error:error.message
        })
    }
}