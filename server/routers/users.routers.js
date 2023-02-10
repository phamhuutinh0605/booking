const express=require("express");
const { getAllUsers, getDetailUser, createUser, updateUser, deleteUser } = require("../controllers/users.controllers");
const usersRouter=express.Router();


usersRouter.get("/",getAllUsers);
usersRouter.get("/:id",getDetailUser);
usersRouter.post("/",createUser);
usersRouter.put("/:id",updateUser);
usersRouter.delete("/:id",deleteUser);

module.exports={
    usersRouter
}