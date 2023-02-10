const express=require("express");
const {getAllRooms}=require("../controllers/rooms.controllers")
const roomsRouter=express.Router();


roomsRouter.get("/rooms",getAllRooms);
roomsRouter.get("/",);
roomsRouter.post("/",);
roomsRouter.put("/",);
roomsRouter.delete("/",);

module.exports={
    roomsRouter
}