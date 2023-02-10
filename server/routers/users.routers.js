const express=require("express");
const { getAllUsers } = require("../controllers/users.controllers");
const usersRouter=express.Router();


usersRouter.get("/users",getAllUsers);
usersRouter.get("/:id",getAllUsers);
usersRouter.post("/",getAllUsers);
usersRouter.put("/:id",getAllUsers);
usersRouter.delete("/:id",getAllUsers);

module.exports={
    usersRouter
}