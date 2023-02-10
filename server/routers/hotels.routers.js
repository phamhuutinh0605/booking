const express=require("express");
const {getAllHotels, createHotel, updateHotel, deleteHotel, getDetailHotels}=require("../controllers/hotels.controllers");
const hotelsRouter=express.Router();


hotelsRouter.get("/",getAllHotels);
hotelsRouter.get("/:id",getDetailHotels);
hotelsRouter.post("/",createHotel);
hotelsRouter.put("/:id",updateHotel);
hotelsRouter.delete("/:id",deleteHotel);

module.exports={
    hotelsRouter
}