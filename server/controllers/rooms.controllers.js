const { Room } = require("../models/Room");

const getAllRooms=async(req,res)=>{
      const listRoom =await Room.find();
      try {
          res.status(200).send(listRoom);
      } catch (error) {
          res.status(404).send(error)
      }
}
const getDetailRoom=async(req,res)=>{
    try {
        const listRoom =await Room.findById(req.params.id);
        if(listRoom){
            res.status(200).send(listRoom);
        }else{
        res.status(404).send("Id khong ton tai!")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const createRoom=async(req,res)=>{
    // const {name,type,city,address,distance,photos,desc,rating,rooms,cheapestPrice,featured}=req.body;
    const newRoom=new Room(req.body);
    try {
        const saveRoom=await newRoom.save();
        res.status(201).send(saveRoom);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateRoom=async(req,res)=>{
    const update=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    try {
        res.status(200).send(update);
    } catch (error) {
        res.status(404).send(error)
    }
}

const deleteRoom=async(req,res)=>{
    try {
        const delRoom =await Room.findByIdAndDelete(req.params.id);
        if(delRoom){
            res.status(200).send("Xoa thanh cong");
        }else{
        res.status(404).send("Khong tim thay room nay")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports={
    getAllRooms,
    getDetailRoom,
    createRoom,
    updateRoom,
    deleteRoom,
}