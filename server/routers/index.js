const express=require("express");
const { usersRouter}  = require("./users.routers");
const { authRouter } = require("./auth.routers");
const { roomsRouter } = require("./rooms.routers");
const { hotelsRouter } = require("./hotels.routers");
const rootRouter=express.Router();



//users
rootRouter.use("/users",usersRouter);


//auth
rootRouter.use("/auth",authRouter);


//rooms
rootRouter.use("/rooms",roomsRouter);


//hotels
rootRouter.use("/hotels",hotelsRouter);

module.exports={
    rootRouter
}