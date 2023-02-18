const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password, pic } = req.body; 

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.status(201).json({
            id:user.id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            //generate JWT token
            token: generateToken(user.id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to Create User");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user.id),
        });
    } else {
        res.status(401);
        throw new Error ("Invalid Email or Password");
    }
});

module.exports = { registerUser, authUser };