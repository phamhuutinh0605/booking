const { User } = require("../models/User");

const getAllUsers=async(req,res)=>{
      const listUser =await User.find();
      try {
          res.status(200).send(listUser);
      } catch (error) {
          res.status(404).send(error)
      }
}
const getDetailUser=async(req,res)=>{
    try {
        const listUser =await User.findById(req.params.id);
        if(listUser){
            res.status(200).send(listUser);
        }else{
        res.status(404).send("Id khong ton tai!")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const createUser=async(req,res)=>{
    // const {name,type,city,address,distance,photos,desc,rating,Users,cheapestPrice,featured}=req.body;
    const newUser=new User(req.body);
    try {
        const saveUser=await newUser.save();
        res.status(201).send(saveUser);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser=async(req,res)=>{
    const update=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    try {
        res.status(200).send(update);
    } catch (error) {
        res.status(404).send(error)
    }
}

const deleteUser=async(req,res)=>{
    try {
        const delUser =await User.findByIdAndDelete(req.params.id);
        if(delUser){
            res.status(200).send("Xoa thanh cong");
        }else{
        res.status(404).send("Khong tim thay User nay")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports={
    getAllUsers,
    getDetailUser,
    createUser,
    updateUser,
    deleteUser,
}