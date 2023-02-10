const { Hotel } = require("../models/Hotel");

const getAllHotels=async(req,res)=>{
      const listHotel =await Hotel.find();
      try {
          res.status(200).send(listHotel);
      } catch (error) {
          res.status(404).send(error)
      }
}
const getDetailHotels=async(req,res)=>{
    const listHotel =await Hotel.findById(req.params.id);
    try {
        res.status(200).send(listHotel);
    } catch (error) {
        res.status(404).send(error)
    }
}
const createHotel=async(req,res)=>{
    // const {name,type,city,address,distance,photos,desc,rating,rooms,cheapestPrice,featured}=req.body;
    const newHotel=new Hotel(req.body);
    try {
        const saveHotel=await newHotel.save();
        res.status(201).send(saveHotel);
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateHotel=async(req,res)=>{
    const update=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    try {
        res.status(200).send(update);
    } catch (error) {
        res.status(404).send(error)
    }
}

const deleteHotel=async(req,res)=>{
    const delHotel =await Hotel.findByIdAndDelete(req.params.id);
    try {
        res.status(200).send(delHotel);
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports={
    getAllHotels,
    getDetailHotels,
    createHotel,
    updateHotel,
    deleteHotel,
}