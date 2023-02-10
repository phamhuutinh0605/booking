const {User}  = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");


const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
     
    });
    await newUser.save();
    res.status(201).send(newUser);

    if (newUser) {
      res.status(201).send(newUser);
    } else {
      res.status(404).send("Dang ki that bai!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  try {
    const userLogin = await User.findOne({username:req.body.username});
    if (!userLogin) {
      res.status(404).send("Sai email!");
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        userLogin.password
      );
      if (isPasswordCorrect) {
        const token=jwt.sign({id:userLogin._id,isAdmin:userLogin.isAdmin},process.env.JWT);
        res
        .cookie("access_token",token,{
            httpOnly:true
        })
        .status(200).json({message:"Dang nhap thanh cong",token});
      } else {
        res.status(404).send("Sai mat khau!");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login,
};
