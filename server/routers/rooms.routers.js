const express=require("express");
const {getAllRooms, getDetailRoom, createRoom, updateRoom, deleteRoom}=require("../controllers/rooms.controllers.js")
const roomsRouter=express.Router();


roomsRouter.get("/",getAllRooms);
roomsRouter.get("/:id",getDetailRoom);
roomsRouter.post("/",createRoom);
roomsRouter.put("/:id",updateRoom);
roomsRouter.delete("/:id",deleteRoom);

module.exports={
    roomsRouter
}