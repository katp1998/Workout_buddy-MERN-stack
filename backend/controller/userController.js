const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//discp: REGISTER USER
//route: POST /api/users/register
//access: public
const registerUser = asyncHandler(async (rq, rs) => {
  //getting the items
  const { name, email, password } = rq.body;

  //validation: all fields are added
  if (!name || !email || !password) {
    rs.status(400);
    throw new Error("Please add all fields");
  }

  //validation: if same user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    rs.status(400);
    throw new Error("User already exists");
  }

  //-------------------after validations----------------------
  //hashing pw
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //finally, create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //user created notif
  if (user) {
    rs.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    rs.status(400);
    throw new Error("User was not created successfully");
  }
});

//discp: LOGIN USER
//route: POST /api/users/login
//access: public
const loginUser = asyncHandler(async (rq, rs) => {
  const { email, password } = rq.body;

  //checking user
  const user = await User.findOne({ email });

  //validation: passwords
  if (user && (await bcrypt.compare(password, user.password))) {
    rs.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    rs.status(400);
    throw new Error("Invalid login data");
  }
});

//discp: GET USER WORKOUTS
//route: GET /api/users/myworkouts
//access: private
const getUserWorkouts = asyncHandler(async (rq, rs) => {
  const { _id, name, email } = await User.findById(rq.user.id); //have access since we set in the middleware
  rs.status(200).json({
    id: _id,
    name,
    email,
  });
});

/** GENERATING JWT */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserWorkouts,
};
